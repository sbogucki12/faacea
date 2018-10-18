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

class SBAdminDeterminationDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Compliance Action Status</DialogTitle>
        <div>
          <List>
              <ListItem>
                <ListItemText>
                    <b>{`Regulated Entity:`}</b> &nbsp; TBD
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                    <b>{`Compliance Action Type:`}</b> &nbsp; TBD
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                    <b>{`CAP Required?:`}</b> &nbsp; TBD
                </ListItemText>
              </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

SBAdminDeterminationDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SBAdminDeterminationDialogWrapped = withStyles(styles)(SBAdminDeterminationDialog);
export default SBAdminDeterminationDialogWrapped; 