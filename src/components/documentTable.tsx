import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import type { Documento } from '../types/Documents';
import type { FC } from 'react';
import { useState } from 'react';

interface Props { 
  documentos: Documento[];
  onEdit: (documento: Documento) => void;
  onDelete: (id: string) => void;
  }


  const DocumentTable: FC<Props> = ({ documentos, onEdit, onDelete }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const pagedDocs = documentos.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

   return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell>Subcategoría</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pagedDocs.map(doc => (
              <TableRow key={doc.id}>
                <TableCell>{doc.nombre}</TableCell>
                <TableCell>{doc.tipo}</TableCell>
                <TableCell>{doc.estado}</TableCell>
                <TableCell>{new Date(doc.fechaSubida).toLocaleDateString()}</TableCell>
                <TableCell>{doc.categoria}</TableCell>
                <TableCell>{doc.subcategoria}</TableCell>
                <TableCell>
                  <IconButton onClick={() => onEdit(doc)} color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => onDelete(doc.id)} color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {pagedDocs.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No hay documentos
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={documentos.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DocumentTable;