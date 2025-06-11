import { useEffect, useState  } from 'react';
import type { Documento } from "../types/Documents";


const STORAGE_KEY = 'documentos';

export function useDocuments() {
  const [documentos, setDocumentos] = useState<Documento[]>([]);

  // Cargar desde Local Storage al iniciar
    useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setDocumentos(JSON.parse(data));
    }
    }, []);

    useEffect(() => {
    // Guardar en Local Storage al cambiar documentos
    localStorage.setItem(STORAGE_KEY, JSON.stringify(documentos));
    }, [documentos]);

    //crear
    const addDocumento = (document: Documento) => {
    setDocumentos((prev) => [...prev, document]);
    };

    //Editar
    const updateDocumento = (document: Documento) => {
    setDocumentos((prev =>
        prev.map( a => a.id === document.id ? document : a))
    );
    };

    // Eliminar
    const deleteDocumento = (id: string) => {
        setDocumentos(prev => prev.filter(d => d.id !== id));
    };

    // Filtrar por tipo/categoría/subcategoría
    const filterDocumentos = (filtros: {
        tipo?: string;
        categoria?: string;
        subcategoria?: string;
    }) => {
        return documentos.filter(doc => {
        return (
            (!filtros.tipo || doc.tipo === filtros.tipo) &&
            (!filtros.categoria || doc.categoria === filtros.categoria) &&
            (!filtros.subcategoria || doc.subcategoria === filtros.subcategoria)
        );
        });
    };

    return {
    documentos,
    addDocumento,
    updateDocumento,
    deleteDocumento,
    filterDocumentos,
  };
}