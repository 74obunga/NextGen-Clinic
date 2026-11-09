import { createRoot } from 'react-dom/client';
import { ClinicSite } from './ClinicSite';
import './clinic-site.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find the clinic site root.');
}

createRoot(rootElement).render(<ClinicSite />);
