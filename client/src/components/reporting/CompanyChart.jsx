import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
// import Typography from '@material-ui/core/Typography';
import { companyData } from './reportingData';
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

class CompanyChart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showChart: true
        }
    };

    handleHideChart = () => {
        this.setState({
            showChart: false
        })
    }   

    hideChart = (props) => {
        if(this.state.showChart){
            const { classes } = this.props; 
            return(
                <React.Fragment> 
                <br />
                <Paper className={classes.paperRoot} elevation={6} align='center'>
                    <BarChart width={600} height={300} data={companyData}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0000FF" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#0000FF" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid />
                        <XAxis dataKey="company" tick={{fontSize: 10}} interval={0} />
                        <YAxis />
                        <Bar type="monotone" dataKey="number" barSize={30} fill="url(#colorUv)" />
                        <Tooltip cursor={false} />                
                    </BarChart>
                    <br />
                    <Button variant="outlined" className={classes.button} align='center' onClick={this.handleHideChart}>
                        {`Close`}
                </Button>
                </Paper>
                <br />
                </React.Fragment>
            )
        } else {
            return(
                null
            )
        }
    }


    render(){
        const { classes } = this.props;

        return (
            <div>
                {this.hideChart()}
            </div>
        );
    }
}

CompanyChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompanyChart);