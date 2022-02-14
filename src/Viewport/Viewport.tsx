import React from 'react';
import { MainContainer } from './Viewport.styles';

const constraints = {
  audio: false,
  video: true,
}

const Viewport = () => {
  const handleSuccess = (stream: any) => {
    const video = document.querySelector('video');
    const videoTracks = stream.getVideoTracks();
    // console.log('Got stream with constraints:', constraints);
    // console.log(`Using video device: ${videoTracks[0].label}`);
    (window as any).stream = stream; // make variable available to browser console
    (video as any).srcObject = stream;
  };

  const init = async (e: any) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
      e.target.disabled = true;
    } catch (e) {
      // handleError(e);
    }
  }

  return (
    <MainContainer>
      <button onClick={init} id="showVideo">Open camera</button>
      <video id="gum-local" autoPlay playsInline />

      <div id="errorMsg" />
    </MainContainer>
  )

}
export { Viewport }