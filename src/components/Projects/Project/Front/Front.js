import React from 'react';
// react-redux
import { connect } from 'react-redux';
// CSS
import classes from './Front.module.css';
// JSX
import MoreInfoButton from '../../../UI/MoreInfoButton/MoreInfoButton';


const projectFront = (props) => {
    return (
        <div className={classes.Wrapper}>
            <h1 className={classes.Header}>
                {props.header}
            </h1>
            <h2 className={classes.MoreInfo}>
                <MoreInfoButton width={24} height={24} noHover/>
                <span>
                    {props.isMobile ?
                        'Click for More Info'
                        : 'Hover for More Info'}
                </span>
            </h2>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isMobile: state.mobileReducer.isMobile
    }
}

export default connect(mapStateToProps)(projectFront);