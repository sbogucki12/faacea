import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    paddingRight: "20%"
 
  }
});

function MainWindowLogin(props) {
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
          <br />
          <Typography variant="subheading" gutterBottom align="center">
            Please Log In. 
          </Typography>
        </Paper>
      </Grid>  
    </React.Fragment>
  );
}

MainWindowLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainWindowLogin);