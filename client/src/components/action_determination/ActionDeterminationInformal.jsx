import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ActionDeterminationInformalList from './ActionDeterminationInformalList';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import WorkIcon from '@material-ui/icons/Work';
import AdminInfoDialogWrapped from '../action_info/AdminInfoDialog';

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
        <Paper className={classes.root} elevation={6}>      
          <Typography variant="headline" gutterBottom align="center">
            Action Determination
          </Typography>             
          <ActionDeterminationInformalList />
          <Link to={"/main/action/reinfo"} className={classes.link}>
            <center>
              <Button variant="outlined" color="primary" align="center" className={classes.button}>
                Submit
              </Button>
            </center>
          </Link>
          <Button variant="fab" mini color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
            <WorkIcon />
          </Button>  
        </Paper>
        <AdminInfoDialogWrapped
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