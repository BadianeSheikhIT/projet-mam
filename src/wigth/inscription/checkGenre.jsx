import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
//import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl component="fieldset">
            <RadioGroup defaultValue="feminin" name="account-type-group">
                <FormControlLabel 
                    value="feminin" 
                    control={<Radio />} 
                    label="Feminin" className='genre'
                    labelPlacement="end" // Positionne le label à droite du bouton radio
                    style={{ marginRight: 0 }} // Supprime l'espacement à droite
                />
                <FormControlLabel 
                    value="masuclin" 
                    control={<Radio />} 
                    label="Masculin"  className='genre'
                    labelPlacement="end" // Positionne le label à droite du bouton radio
                    style={{ marginRight: 0 }} // Supprime l'espacement à droite
                />
            </RadioGroup>
        </FormControl>
  );
}
