import {useEffect} from  'react';
import img2 from  '../images/2.webp';

function Pisc({ navigateTo }){
    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
        document.body.style.overflow = '';
    };

    useEffect(() => {
        disableScroll();
        return () => {
            enableScroll();
        };
    }, []);
    return(
        <>
        <section className="pics">
            <img src={img2} alt="" />
            <span className='save'>Save</span>
            <button className='more' onClick={()=>navigateTo('home')}>More pics</button>
        </section>
        </>
    )
}

export default Pisc;