import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IntroText from './IntroText';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: "99%"
  },
  heading: {
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "20%",
    paddingRight: "20%",
    marginTop: "2%" 
  }, 
  body: {
    maxWidth: "80%", 
    padding: "5%",
    marginTop: "3%"
  }
});

function MainWindow(props) {
  const { classes } = props;

  return (
    <React.Fragment className={classes.root}>
      <Grid
        container
        spacing={6}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Paper elevation={6} className={classes.heading}>
          <Typography variant="headline" gutterBottom align="center">
            FAA AIR CEA 
          </Typography>
          <Typography variant="subheading" gutterBottom align="center">
            (prototype)
          </Typography>
        </Paper>
        <br />
        <Paper elevation={6} className={classes.body}>
          <IntroText />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

MainWindow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainWindow);