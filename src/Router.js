import { Routes, Route } from 'react-router-dom'
import Evelyn from './pages/Evelyn/Evelyn'
import Home from './pages/Home/home'
import Videos from './pages/Videos/videos'
import Agendas from './pages/Agendas/agendas'

function AppRoutes(){
    return(
        <Routes>
            <Route path='' element={<Evelyn />}>
                <Route path='/' element={<Home />} />
                <Route path='/Videos' element={<Videos />} />
                <Route path='/Agendas' element={<Agendas />} />
            </Route>
      </Routes>
    )
}

export default AppRoutes