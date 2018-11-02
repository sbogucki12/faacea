import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReportingHeader from './ReportingHeader';
import ReportingBody from './ReportingBody';

const styles = theme => ({
  root: {
    backgroundColor: theme.props.backgroundColor
  },
});

function ReportingMain(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <ReportingHeader/>
      <br />
      <ReportingBody />    
    </div>
  );
}

ReportingMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportingMain);