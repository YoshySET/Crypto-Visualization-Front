import axios from "axios";

import {useState} from 'react';

import Dashboard from "../../components/Dashboard";


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
    <Dashboard/>
  );
}
