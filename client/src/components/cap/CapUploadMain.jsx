import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import HelpIcon from '@material-ui/icons/Help';
import CapUploadHelpDialogWrapped from '../help_dialogs/CapUploadHelpDialog';
import CapTable from './CapTable';
import MediaQuery from 'react-responsive';
import StatusBarCapUpload from '../status_bar/StatusBarCapUpload';
import StatusBarMainMobile from '../status_bar/StatusBarMainMobile';
import CapProceed from './CapProceed';

const styles = theme => ({
    appBar:   {
        position: 'relative',
    },
    flex:     {
        flex: 1
    },
    button:   {
        margin: theme.spacing.unit,
    },
    root:     {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    input:  {
        display: 'none',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 4,
        right: theme.spacing.unit * 4  
    }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class CapUploadMain extends React.Component {
    state = {
        open: false,
        dialogOpen: false
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleClickOpenDialog = () => {
        this.setState({
            dialogOpen: true,
        });
    };  

    handleCloseDialog = value => {
        this.setState({ selectedValue: value, dialogOpen: false });
    };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MediaQuery minDeviceWidth={350}>
            <StatusBarCapUpload />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={349}>
            <StatusBarMainMobile />
        </MediaQuery>
        <Paper className={classes.root} elevation={6}>
            <Typography variant="display1" gutterBottom align="center">
                {`Corrective Action Plan`}
            </Typography>
            <br />
            <br />    
            <Typography variant="body1" gutterBottom align="center">
                {`This Compliance Action requires that the Regulated Entity submits a Corrective Action Plan (CAP).  Upload the CAP(s) here.`}
            </Typography>
            <br />
            <center>
                <Button 
                    onClick={this.handleClickOpen} 
                    variant="outlined" 
                    color="primary" 
                    className={classes.button} 
                >
                    Upload CAP
                </Button>
            </center>
            <Button variant="fab" mini color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpenDialog}>
                <HelpIcon />
            </Button>
        </Paper>
        <br />
        <MediaQuery minDeviceWidth={700}>
            <Paper className={classes.root} elevation={6}>
                <CapTable />
                {/* <MediaQuery maxDeviceWidth={349}>
                    <CapTableMobile />
                </MediaQuery> */}
            </Paper>
        </MediaQuery>
        <CapUploadHelpDialogWrapped
            selectedValue={this.state.selectedValue}
            open={this.state.dialogOpen}
            onClose={this.handleCloseDialog}
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
                    {`Upload CAP`}
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
          {/* <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List> */}
        </Dialog>
        <CapProceed />
      </div>
    );
  }
}

CapUploadMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CapUploadMain);