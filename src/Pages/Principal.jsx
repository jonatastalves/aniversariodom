// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './principal.css';
import ImageButton from '../button'; // Importando o componente ImageButton
import Presentes from '../Pages/Presentes';
import salaoImage from '../assets/salao.jpg';
import pinImg from '../assets/pin.png'
import calcadoImg from '../assets/calcado.png'
import brinquedoAslam from '../assets/brinquedos.png'
import roupasAslam from '../assets/conjunto.png'
import carroNovo from '../assets/carronovo.png'
import iphoneNovo from '../assets/iphone15.png'
import maldivasViagem from '../assets/maldivas.png'
import play5 from '../assets/play5.png'
import siliconeMae from '../assets/silicone.png'

const Principal = () => {
  const location = useLocation();
  const path = location.pathname;


    const gifts = [
      {
        image: roupasAslam,
        title: 'Roupas',
        description: 'Tamanho: 3 anos',
        link: 'https://www.google.com/search?q=roupas+infantil&oq=roupas+infantil&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE2NzlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'
      },
      {
        image: calcadoImg,
        title: 'Calçados',
        description: 'Tamanho: 23/24.',
        link: 'https://www.google.com/search?q=cal%C3%A7ados+infantil&sca_esv=e1d839af44a7b9af&sxsrf=ADLYWIIT-2gr74MpBj1otdK4jJdtzlxBnA%3A1720041292495&ei=TL-FZqD1HeDC5OUP5OWMkAI&oq=cal%C3%A7ados+infan&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2NhbMOnYWRvcyBpbmZhbioCCAAyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESKQTUABYug1wAHgBkAEAmAGxAaABuw6qAQQwLjE0uAEDyAEA-AEBmAIOoAKgD8ICChAjGIAEGCcYigXCAgQQIxgnwgIQEC4YgAQY0QMYQxjHARiKBcICChAAGIAEGEMYigXCAhAQABiABBixAxhDGIMBGIoFwgINEAAYgAQYsQMYQxiKBcICCxAAGIAEGLEDGMkDwgIIEAAYgAQYsQPCAgsQABiABBiSAxiKBcICERAuGIAEGLEDGNEDGIMBGMcBmAMAkgcEMC4xNKAH1WY&sclient=gws-wiz-serp'
      },
      {
        image: brinquedoAslam,
        title: 'Brinquedos',
        description: 'Qualquer brinquedo é bem vindo',
        link: 'https://www.rihappy.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=[INST]Ri_Happy_Sul_e_Sudeste&gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXBXcrLwrJBcWNb3uc2J5pNIq807BhD1sOLuAQdjjEU9KDKLEqM41IxoCChsQAvD_BwE'
      },
      {
        image: siliconeMae,
        title: 'Silicone',
        description: 'Pra mamãe ficar com alto estima e nao brigar com o Aslam',
        link: 'https://lp.ciadomedico.com.br/plastica-de-mama/?utm_source=google&utm_medium=rede_de_pesquisa&utm_campaign=protese_mamaria&utm_id=cte&utm_term=Protese%20silicone&gad_source=1&gclid=Cj0KCQjw7ZO0BhDYARIsAFttkCi741LW_U4npuQwRtA1HdNgTGVwgP2wyLZE9EUD7QRgQeIS5xIFxdcaAltAEALw_wcB'
      },
      {
        image: carroNovo,
        title: 'Toro',
        description: 'Pro papai carregar o Aslam com mais conforto e segurança',
        link: 'https://toro.fiat.com.br/'
      },
      {
        image: iphoneNovo,
        title: 'Iphone 15',
        description: 'Aproveitar a beleza do Aslam e tirar fotos com qualidade!',
        link: 'https://www.apple.com/br/iphone-15/'
      },
      {
        image: maldivasViagem,
        title: 'Maldivas',
        description: 'Curtir as férias em grande estilo com a família por sua conta',
        link: 'https://www.hurb.com/br/packages/ilhas-maldivas-passagem-aerea-hospedagem/1091929'
      },
      {
        image: play5,
        title: 'PS5',
        description: 'Para criar grandes memórias com o papai jogando',
        link: 'https://www.amazon.com.br/Console-PlayStation%C2%AE5-Marvels-Spider-Man-Limited/dp/B0CCXC3XBQ/ref=asc_df_B0CCXC3XBQ/?tag=googleshopp00-20&linkCode=df0&hvadid=647511901425&hvpos=&hvnetw=g&hvrand=10905143633388456307&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100789&hvtargid=pla-2199567841656&psc=1&mcid=c3f366cb4f3f36c291cdcc22959c8160'
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
            Você está convidado(a) para uma aventura incrível no <span className="highlight">Aranhaverso do Aslam</span>! Estamos celebrando o 3º ano do nosso pequeno herói, Aslam, e seria uma honra ter você conosco nesse dia especial.
          </p>
          <strong><p>Data: 10 de Agosto de 2024</p></strong>
          <strong><p>Horário: 17h</p></strong>
          <p>Venha preparado(a) para um dia cheio de diversão, alegria e muitas surpresas! Esperamos encontrar você lá para tornar este dia ainda mais memorável.</p>
          <p>Confirme sua presença lá no botãozinho na página inicial!</p>
          <p>Com carinho,</p>
          <p>Papai e Mamãe aranha! 🕸<span className="highlight">❤</span>🕷</p>
        </div>
      );
      break;
    case '/local':
      content = (
        <div>
          <p>A Festa será realizada no salão:</p>
          <h1>BRUCY'S</h1>
          <h3>Festas e Eventos Almeidenses</h3>
          <img id='img' src={salaoImage} alt="" />
          <br />
          <br />
          <p><strong>Clique no mapa abaixo e aperte os cintos!</strong></p>
          <a href="https://maps.app.goo.gl/8s8AcAKtMiFomo3B7" target="_blank" rel="noopener noreferrer">
            <img id='pin' src={pinImg} alt="Pin" />
          </a>
          <p>Localizado na Rua do Queimado, 289 - Bento Ribeiro - RJ</p>
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



