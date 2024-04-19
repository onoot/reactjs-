import { useState, useCallback } from 'react';
import './App.css';
import Edit from './components/edit';
import Auth from './components/authpage';
import Home from './components/home';
import Pics from './components/pics';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [signIn, setsignIn] = useState(false);

  const navigateTo = useCallback((page) => {
    setCurrentPage(page);
  }, []);

 const sign = useCallback((signIn) => {
    setsignIn(signIn);
  }, []);

  let currentComponent;

  switch (currentPage) {
    case 'edit':
      currentComponent = <Edit navigateTo={navigateTo} />;
      break;
    case 'pics':
      currentComponent = <Pics navigateTo={navigateTo} />;
      break;
    case 'home':
      currentComponent = <Home navigateTo={navigateTo} sign={sign}/>;
      break;
    default:
      break;
  }

  return (
    <>
      {signIn && <Auth sign={sign}/>}
      {currentComponent}
    </>
  );
}

export default App;
