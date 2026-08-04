import { createRoot } from 'react-dom/client';

import App from './App';

import './index.css';

const searchParams = new URLSearchParams(window.location.search);
const spaPath = searchParams.get('spa');

if (spaPath && spaPath.startsWith('/')) {
  window.history.replaceState({}, '', spaPath);
}

createRoot(document.getElementById('root')!).render(<App />);
