import React from 'react';
export default function ItemDetail({ item, onBack }) {
  return (
    <div>
      <button onClick={onBack} className="mb-4 text-blue-600">&larr; Volver</button>
      <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
      {/* Aquí sección de imágenes, descripción, editor y botón Generar Expediente */}
    </div>
  );
}
