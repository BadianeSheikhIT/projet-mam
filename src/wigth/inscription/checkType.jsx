import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
//import FormLabel from '@mui/material/FormLabel';
import './check.css';

export default function RadioButtonsGroupTypte() {
  return (
    <FormControl component="fieldset">
            <RadioGroup defaultValue="patient" name="account-type-group">
                <FormControlLabel 
                    value="patient" 
                    control={<Radio />} 
                    label="Patient" className='status'
                    labelPlacement="end" // Positionne le label à droite du bouton radio
                    style={{ marginRight: 0 }} // Supprime l'espacement à droite
                />
                <FormControlLabel 
                    value="medecin" 
                    control={<Radio />} 
                    label="Médecin"  className='status'
                    labelPlacement="end" // Positionne le label à droite du bouton radio
                    style={{ marginRight: 0 }} // Supprime l'espacement à droite
                />
            </RadioGroup>
        </FormControl>
  );
}
