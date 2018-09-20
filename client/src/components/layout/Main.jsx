import React, { mapDispatchToProps } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { Link } from 'react-router-dom'
import MainWindowLayout from './MainWindowLayout';
import Button from '@material-ui/core/Button';
import LeftDrawer from '../drawer/LeftDrawer';
import LeftDrawerMobile from '../drawer/LeftDrawerMobile';
import LeftDrawerNotLoggedIn from '../drawer/LeftDrawerNotLoggedIn';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
        width: '100%',
        zIndex: theme.zIndex.drawer + 1,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,    
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  }, 
  buttonColor: {
    '&:hover': {
      backgroundColor: '#212121'
    }
  }, 
  link: {
    textDecoration: 'none',
    color: 'white'
  },  
});

class Main extends React.Component {
  state = {
    mobileOpen: false,
  };

  renderContent() {
    const { classes } = this.props;
    switch (this.props.auth){
      case null: 
        return;
      case false: 
        return (
          <Button color="inherit" className={classes.buttonColor} href="/auth/google">Login</Button>
        );
      default: 
          return(
            <Button color="inherit" className={classes.buttonColor} href="/api/logout">Log Out</Button>
          )
      };
  };

  renderLeftDrawer() {
    const { classes, theme } = this.props;
    switch (this.props.auth){
      case null: 
        return;
      case false: 
        return (
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <LeftDrawerNotLoggedIn />
          </Drawer>
        );
      default: 
          return(
            <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <LeftDrawer />
          </Drawer>
          )
      };
  };

  renderLeftDrawerMobile() {
    const { classes, theme } = this.props;
    switch (this.props.auth){
      case null: 
        return null;
      case false: 
        return (
          <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={this.state.mobileOpen}
          onClose={this.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <LeftDrawerNotLoggedIn  />
        </Drawer>
        );
      default: 
          return(
            <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <LeftDrawerMobile  />
          </Drawer>
          )
      };
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;    

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography variant="title" color="inherit" noWrap style={{ flex: 1 }}>
            <Link to="/main" className={classes.link}>
              FAA AIR CEA
              </Link>
            </Typography>
            {this.renderContent()}
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
         {this.renderLeftDrawerMobile()}
        </Hidden>
        <Hidden smDown implementation="css">
        {this.renderLeftDrawer()}
          
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <MainWindowLayout />
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapStateToProps({ auth }){
  return { auth };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Main));
