import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
// import Typography from '@material-ui/core/Typography';
import { barData } from './reportingData';
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

class YearlyChart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          hideChart: this.props.hideChart
        }
    };

    handleHideChart = () => { 
      this.setState({
        hideChart: true
      })
    }

    hideChart = () => {
      if(this.state.hideChart){
        return (
          null
        )
      } else {
        const { classes } = this.props;

        return(          
          <React.Fragment>
          <Paper className={classes.paperRoot} elevation={6} align='center'>
          <br />
          <LineChart width={600} height={300} data={barData}>
              <Line type="monotone" dataKey="number" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="year" />
              <YAxis dataKey="number" />
              <Tooltip />
          </LineChart>
          <br />
          <Button variant="outlined" className={classes.button} align='center' onClick={this.handleHideChart}>
            {`Close`}
          </Button>
          <br />
        </Paper>
        </React.Fragment>

        )
      }
    }

    render(){
        

        return (
          <div>
            {this.hideChart()}
          </div>
        );
    }
}

YearlyChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YearlyChart);