import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
 
};

function PleaseLogIn(props) {
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
          Please Log In
        `}
      </Typography>
    </React.Fragment>
  );
}

PleaseLogIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PleaseLogIn);