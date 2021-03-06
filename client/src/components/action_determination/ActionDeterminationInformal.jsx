import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ActionDeterminationInformalList from './ActionDeterminationInformalList';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';
import InformalHelpDialogWrapped from '../help_dialogs/InformalHelpDialog';
import MediaQuery from 'react-responsive';
import StatusBarInformal from '../status_bar/StatusBarInformal';
import StatusBarMainMobile from '../status_bar/StatusBarMainMobile';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit   
  },
  link: {
    textDecoration: "none"
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 5,
    right: theme.spacing.unit * 5
  }
});

class ActionDeterminationInformal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
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
      <React.Fragment>
        <MediaQuery minDeviceWidth={350}>
          <StatusBarInformal />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={349}>
          <StatusBarMainMobile />
        </MediaQuery>
        <Paper className={classes.root} elevation={6}>      
          <Typography variant="display1" gutterBottom align="center">
            Action Determination
          </Typography>             
          <ActionDeterminationInformalList />
            <center>
              <Link to={"/main/action/reinfo"} className={classes.link}>
                <Button variant="outlined" color="primary" align="center" className={classes.button}>
                  Submit
                </Button>
              </Link>
            </center>
          <Button variant="fab" mini color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
            <HelpIcon />
          </Button>  
        </Paper>
        <InformalHelpDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />    
      </React.Fragment>
      );
    }  
}

ActionDeterminationInformal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionDeterminationInformal);