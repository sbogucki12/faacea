import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ActionDeterminationAdmin from './ActionDeterminationAdmin';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';
import AdminHelpDialogWrapped from '../help_dialogs/AdminHelpDialog';
import MediaQuery from 'react-responsive';
import StatusBarMain from '../status_bar/StatusBarMain';
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
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4
  },
  link: {
    textDecoration: "none"
  }
});

class ActionDetermination extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      open: false,
    };
  }

  handleChange = (value) => {
    this.setState({ value });
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
        <MediaQuery minDeviceWidth={350}>
          <StatusBarMain />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={349}>
          <StatusBarMainMobile />
        </MediaQuery>
        <Paper className={classes.root} elevation={6}>      
          <Typography variant="display1" gutterBottom align="center">
            Action Determination
          </Typography>        
          <ActionDeterminationAdmin />
          <Link to={"/main/action/informal"} className={classes.link}>
            <center>
              <Button variant="outlined" color="primary" align="center" className={classes.button}>
                Submit
              </Button>
            </center>
          </Link>
          <Button variant="fab" mini color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
            <HelpIcon />
          </Button>  
        </Paper>
        <AdminHelpDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />    
    </React.Fragment>
    )
  };
}

ActionDetermination.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionDetermination);