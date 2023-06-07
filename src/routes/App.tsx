import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Main from '../pages/Main';
import Footer from '../components/basic/Footer/Footer';
import Header from '../components/basic/Header/Header';
import SectionDestinations from '../components/sections/SectionDestinations/SectionDestinations';
import SectionTours from '../components/sections/SectionTours/SectionTours';

function App() {
  return (
    <div className="App">
      {/* <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
           
          </Route>
        </Routes> */}
      <div className='page'>
        <Header />
        <main className='main-container'>
          <Main />
          <SectionDestinations />
          <SectionTours />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
