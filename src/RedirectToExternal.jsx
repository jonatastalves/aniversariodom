import React, { useEffect } from 'react';

const RedirectToExternal = ({ url }) => {
  useEffect(() => {
    window.location.href = url; // Redireciona para o link externo
  }, [url]);

  return null; // Não renderiza nada
};

export default RedirectToExternal;
