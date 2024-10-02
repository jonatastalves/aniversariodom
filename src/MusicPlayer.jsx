// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from 'react';
import audioSrc from './assets/safari.mp3';
import './MusicPlayer.css'; // Arquivo de estilos CSS (opcional)
import Button from './button';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const playerRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    if (playerRef.current) {
      playerRef.current.style.display = 'none';
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.style.display = 'none';
      }
    }, 8000); // Esconde após 8 segundos

    return () => clearTimeout(timer); // Limpa o timer caso o componente seja desmontado
  }, []); // Executa o efeito apenas uma vez ao montar o componente

  return (
    <div id='button1' onClick={handlePlay} className="music-player" ref={playerRef}>
      <Button text="Vamos nessa!" imageType='vermelho' />
      <audio ref={audioRef} src={audioSrc} />
      {/* Outros componentes ou informações do seu player */}
    </div>
  );
};

export default MusicPlayer;
