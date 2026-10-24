# Resume

Edit `src/content.ts` to change the resume. It exports a typed object containing the
name, contact details, summary, experience, skills, and education. The `satisfies ResumeInput` annotation provides autocomplete and
catches incorrect fields during type checking. Zod validates the content again before documents are generated.

`assets/resume-template.docx` controls the design, including Garamond fonts,
section rules, contact styling, and aligned dates and locations. It contains
reusable paragraph templates with `{{field}}` placeholders. Keep these placeholders
intact when changing its design. Edit wording in `src/content.ts`, because generated Word
files are overwritten on the next run.

The pipeline reads TypeScript content, fills the Word template, then converts that DOCX to PDF.
All outputs are written to `generated/` and ignored by Git:

- `robert-molina-resume.docx`: editable Word export.
- `robert-molina-resume.pdf`: PDF for sharing and Drive publishing.
- `page-1.png` and `page-2.png`: page previews for layout review.

## Editing and generation

From the repository root:

```sh
# Generate an editable Word file without LibreOffice or Poppler.
pnpm --filter @acme/resume docx

# Generate Word, PDF, and page previews.
pnpm --filter @acme/resume pdf

pnpm --filter @acme/resume test
pnpm --filter @acme/resume typecheck
```

Inside this app, use `pnpm docx`, `pnpm pdf`, `pnpm test`, or `pnpm publish:drive`.
The publish command requires the Google environment variables described below.
It uploads the most recently generated PDF, so run `pnpm pdf` first when publishing
locally. CI always generates the PDF before publishing it.

Each experience entry has `company`, `location`, `title`, `dates`, and a `bullets`
array. Entries render in array order. Add or remove entries and bullets as needed.
The optional `pageBreak` flag starts an entry on a new page. The current layout
starts Olympusat on page two. Keep metric qualifiers such as "approximately" and
"estimated" in their bullet text.

Skills use a `label` and an `items` string. Write plain text in the content strings.
Markdown syntax is not interpreted. Use regular TypeScript strings for prose.
Comments and multiline template strings are supported.

The Zod schema and inferred input/output types live in `src/schema.ts`.
Optional `pageBreak` values default to `false`. Missing fields, empty bullets,
and unknown keys fail validation with the relevant field path.

Inspect both page images before committing content or template edits. Checks
compare DOCX/PDF text in reading order, require two pages, and confirm Garamond
and Garamond Bold are present. These checks cannot detect every layout defect.
A deliberate page-count change also requires updating `src/verify.ts`.

## Local setup and CI

Run `pnpm install` from the repository root. The scripts run TypeScript directly
on Node 24 with native type stripping. Type checking is a separate command.
PDF conversion requires Docker to be installed and running. LibreOffice, Poppler,
and fallback fonts are installed inside `docker/Dockerfile`; you do not need them
on your host. DOCX generation, tests, and type checking require only Node and the
workspace dependencies.

`pnpm pdf` builds the `acme-resume-pdf:local` tools image, generates the DOCX, and
runs conversion, PDF checks, and preview rendering in containers. Docker caches
the image after the first build. Content edits do not change the image. The first
build needs network access to download the base image and packages; conversion
containers run without network access.

Only the output directory is mounted into the containers. They run with your
user ID so the generated files remain editable on Linux. The source tree and
Google credentials are not mounted or passed to the conversion containers.

CI runs the same `pnpm pdf` path on a Docker-enabled Ubuntu runner. It builds
from the same Dockerfile instead of installing PDF tools on the runner itself.
The image follows the Docker engine's default CPU architecture, so inspect CI
previews as well as local previews when changing layout.

The Resume workflow generates Word, PDF, and preview artifacts when resume files
or the workflow change on `main`. These pushes also replace the existing Drive PDF.
Manual runs publish only from `main`. The workflow does not run on pull requests
or commit generated files back to Git. The
versioned sources are the TypeScript content, Zod schema, and DOCX template.

The template embeds the original Garamond fonts. Preview CI artifacts after font
or spacing changes. To refresh the image and its installed packages, run this
from the repository root:

```sh
docker build --pull --no-cache -t acme-resume-pdf:local apps/resume/docker
```

## One-time Google Drive setup

The website currently embeds this existing PDF:
https://drive.google.com/file/d/15bEpE77LztNaNu2fn2wRtPsXeKzHSCu9/view

The publisher uses Google's official `@googleapis/drive` Node.js SDK. Its OAuth
client refreshes access tokens, and the typed `files.get` and `files.update`
methods inspect and replace the PDF using that file ID.
It changes file contents without creating a new file or changing sharing
permissions. Links to that Drive file remain valid. LinkedIn links to the same
Drive URL continue to work. A PDF uploaded directly to LinkedIn is a separate
copy and still needs its own update.

1. Create or choose a Google Cloud project and enable the Google Drive API.
2. Configure Google Auth Platform for your own account. For persistent automation,
   use the production publishing state. External apps in Testing normally receive
   refresh tokens that expire after seven days for Drive scopes.
3. Create an OAuth client of type Web application. Add this authorized redirect
   URI: `https://developers.google.com/oauthplayground`.
4. Open Google's OAuth Playground. In its settings, enable **Use your own OAuth
   credentials** and enter the client ID and client secret privately.
5. Authorize `https://www.googleapis.com/auth/drive` as the account that owns or
   can edit the existing PDF. Exchange the authorization code for tokens. Use
   offline access to obtain a refresh token. This scope permits access to Drive
   files beyond the resume, so keep the credentials in GitHub secrets. The narrower
   `drive.file` scope requires an explicit app file-selection flow for this
   pre-existing file, which this publisher does not implement.
6. Create the GitHub Actions environment `resume-drive`. Restrict deployment
   branches to `main`. Add these environment secrets:
   - `GOOGLE_DRIVE_OAUTH_CLIENT_ID`
   - `GOOGLE_DRIVE_OAUTH_CLIENT_SECRET`
   - `GOOGLE_DRIVE_OAUTH_REFRESH_TOKEN`
7. Optionally set the environment variable `GOOGLE_DRIVE_FILE_ID` to override the
   current file ID. Keep the existing ID to preserve current links.
8. Merge the content, template, and workflow changes into `main`, or run the Resume workflow
   manually on `main`. Inspect its artifact and confirm the existing Drive link.

Enter credentials directly in Google and GitHub. Do not put them in source
files, commit them, or paste them into chat. Refresh tokens can be revoked or
expire. If authorization fails, authorize again and replace the GitHub secret.

The publisher checks the target's MIME type and edit permission before upload,
skips byte-identical files, and checks Drive's returned ID and MD5 checksum.
A missing or inaccessible target fails the run. It never creates a replacement
file with a different link.

References:
- [Drive file uploads and updates](https://developers.google.com/workspace/drive/api/guides/manage-uploads)
- [OAuth offline access and refresh tokens](https://developers.google.com/identity/protocols/oauth2/web-server)
- [OAuth token expiration rules](https://developers.google.com/identity/protocols/oauth2/)
- [OAuth Playground](https://developers.google.com/oauthplayground/)
