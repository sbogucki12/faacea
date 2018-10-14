import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SelectCorrespondence from './SelectCorrespondence';
import SelectCorrespondenceHeader from './SelectCorrespondenceHeader';
import SelectCorrespondenceButtons from './SelectCorrespondenceButtons';
import StatusBarMain from '../status_bar/StatusBarMain';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function SelectCorrespondenceMain(props) {
  const { classes } = props;

  return (
    <div>
      <StatusBarMain />      
      <SelectCorrespondenceHeader />
      <Paper className={classes.root} elevation={6}>
        <SelectCorrespondence />
      </Paper>
      <br />
      <SelectCorrespondenceButtons />
    </div>
  );
}

SelectCorrespondenceMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectCorrespondenceMain);