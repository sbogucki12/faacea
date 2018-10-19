import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import SummaryHelpDialogWrapped from '../help_dialogs/SummaryHelpDialog';
import SummaryDetails from './SummaryDetails';

const styles = theme => ({
  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button:   {
    margin: theme.spacing.unit   
  },
  fab:      {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }, 
  root:     {
    marginLeft: "10%", 
    marginRight: "10%"
  }
});

class SummaryMain extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      open: false,
    };
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render(){
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Paper className={classes.paperRoot} elevation={6}>
            <Typography component="h2" variant="display1" gutterBottom align="center">
              {`Action Summary`}
            </Typography>
            <Typography component="p" variant="caption" gutterBottom align="center">
              {`On this screen, you may review this Compliance / VDR Action for completeness.  If all required steps have been satisfied, you may save and close the Action, or send it for management view.`}
            </Typography>
          </Paper>
          <br />
        </div>
        <SummaryDetails />
        <Button variant="fab" mini color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
          <HelpIcon />
        </Button>
        <SummaryHelpDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />      

      </React.Fragment>
    );
  }
}

SummaryMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryMain);