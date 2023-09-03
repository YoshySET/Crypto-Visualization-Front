import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCalculate = () => {
    const inputValueNumber = parseFloat(inputValue);
    if (!isNaN(inputValueNumber)) {
      setResult(inputValueNumber * 2);
    } else {
      setResult(null);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Number Doubler App
      </Typography>
      <TextField
        label="Enter a number"
        variant="outlined"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleCalculate}>
        Calculate Double
      </Button>
      {result !== null && (
        <Typography variant="h6" style={{ marginTop: '1rem' }}>
          Result: {result}
        </Typography>
      )}
    </Container>
  );
}
