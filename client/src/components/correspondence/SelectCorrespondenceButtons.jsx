import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SelectCorrespondenceDialogWrapped from './SelectCorrespondenceDialog'; 
import { Link } from 'react-router-dom'; 

const styles = theme => ({
  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  }, 
  root: {
    marginLeft: "15%", 
    marginRight: "15%", 
    marginTop: "1%"
  }, 
  link: {
    textDecoration: "none"
  }
});

class SelectCorrespondenceButtons extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

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
      <div className={classes.root}>
        <Paper className={classes.paperRoot} elevation={6}>
          <center>     
              <Button variant="outlined" color="secondary" className={classes.button} onClick={this.handleClickOpen}>
                  {`Review Selections`}
              </Button>
              <Link to="/main/action/actionsummary" className={classes.link}>
                <Button variant="outlined" color="primary" className={classes.button}>
                    {`Save & Proceed`}
                </Button>
              </Link>
          </center> 
        </Paper>
        <SelectCorrespondenceDialogWrapped  
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}          
        />
      </div>
    );
  }
}

SelectCorrespondenceButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectCorrespondenceButtons);