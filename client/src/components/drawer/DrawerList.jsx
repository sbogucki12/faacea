import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import { 
    addNewActionToolTip, 
    submitNewVDRToolTip,
    contExistingToolTip,
    inboxToolTip } from './tooltipsText';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Email';
import ArrowIcon from '@material-ui/icons/PlayArrow';
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';

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

class DrawerList extends React.Component {
  state = {
    selectedIndex: null,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
            <a href='/main/action/processmap' className={classes.link}>
                <Tooltip disableFocusListener disableTouchListener title={addNewActionToolTip}>
                    <ListItem
                    button
                    selected={this.state.selectedIndex === 0}
                    onClick={event => this.handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Create New Action" />
                    </ListItem>
                </Tooltip>  
            </a>
            <Tooltip disableFocusListener disableTouchListener title={submitNewVDRToolTip}>
                <ListItem
                button
                selected={this.state.selectedIndex === 1}
                onClick={event => this.handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create New VDR" />
                </ListItem>
            </Tooltip>
            <Tooltip disableFocusListener disableTouchListener title={contExistingToolTip}>
                <ListItem
                button
                selected={this.state.selectedIndex === 2}
                onClick={event => this.handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        <ArrowIcon />
                    </ListItemIcon>
                    <ListItemText primary="Continue Existing" />
                </ListItem>
            </Tooltip>
            <Tooltip disableFocusListener disableTouchListener title={inboxToolTip}>
                <ListItem
                button
                selected={this.state.selectedIndex === 3}
                onClick={event => this.handleListItemClick(event, 3)}
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
            </Tooltip>
        </List>
        <Divider />
      </div>
    );
  }
}

DrawerList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerList);