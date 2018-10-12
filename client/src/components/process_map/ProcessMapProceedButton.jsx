import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        marginTop: "4%",
        marginLeft: "15%",
        marginRight: "15%",
        marginBottom: "3%"
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    button:   {
        margin: theme.spacing.unit,
    },
    link:   {
        textDecoration: "none"
    }
});

function ProcessMapProceedButton(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paperRoot} elevation={6}>
        <Link to={"/main/action"} className={classes.link}>
            <center>
                <Button variant="outlined" color="primary" className={classes.button}>
                    {`Proceed`}
                </Button>
            </center>
        </Link>
      </Paper>
    </div>
  );
}

ProcessMapProceedButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProcessMapProceedButton);