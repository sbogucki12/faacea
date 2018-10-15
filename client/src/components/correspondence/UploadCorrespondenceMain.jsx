import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import UploadCorrespondenceButtons from './UploadCorrespondenceButtons';
import StatusBarMain from '../status_bar/StatusBarMain';
import HelpIcon from '@material-ui/icons/Help';
import UploadCorrHelpDialogWrapped from '../help_dialogs/UploadCorrHelpDialog';

const styles = theme => ({
    appBar:     {
        position: 'relative',
    },
    flex:       {
        flex: 1,
    },
    input:      {
        display: 'none',
    },
    rightIcon:  {
        marginLeft: theme.spacing.unit,
    },
    button:   {
        margin: theme.spacing.unit,
    }, 
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: "2%"
    },
    fab:    {
        position: 'absolute',
        bottom: theme.spacing.unit * 4,
        right: theme.spacing.unit * 4
    },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class UploadCorrespondenceMain extends React.Component {
  state = {
    open: false,
    value: 0, 
    openFab: false
  };

  handleChangeFab = (value) => {
    this.setState({ value });
  };

  handleClickOpenFab = () => {
    this.setState({
      openFab: true,
    });
  };

  handleCloseFab = value => {
    this.setState({ selectedValue: value, openFab: false });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
        <div>
            <StatusBarMain />
            <Paper className={classes.paperRoot} elevation={6}>
                <center>
                    <Typography variant="display1" component="h3" align="center">
                        {`Upload Correspondence`}
                    </Typography>
                    <br />
                    <Typography variant="subheading" gutterBottom>
                        {`Click below to upload records of any official Compliance Action correspondence sent to – or, received from – the subject Regulated Entity.  If there are no records to upload at this time, you may return to this screen later.`}
                    </Typography>
                    <br />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.button} 
                        onClick={this.handleClickOpen}
                    >
                        Upload Correspondence
                    </Button>
                </center>
            </Paper>
            <UploadCorrespondenceButtons />
            <Button variant="fab" mini color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpenFab}>
                <HelpIcon />
            </Button> 
            <UploadCorrHelpDialogWrapped
                selectedValue={this.state.selectedValue}
                open={this.state.openFab}
                onClose={this.handleCloseFab}
            />
            <Dialog
                fullScreen
                open={this.state.open}
                onClose={this.handleClose}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                    <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        {`Upload Correspondence`}
                    </Typography>
                    <Button color="inherit" onClick={this.handleClose}>
                        upload
                    </Button>
                    </Toolbar>
                </AppBar>
                <br />
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <center>
                        <Button variant="contained" component="span" className={classes.button}>
                            Browse
                            <CloudUploadIcon className={classes.rightIcon} />
                        </Button>
                    </center>
                </label>
            </Dialog>
        </div>
    );
  }
}

UploadCorrespondenceMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadCorrespondenceMain);