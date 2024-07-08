import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';

const CustomSlider = styled(Slider)({
  width: 300,
  color: 'var(--color)',
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: '0px 0px 0px 8px var(--box-shadow)',
    },
    '&.Mui-active': {
      boxShadow: '0px 0px 0px 14px var(--box-shadow)',
    },
  },
});

const defaultVars = {
  '--color': '#B05405',
  '--box-shadow': 'rgba(176,84,5,0.1)',
};

export default function DynamicCSSVariables() {
  return (
    <React.Fragment>
      <CustomSlider style={defaultVars} defaultValue={30} sx={{ mt: 1 }} />
    </React.Fragment>
  );
}
