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

class SelectCorrespondenceHelpDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Help - Select Correspondence Types</DialogTitle>
        <div>
          <List>
            <ListItem >
                <ListItemText secondary>
                    {`“Correspondence Types” refers to the items of communication that you intend to send to the Regulated Entity during the course of this Compliance Action.  Selecting Correspondence Types will help CEA ensure that no required communication is missed during the process of administering this Compliance Action.  You may later decide that a Correspondence Type chosen now is no longer necessary.  You may also upload records of Correspondence Types not selected now.  The choices you make now will serve as a reminder before closing out the Compliance Action, or sending the Compliance Action for management review.`}
                </ListItemText>
              </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

SelectCorrespondenceHelpDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SelectCorrespondenceHelpDialogWrapped = withStyles(styles)(SelectCorrespondenceHelpDialog);
export default SelectCorrespondenceHelpDialogWrapped;