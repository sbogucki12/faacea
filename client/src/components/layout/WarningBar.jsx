import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: '#3d5afe',
  },
};

class WarningBar extends React.Component {
  render () {
    return (
    <div className={this.props.classes.root}>
    {`test`}
    </div>
    );
  }
}

export default withStyles(styles)(WarningBar);