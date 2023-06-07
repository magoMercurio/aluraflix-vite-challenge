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

  const rows = categorias.map(categoria => ({
    titulo: categoria.titulo,
    descripcion: categoria.descripcion,
    editar: 'editar',
    remover: 'remover'
  }))


  return (
    <TableContainer component={Paper} >
      <Table 
      sx={{ 
        minWidth: 650,
        backgroundColor: '#53585D',
        border: `4px solid #2A7AE4`,
        
      
      }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell align="left" sx={{ color: `#f5f5f5`, border: `4px solid #2A7AE4`}}>Nombre</TableCell>
            <TableCell align="left" sx={{ color: `#f5f5f5`, border: `4px solid #2A7AE4`}}>Descripción</TableCell>
            <TableCell align="left" sx={{ color: `#f5f5f5`, border: `4px solid #2A7AE4`}}>Editar</TableCell>
            <TableCell align="left" sx={{ color: `#f5f5f5`, border: `4px solid #2A7AE4`}}>Remover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.titulo}
              sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ color: `#f5f5f5`, borderBottom: `4px solid #000000e5`, borderRight: `4px solid #000000e5`  }}>{row.titulo}</TableCell>
              <TableCell align="left" sx={{ color: `#f5f5f5`, border: `4px solid #000000e5` }}>{row.descripcion}</TableCell>
              <TableCell align="left" sx={{ color: `#f5f5f5`, border: `4px solid #000000e5` }}>{row.editar}</TableCell>
              <TableCell align="left" sx={{ color: `#f5f5f5`, border: `4px solid #000000e5`, borderRight: `4px solid #2a7ae4` }}>{row.remover}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}