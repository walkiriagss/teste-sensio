import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';
import api from "./Services/Api.js";

const columns = [

];

function createData(cnpj, razao, ativ, endereco) {
  return { cnpj, razao, ativ, endereco };
}



export default function Customers() {
  const [page, setPage] = React.useState(0);
  const [empresa, setEmpresa] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    api.get('clientes').then((response) => {
      setEmpresa(response.data)    
    });
  }, []);
  

  return (
   
    
    <Paper sx={{ width: '100%', overflow: 'hidden'}}>
      <Navbar/>
      <Container maxWidth="lg" sx={{bgcolor: 'white'}} >
      <Typography variant="h4" gutterBottom component="div" sx={{marginTop:"100px" , color:"#4F4F4F"}}>
        Lista de Clientes
      </Typography>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell
                  key="cnpj"
                  style={{ minWidth: 170, backgroundColor:"#B0C4DE", fontWeight:'bold' }}
                >
                 CNPJ
                </TableCell>
                <TableCell
                  key="nome"
                  style={{ minWidth: 170, backgroundColor:"#B0C4DE", fontWeight:'bold' }}
                >
                Nome
                </TableCell>
                <TableCell
                  key="razao"
                  style={{ minWidth: 170, backgroundColor:"#B0C4DE", fontWeight:'bold' }}
                >
                 Razão Social
                </TableCell>
                <TableCell
                  key="ativ"
                  style={{ minWidth: 170, backgroundColor:"#B0C4DE", fontWeight:'bold' }}
                >
                 Atividade Primária
                </TableCell>
                <TableCell
                  key="endereco"
                  style={{ minWidth: 170, backgroundColor:"#B0C4DE", fontWeight:'bold' }}
                >
                 Endereço
                </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {empresa
              .map((row) => {
                var i;
                return (
                  <TableRow >
                      <TableCell
                        id="cnpj"
                        style={{ minWidth: 170}}
                      >
                      {row.cnpj}
                      </TableCell>

                      <TableCell
                        id="nome"
                        style={{ minWidth: 170}}
                      >
                      {row.nome}
                      </TableCell>
                      <TableCell
                        id="razao"
                        style={{ minWidth: 170}}
                      >
                      {row.razao}
                      </TableCell>
                      <TableCell
                        id="ativ"
                        style={{ minWidth: 170}}
                      >
                      {row.atividade}
                      </TableCell>
                      <TableCell
                        id="endereco"
                        style={{ minWidth: 170}}
                      >
                      {row.bairro}
                      </TableCell>

                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={empresa.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Container>
    </Paper>
  );
}