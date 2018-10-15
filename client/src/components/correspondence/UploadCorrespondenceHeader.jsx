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
  root: {
      paddingLeft: "10%",
      paddingRight: "10%"
  }
});

function UploadCorrespondenceHeader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Paper className={classes.paperRoot} elevation={6}>
            <Typography variant="display1" component="h3" align="center">
                {`Upload Correspondence`}
            </Typography>
        </Paper>
    </div>
  );
}

UploadCorrespondenceHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadCorrespondenceHeader);