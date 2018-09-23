import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ActionDeterminationAdmin from './ActionDeterminationAdmin';

const styles = {
 
};

function ActionDetermination(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Typography variant="headline" gutterBottom align="center">
        Action Determination
      </Typography>
      <Typography variant="subheading" gutterBottom align="center">
        (prototype)
      </Typography>         
      <ActionDeterminationAdmin />
      <Typography variant="button" gutterBottom align="center">
        Button
      </Typography>
    </React.Fragment>
  );
}

ActionDetermination.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionDetermination);