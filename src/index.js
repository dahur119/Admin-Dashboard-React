import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {contextProvider} from './context/ContextProvider'


ReactDOM.render(
    <contextProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>

    </contextProvider>, document.getElementById('root'));
