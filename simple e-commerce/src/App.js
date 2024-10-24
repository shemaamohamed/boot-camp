import 'bootstrap/dist/css/bootstrap.min.css';
import  Navv  from './components/Navv';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import Cardspage from './pages/Cardspage';
import { Provider } from 'react-redux';
import store from './store/redux-store';



function App() {
  
  
  return (
    <Provider store={store}>

    <BrowserRouter>
          <Navv/>
          <div className='App'>
            <Container>
               <Routes>
                  <Route path='/' element={<Cardspage/>}/>
                </Routes>
            </Container>
            <Toaster/>
          </div>
    </BrowserRouter>
    </Provider>

  );
}

export default App;
