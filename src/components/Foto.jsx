import React from 'react'

export const Foto = ({ dados,setFotoAmpliada }) => {
    return (
        <div className='foto' onClick={()=> setFotoAmpliada(dados)}>
            <img src={dados.urls.small} alt={dados.alt_description} />
        </div>
    )
}
