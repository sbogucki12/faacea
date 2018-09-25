import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root:       {
        flexGrow: 1,
        position: 'absolute',
        top: '20%',
        bottom: 0,
        left: 0, 
        right: 0
    },
    paperRoot:  {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }, 
    button:     {
        margin: theme.spacing.unit,
    }, 
    link:       {
        textDecoration: 'none'
    }   
});

function Landing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
        <Grid container spacing={0} className={classes.root}>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Paper className={classes.paperRoot} elevation={6}> 
                    <Typography variant="headline" component="h3" align="center">
                        Warning Message
                    </Typography>
                    <Typography component="p" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed ullamcorper sapien, nec bibendum urna. Aenean elementum placerat diam, nec interdum augue. Pellentesque efficitur hendrerit nunc, et vestibulum ex. Cras hendrerit pellentesque est, eget fringilla tellus rhoncus eget. Nullam placerat magna nisl, sit amet laoreet turpis sollicitudin sit amet. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur auctor auctor augue eget cursus.
                    </Typography>
                    <center>
                        <Link to="/main" className={classes.link}>                    
                        <Button variant="outlined" color="primary" className={classes.button} style={{ flex: 1 }}>
                            Yes
                        </Button>
                        </Link>
                        <Button variant="outlined" className={classes.button}>
                            No
                        </Button>
                    </center>
                </Paper>
                </Grid>
            <Grid item xs={1} />
            </Grid>
    </React.Fragment>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);