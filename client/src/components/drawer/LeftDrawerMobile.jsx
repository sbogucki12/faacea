import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import DrawerList from './DrawerList';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,    
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    textDecoration: 'none'
  }
});

class LeftDrawerMobile extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <DrawerList />
      </div>
    );
  }
}

LeftDrawerMobile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawerMobile);