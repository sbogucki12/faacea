import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import LeftArrowIcon from '@material-ui/icons/KeyboardArrowLeft';
import WorkIcon from '@material-ui/icons/Work';
import SaveIcon from '@material-ui/icons/Save';
import SBUploadCorrDialogWrapped from './SBUploadCorrDialog';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class SBContentUploadCorr extends React.Component {
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
                <Button variant="outlined" size="small" color="secondary" className={classes.button}>        
                    <LeftArrowIcon className={classes.leftIcon} />
                    {`Back`}
                </Button>
                <Button variant="outlined" size="small" className={classes.button}>
                    <SaveIcon className={classNames(classes.leftIcon)} />
                    {`Save`}
                </Button>
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
                <SBUploadCorrDialogWrapped
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleClose}
                />
            </React.Fragment>
        );
    }

}

SBContentUploadCorr.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SBContentUploadCorr);