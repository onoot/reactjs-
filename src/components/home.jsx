import img from  '../images/1.webp';

function Home({ navigateTo, sign}){

  return (
    <article className="map map_bvh">
      <header>
        <span className="logo">
          OneAI
        </span>
        <button className="sign" onClick={()=> sign(true)}>
          Sign In
        </button>
      </header>
      <div className="item" onClick={() => navigateTo('edit')}>
        <img src={img} alt="logo" /> 
        <span>Lego</span>
      </div>
      <div className="item" onClick={() => navigateTo('edit')}>
        <img src={img} alt="logo" /> 
        <span>Lego</span>
      </div>
      <div className="bottom">
        <span>Get help at support@avgen.me</span>
        <span>Copyright © 2024 Mook Ltd. All rights reserved.</span>
      </div>
    </article>
  ) 
}

export default Home;
