import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';

function App() {
  return <div className="App">
      <header className="App-header"></header>
        <BrowserRouter>
        <div>
            <Routes>    
            <Route path='/signin' element= {<SignIn/>} />
            <Route path='/signup' element = {<SignUp/>} />
            <Route path='/' element= {<Home/>} />
          </Routes>
        </div>
        </BrowserRouter>
    </div>
}

export default App;
