import React from 'react'
import { ClockCounterClockwise, Gear, List, Plus, Question } from 'phosphor-react'

const Sidebar = () => {

    return (
        <aside className='sidebar-styled'>
            <div>
                <List weight='bold' size={20} />
                <button><Plus weight='bold' size={20} />Nuevo chat</button>
            </div>
            <div className='sidebar-bottom'>
                <div><Question weight='bold' size={20} />Ayuda</div>
                <div><ClockCounterClockwise weight='bold' size={20} />Actividad</div>
                <div><Gear weight='bold' size={20} />Configuración</div>
                <p>Code by @nilsondream</p>
            </div>
        </aside>
    )
}

export default Sidebar