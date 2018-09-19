import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
 
};

function MainWindow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Typography variant="headline" gutterBottom align="center">
        FAA AIR CEA
      </Typography>
      <Typography variant="subheading" gutterBottom align="center">
        (prototype)
      </Typography>         
      <Typography gutterBottom align="center">
        {`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `}
      </Typography>
      <Typography variant="button" gutterBottom align="center">
        Button
      </Typography>
    </React.Fragment>
  );
}

MainWindow.propMainWindow = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainWindow);