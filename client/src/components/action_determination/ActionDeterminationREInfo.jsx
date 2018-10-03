import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ActionDeterminationAdmin from './ActionDeterminationAdmin';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import REInfo from './REInfo';
import { Link } from 'react-router-dom';

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
  }
});

function ActionDeterminationREInfo(props) {
  const { classes } = props;

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
      </Paper>
    </React.Fragment>
  );
}

ActionDeterminationREInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionDeterminationREInfo);