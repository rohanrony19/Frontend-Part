import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from './Bootstrap.jsx';
import GridComplexExample from './Form.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Bootstrap/>
    <GridComplexExample/>
  </StrictMode>,
)
