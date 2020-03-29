import React from 'react'
import OmMeg from './sider/OmMeg'
import Artikler from './sider/Artikler'
import Prosjekter from './sider/Prosjekter'
import Startside from './sider/Startside'
import Yndlingsfakta from './sider/artikler/Yndlingsfakta'
import { Switch, Route } from 'react-router-dom'

import bakgrunnBilde from '../bilder/bak12-comp.jpg'
import profilBilde from '../bilder/profil.jpg'



const Innhold = () => {
    return (
        <Switch>
            <Route
                exact path='/'
                render={() => <Startside forsideBakgrunn={bakgrunnBilde} isAuthed={true} />}>
            </Route>
            <Route
                exact path='/om-meg'
                render={() => <OmMeg profilBilde={profilBilde} isAuthed={true}/>}>
            </Route>
            <Route
                exact path='/artikler'
                render={() => <Artikler isAuthed={true}/>}>
            </Route>
            <Route exact path='/prosjekter' component={Prosjekter}></Route>
            <Route exact path='/artikler/mine-yndlingsfakta-om-universet' component={Yndlingsfakta}></Route>
            <Route component={Startside}></Route>
        </Switch>
    )
}

export default Innhold
