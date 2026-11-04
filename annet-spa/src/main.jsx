import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

// The build writes the page's HTML into #root so search engines can read it.
const root = document.getElementById('root')
if (root.hasChildNodes()) hydrateRoot(root, <App />)
else createRoot(root).render(<App />)
