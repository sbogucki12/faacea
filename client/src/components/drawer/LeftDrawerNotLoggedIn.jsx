import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    marginTop: '30%',
    backgroundColor: theme.palette.background.paper,
  },
});

function LeftDrawerNotLoggedIn(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Please Log In" />
        </ListItem>        
      </List>
      <Divider />      
    </div>
  );
}

LeftDrawerNotLoggedIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawerNotLoggedIn);