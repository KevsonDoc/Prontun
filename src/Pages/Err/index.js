import React from 'react';
import Menu from '../../components/Menu';
import Video from '../../assets/Video/video.mp4';
import './style.css';

function Err() {
  return (
      <>
        <Menu />
        <video id="bg" className="bg_video" src={Video} autoPlay loop muted></video>
        <div className="container_404">
          <h1 className="title_1">Erro 404
            <br/>
              Página não encontrada
            </h1>
        </div>
      </>
  );
}

export default Err;