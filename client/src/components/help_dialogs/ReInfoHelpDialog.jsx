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

class ReInfoHelpDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Help - Regulated Entity Info</DialogTitle>
        <div>
          <List>
            <ListItem >
                <ListItemText secondary>
                    {`On this screen, you enter the contact information for the Regulated Entity who is the subject of this Compliance Action.  In an upcoming update to CEA, a list of certificate holders – with their contact information – will be provided.`}
                </ListItemText>
              </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

ReInfoHelpDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const ReInfoHelpDialogWrapped = withStyles(styles)(ReInfoHelpDialog);
export default ReInfoHelpDialogWrapped;