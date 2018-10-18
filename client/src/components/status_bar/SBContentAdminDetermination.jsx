import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import LeftArrowIcon from '@material-ui/icons/KeyboardArrowLeft';
import WorkIcon from '@material-ui/icons/Work';
import SaveIcon from '@material-ui/icons/Save';
import SBAdminDeterminationDialogWrapped from './SBAdminDeterminationDialog';
import { caseInfoToolTip } from '../drawer/tooltipsText';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

const styles = theme => ({
  button:       {
    margin: theme.spacing.unit,
  },
  leftIcon:     {
    marginRight: theme.spacing.unit,
  },
  rightIcon:    {
    marginLeft: theme.spacing.unit,
  },
  iconSmall:    {
    fontSize: 20,
  },
  link:         {
      textDecoration: 'none'
  }
});

class SBContentAdminDetermination extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    };

    handleClickOpen = () => {
        this.setState({
          open: true,
        });
    };
    
    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };

    render(){
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Link to="/main/action/processmap" className={classes.link}>
                    <Button variant="outlined" size="small" color="secondary" className={classes.button}>        
                        <LeftArrowIcon className={classes.leftIcon} />
                        {`Back`}
                    </Button>
                </Link>
                <Button variant="outlined" size="small" className={classes.button}>
                    <SaveIcon className={classNames(classes.leftIcon)} />
                    {`Save`}
                </Button>
                <Tooltip disableFocusListener disableTouchListener title={caseInfoToolTip}>
                    <Button 
                        variant="outlined" 
                        size="small" 
                        color="primary" 
                        className={classes.button} 
                        onClick={this.handleClickOpen}
                    >
                        {`Info`}
                        <WorkIcon className={classes.rightIcon} />
                    </Button>
                </Tooltip>
                <SBAdminDeterminationDialogWrapped
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleClose}
                />
            </React.Fragment>
        );
    }

}

SBContentAdminDetermination.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SBContentAdminDetermination);