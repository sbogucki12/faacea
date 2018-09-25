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
import Tooltip from '@material-ui/core/Tooltip';
import { addNewActionToolTip } from './tooltipsText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    marginTop: '30%',
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    textDecoration: 'none'
  }
});

class LeftDrawer extends React.Component {
  render(){
    const { classes } = this.props;    

    return (
      <div className={classes.root}>
        <List component="nav">
        <a href='/main/action' className={classes.link}>
        <Tooltip disableFocusListener disableTouchListener title={addNewActionToolTip}>
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
              <ListItemText primary="Create New Action" />
            </ListItem>
          </Tooltip>
          </a>        
        </List>
        <Divider />      
      </div>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawer);