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
    marginLeft: "15%", 
    marginRight: "15%"
  },
});

function ReportingHeader(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.paperRoot} elevation={6}>
        <Typography variant="display1" component="h3" align="center">
          {`Reporting`}
        </Typography>        
      </Paper>
    </div>
  );
}

ReportingHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportingHeader);