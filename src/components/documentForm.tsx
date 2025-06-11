import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import type { Documento } from '../types/Documents';
import { categoriasSubcategorias } from '../utils/categorias';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (doc: Documento) => void;
  initialData?: Documento | null;
}

const DocumentFormModal = ({ open, onClose, onSave, initialData }: Props) => {
  const [form, setForm] = useState<Documento>({
    id: uuidv4(),
    nombre: '',
    tipo: 'PDF',
    fechaSubida: new Date().toISOString(),
    estado: 'Activo',
    descripcion: '',
    categoria: 'Administrativo',
    subcategoria: '',
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
       setForm({
      id: uuidv4(),
      nombre: '',
      tipo: 'PDF',
      fechaSubida: new Date().toISOString(),
      estado: 'Activo',
      descripcion: '',
      categoria: 'Administrativo',
      subcategoria: '',
    });
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name!]: value,
      ...(name === 'categoria' ? { subcategoria: '' } : {}),
    }));
  };


const handleSelectChange = (e: any) => {
  const { name, value } = e.target;
  setForm(prev => ({
    ...prev,
    [name]: value,
    ...(name === 'categoria' ? { subcategoria: '' } : {}),
  }));
};

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{initialData ? 'Editar Documento' : 'Nuevo Documento'}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              label="Nombre"
              fullWidth
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Tipo</InputLabel>
              <Select name="tipo" value={form.tipo} onChange={handleSelectChange} label="Tipo">
                {['PDF', 'Word', 'Imagen'].map(tipo => (
                  <MenuItem key={tipo} value={tipo}>
                    {tipo}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Estado</InputLabel>
              <Select name="estado" value={form.estado} onChange={handleSelectChange} label="Estado">
                {['Activo', 'Inactivo'].map(est => (
                  <MenuItem key={est} value={est}>
                    {est}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Categoría</InputLabel>
              <Select name="categoria" value={form.categoria} onChange={handleSelectChange} label="Categoría">
                {Object.keys(categoriasSubcategorias).map(cat => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth sx={{ minWidth: 50 }}>
              <InputLabel>Subcategoría</InputLabel>
              <Select
                name="subcategoria"
                value={form.subcategoria}
                onChange={handleSelectChange}
                label="Subcategoría"
              >
                {categoriasSubcategorias[form.categoria]?.map(sub => (
                  <MenuItem key={sub} value={sub}>
                    {sub}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Descripción"
              fullWidth
              name="descripcion"
              multiline
              rows={3}
              value={form.descripcion}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DocumentFormModal;
