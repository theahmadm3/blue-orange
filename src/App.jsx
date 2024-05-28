import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect } from 'react';

function App() {

  const location = useLocation()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange(); // Run on initial load
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location]);


  return (
    <div className='flex flex-column justify-between vh-100 w-100 overflow-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
