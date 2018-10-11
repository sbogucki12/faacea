import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import LeftArrowIcon from '@material-ui/icons/KeyboardArrowLeft';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import WorkIcon from '@material-ui/icons/Work';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

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

function StatusBarContent(props) {
  const { classes } = props;
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
      <Button variant="outlined" size="small" color="primary" className={classes.button}>
        {`Info`}
        <WorkIcon className={classes.rightIcon} />
      </Button>
    </React.Fragment>
  );
}

StatusBarContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusBarContent);

