import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { stepOne, stepTwo, stepThree, stepFour, stepFive, stepSix } from "./processStepText";
import ProcessMapHeader from './ProcessMapHeader';
import ProcessMapProceedButton from './ProcessMapProceedButton';

const styles = theme => ({
  root:             {
    width: '90%',
  },
  button:           {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer:   {
    padding: theme.spacing.unit * 3,
  },
  paperRoot:             {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

function getSteps() {
  return ['Determine Action Type', 'Upload CAP (If Necessary)', 'Select Correspondence Types', 'Upload Correspondence Records', 'Review Action', 'Close / Management Review'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return stepOne;
    case 1:
      return stepTwo;
    case 2:
      return stepThree;
    case 3:
      return stepFour;
    case 4:
      return stepFive;
    case 5:
      return stepSix;
    default:
      return 'Unknown step';
  }
}

class ProcessMapMain extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <ProcessMapHeader />
        <Paper className={classes.paperRoot} elevation={6}>
            <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
                return (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                        <div>
                        <Button
                            disabled={activeStep === 0}
                            onClick={this.handleBack}
                            className={classes.button}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        </div>
                    </div>
                    </StepContent>
                </Step>
                );
            })}
            </Stepper>
            {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>{`All steps completed`}</Typography>
                <Button onClick={this.handleReset} className={classes.button}>
                Reset
                </Button>
            </Paper>
            )}
        </Paper>
        <ProcessMapProceedButton />
      </div>
    );
  }
}

ProcessMapMain.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ProcessMapMain);