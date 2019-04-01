/**
 * Pastel palette colors generator.
 * Based on:
 * **`[Random color generator](https://stackoverflow.com/questions/1484506/random-color-generator)`**
 */
export const getRandomColor = (pastelIndex = 2.5) => {
  // Six levels of pastelIndex from 0 to 5, 0 being the darkest.
  const rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256]
  const mix = [pastelIndex * 51, pastelIndex * 51, pastelIndex * 51] // 51 => 255/5
  const mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map((x) => { return Math.round(x / 2.0) })
  return 'rgb(' + mixedrgb.join(',') + ')'
}
