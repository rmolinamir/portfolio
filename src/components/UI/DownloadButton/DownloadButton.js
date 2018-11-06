import React from 'react';

import classes from './DownloadButton.module.css';

const downloadButton = (props) => {
    return (
        <div>
            <div className={classes.Button}>
                <a className={classes.Button} href="/CV_ROBERT_MOLINA.doc">
                    <div className={classes.Content}>
                        <div className={classes.Circle}>
                            <span className={classes.Icon} />
                        </div>
                    </div>
                    <p className={classes.Text}>{props.children ? props.children : 'Download'}</p>
                </a>
            </div>
        </div>
    );
}

export default downloadButton;