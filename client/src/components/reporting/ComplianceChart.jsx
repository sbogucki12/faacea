import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { complianceData } from './reportingData';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  paperRoot:    {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  button:       {
    margin: theme.spacing.unit,
  }
});

class ComplianceChart extends React.Component{
    constructor(props) {
        super(props);
    };

    render(){
        const { classes } = this.props;

        return (
          <div>
            <Paper className={classes.paperRoot} elevation={6} align='center'>
                <br />
                <PieChart width={600} height={250}>
                    <Pie data={complianceData} dataKey="number" nameKey="type" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />                 
                </PieChart>
                <br />
                <Button variant="outlined" className={classes.button} align='center' onClick={this.props.handleCompliance}>
                    {`Close`}
                </Button>
                <br />
            </Paper>
        </div>
        );
    }
}

ComplianceChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplianceChart);