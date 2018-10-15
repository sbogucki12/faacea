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

class AdminHelpDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Help - Action Determination</DialogTitle>
        <div>
          <List>
            <ListItem >
                <ListItemText secondary>
                    {`On this screen, choose the statements that accurately describe the alleged noncompliance and/or describe the subject Regulated Entity.  Based on your input here, CEA will determine which Compliance Action type (Administrative – formal, informal; Legal, etc.) is appropriate to process this Action.  You may seek a deviation from the Action Type that CEA recommends.  You may adjust the Action type later during the process should that become necessary.`}
                </ListItemText>
              </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

AdminHelpDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const AdminHelpDialogWrapped = withStyles(styles)(AdminHelpDialog);
export default AdminHelpDialogWrapped;