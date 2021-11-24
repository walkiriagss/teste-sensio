import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';
import './NewCostumer.css'
import MaskedInput from './MaskedInput';

export default function NewCustomers() {
    const [cnpj, setCnpj] = useState('');
    console.log(cnpj)
  return ( 
    <Paper sx={{ width: '100%', overflow: 'hidden'}}>
      <Navbar/>
      <Container maxWidth="lg" sx={{bgcolor: 'white'}} >
        <Typography variant="h4" gutterBottom component="div" sx={{marginTop:"100px" , color:"#4F4F4F"}}>
            Novo Cliente
        </Typography>
        <Container maxWidth="lg" sx={{bgcolor: '#D3D3D3', height:'100px', display:'flex', justifyContent:'space-between', alignItems:'center'}} >
            <div className="input-container">
                <MaskedInput 
                    className="input"
                    value={cnpj} 
                    onChange={(event) => setCnpj(event.target.value)}
                />
                <label className="label" for="name">CNPJ</label>
            </div>
            <Button variant="contained">Buscar</Button>
        </Container>
      </Container>
    </Paper>
  );
}