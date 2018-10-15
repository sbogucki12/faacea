import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
  },
  root: {
        paddingLeft: "10%",
        paddingRight: "10%", 
        paddingTop: "3%"
  },
  button:   {
        margin: theme.spacing.unit,
  },
  link:     {
        textDecoration: "none"
  }
});

function UploadCorrespondenceButtons(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Paper className={classes.paperRoot} elevation={6}>
            <Typography variant="body1" component="p" align="center">
                {`If there are no records to upload currently, click below to continue (You may return to this screeen later.)`}
            </Typography>
            <br />
            <center>
                <Link to="/main/action/actionsummary" className={classes.link}>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        PROCEED
                    </Button>
                </Link>
            </center>
        </Paper>
    </div>
  );
}

UploadCorrespondenceButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadCorrespondenceButtons);