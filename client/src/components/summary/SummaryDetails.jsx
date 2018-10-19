import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/CheckCircleOutline';
import SummaryADE from './SummaryADE';
import SummaryCap from './SummaryCap';
import SummaryCA from './SummaryCA';
import SummaryCorr from './SummaryCorr';

const styles = theme => ({
  paperRoot:    {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  chip:         {
    margin: theme.spacing.unit,
  },
});

class SummaryDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showAde: false, 
            showCap: false, 
            showCa: false, 
            showCorr: false   
        };
    };

    showAde = () => {
        if(this.state.showAde){
            return(
                <React.Fragment>
                    <br />
                    <SummaryADE />
                </React.Fragment>
            )
        } else {
            return null
        }
    };

    showCa = () => {
        if(this.state.showCa){
            return(
                <React.Fragment>
                    <br />
                    <SummaryCA />
                </React.Fragment>
            )
        } else {
            return null
        }
    };

    showCap = () => {
        if(this.state.showCap){
            return(
                <React.Fragment>
                    <br />
                    <SummaryCap />
                </React.Fragment>
            )
        } else {
            return null
        }
    };

    showCorr = () => {
        if(this.state.showCorr){
            return(
                <React.Fragment>
                    <br />
                    <SummaryCorr />
                </React.Fragment>
            )
        } else {
            return null
        }
    };

    handleShowAde = () => {
        this.setState(prevState => ({
            showAde: !prevState.showAde
        }))
    };

    handleShowCap = () => {
        this.setState(prevState => ({
            showCap: !prevState.showCap
        }))
    };

    handleShowCa = () => {
        this.setState(prevState => ({
            showCa: !prevState.showCa
        }))
    };

    handleShowCorr = () => {
        this.setState(prevState => ({
            showCorr: !prevState.showCorr
        }))
    };

    render(){
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.paperRoot} elevation={6}>
                    <Typography variant="body2" component="h3" align="center">
                        <b>{`Tracking Number:`}</b> &nbsp; <i>{`ABC-123-2018NM`}</i>
                    </Typography>
                    <br />
                    <center>
                        <Chip
                            icon={<DoneIcon />}
                            label="Action Data Elements"
                            clickable
                            className={classes.chip}
                            color="primary" 
                            onClick={this.handleShowAde}            
                        />
                        <Chip
                            icon={<DoneIcon />}
                            label="Corrective Action Plan"
                            clickable
                            className={classes.chip}
                            color="primary"
                            onClick={this.handleShowCap}             
                        />
                        <Chip
                            icon={<DoneIcon />}
                            label="Corrective Action"
                            clickable
                            className={classes.chip}
                            color="primary" 
                            onClick={this.handleShowCa}            
                        />
                        <Chip
                            icon={<DoneIcon />}
                            label="Correspondence"
                            clickable
                            className={classes.chip}
                            color="primary" 
                            onClick={this.handleShowCorr}            
                        />
                    </center>
                </Paper>
                {this.showAde()}
                {this.showCap()}
                {this.showCa()}
                {this.showCorr()}               
            </div>
        );
    }
}

SummaryDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryDetails);