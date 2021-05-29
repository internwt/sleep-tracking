import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import TableGrid from './TableGrid'
import View from './View'
import MyResponsiveBump from '../Components/MyResponsiveAreaBump'
import Header from '../Components/Header'


const Home = () => {
    return (
        <div style={{ height: 150 }}>
            <Header />
            <Sidebar />
            <Switch>
                <Route path='/' exact component={MyResponsiveBump} />
                <Route path='/grid' exact component={TableGrid} />
                <Route path='/view' exact component={View} />
            </Switch>
        </div>
    )
}

export default Home
