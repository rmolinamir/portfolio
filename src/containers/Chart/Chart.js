import React, { PureComponent } from 'react';

import classes from './Chart.module.css';

import LabelName from '../../components/UI/Chart/LabelName/LabelName';
import Variable from '../../components/UI/Chart/Variable/Variable';


class Chart extends PureComponent {

    constructor (props) {
        super(props);
        this.chartPlotArea = React.createRef()
    }

    state = {
        width: typeof window === 'object' ? window.innerWidth : null,
        isHorizontal: null,
        chartPlotArea: null
    }

    componentDidMount () {
        window.addEventListener('resize', () => {
            this.setState({
                width: typeof window === 'object' ? window.innerWidth : null
            });
        });
        if (this.setState.width > 900) {
            this.setState({
                isHorizontal: true
            });
        } else {
            this.setState({
                isHorizontal: false,
                chartPlotAreaWidth: this.chartPlotArea.current.clientWidth*0.8
            });
        }
    }

    componentDidUpdate () {
        if (this.state.width >= 900 && !this.state.isHorizontal) {
            this.setState({
                isHorizontal: true
            });
        } else if (this.state.width < 900) {
            this.setState({
                isHorizontal: false,
                chartPlotAreaWidth: this.chartPlotArea.current.clientWidth*0.8
            });
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
        if (!this.state.isHorizontal) {
            chartPlotAreaClasses.push(classes.VerticalPlotArea);
        }
        return (
            <div className={classes.ChartContainer}>
                <ul className={classes.ChartLabelNames}>
                    <LabelName labelType='master'/>
                    <LabelName labelType='high'/>
                    <LabelName labelType='medium'/>
                    <LabelName labelType='basic'/>
                    <LabelName />
                </ul>
                <ul ref={this.chartPlotArea} className={chartPlotAreaClasses.join(' ')}>
                    {variables}
                </ul>
            </div>
        );

    }
}

export default Chart;