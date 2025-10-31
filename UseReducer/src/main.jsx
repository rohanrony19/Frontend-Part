import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import LazyLoading from './LazyLoading.jsx'
import UseApi from './UseApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <UseApi/>
    <LazyLoading/>
  </StrictMode>,
)
