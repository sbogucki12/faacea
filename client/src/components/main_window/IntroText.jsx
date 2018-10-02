import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    // maxWidth: 500,
  },
};

function IntroText(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <Typography variant="body1" gutterBottom align="center">
        {`The FAA Compliance and Enforcement Application (CEA) is an Aviation Safety Knowledge Management Environment (ASKME) application that allows FAA users to track Compliance and Enforcement activity and guides the user through the AIR Compliance Philosophy process.`}
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom align="center">
        {`After logging in, CEA will provide you the option to “Create a New Action”.  If you are viewing CEA from your desktop or laptop computer, all menu options are displayed on the left-side of the screen.  If you’re viewing CEA from a mobile device – such as your phone – options are available via a menu that is hidden by default.  You may reveal that menu by clicking the three horizontal lines in the upper-left corner of the application, next to the words “FAA AIR CEA”.`}
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom align="center">
        {`When you “Create a New Action”, CEA will guide you through the process of determining which type of compliance action is appropriate for the alleged noncompliance.  CEA will assist you in corresponding with the Regulated Entity, making enforcement decisions, and processing the action through review and closure.`}
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom align="center">
        {`If you have any questions about CEA, please contact us.`}
      </Typography>
      <br />
    </div>
  );
}

IntroText.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntroText);
