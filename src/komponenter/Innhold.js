import React from 'react'
import OmMeg from './sider/OmMeg'
import Artikler from './sider/Artikler'
import Prosjekter from './sider/Prosjekter'
import Startside from './sider/Startside'
import Yndlingsfakta from './sider/artikler/Yndlingsfakta'
import { Switch, Route } from 'react-router-dom'


export default function Innhold(){
    return (
        <Switch>
            <Route exact path='/' component={Startside}></Route>
            <Route exact path='/om-meg' component={OmMeg}></Route>
            <Route exact path='/artikler' component={Artikler}></Route>
            <Route exact path='/prosjekter' component={Prosjekter}></Route>

            <Route exact path='/artikler/mine-yndlingsfakta-om-universet' component={Yndlingsfakta}></Route>
        </Switch>
    )
}
