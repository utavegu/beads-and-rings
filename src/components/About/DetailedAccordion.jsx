import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { amber } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  root: {
    width: '70%',
    margin: '0 auto',
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
    display: 'block',
    backgroundColor: 'red',
  },
  heading: {
    color: '#b2a17a',
    backgroundColor: '#2e2e2e',
  },
  details: {
    color: '#b2a17a',
    backgroundColor: '#2e2e2e',
  },
}));

export default function DetailedAccordion({question, children}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion 
        square={false}
      >
        <AccordionSummary
          className={classes.heading}
          expandIcon={<ExpandMoreIcon fontSize="large" style={{ color: amber[100] }} />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          {question}
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
