import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ActionDeterminationAdmin from './ActionDeterminationAdmin';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import REInfo from './REInfo';
import { Link } from 'react-router-dom';
import WorkIcon from '@material-ui/icons/Work';
import InformalInfoDialogWrapped from '../action_info/InformalInfoDialog';

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
    bottom: theme.spacing.unit * 6,
    right: theme.spacing.unit * 6   
  }
});

class ActionDeterminationREInfo extends React.Component{
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
            Regulated Entity - Information
          </Typography>        
          <REInfo />
          <Link to={"/main/action/capmain"} className={classes.link}>
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
        <InformalInfoDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />    
      </React.Fragment>
    )
  }
;
}

ActionDeterminationREInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionDeterminationREInfo);