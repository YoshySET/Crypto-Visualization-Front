import axios from "axios";

import {useState} from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {MenuItem, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Home() {
  const [result, setResult] = useState<number | null>(null);

  const [cryptoName, setCryptoName] = useState('');

  const handleChange = (event: any) => {
    setCryptoName(event.target.value as string);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get("/api/get/crypto?param1=" + cryptoName);
      setResult(response.data.content);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        カイドキクリプト
      </Typography>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Crypto</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cryptoName}
            label="Crypto"
            onChange={handleChange}
          >
            <MenuItem value={"Bitcoin"}>
              Bitcoin
            </MenuItem>
            <MenuItem value={"Ethereum"}>
              Ethereum
            </MenuItem>
            <MenuItem value={"Dogecoin"}>
              Dogecoin
            </MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          調査開始
        </Button>
      </div>
      <div>
        <FormControl fullWidth>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            value={cryptoName}
            onChange={handleChange}
          />
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          ポジティブ度計測
        </Button>

        {result && (
          <Typography variant="h6">
            ポジティブ度: {result}%
          </Typography>
        )}
      </div>
    </Container>
  );
}
