import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 320,
    flexGrow: 1,
    margin: "0 auto",
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 100,
    padding: 15,
    backgroundColor: '#2e2e2e',
    color: '#b2a17a',
    fontSize: 24,
  },
  footer: {
    backgroundColor: '#2e2e2e',
    color: '#b2a17a',
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    cursor: 'pointer',
  },
  button: {
    color: '#b2a17a',
    '&:disabled': {
      color: '#777',
    }
  }
}));

function SwipeableTextMobileStepper({stocksInfo, onChangeStock: handleChangeStock}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = stocksInfo.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        {stocksInfo[activeStep].label}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={4000}
      >
        {stocksInfo.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img onClick={() => handleChangeStock(step.id)} className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className={classes.footer}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            className={classes.button}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Вперед
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button
            className={classes.button}
            size="small" 
            onClick={handleBack} 
            disabled={activeStep === 0} 
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Назад
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
