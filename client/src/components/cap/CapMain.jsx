import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import indigo from '@material-ui/core/colors/indigo';
import CapMoreInfo from './CapMoreInfo';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
  palette: {
        primary: indigo,
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
  }
});

class CapMain extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            moreInfo: false
        };
    };

    showMoreInfo = () => {
        this.setState(prevState => ({
            moreInfo: !prevState.moreInfo
        }))        
    };
    
    render(){
        const { classes } = this.props;
        return (
            <div>                
                <MuiThemeProvider theme={theme}>
                    <Paper className={classes.root} elevation={6}>
                        <Typography variant="headline" gutterBottom align="center">
                            {`Compliance Action Plan`}
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
                    </Paper>
                    <br />
                    {this.state.moreInfo ? <CapMoreInfo /> : null }                    
                </MuiThemeProvider>        
            </div>
        );        
    }
}

CapMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CapMain);