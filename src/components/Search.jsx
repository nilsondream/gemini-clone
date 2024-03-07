import { Image, Microphone } from 'phosphor-react'
import React from 'react'

const Search = () => {
    return (
        <div className='search-styled'>
            <div>
                <input autoFocus type="text" placeholder='Ingresa una instrucción aqui' />
                <Image weight='bold' size={25} />
                <Microphone weight='bold' size={25} />
            </div>
            <p>Es posible que Gemini muestre información imprecisa, incluidos datos sobre personas, por lo que debes verificar sus respuestas.</p>
        </div>
    )
}

export default Search