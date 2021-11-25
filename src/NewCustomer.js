import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';
import './NewCostumer.css'
import MaskedInput from './MaskedInput';
import api from "./Services/Api.js";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function NewCustomers() {
    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [cnpj, setCnpj] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [nome, setNome] = useState('');
    const [razao, setRazao] = useState('');
    const [ativ, setAtiv] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
     
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const handleCloseError = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenError(false);
    };

    function buscaCnpj(){
      api
        .get("consultacpnj/"+cnpj)
        .then((response) =>{ setEmpresa(response.data);
        setOpen(true)  
        }, (error) => {setOpenError(true);
        });

        setNome(empresa!='' ? empresa.estabelecimento.nome_fantasia : "")
        setRazao(empresa!='' ? empresa.razao_social : "")
        setAtiv(empresa!='' ? empresa.estabelecimento.atividade_principal.descricao : "")
        setBairro(empresa!='' ? empresa.estabelecimento.bairro : "")
        setCidade(empresa!='' ? empresa.estabelecimento.cidade.nome : "")
        setEstado(empresa!='' ? empresa.estabelecimento.estado.sigla : "")
        setCep(empresa!='' ? empresa.estabelecimento.cep : "")
    };

    function save() {
      api
      .post('clientes', {
        cnpj: cnpj,
        nome: nome,
        razao: razao,
        atividade: ativ,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep
      })
      .then(res => {
        setOpen(false);
      }, (error) => {setOpenError(true);
      });
    };
    console.log(empresa)
  return ( 
    <Paper sx={{ width: '100%', overflow: 'hidden'}}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Sucesso!!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          Erro
        </Alert>
      </Snackbar>
      <Navbar/>
      <Container maxWidth="lg" sx={{paddingBottom:'30px', bgcolor: '#DCDCDC'}} >
        <Typography variant="h4" gutterBottom component="div" sx={{marginTop:"100px" , color:"#4F4F4F"}}>
            Novo Cliente
        </Typography>
        <Container maxWidth="lg" sx={{marginBottom:'20px', bgcolor: '#D3D3D3', height:'100px', display:'flex', justifyContent:'flexStart', alignItems:'center'}} >
            <div className="input-container">
                <MaskedInput 
                    className="input"
                    value={cnpj} 
                    onChange={(event) => setCnpj(event.target.value)}
                />
                <label className="label" for="name">CNPJ</label>
            </div>
            <button style={{height:'50px', width: '200px', borderWidth: '0px', backgroundColor:'blue', color:'white',fontSize:'20px'}} onClick={buscaCnpj}>Buscar</button>
            
          </Container>
          <Container> 
            <Typography variant="h6" gutterBottom component="div">
              Nome: {nome}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Razão Social: {razao}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Atividade primária: {ativ}
            </Typography>
            <Typography variant="h7" gutterBottom component="div">
              Endereço
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Bairro: { bairro}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Cidade: {  cidade}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Estado: { estado }
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              CEP: {cep}
            </Typography>
            <button onClick={save} style={{height:'50px', width: '200px', borderWidth: '0px', backgroundColor:'blue', color:'white',fontSize:'20px'}}>Adicionar Empresa</button>
            </Container>
        </Container>
    </Paper>
  );
}