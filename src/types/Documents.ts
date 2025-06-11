export type DocumentoTipo = 'PDF' | 'Word' | 'Imagen';
export type DocumentoEstado = 'Activo' | 'Inactivo';
export type Categoria = 'Administrativo' | 'Legal' | 'Financiero';


export type Documento = {
  id: string;
  nombre: string;
  tipo: DocumentoTipo;
  estado: DocumentoEstado;
  descripcion: string;
  categoria: Categoria;
  subcategoria?: string;
  fechaSubida: string; // ISO date string
};