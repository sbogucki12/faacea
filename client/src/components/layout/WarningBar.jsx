import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import WarningText from '../main_window/WarningText';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    backgroundColor: '#3d5afe',
    alignContent: "center"
  },
  gridRoot: {
    flexGrow: 1,
  },
  warningBox: {
    marginTop: '5px',
    marginBottom: '5px'
  }
};

class WarningBar extends React.Component {
  render () {
    const { classes } = this.props; 

    return (
    <div className={this.props.classes.root}>
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={1} />
        <Grid item xs={10} className={classes.warningBox}>
          <WarningText />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
    );
  }
}

export default withStyles(styles)(WarningBar);