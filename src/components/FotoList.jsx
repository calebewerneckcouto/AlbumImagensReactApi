import React from 'react'
import { Foto } from './Foto'


export const FotoList = ({ fotos,setFotoAmpliada }) => {
  return (
    <div className='album'>
      {fotos.map((foto) => ( 
        <Foto key={foto.id} dados={foto} setFotoAmpliada={setFotoAmpliada} />
      ))}

    </div>
  )
}
