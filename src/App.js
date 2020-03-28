import React from 'react';
import Navbar from './komponenter/deler/Navbar'
import Innhold from './komponenter/Innhold'
import ScrollToTop from './komponenter/deler/ScrollToTop'
import { BrowserRouter } from 'react-router-dom';
import './css/hovedstiler.css'

import bakgrunn from './bilder/bak12.jpg'

export default function App() {

    return (
      <>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <Navbar/>
            <Innhold
                forsideBakgrunn={bakgrunn}
            />
          </BrowserRouter>
      </>
    )
}
