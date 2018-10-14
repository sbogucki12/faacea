import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function SelectCorrespondenceHeader(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.paperRoot} elevation={6}>
        <Typography variant="display1" gutterBottom align="center">
          {`Select Correspondence Types`}
        </Typography>
        <br />
        <Typography component="p" variant="caption" align="center">
          {`On this screen, you select the Correspondence Types that you anticipate needing to send to the Regulated Entity during the course of this Compliance Action (for help determining which Correspondence Types may be needed, see DOCUMENTATION). You may update the Correspondence Types you select later during the process.`}
        </Typography>
        <br />
        <Typography component="p" variant="caption" align="center">
          {`Before closing this Compliance Action (or sending for management review), CEA will remind you to upload records of any missing Correspondence Type you select here.`}
        </Typography>
        <br />
      </Paper>
      <br />
    </div>
  );
}

SelectCorrespondenceHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectCorrespondenceHeader);