import './App.css'
import LoginPage from './components/LOginPage'
import RegisterPage from './components/RegisterPage'
import {BrowserRouter as browser-router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'

function App() {
    return (
        <>
            <browser-router>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/register' element={<RegisterPage/>}/>
                </Routes>
            </browser-router>
        </>
    )
}

export default App
