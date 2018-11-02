import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import { letterFrequency } from '@vx/mock-data';
import { barData } from './reportingData';
import { Group } from '@vx/group';
import { Bar } from '@vx/shape';
import { scaleLinear, scaleBand } from '@vx/scale';
import { LinearGradient } from '@vx/gradient';

// import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paperRoot:    {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class ReportingBody extends React.Component{
    constructor(props) {
        super(props);
    };

    render(){
        const { classes } = this.props;

        // We'll use some mock data from `@vx/mock-data` for this.
        const data = barData;

        // Define the graph dimensions and margins
        const width = 500;
        const height = 500;
        const margin = { top: 20, bottom: 20, left: 20, right: 20 };

        // Then we'll create some bounds
        const xMax = width - margin.left - margin.right;
        const yMax = height - margin.top - margin.bottom;

        // We'll make some helpers to get at the data we want
        const x = d => d.year;
        const y = d => +d.number;

        // And then scale the graph by our data
        const xScale = scaleBand({
        rangeRound: [0, xMax],
        domain: data.map(x),
        padding: 0.4,
        });
        const yScale = scaleLinear({
        rangeRound: [yMax, 0],
        domain: [0, Math.max(...data.map(y))],
        });

        // Compose together the scale and accessor functions to get point functions
        const compose = (scale, accessor) => (data) => scale(accessor(data));
        const xPoint = compose(xScale, x);
        const yPoint = compose(yScale, y);

        function BarGraph(props) {
            return (
                <svg width={width} height={height}>
                    <LinearGradient
                        from='#48c6ef'
                        to='#6f86d6'
                        id='gradient'
                    />
                    {data.map((d, i) => {
                    const barHeight = yMax - yPoint(d);
                    return (
                        <Group key={`bar-${i}`}>
                        <Bar
                            x={xPoint(d)}
                            y={yMax - barHeight}
                            height={barHeight}
                            width={xScale.bandwidth()}
                            fill={"url(#gradient)"}
                        />
                        </Group>
                    );
                    })}
                </svg>
            );
          }

        return (
          <div>
            <Paper className={classes.paperRoot} elevation={6}>
                <BarGraph />
            </Paper>
          </div>
        );
    }
}

ReportingBody.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportingBody);