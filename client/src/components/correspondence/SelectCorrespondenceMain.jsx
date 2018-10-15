import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SelectCorrespondence from './SelectCorrespondence';
import SelectCorrespondenceHeader from './SelectCorrespondenceHeader';
import SelectCorrespondenceButtons from './SelectCorrespondenceButtons';
import StatusBarMain from '../status_bar/StatusBarMain';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import SelectCorrespondenceHelpDialogWrapped from '../help_dialogs/SelectCorrespondenceHelpDialog';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit   
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class SelectCorrespondenceMain extends React.Component {
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
        <StatusBarMain />      
        <SelectCorrespondenceHeader />
        <Paper className={classes.root} elevation={6}>
          <SelectCorrespondence />
        </Paper>
        <br />
        <SelectCorrespondenceButtons />
        <Button variant="fab" mini color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
          <HelpIcon />
        </Button>
        <SelectCorrespondenceHelpDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />      
      </div>
    );
  }
}

SelectCorrespondenceMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectCorrespondenceMain);