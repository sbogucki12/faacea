import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import blue from '@material-ui/core/colors/blue';
import CapMoreInfo from './CapMoreInfo';
import Paper from '@material-ui/core/Paper';
import HelpIcon from '@material-ui/icons/Help';
import CapUploadHelpDialogWrapped from '../help_dialogs/CapUploadHelpDialog';
import { Link } from 'react-router-dom';
import StatusBarCap from '../status_bar/StatusBarCap';
import MediaQuery from 'react-responsive';
import StatusBarMainMobile from '../status_bar/StatusBarMainMobile';

const theme = createMuiTheme({
  palette: {
        primary: blue,
        secondary: lightBlue
  }
});

const styles = theme => ({
    root:   {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
     },
    button: {
        margin: theme.spacing.unit    
    },
    fab:    {
        position: 'absolute',
        bottom: theme.spacing.unit * 6,
        right: theme.spacing.unit * 5
    },
    link:   {
        textDecoration: "none"
    }
});

class CapMain extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            moreInfo: false, 
            open: false
        };
    };

    showMoreInfo = () => {
        this.setState(prevState => ({
            moreInfo: !prevState.moreInfo
        }))        
    };

    handleClickOpen = () => {
        this.setState({
          open: true,
        });
    };
    
    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };
    
    render(){
        const { classes } = this.props;
        return (
            <div> 
                <MediaQuery minDeviceWidth={350}>
                    <StatusBarCap />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={349}>
                    <StatusBarMainMobile />
                </MediaQuery>               
                <MuiThemeProvider theme={theme}>
                    <Paper className={classes.root} elevation={6}>
                        <Typography variant="display1" gutterBottom align="center">
                            {`Corrective Action Plan`}
                        </Typography>
                        <br />    
                        <Typography variant="body1" gutterBottom align="center">
                            {`Will the Regulated Entity be required to submit a Corrective Action Plan in order to resolve this Compliance Action?`}
                        </Typography>
                        <br />
                        <center>
                            <Link to={"/main/action/capupload"} className={classes.link}>
                                <Button variant="outlined" color="primary" className={classes.button}>
                                    Yes
                                </Button>
                            </Link>
                            <Link to={"/main/action/selectcorrespondence"} className={classes.link}>
                                <Button variant="outlined" color="secondary" className={classes.button}>
                                    No
                                </Button>
                            </Link>
                            <Button variant="outlined" className={classes.button} onClick={this.showMoreInfo}>
                                More Info
                            </Button>
                        </center>
                        <Button 
                            variant="fab" 
                            color="primary" 
                            mini 
                            aria-label="Action Info" 
                            className={classes.fab} 
                            onClick={this.handleClickOpen}
                        >
                            <HelpIcon />
                        </Button> 
                    </Paper>
                    <br />
                    {this.state.moreInfo ? <CapMoreInfo /> : null }
                    <CapUploadHelpDialogWrapped
                        selectedValue={this.state.selectedValue}
                        open={this.state.open}
                        onClose={this.handleClose}
                    />                                                              
                </MuiThemeProvider>        
            </div>
        );        
    }
}

CapMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CapMain);