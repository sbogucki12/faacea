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

class CapUploadHelpDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Help - Corrective Action Plan</DialogTitle>
        <div>
          <List>
            <ListItem >
                <ListItemText secondary>
                    {`If the Regulated Entity is required to submit a Corrective Action Plan (CAP) describing how they will resolve the alleged noncompliance(s), you may upload a record of the CAP(s) to CEA here.  Some Actions may require multiple CAPs.  Some Actions will not require a CAP.  If no CAP is required for this Action now, click “No” to proceed (you may later upload a/multiple CAP(s) if then determined necessary).`}
                </ListItemText>
              </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

CapUploadHelpDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const CapUploadHelpDialogWrapped = withStyles(styles)(CapUploadHelpDialog);
export default CapUploadHelpDialogWrapped;