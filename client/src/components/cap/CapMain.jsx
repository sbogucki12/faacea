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
import WorkIcon from '@material-ui/icons/Work';
import ReInfoDialogWrapped from '../action_info/ReInfoDialog';

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
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 6,
        right: theme.spacing.unit * 5
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
                <MuiThemeProvider theme={theme}>
                    <Paper className={classes.root} elevation={6}>
                        <Typography variant="headline" gutterBottom align="center">
                            {`Corrective Action Plan`}
                        </Typography>
                        <br />    
                        <Typography variant="body1" gutterBottom align="center">
                            {`Will the Regulated Entity be required to submit a Corrective Action Plan in order to resolve this Compliance Action?`}
                        </Typography>
                        <br />
                        <center>
                            <Button variant="outlined" color="primary" className={classes.button}>
                                Yes
                            </Button>
                            <Button variant="outlined" color="secondary" className={classes.button}>
                                No
                            </Button>
                            <Button variant="outlined" className={classes.button} onClick={this.showMoreInfo}>
                                More Info
                            </Button>
                        </center>
                        <Button variant="fab" color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
                            <WorkIcon />
                        </Button> 
                    </Paper>
                    <br />
                    {this.state.moreInfo ? <CapMoreInfo /> : null }
                    <ReInfoDialogWrapped
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