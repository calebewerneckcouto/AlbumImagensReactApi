import React from 'react'

export const FotoAmpliada = ({ foto, setFotoAmpliada }) => {
  return (
    <div className='foto-ampliada-backdrop' onClick={() => setFotoAmpliada(null)}>
      <div className='foto-ampliada-container'>
        <img src={foto.urls.regular} alt={foto.alt_description} />
      </div>
    </div>
  )
}

