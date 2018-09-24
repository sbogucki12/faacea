import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    warningBox: {
        backgroundColor: 'black',
        color: 'yellow'
    }
};

function WarningText(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Typography variant="caption" gutterBottom align="center" className={classes.warningBox}>
            Note: This web app is a prototype and does not represent any official association with the Federal Aviation Administration, or any other agency of the United States government.  
      </Typography>      
    </React.Fragment>
  );
}

WarningText.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WarningText);