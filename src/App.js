import React from 'react';
import Navbar from './komponenter/deler/Navbar'
import Innhold from './komponenter/Innhold'
import { BrowserRouter } from 'react-router-dom';
import './css/hovedstiler.css'

export default function App() {

    return (
      <>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar/>
            <Innhold/>
          </BrowserRouter>
      </>
    )
}
