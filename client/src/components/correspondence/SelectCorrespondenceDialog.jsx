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

class SelectCorrespondenceDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Selected Correspondence Types</DialogTitle>
        <div>
            <List>
                <ListItem>
                    <ListItemText>
                        {`Letter of Investigation`}
                    </ListItemText>    
                </ListItem>
                <ListItem>
                    <ListItemText>
                        {`Letter of Acknowledgement`}
                    </ListItemText>    
                </ListItem>
            </List>
        </div>
      </Dialog>
    );
  }
}

SelectCorrespondenceDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SelectCorrespondenceDialogWrapped = withStyles(styles)(SelectCorrespondenceDialog);
export default SelectCorrespondenceDialogWrapped;