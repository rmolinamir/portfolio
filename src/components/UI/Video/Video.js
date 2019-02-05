import React, { Component } from 'react';
// Assets
import loading from '../../../assets/svg/loading.svg'
// CSS
import classes from './Video.module.css';
// JSX
import ImageFadeIn from '../ImageFadeIn/ImageFadeIn';

class Video extends Component {
    constructor(props) {
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.mySpinner = <ImageFadeIn className={classes.Spinner} noWrapper draggable='false' src={loading} />;
    }

    state = {
        bHasLoaded: false
    }

    // Fires off when the video is done loading
    onLoad = () => {
        this.mySpinner = null;
        this.setState({
            bHasLoaded: true
        })
    }

    render () {
        return (
            <div style={{
                    height: this.props.height ? this.props.height : 'auto', 
                    width: this.props.width ? this.props.width : '100%'
                }} className={classes.Container}>
                {this.mySpinner}
                <video 
                    className={[classes.Video, this.props.className].join(' ')}
                    width={this.props.width ? this.props.width : 'auto'} 
                    height={this.props.height ? this.props.height : 'auto'} 
                    onLoadStart={this.onLoad}
                    autoPlay loop muted playsInline>
                    <source src={this.props.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}

export default Video;