// eslint-disable-next-line no-unused-vars
import React from 'react';
import VideoBackground from './VideoBackground';
import ImageButton from './button'; // Importando o componente ImageButton
import './home.css';

function Home() {
   

    return (
        <>
            <div className='videoaq'><VideoBackground /></div>
            <div className='buttonaqui'>
                <ImageButton text='A Festa' imageType='azul' routeUsed='/festa'  />
                <ImageButton text='Localização' imageType='azul' routeUsed='/local'  />
                <ImageButton text='Sugestão de Presentes' imageType='azul' routeUsed='/presentes'  />
                <ImageButton text='Confirmar Presença' imageType='vermelho' routeUsed='/confirmar'  />
            </div>
        </>
    );
}

export default Home;
