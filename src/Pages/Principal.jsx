// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './principal.css';
import ImageButton from '../button'; // Importando o componente ImageButton
import Presentes from '../Pages/Presentes';
import salaoImage from '../assets/salao.jpg';
import pinImg from '../assets/pin.png'
import calcadoImg from '../assets/calcado.png'
import roupasDom from '../assets/conjunto.png'
import pixImg from '../assets/pix.png'



const Principal = () => {
  const location = useLocation();
  const path = location.pathname;


    const gifts = [
      {
        image: roupasDom,
        title: 'Roupas',
        description: 'Tamanho: 1 ano',
        link: 'https://www.google.com/search?q=roupas+infantil&oq=roupas+infantil&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE2NzlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'
      },
      {
        image: calcadoImg,
        title: 'Calçados',
        description: 'Tamanho: 23/24.',
        link: 'https://www.google.com/search?q=cal%C3%A7ados+infantil&sca_esv=e1d839af44a7b9af&sxsrf=ADLYWIIT-2gr74MpBj1otdK4jJdtzlxBnA%3A1720041292495&ei=TL-FZqD1HeDC5OUP5OWMkAI&oq=cal%C3%A7ados+infan&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2NhbMOnYWRvcyBpbmZhbioCCAAyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESKQTUABYug1wAHgBkAEAmAGxAaABuw6qAQQwLjE0uAEDyAEA-AEBmAIOoAKgD8ICChAjGIAEGCcYigXCAgQQIxgnwgIQEC4YgAQY0QMYQxjHARiKBcICChAAGIAEGEMYigXCAhAQABiABBixAxhDGIMBGIoFwgINEAAYgAQYsQMYQxiKBcICCxAAGIAEGLEDGMkDwgIIEAAYgAQYsQPCAgsQABiABBiSAxiKBcICERAuGIAEGLEDGNEDGIMBGMcBmAMAkgcEMC4xNKAH1WY&sclient=gws-wiz-serp'
      }, 
      {
        image: pixImg,
        title: 'PIX',
        description: 'Não sabe o que comprar ?! envia o Pix pra mamãe e pro Papai. Chave Pix: 03414916320 - Caixa Econômica Federal - Diene Carvalho',
        link: ''
      },     
      // Adicione mais presentes conforme necessário
    ];
  

  let content;

  switch (path) {
    case '/festa':
      content = (
        <div>
          <p>Olá, <strong>querido amigo!</strong></p>
          <p>
            Você está convidado(a) para uma aventura incrível no mundo <span className="highlight">Safari do DOM</span>! Estamos comemorando o 1º ano do nosso pequeno, Dom, e seria uma honra ter você conosco nesse dia especial.
          </p>
          <strong><p>Data: 11 de Novembro de 2024</p></strong>
          <strong><p>Horário: 17:30h</p></strong>
          <p>Venha preparado(a) para um dia cheio de diversão, alegria e muitas surpresas! Esperamos encontrar você lá para tornar este dia ainda mais inovador.</p>
          <p>Confirme sua presença lá no botãozinho na página inicial!</p>
          <p>Com carinho,</p>
          <p>Papai e Mamãe do Dom<span className="highlight">❤</span></p>
        </div>
      );
      break;
    case '/local':
      content = (
        <div>
          <p>A Festa será realizada no salão:</p>
          <h1>À Confirmar...</h1>
          <h3>Festas e Eventos</h3>
          <img id='img' src={salaoImage} alt="" />
          <br />
          <br />
          <p><strong>Clique no mapa abaixo e aperte os cintos!</strong></p>
          <a href="https://maps.app.goo.gl/8s8AcAKtMiFomo3B7" target="_blank" rel="noopener noreferrer">
            <img id='pin' src={pinImg} alt="Pin" />
          </a>
          <p>Localizado na Rua ... - Bairro - Estado</p>
        </div>
      );        
      break;
      case '/presentes':
        content = <Presentes gifts={gifts} />;
        break;
    default:
      content = <div>Bem-vindo!</div>;
  }

  return (
    <div className="backPrincipal">
      <div className='section'>
        {content}
        <ImageButton text='Voltar' imageType='vermelho' routeUsed='/' />        
      </div>
    </div>
  );
};

export default Principal;



