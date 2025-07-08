import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Loading Screen Component
export const LoadingScreen = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 6) return '';
        return prev + '.';
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading-screen"
    >
      <div className="loading-content">
        <div className="loading-dots">
          {dots}===++
        </div>
      </div>
    </motion.div>
  );
};

// Header Component
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="header-content">
        <div className="logo">
          <h1>Igloo</h1>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#community">Community</a>
          <a href="#technology">Technology</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-cta">
          <button className="btn-primary">Join Community</button>
        </div>
      </div>
    </motion.header>
  );
};

// Hero Section Component
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0" 
          alt="Blockchain Technology" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            Building the Future of
            <span className="gradient-text"> Onchain Communities</span>
          </h1>
          <p className="hero-subtitle">
            Our mission is to create the largest onchain community, driving the consumer crypto revolution.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary large">
              Get Started
            </button>
            <button className="btn-secondary large">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// About Section Component
export const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-content"
          >
            <h2 className="section-title">
              Revolutionizing <span className="gradient-text">Blockchain</span> Technology
            </h2>
            <p className="about-text">
              At Igloo, we're pioneering the next generation of blockchain infrastructure, 
              creating seamless experiences for developers and users alike. Our platform 
              combines cutting-edge technology with user-friendly interfaces to make 
              decentralized applications accessible to everyone.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>1M+</h3>
                <p>Active Users</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Blockchain Networks</p>
              </div>
              <div className="stat-item">
                <h3>99.9%</h3>
                <p>Uptime</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-image"
          >
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Blockchain Development" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Community Section Component
export const Community = () => {
  const features = [
    {
      title: "Decentralized Governance",
      description: "Community-driven decisions through transparent voting mechanisms",
      icon: "🏛️"
    },
    {
      title: "Reward System",
      description: "Earn tokens for active participation and valuable contributions",
      icon: "💎"
    },
    {
      title: "Developer Tools",
      description: "Comprehensive SDKs and APIs for seamless integration",
      icon: "🛠️"
    },
    {
      title: "Global Network",
      description: "Connect with crypto enthusiasts from around the world",
      icon: "🌍"
    }
  ];

  return (
    <section id="community" className="community">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="community-header"
        >
          <h2 className="section-title centered">
            Join the <span className="gradient-text">Revolution</span>
          </h2>
          <p className="section-subtitle centered">
            Be part of the largest onchain community driving the future of decentralized finance
          </p>
        </motion.div>
        
        <div className="community-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="community-image"
          >
            <img 
              src="https://images.pexels.com/photos/32623477/pexels-photo-32623477.jpeg" 
              alt="Crypto Community" 
            />
          </motion.div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Technology Section Component
export const Technology = () => {
  const techSpecs = [
    { label: "Consensus Algorithm", value: "Proof of Stake" },
    { label: "Block Time", value: "2.5 seconds" },
    { label: "Transaction Throughput", value: "10,000+ TPS" },
    { label: "Smart Contract Language", value: "Solidity, Rust" },
    { label: "Interoperability", value: "Cross-chain bridges" },
    { label: "Security", value: "Military-grade encryption" }
  ];

  return (
    <section id="technology" className="technology">
      <div className="container">
        <div className="technology-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="technology-content"
          >
            <h2 className="section-title">
              Next-Gen <span className="gradient-text">Infrastructure</span>
            </h2>
            <p className="technology-text">
              Our advanced blockchain infrastructure is designed for scalability, 
              security, and seamless user experience. Built from the ground up 
              to handle enterprise-level applications while maintaining decentralization.
            </p>
            <div className="tech-specs">
              {techSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="tech-spec"
                >
                  <span className="spec-label">{spec.label}:</span>
                  <span className="spec-value">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="technology-image"
          >
            <img 
              src="https://images.unsplash.com/photo-1488229297570-58520851e868" 
              alt="Digital Innovation" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Igloo</h3>
            <p>Building the future of onchain communities</p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">📱</a>
              <a href="#" aria-label="Discord">💬</a>
              <a href="#" aria-label="Telegram">📞</a>
              <a href="#" aria-label="GitHub">💻</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Platform</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Developer Tools</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">Forums</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Whitepaper</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Research</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Igloo Inc. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};