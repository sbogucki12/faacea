import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  paperRoot:     {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  root:     {
    marginTop: "2%", 
    marginLeft: "20%",
    marginRight: "20%"
  },
  button:   {
    margin: theme.spacing.unit,
  },
  link:     {
      textDecoration: "none"
  }
});

function CapProceed(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paperRoot} elevation={6} align="center">
        <Link to="/main/action/selectcorrespondence" className={classes.link}>
            <Button variant="outlined" color="primary" className={classes.button}>
                PROCEED
            </Button>
        </Link>
      </Paper>
    </div>
  );
}

CapProceed.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CapProceed);