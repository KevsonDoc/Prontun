import React from 'react';
import Menu from '../../components/Menu';
import Video from '../../assets/Video/video.mp4';
import './style.css';

function Err() {
  return (
      <>
        <Menu />
        <div className="container_404">
          <h1 className="title_1">Erro 404</h1>
          <h1 className="title_2">Eu conseguir encontrar o que você procura</h1>
          <video autoPlay className="bg_video" loop>
	          <source src={Video} type="video/mp4" />
          </video>
        </div>
      </>
  );
}

export default Err;