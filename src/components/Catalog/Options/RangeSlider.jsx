import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const AirbnbSlider = withStyles({
  root: {
    width: "100%",
  },

  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#b2a17a',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
  },

  active: {

  },

  track: {
    height: 3,
    color: '#b2a17a',
  },

  rail: {
    color: '#fff',
    opacity: 1,
    height: 3,
  },

})(Slider);



export default function CustomizedSlider() {
  return (
    <AirbnbSlider
      getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
      defaultValue={[30, 70]}
    />
  );
}
