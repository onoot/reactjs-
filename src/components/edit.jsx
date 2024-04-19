import { useEffect, useRef } from 'react';
import cam from '../images/cam.png';
import img_icon from '../images/img.png';
import back from '../images/back.png';

function Edit({ navigateTo }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let intervalId;

    const toggleImages = () => {
      const imgBefore = container.querySelector('.img-before');
      const imgAfter = container.querySelector('.img-after');
      imgBefore.classList.toggle('hidden');
      imgAfter.classList.toggle('hidden');
    };
    intervalId = setInterval(toggleImages, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <article className="map map_svh">
      <button className="back" onClick={() => navigateTo('home')}>
        <img src={back} alt="" />
        <span>Go back</span>
      </button>
      <div ref={containerRef} className="img_edit image-container">
        <div className="image img-after hidden"></div>
        <div className="image2 img-before"></div>
      </div>
          <div className='features'>
              <button className='item_button' onClick={() => navigateTo('pics')}>
                  <img className='icon1' src={img_icon} alt="" />
                  <span>Choose photo from gallery</span>
              </button>
              <button className='item_button' onClick={() => navigateTo('pics')}>
                  <img className='icon' src={cam} alt="" />
                  <span>Take photo with camera</span>
              </button>
          </div>
    </article>
  );
}

export default Edit;