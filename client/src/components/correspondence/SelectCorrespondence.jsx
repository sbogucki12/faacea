import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class SelectCorrespondence extends React.Component {
  state = {
    LOI: false,
    LACCA: false,
    LOA: false, 
    LON: false,
    LOCA: false, 
    LOCB: false, 
    LOFCA: false, 
    LOR: false,
    closure: false,
    VDRPacceptance: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormGroup row>
        <center>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.LOI}
                onChange={this.handleChange('LOI')}
                value="LOI"
                color="primary"
              />
            }
            label="Letter of Investigation"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.LACCA}
                onChange={this.handleChange('LACCA')}
                value="LACCA"
                color="primary"
              />
            }
            label="Letter Acknowledging Completed Corrective Action"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.LOA}
                onChange={this.handleChange('LOA')}
                value="LOA"
                color="primary"
              />
            }
            label="Letter of Acknowledgement"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.LON}
                onChange={this.handleChange('LON')}
                value="LON"
                color="primary"
              />
            }
            label="Letter of No Action"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.LOCA}
                onChange={this.handleChange('LOCA')}
                value="LOCA"
                color="primary"
              />
            }
            label="Letter of Correction - Type A"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.LOCB}
                onChange={this.handleChange('LOCB')}
                value="LOCB"
                color="primary"
              />
            }
            label="Letter of Correction - Type B"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.LOFCA}
                onChange={this.handleChange('LOFCA')}
                value="LOFCA"
                color="primary"
              />
            }
            label="Letter of Failed Corrective Action"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.LOR}
                onChange={this.handleChange('LOR')}
                value="LOR"
                color="primary"
              />
            }
            label="Letter of Rejection"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.closure}
                onChange={this.handleChange('closure')}
                value="closure"
                color="primary"
              />
            }
            label="Notification of Action Closure"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.VDRPacceptance}
                onChange={this.handleChange('VDRPacceptance')}
                value="VDRPacceptance"
                color="primary"
              />
            }
            label="Notification of Acceptance (VDR)"
          />
          </center>
      </FormGroup>
    );
  }
}

export default SelectCorrespondence;