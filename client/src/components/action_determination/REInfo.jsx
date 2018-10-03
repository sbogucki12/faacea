import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { usStates } from './usStates';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class REInfo extends React.Component {
  state = {
    name: '',
    pocfname: '',
    poclname: '',
    email: '',
    phone: '',
    street: '',
    unit: '',
    city: '',
    addressState: '',
    zipcode: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'    
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name of Organization"
          placeholder="Placeholder"
          fullWidth
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-pocfname"
          label="POC - First Name"
          placeholder="Placeholder"
          style={{maxWidth: "100%", minWidth: "45%"}}
          className={classes.textField}
          value={this.state.pocfname}
          onChange={this.handleChange('pocfname')}
          margin="normal"
          variant="outlined"          
        />
         <TextField
          id="outlined-poclname"
          label="POC - Last Name"
          placeholder="Placeholder"
          style={{maxWidth: "100%", minWidth: "45%"}}
          className={classes.textField}
          value={this.state.poclname}
          onChange={this.handleChange('poclname')}
          margin="normal"
          variant="outlined"
        />
         <TextField
          id="outlined-email"
          label="POC - Email"
          placeholder="Placeholder"
          className={classes.textField}
          value={this.state.email}
          style={{maxWidth: "100%", minWidth: "40%"}}
          onChange={this.handleChange('email')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-phone"
          label="POC - Phone Number"
          placeholder="Placeholder"
          className={classes.textField}
          value={this.state.phone}
          onChange={this.handleChange('phone')}
          margin="normal"
          variant="outlined"
        />
          <TextField
          id="outlined-street"
          label="Address - Street"
          placeholder="Placeholder"
          className={classes.textField}
          style={{maxWidth: "100%", minWidth: "40%"}}
          value={this.state.street}
          onChange={this.handleChange('street')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-unit"
          label="Address - Unit"
          placeholder="Placeholder"
          className={classes.textField}
          value={this.state.unit}
          onChange={this.handleChange('unit')}
          margin="normal"
          variant="outlined"
        />        
        <TextField
          id="outlined-city"
          label="Address - City"
          placeholder="Placeholder"
          className={classes.textField}
          style={{maxWidth: "100%", minWidth: "40%"}}
          value={this.state.city}
          onChange={this.handleChange('city')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-select-addressState"
          select
          // label="Address - State"
          className={classes.textField}
          value={this.state.addressState}
          onChange={this.handleChange('addressState')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Address - State"
          margin="normal"
          variant="outlined"
        >
          {usStates.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-zipcode"
          label="Address - Zipcode"
          placeholder="Placeholder"
          className={classes.textField}
          value={this.state.zipcode}
          onChange={this.handleChange('zipcode')}
          margin="normal"
          variant="outlined"
        />
        









        {/* <TextField
          id="outlined-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-dense"
          label="Dense"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
          helperText="hello"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-bare"
          className={classes.textField}
          defaultValue="Bare"
          margin="normal"
          variant="outlined"
        /> */}
      </form>       
    );
  }
}

REInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(REInfo);