import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DrawerList from './DrawerList';

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
        <DrawerList />
      </div>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawer);