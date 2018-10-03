import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  textStyle: {
      margin: "1%"
  }
});

function CapMoreInfo(props) {
  const { classes } = props;
  
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="body1" align="center" component="p" className={classes.textStyle}>
          {`If no Corrective Action Plan (CAP) is necessary for this Compliance Action (refer to the AIR Compliance Philosophy for guidance), then you may be able to proceed to the Action Closure screen (after notifying the Regulated Entity). CEA will guide you through these steps.`}
        </Typography> 
        <br />
        <Typography variant="body1" align="center" component="p" className={classes.textStyle}>
          {`If a CAP is necessary for this Compliance Action, CEA will require you to upload the CAP (as well as records of other required correspondence to/from the Regulated Entity) before proceeding to the Action Closure screen.  CEA will guide through all these steps.`}
        </Typography>         
      </Paper>
    </div>
  );
}

CapMoreInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CapMoreInfo);