import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ContActionCase from './ContActionCase';

const styles = theme => ({
  paperRoot:    {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
  },
  container:    {
        display: 'flex',
        flexWrap: 'wrap'
  },
  textField:    {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
  },
  dense:        {
        marginTop: 16,
  },
  menu:         {
        width: 200,
  },
  button:       {
        margin: theme.spacing.unit,
  },
  root:         {
        flexGrow: 1,
  },  
});

class ContActionSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            trackingNumber: "",
            showCase: false
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    showCase = () => {
        if(this.state.showCase){
            return <ContActionCase />
        } else {
            return null
        }
    };

    handleShowCase = () => {
        this.setState(prevState => ({
            showCase: !prevState.showCase
        }))
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paperRoot} elevation={6}>
                    <Grid container className={classes.root} spacing={8}>
                        <Grid item xs={1} sm={4} />
                        <Grid item xs={10} sm={6}>
                            <form className={classes.container} noValidate autoComplete="off">
                                <TextField
                                    id="outlined-name"
                                    label="Tracking Number"
                                    className={classes.textField}
                                    value={this.state.trackingNumber}
                                    onChange={this.handleChange('trackingNumber')}
                                    margin="normal"
                                    variant="outlined"
                                    helperText="Enter Action Tracking Number to be Searched"                     
                                    />
                            </form>
                        </Grid>
                        <Grid item xs={1} sm={2} />
                    </Grid>
                    <center>
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleShowCase}>
                            {`Search`}
                        </Button>
                    </center>
                </Paper>
                <br />
                {this.showCase()}
            </div>
        );
    }
}

ContActionSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContActionSearch);