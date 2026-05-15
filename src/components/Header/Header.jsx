import { User, Briefcase, Code, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'sobre', label: 'Sobre Mim', icon: <User size={18} /> },
    { id: 'trabalhos', label: 'Trabalhos Recentes', icon: <Briefcase size={18} /> },
    { id: 'python', label: 'Projetos Python', icon: <Code size={18} /> },
    { id: 'web', label: 'Projetos Web', icon: <Globe size={18} /> },
  ];

  return (
    <header className="header-container">
      {/* Logo Area */}
      <div className="logo-area">
        <div className="logo-icon-wrapper">
          <Code className="logo-icon" size={20} />
        </div>
        <span className="logo-text">Dev Portfolio</span>
      </div>

      {/* Navigation */}
      <nav className="nav-container">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`nav-button ${isActive ? 'active' : ''}`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabBackground"
                  className="active-tab-background"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              {item.icon}
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
