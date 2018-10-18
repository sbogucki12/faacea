import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ContActionSearch from './ContActionSearch';
import ContActionCase from './ContActionCase';

const styles = theme => ({
  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginLeft: "15%",
    marginRight: "15%"
  },
});

class ContActionMain extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        showCase: false
      };
    };

  render() {
      const { classes } = this.props;

      return (
        <div>
          <Paper className={classes.paperRoot} elevation={6}>
            <Typography variant="display1" gutterBottom align="center">
              {`Open Existing`}
            </Typography>
            <Typography variant="caption" gutterBottom align="center">
              {`On this screen, you may open an existing Compliance Action / VDR for continued processing.`}
            </Typography>
          </Paper>
          <br />
          <ContActionSearch />
        </div>
      );
  }

}

ContActionMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContActionMain);