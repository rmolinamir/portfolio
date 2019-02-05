import React from 'react';
// react-redux
import { connect } from 'react-redux';
// CSS
import classes from './Front.module.css';
// JSX
import MoreInfoButton from '../../../UI/MoreInfoButton/MoreInfoButton';


const projectFront = (props) => {
    return (
        <div className={[classes.Wrapper, props.className].join(' ')}>
            <div className={classes.Container}>
                <div className={classes.Media}>
                    {props.media}
                </div>
                <div className={classes.Header}>
                    {props.header}
                </div>
                <div className={classes.Description}>
                    {props.description}
                </div>
                <p style={{flexGrow: 1, margin: 0}}></p>
                <div className={classes.MoreInfo}>
                    <MoreInfoButton width={24} height={24} noHover/>
                    <span>
                        {props.isMobile ?
                            'Click for more details'
                            : 'Hover for more details'}
                    </span>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isMobile: state.mobileReducer.isMobile
    }
}

export default connect(mapStateToProps)(projectFront);