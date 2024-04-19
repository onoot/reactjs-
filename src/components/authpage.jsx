import {useEffect} from  'react';

function Auth({ sign }){
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
        <section className="auth_page">
            <button className="close" onClick={()=>sign(false)}>

            </button>
            <article className="auth_page_art">
                <input className="inp_auth" type="text" name="email" placeholder="Email"/>
                <input className="inp_auth" type="text" name="password" placeholder="Password"/>
                <button className="save1">
                    Sign in
                </button>
            </article>
        </section>
        </>
    )
}

export default Auth;