import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroupTypte() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Type de compte</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="patient" control={<Radio />} label="Patient" />
        <FormControlLabel value="medecin" control={<Radio />} label="Médecin" />
      </RadioGroup>
    </FormControl>
  );
}
