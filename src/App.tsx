import { useState } from 'react';
import { useDocuments } from './hooks/useDocuments';
import DocumentTable from './components/documentTable';
import DocumentFormModal from './components/documentForm';
import DocumentFilters from './components/documentFilters';

import type { Documento } from './types/Documents';
import { Button } from '@mui/material';

function App() {
  const { documentos, addDocumento, updateDocumento, deleteDocumento, filterDocumentos } = useDocuments();
  const [openModal, setOpenModal] = useState(false);
  const [docToEdit, setDocToEdit] = useState<Documento | null>(null);


   const [filters, setFilters] = useState({
    tipo: '',
    categoria: '',
    subcategoria: '',
  });

  const handleOpen = () => {
    setDocToEdit(null);
    setOpenModal(true);
  };

  const handleEdit = (doc: Documento) => {
    setDocToEdit(doc);
    setOpenModal(true);
  };

  const handleSave = (doc: Documento) => {
    if (documentos.find(d => d.id === doc.id)) {
      updateDocumento(doc);
    } else {
      addDocumento(doc);
    }
  };

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'categoria' ? { subcategoria: '' } : {}),
    }));
  };

  const documentosFiltrados = filterDocumentos(filters);

  return (
    <div style={{ padding: '2rem',alignItems: 'center' }}>
      <h1>Gestión Documental</h1>

      <Button variant="contained" onClick={handleOpen} sx={{ mb: 2 }}>
        Nuevo Documento
      </Button>

      <DocumentFilters
        tipo={filters.tipo}
        categoria={filters.categoria}
        subcategoria={filters.subcategoria}
        onFilterChange={handleFilterChange}
      />

      <DocumentTable
        documentos={documentosFiltrados}
        onEdit={handleEdit}
        onDelete={deleteDocumento}
      />

      <DocumentFormModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
        initialData={docToEdit}
      />
    </div>
  );
}
export default App
