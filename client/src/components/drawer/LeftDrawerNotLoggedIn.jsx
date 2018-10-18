import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LoginIcon from '@material-ui/icons/Lock';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    marginTop: '30%',
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    textDecoration: "none"
  }
});

function LeftDrawerNotLoggedIn(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <a href="/auth/google" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Please Log In" />
          </ListItem>
        </a>        
      </List>
      <Divider />      
    </div>
  );
}

LeftDrawerNotLoggedIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawerNotLoggedIn);