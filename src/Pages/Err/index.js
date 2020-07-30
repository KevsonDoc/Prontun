import React from 'react';
import Menu from '../../components/Menu';
import Video from '../../assets/Video/video.mp4';

function Err() {
  return (
      <>
        <Menu />
        <video className="bg_video" autoplay loop>
	        <source src={Video} type="video/mp4" />
        </video>	
      </>
  );
}

export default Err;