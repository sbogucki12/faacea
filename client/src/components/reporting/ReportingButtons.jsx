import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import lineChart from '../../images/lineChart.JPG';
import companyChart from '../../images/companyChart.JPG';
import complianceChart from '../../images/complianceChart.JPG';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import YearlyChart from './YearlyChart';
import CompanyChart from './CompanyChart';
import ComplianceChart from './ComplianceChart';

const styles = theme => ({
  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  image: {
      maxWidth: 100, 
      height: 80
  },
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
  },
});

class ReportingButtons extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showYearly: false, 
            showCompany: false, 
            showCompliance: false 
        }
    };

    handleYearly = () => {
        this.setState({
            showYearly: true
        })
    }

    handleCompany = () => {
        this.setState({
            showCompany: true
        })
    }

    handleCompliance = () => {
        this.setState({
            showCompliance: true
        })
    }

    showYearly = () => {
        if(this.state.showYearly){
          return(
            <YearlyChart />
          ) 
        } else {
          return (
            null
          )
        }
      }
    
      showCompany = () => {
        if(this.state.showCompany){
          return(
            <CompanyChart />
          ) 
        } else {
          return (
            null
          )
        }
      }
    
      showCompliance = () => {
        if(this.state.showCompliance){
          return(
            <ComplianceChart />
          ) 
        } else {
          return (
            null
          )
        }
      }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.paperRoot} elevation={6}>
                    <Grid container className={classes.root} spacing={16} justify="center">
                        <Grid item xs={4} align="center">
                            <Typography variant="caption" gutterBottom>
                                {`Noncompliances By Year`}
                            </Typography>
                            <br />
                            <img src={lineChart} className={classes.image} />
                            <br />
                            <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleYearly}>
                                {`Show`}
                            </Button>
                        </Grid>
                        <Grid item xs={4} align="center">
                            <Typography variant="caption" gutterBottom>
                                {`Noncompliances By Company`}
                            </Typography>
                            <br />
                            <img src={companyChart} className={classes.image} />
                            <br />
                            <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleCompany}>
                                {`Show`}
                            </Button>
                        </Grid>
                        <Grid item xs={4} align="center">
                            <Typography variant="caption" gutterBottom>
                                {`Noncompliances By Type`}
                            </Typography>
                            <br />
                            <img src={complianceChart} className={classes.image} />
                            <br />
                            <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleCompliance}>
                                {`Show`}
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
                <br />
                {this.showYearly()}
                <br />
                {this.showCompany()}
                <br />
                {this.showCompliance()}
                <br />
            </div>
        );
    }
}

ReportingButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportingButtons);