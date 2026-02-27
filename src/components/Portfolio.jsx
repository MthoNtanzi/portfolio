// src/components/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, MessageSquare, Youtube } from 'lucide-react';
import profile from '../assets/profile.jpg';
import './Portfolio.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    // { id: 'contact', label: 'Contact', icon: MessageSquare }
  ];

  const projects = [
    {
      "title": "Entertainment App",
      "description": "A responsive entertainment web app built with vanilla JavaScript, HTML, and CSS. Users can browse movies and TV series, view trending content, and bookmark their favourites.",
      "tags": ["JavaScript", "CSS", "Single Page App", "Responsive Design"],
      "link": "https://entertianment-app.vercel.app/",
      "repo": "https://github.com/MthoNtanzi/Entertianment-app"
    },
    {
      title: 'Mike\'s hotel',
      description: 'A full-stack booking platform with custom APIs, email confirmations, and seamless user integration.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Bootstrap', 'REST API'],
      link: 'https://mikes-hotel-revised.vercel.app/',
      repo: 'https://github.com/MthoNtanzi/mikes-hotel-revised'
    },
    {
      "title": "Recipe Site",
      "description": "A React frontend project that fetches recipes from a public API, allowing users to explore dishes, view ingredients, follow cooking steps, and navigate between recipes. Focused on dynamic data fetching, routing, loading and error states, and reusable scalable components.",
      "tags": ["React", "JavaScript", "CSS Modules", "REST API", "Responsive Design"],
      "link": "https://recipe-site-red.vercel.app/",
      "repo": "https://github.com/MthoNtanzi/recipe-site"
    },
    {
      title: 'WeManagementGroup',
      description: 'Client website for a California commercial real estate manager, hosted on Hostinger with GitHub collaboration.',
        tags: ['WordPress', 'PHP', 'Elementor', 'Yoast SEO', 'Boostrap'],
      link: 'https://wemanagementgroup.com/'
    },
    {
      title: 'Age Calculator',
      description: 'Frontend Mentor challenge implemented in React by translating a design reference into a functional interface.',
      tags: ['HTML5', 'CSS3', 'Restful API'],
      link: 'https://age-calculator-app-main-snowy.vercel.app/',
      repo: 'https://github.com/MthoNtanzi/age-calculator-app-main'
    },
    {
      title: 'Advice Generator',
      description: 'A fun Frontend Mentor project using the Advice Slip API to generate random, enjoyable advice quotes.',
      tags: ['React', 'CSS3'],
      link: 'https://advice-generator-app-five-amber.vercel.app/',
      repo: 'https://github.com/MthoNtanzi/advice-generator-app'
    },
    {
      title: 'Sneakers Store',
      description: 'Responsive React e-commerce product page showcasing sneakers with detailed views and cart functionality.',
      tags: ['React', 'CSS3'],
      link: 'https://ecommerce-product-page-main-two-silk.vercel.app/',
      repo: 'https://github.com/MthoNtanzi/Front-End-Mentor/tree/main/ecommerce-product-page-main'
    },
    {
      title: 'To-Do List App',
      description: 'A clean, interactive to-do list application with task creation, prioritisation, completion tracking, filtering, and removal functionality.',
      tags: ['JavaScript', 'CSS3'],
      link: 'https://to-do-list-javascript-mu.vercel.app/',
      repo: 'https://github.com/MthoNtanzi/to-do-list-javascript'
    }
  ];

  const experience = [
    {
      role: 'Web Developer',
      company: 'Talent Match Africa',
      period: '2025 - Present',
      description: 'Developed and maintained responsive, cross-browser websites and web systems using React, Bootstrap, and WordPress, collaborating with data scientists and backend developers to integrate APIs and visualise data, while delivering mobile and desktop-friendly solutions.'
    },
    {
      role: 'Research and Development',
      company: 'Nkgwete IT Solutions',
      period: '2022 - 2023',
      description: 'Built and enhanced responsive web applications and backend systems using HTML, CSS, JavaScript, PHP, and Bootstrap, collaborating with cross-functional teams to deliver client-facing solutions, improve performance, and support effective version control and project planning.'
    },
    {
      role: 'Web Developer & E-Tutor',
      company: 'IT Varsity',
      period: '2021 - 2022',
      description: 'Developed engaging web applications while collaborating remotely with tech mentors, providing technical guidance to students, and supporting web development projects using Slack and Git.'
    }
  ];

    // contact form handlers
    // const handleInputChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form submitted:', formData);
    //     alert('Thank you for your message! I\'ll get back to you soon.');
    //     setFormData({ name: '', email: '', message: '' });
    // };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className={`portfolio-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-wrapper">
            <div className="logo">MN</div>
            
            {/* Desktop Menu */}
            <div className="desktop-menu">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-items">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="section hero-section">
          <div className="hero-content">
            <div className="hero-avatar-wrapper">
                <div className="hero-avatar">
                              <img className="avatar-inner" src={profile} alt="Logo" />
                </div>
            </div>
            <h1 className="hero-title">Mthobisi Ntanzi</h1>
            <p className="hero-subtitle">Web Developer & Creative Problem Solver</p>
            <p className="hero-description">
              Crafting elegant solutions to complex problems with modern web technologies.
              Passionate about building user-centric applications that make a difference.
            </p>
            <div className="hero-buttons">
              <button onClick={() => setActiveSection('projects')} className="btn-primary">
                View My Work
              </button>
              {/* <button onClick={() => setActiveSection('contact')} className="btn-secondary">
                Get in Touch
              </button> */}
            </div>
            <div className="social-links">
                <a href="https://www.github.com/MthoNtanzi/" className="social-link"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/mthobisi-ntanzi-17234820b/" className="social-link"><Linkedin size={24} /></a>
                {/* <a href="#" className="social-link"><Youtube size={24} /></a> */}
                <a href="mailto:mthontanzi99@gmail.com" className="social-link"><Mail size={24} /></a>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="section about-section">
          <div className="section-container">
            <h2 className="section-title">About Me</h2>
            <div className="card">
              <p className="about-text">
                I'm a passionate full-stack developer with expertise in building modern web applications and systems.
                With a strong foundation in both frontend and backend technologies, I create seamless
                digital experiences that combine beautiful design with robust functionality.
              </p>
              <p className="about-text">
                I work with HTML, CSS, JavaScript, React, Vue.js, Tailwind CSS, and Bootstrap to create fast and accessible user interfaces.
                On the back end, I have experience working with Node.js, Express, REST APIs, and relational databases such as SQLite and PostgreSQL. I am also familiar with version control systems like Git and platforms like GitHub for collaborative development.
              </p>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3 className="skill-title frontend">Frontend</h3>
                  <div className="skill-tags">
                    {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Bootstrap'].map(skill => (
                      <span key={skill} className="skill-tag frontend-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-category">
                  <h3 className="skill-title backend">Backend</h3>
                  <div className="skill-tags">
                    {['Node.js', 'Express', 'Python', 'PostgreSQL', 'REST APIs', 'SQLite', 'Java'].map(skill => (
                      <span key={skill} className="skill-tag backend-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-category">
                  <h3 className="skill-title tools">Tools</h3>
                  <div className="skill-tags">
                    {['Git', 'GitHub', 'npm', 'Postman', 'VS Code', 'Firebase (basic)', 'Supabase (basic)', 'WordPress'].map(skill => (
                      <span key={skill} className="skill-tag tool-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-category">
                  <h3 className="skill-title host">Hosting & Miscellaneous</h3>
                  <div className="skill-tags">
                    {['Vercel', 'Netlify', 'cPanel', 'PostgreSQL', 'DevTools', 'Console Debugging'].map(skill => (
                      <span key={skill} className="skill-tag host-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="section projects-section">
          <div className="section-container-wide">
            <h2 className="section-title" id='test'>Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-header">
                    <a href={project.repo} className="project-icon"> <Code  size={24} /></a>
                    <a href={project.link} className="project-link">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <section className="section experience-section">
          <div className="section-container">
            <h2 className="section-title">Experience</h2>
            <div className="experience-list">
              {experience.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {/* {activeSection === 'contact' && (
        <section className="section contact-section">
          <div className="section-container-small">
            <h2 className="section-title">Get In Touch</h2>
            <div className="card">
              <p className="contact-intro">
                I'm always open to new opportunities and interesting projects.
                Let's create something amazing together!
              </p>
              <div className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="form-textarea"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button onClick={handleSubmit} className="btn-submit">
                  Send Message
                </button>
              </div>
              <div className="social-links contact-social">
                <a href="#" className="social-link"><Github size={24} /></a>
                <a href="#" className="social-link"><Linkedin size={24} /></a>
                <a href="#" className="social-link"><Mail size={24} /></a>
              </div>
            </div>
          </div>
        </section>
      )} */}
    </div>
  );
}
