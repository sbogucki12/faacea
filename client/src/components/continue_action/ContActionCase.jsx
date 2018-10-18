import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  paperRoot:    {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button:       {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }
});

class ContActionCase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false, 
            screen: ""
        }        
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
          <div>
            <Paper className={classes.paperRoot} elevation={6}>
                <Typography variant="body2" gutterBottom align="center">
                        <b>{`Tracking Number:`}</b> &nbsp; <i>{`ABC-123-2018NM`}</i>
                </Typography>
                <Typography variant="caption" gutterBottom align="center">
                        {`Select which screen you would like to navigate to for this item.`}
                </Typography>
                <center>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        className={classes.button}
                        onClick={this.handleClickOpen}
                    >
                        {`Select Screen`}
                    </Button>
                </center>
            </Paper>
            <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={this.state.open}
            onClose={this.handleClose}
            >
                <DialogTitle>{`Select Screen`}</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">{`Select Screen`}</InputLabel>
                            <Select
                            native
                            value={this.state.screen}
                            onChange={this.handleChange('screen')}
                            input={<Input id="age-native-simple" />}
                            >
                                <option value="" />
                                <option value={`actionDetermination`}>Action Determination</option>
                                <option value={`capUpload`}>CAP Upload</option>
                                <option value={`correspondence`}>Correspondence</option>
                                <option value={`summary`}>Summary</option>
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        {`Cancel`}
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        {`Go`}
                    </Button>
                </DialogActions>
            </Dialog>
          </div>
        );
    }
}

ContActionCase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContActionCase);