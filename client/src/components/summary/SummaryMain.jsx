import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import SummaryHelpDialogWrapped from '../help_dialogs/SummaryHelpDialog';

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
      <div>
        <Paper className={classes.paperRoot} elevation={6}>
          <Typography component="h2" variant="display1" gutterBottom align="center">
            {`Action Summary`}
          </Typography>
        </Paper>
        <Button variant="fab" mini color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
          <HelpIcon />
        </Button>
        <SummaryHelpDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />      
      </div>
    );
  }
}

SummaryMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryMain);