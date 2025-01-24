import { createRoot } from 'react-dom/client';
import HomePage from './comp/Home';
import Nav from './comp/Nav';
import './style.css';


const rootElement = document.getElementById('root');
const App = () => (
  <HomePage />
);

if (rootElement) {

    const root = createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("Root element not found");
}
