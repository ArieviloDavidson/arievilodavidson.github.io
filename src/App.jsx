import { useState } from 'react';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import PythonProjects from './pages/PythonProjects/PythonProjects';
import WebProjects from './pages/WebProjects/WebProjects';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  // Estado que controla qual aba está ativa
  const [activeTab, setActiveTab] = useState('sobre');

  return (
    <div className="app-container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        {/* Renderização Condicional */}
        {activeTab === 'sobre' && <About />}
        {activeTab === 'trabalhos' && <Works />}
        {activeTab === 'dados' && <PythonProjects />}
        {activeTab === 'web' && <WebProjects />}
      </main>

      <Footer />
    </div>
  );
}

export default App;