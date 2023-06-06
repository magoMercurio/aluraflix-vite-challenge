// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function TablaCategoria(props) {

  const { categorias } = props

  function createData(titulo, descripcion, editar, remover) {
    return { titulo, descripcion, editar, remover };
  } 
  
  
  const rows = categorias.map(categoria => createData(categoria.titulo, categoria.descripcion, 'editar', 'remover'));


  return (
    <TableContainer component={Paper} >
      <Table 
      sx={{ 
        minWidth: 650,
        backgroundColor: '#53585D',
      
      }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">Descripción</TableCell>
            <TableCell align="left">Editar</TableCell>
            <TableCell align="left">Remover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.titulo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.titulo}</TableCell>
              <TableCell align="left">{row.descripcion}</TableCell>
              <TableCell align="left">{row.editar}</TableCell>
              <TableCell align="left">{row.remover}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}