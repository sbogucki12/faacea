import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  paperRoot:    {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }, 
  root: {
      marginLeft: "15%",
      marginRight: "15%"
  }
});

function SummaryCorr(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paperRoot} elevation={6}>
        <Typography variant="body2" component="h3" align="center">
            <b>{`Required Correspondence Types:`}</b> &nbsp; <i>{`LOA, LOI`}</i>
        </Typography>
        <Typography variant="body2" component="h3" align="center">
            <b>{`Correspondence Records Uploaded:`}</b> &nbsp;         
            <List>
                <ListItem>
                    <ListItemText align="center">
                        <i>{`LOI: LOISNB.pdf`}</i>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText align="center">
                        <i>{`LOA: CAPAck_SNB.docx`}</i>
                    </ListItemText>
                </ListItem>
            </List>
        </Typography>
      </Paper>
    </div>
  );
}

SummaryCorr.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryCorr);