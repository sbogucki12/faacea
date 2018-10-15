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

class UploadCorrHelpDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Help - Upload Correspondence</DialogTitle>
        <div>
          <List>
            <ListItem >
                <ListItemText secondary>
                    {`Record of “Correspondence” refers to any official communication that you send to the subject Regulated Entity, or any received from the Regulated Entity, during the course of processing this Compliance Action.  A common example would include a Letter of Investigation (LOI), or any other letter required by the AIR Compliance Philosophy, FAA Order 2150, or any other official Compliance and Enforcement policy or guidance.  Before closing this Action, CEA will review whether you’ve uploaded records for all Correspondence Types that you indicated would be required for this Action.  You may return to this Upload Correspondence screen at any time.`}
                </ListItemText>
              </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

UploadCorrHelpDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const UploadCorrHelpDialogWrapped = withStyles(styles)(UploadCorrHelpDialog);
export default UploadCorrHelpDialogWrapped;