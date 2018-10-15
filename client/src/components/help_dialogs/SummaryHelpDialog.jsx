import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import blue from '@material-ui/core/colors/blue';

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class SummaryHelpDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Help - Action Summary</DialogTitle>
        <div>
          <List>
            <ListItem >
                <ListItemText secondary>
                    {`On this screen, CEA will help ensure that all Compliance Action steps have been completed by reviewing whether a record of all selected Correspondence Types has been uploaded, and if Corrective Action has been completed and verified. After reviewing the Action for completeness, you may either close the Compliance Action or send it for management review.`}
                </ListItemText>
              </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

SummaryHelpDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SummaryHelpDialogWrapped = withStyles(styles)(SummaryHelpDialog);
export default SummaryHelpDialogWrapped;