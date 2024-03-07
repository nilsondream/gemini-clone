import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import { CodeSimple, Lightbulb, Lightning, PencilSimple } from 'phosphor-react'

const Home = () => {
    return (
        <div className='home-styled'>
            <Navbar />
            <div className='content'>
                <div className='title'>
                    <h1>Hola Nilson</h1>
                    <h2>¿En qué puedo ayudarte hoy?</h2>
                </div>
                <div className='grid'>
                    <div className='item'>
                        <p>Ideas de nombres</p>
                        <span><PencilSimple weight='bold' size={25} /></span>
                    </div>
                    <div className='item'>
                        <p>Cómo funciona algo</p>
                        <span><Lightbulb weight='bold' size={25} /></span>
                    </div>
                    <div className='item'>
                        <p>Consejos de viaje</p>
                        <span><Lightning weight='bold' size={25} /></span>
                    </div>
                    <div className='item'>
                        <p>Fetch en React Js</p>
                        <span><CodeSimple weight='bold' size={25} /></span>
                    </div>
                </div>
            </div>
            <Search />
        </div>
    )
}

export default Home