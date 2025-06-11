import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { categoriasSubcategorias } from '../utils/categorias';
import type { FC } from 'react';

interface Props {
  tipo: string;
  categoria: string;
  subcategoria: string;
  onFilterChange: (field: string, value: string) => void;
}

const DocumentFilters: FC<Props> = ({
  tipo,
  categoria,
  subcategoria,
  onFilterChange,
}) => {
  return (
    <Grid container spacing={2} sx={{ mb: 3, alignItems: 'center' }}>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth sx={{ minWidth: 200 }}>
          <InputLabel>Tipo</InputLabel>
          <Select
            value={tipo}
            label="Tipo"
            onChange={(e) => onFilterChange('tipo', e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            {['PDF', 'Word', 'Imagen'].map((t) => (
              <MenuItem key={t} value={t}>
                {t}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <FormControl fullWidth sx={{ minWidth: 200 }}>
          <InputLabel>Categoría</InputLabel>
          <Select
            value={categoria}
            label="Categoría"
            onChange={(e) => onFilterChange('categoria', e.target.value)}
          >
            <MenuItem value="">Todas</MenuItem>
            {Object.keys(categoriasSubcategorias).map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <FormControl fullWidth sx={{ minWidth: 200 }}>
          <InputLabel>Subcategoría</InputLabel>
          <Select
            value={subcategoria}
            label="Subcategoría"
            onChange={(e) => onFilterChange('subcategoria', e.target.value)}
            disabled={!categoria}
          >
            <MenuItem value="">Todas</MenuItem>
            {(categoriasSubcategorias[categoria] || []).map((sub) => (
              <MenuItem key={sub} value={sub}>
                {sub}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default DocumentFilters;
