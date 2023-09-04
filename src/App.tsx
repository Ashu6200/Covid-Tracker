import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Map from './pages/Map';
import { menuItems } from './assets';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <main className='w-full h-screen relative'>
        <div className='h-full bg-black p-8 flex gap-8 max-[480px]:p-0 max-[480px]:block'>
          <Routes>
            <Route path='/' element={<Map />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <div className='sticky bottom-0 bg-black max-[480px]:flex justify-around p-4 hidden'>
            {menuItems.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  to={`${item.link}`}
                  style={({ isActive }) => {
                    return {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: isActive ? 'white' : '#19a7ce',
                      fontSize: '16px',
                    };
                  }}
                >
                  {item.icon}
                  <p>{item.title}</p>
                </NavLink>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
