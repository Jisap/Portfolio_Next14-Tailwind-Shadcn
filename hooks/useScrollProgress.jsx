import React, { useState, useEffect } from 'react'

const useScrollProgress = () => {

  const [completion, setCompletion] = useState();

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;                                // Posición actual del scroll
      const scrollHeight = document.body.scrollHeight - window.innerHeight   // Altura máxima que se puede desplazar verticalmente sin ver mas contenido nuevo
                                                                             // Altura del body - Altura visible en la ventana del navegador  
      if(scrollHeight){
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100) // Cálculo del progreso del scroll como % -> completion
      }                                                                        // Cuanto supone la altura actual entre el máximo que se puede desplazar 
    };
    
    window.addEventListener('scroll', updateScrollCompletion);

    return ()=> window.removeEventListener('scroll', updateScrollCompletion)
  },[])
  return completion
}

export default useScrollProgress