import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { actionDeterminationChoicesAdmin } from './actionDeterminationChoice';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

const adminChoices = actionDeterminationChoicesAdmin; 

class ActionDeterminationAdmin extends React.Component {
  state = {
    choice0: false,
    choice1: false,
    choice2: false,
    choice3: false,
    choice4: false,
    choice5: false,
    choice6: false, 
    choice7: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { choice0, choice1, choice2, choice3, choice4, choice5, choice6, choice7 } = this.state;
    // const error = Object.values(this.state).filter(v => v).length !== 2;
    // required error={error}
    const adminChoiceList = adminChoices.map((choice) => { 
        return (<FormControlLabel
          control={
            <Checkbox key={choice.id} checked={this.state[choice.id]} onChange={this.handleChange(`${choice.choice}`)} value={this.state[choice.id]} />
          }
          label={`${choice.text}`}
        />)           
    })
    return (
      <div className={classes.root}> 
        {console.log(adminChoices)} 
              
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Select ALL That Apply:</FormLabel>
          
          <FormGroup>
          {adminChoiceList} 
          </FormGroup>
         
          {/* <FormHelperText>You can display an error</FormHelperText> */}
        </FormControl>
    
      </div>
    );
  }
}

ActionDeterminationAdmin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionDeterminationAdmin);