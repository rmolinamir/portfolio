import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// CSS
import classes from './Chart.module.css';
// JSX
import LabelName from '../../components/UI/Chart/LabelName/LabelName';
import Variable from '../../components/UI/Chart/Variable/Variable';


class Chart extends PureComponent {

    constructor (props) {
        super(props);
        this.chartPlotArea = React.createRef()
    }

    state = {
        width: typeof window === 'object' ? window.outerWidth : null,
        isHorizontal: null,
        chartPlotAreaWidth: null
    }

    windowsResizeEventListener =  (event) => {
        this.setState({
            width: event.target.outerWidth
        });
    }

    orientationChangeWidthSetter = () => {
        this.setState({
            width: typeof window === 'object' ? window.outerWidth : null,
            chartPlotAreaWidth: typeof window === 'object' ? window.outerWidth : null
        });
    }

    componentDidMount () {
        window.addEventListener('resize', this.windowsResizeEventListener);
        if (this.props.isMobile) {
            window.addEventListener("orientationchange", this.orientationChangeWidthSetter);
        }
        if (this.state.width > 900) {
            this.setState({
                isHorizontal: true
            });
        } else {
            this.setState({
                isHorizontal: false,
                chartPlotAreaWidth: this.chartPlotArea.current.clientWidth*0.75
            });
        }
    }

    componentDidUpdate () {
        if (this.state.width > 900) {
            this.setState({
                isHorizontal: true
            });
        } else {
            this.setState({
                isHorizontal: false,
                chartPlotAreaWidth: this.chartPlotArea.current.clientWidth*0.75
            });
        }
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.windowsResizeEventListener);
        if (this.props.isMobile) {
            window.removeEventListener("orientationchange", this.orientationChangeWidthSetter);
        }
    }

    render () {
        let variables = [];
        if (this.props.data) {
            Object.values(this.props.data).map( (skill, index) => {
                return variables.push(
                    <Variable
                        isHorizontal={this.state.isHorizontal}
                        width={this.state.chartPlotAreaWidth}
                        key={index} 
                        name={skill.name} 
                        icon={skill.icon} 
                        percentage={skill.percentage} />
                );
            });
        }
        let chartPlotAreaClasses = [classes.ChartPlotArea];
        let chartLabelNamesClasses = [classes.ChartLabelNames];
        let chartLabelNamesStyle;
        if (!this.state.isHorizontal) {
            chartPlotAreaClasses.push(classes.VerticalPlotArea);
            chartLabelNamesClasses.push(classes.VerticalLabelNames);
            chartLabelNamesStyle = {
                width: this.state.chartPlotAreaWidth
            }
        }
        return (
            <div className={classes.ChartContainer}>
                <ul style={chartLabelNamesStyle} className={chartLabelNamesClasses.join(' ')}>
                    <LabelName
                        isHorizontal={this.state.isHorizontal}
                        labelType='very high'/>
                    <LabelName 
                        isHorizontal={this.state.isHorizontal}
                        labelType='high'/>
                    <LabelName 
                        isHorizontal={this.state.isHorizontal}
                        labelType='medium'/>
                    <LabelName 
                        isHorizontal={this.state.isHorizontal}
                        labelType='basic'/>
                    <LabelName
                        isHorizontal={this.state.isHorizontal}
                    />
                </ul>
                <ul ref={this.chartPlotArea} className={chartPlotAreaClasses.join(' ')}>
                    {variables}
                </ul>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        isMobile: state.mobileReducer.isMobile
    }
}

export default connect(mapStateToProps)(Chart);
