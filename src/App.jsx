import React, { useState } from 'react';
import './index.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const projectsData = [
    {
      id: 1,
      year: '2026',
      title: 'SafeLeaf',
      category: 'Graduation Project',
      image: '/project 1.png',
    },
    {
      id: 2,
      year: '2026',
      title: 'HotelBuddy',
      category: 'UX Case Study',
      image: '/project2.png',
    },
    {
      id: 3,
      year: '2025',
      title: 'Enhance GC Website',
      category: 'Company Assignment',
      image: '/project3.png',
    },
    {
      id: 4,
      year: '2025',
      title: 'FreshFork',
      category: 'UI/UX • Software Development',
      image: '/project4.png',
    },
    {
      id: 5,
      year: '2024',
      title: 'Lahj | لهج',
      category: 'UI/UX',
      image: '/project5.png',
    },
    {
      id: 6,
      year: '2026',
      title: 'Hospital Dashboard',
      category: 'Data Analytics • Power BI',
      image: '/hospital-thumb.png',
    },
    {
      id: 7,
      year: '2026',
      title: 'HR Analytics',
      category: 'Data Analytics • Power BI',
      image: '/hr-thumb.png',
    }
  ];

  const handleProjectClick = (id) => {
    if (id === 1) {
      setActivePage('safeleaf');
      window.location.hash = 'safeleaf';
      window.scrollTo(0, 0);
    } else if (id === 2) {
      setActivePage('hotelbuddy');
      window.location.hash = 'hotelbuddy';
      window.scrollTo(0, 0);
    } else if (id === 3) {
      setActivePage('gcwebsite');
      window.location.hash = 'gcwebsite';
      window.scrollTo(0, 0);
    } else if (id === 4) {
      setActivePage('freshfork');
      window.location.hash = 'freshfork';
      window.scrollTo(0, 0);
    } else if (id === 5) {
      setActivePage('lahj');
      window.location.hash = 'lahj';
      window.scrollTo(0, 0);
    } else if (id === 6) {
      setActivePage('hospital');
      window.location.hash = 'hospital';
      window.scrollTo(0, 0);
    } else if (id === 7) {
      setActivePage('hr');
      window.location.hash = 'hr';
      window.scrollTo(0, 0);
    }
  };

  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['safeleaf', 'hotelbuddy', 'gcwebsite', 'freshfork', 'lahj', 'hospital', 'hr'].includes(hash)) {
      setActivePage(hash);
    }
  }, []);

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="avatar-container" style={{ position: 'relative' }}>
          <div className="floating-emoji" style={{ top: '20%', right: '-5%', animationDelay: '1s' }}>⭐</div>
          <div className="floating-emoji" style={{ bottom: '10%', left: '-5%', animationDelay: '2s' }}>⭐</div>
          <img src="/avatar.png" alt="Avatar" className="avatar" />
        </div>
        <h1 className="name">Hi, I'm Fatimah Almaki</h1>
        <div className="role-pill">
          UI/UX Designer | Software Developer | Data Analytics & BI Enthusiast
        </div>
        <p className="bio">
          I design and develop user-focused digital experiences that are intuitive, visually clean, and functional, combining thoughtful UI design with efficient development to create impactful products.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className={`project-item clickable`}
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="project-year">{project.year}</div>
            <div className="project-title-row">
              <div className="project-line"></div>
              <span className="project-title">{project.title} • {project.category}</span>
            </div>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          </div>
        ))}
      </section>
    </>
  );

  const renderAbout = () => (
    <div className="about-page fade-in">
      <div className="about-hero-centered">
        <h1 className="about-page-title" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>About Me</h1>
        
        <div className="about-avatar-wrapper avatar-container" style={{ position: 'relative' }}>
          <div className="floating-emoji" style={{ top: '20%', right: '-5%', animationDelay: '1s' }}>⭐</div>
          <div className="floating-emoji" style={{ bottom: '10%', left: '-5%', animationDelay: '2s' }}>⭐</div>
          <img src="/avatar.png" alt="Fatimah Almaki" className="avatar" style={{ backgroundColor: 'transparent', borderRadius: '50%' }} />
        </div>
        
        <h2 className="name">Fatimah Almaki</h2>
        
        <div className="about-pills">
          <div className="role-pill">Computer Science and Information Technology 🎓</div>
          <div className="role-pill">UI/UX Designer 🎨</div>
          <div className="role-pill">Software Developer 💻</div>
          <div className="role-pill">Data Analytics & BI Enthusiast 📊</div>
        </div>
        
        <p className="bio" style={{ maxWidth: '650px', margin: '0 auto 24px', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'center', textWrap: 'balance' }}>
          I specialize in crafting digital experiences that are not only beautiful but also highly functional. 
          My background in computer science allows me to understand the technical side of development while maintaining a strong focus on user-centric design.
        </p>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Skills & Tools</h2>
        </div>
        <div className="skills-grid">
          {[
            { name: 'HTML', icon: 'devicon-html5-plain' },
            { name: 'JS', icon: 'devicon-javascript-plain' },
            { name: 'CSS', icon: 'devicon-css3-plain' },
            { name: 'PHP', icon: 'devicon-php-plain' },
            { name: 'React', icon: 'devicon-react-original' },
            { name: 'Figma', icon: 'devicon-figma-plain' },
            { name: 'C++', icon: 'devicon-cplusplus-plain' },
            { name: 'Java', icon: 'devicon-java-plain' },
            { name: 'Python', icon: 'devicon-python-plain' },
            { name: 'Github', icon: 'devicon-github-original' },
            { name: 'Flutter', icon: 'devicon-flutter-plain' },
            { name: 'SQL & MySQL', icon: 'devicon-mysql-plain' },
            { name: 'AI & Deep Learning', icon: 'devicon-tensorflow-original' },
            { name: 'Firebase', icon: 'devicon-firebase-plain' },
            { name: 'Power BI', icon: 'devicon-microsoft-original' },
            { name: 'MS Office', icon: 'devicon-windows8-original' }
          ].map((skill, index) => (
            <div key={index} className="skill-tag">
              <i className={skill.icon} style={{ fontSize: '1.2rem' }}></i> {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Education</h2>
        </div>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Bachelor of Computer Science and Information Technology</h3>
              <h4 className="timeline-subtitle" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Imam Abdulrahman Bin Faisal University</h4>
              <p className="timeline-date" style={{ marginBottom: 0 }}>2021 - 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Experience</h2>
        </div>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">COOP Training</h3>
              <h4 className="timeline-subtitle" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>GULF CONSULT Architects & Engineers | Al Khobar, SA</h4>
              <p className="timeline-date">June 2025 - August 2025</p>
              <ul className="timeline-desc" style={{ paddingLeft: '20px', margin: 0, marginTop: '12px' }}>
                <li style={{ marginBottom: '8px' }}>Redesigned 9 pages of the company's website interfaces using Figma, increasing the visual hierarchy, layout consistency and user experience.</li>
                <li>Gained hands-on experience with Firebase services by building mock features to test data handling and backend connectivity throughout the training period.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Certificates</h2>
        </div>
        <div className="timeline-container">
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Virtual Data Analysis Work Experience</h3>
              <h4 className="timeline-subtitle" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}> STC × Misk</h4>
              <p className="timeline-date" style={{ marginBottom: 0 }}>Issued August 2026</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Power BI 101, 102 & 103 </h3>
              <h4 className="timeline-subtitle" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}> Satr Platform </h4>
              <p className="timeline-date" style={{ marginBottom: 0 }}>Issued August 2026</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Developing Front-End Apps with React</h3>
              <h4 className="timeline-subtitle" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>IBM</h4>
              <p className="timeline-date" style={{ marginBottom: 0 }}>Issued October 2025</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">Google UX Design Professional Certificate</h3>
              <h4 className="timeline-subtitle" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Coursera & Google</h4>
              <p className="timeline-date" style={{ marginBottom: 0 }}>Issued Aug 2025</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">UX/UI Design Principles Compact (Theory & Figma Exercise)</h3>
              <h4 className="timeline-subtitle" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Udemy</h4>
              <p className="timeline-date" style={{ marginBottom: 0 }}>Issued Jul 2024</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );

  const renderProjectDetails = () => (
    <div className="project-details fade-in">
      <div className="details-header-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h1 className="details-title">HotelBuddy</h1>
        </div>
        <p className="details-desc">
          An accommodation booking application that combines traditional browsing
          with an AI chat experience. Users can search normally or talk to the AI, ask
          questions, and even send images to receive personalized stay suggestions.
        </p>
      </div>

      <div className="problem-solution-section">
        <div className="ps-container">
          <div className="ps-column">
            <h3>Problem</h3>
            <p>
              Travelers often struggle to choose
              accommodation that truly matches
              their needs. Browsing and filtering
              require effort, and users may still
              feel uncertain about their final
              decision.
            </p>
          </div>
          <div className="ps-column">
            <h3>Solution</h3>
            <p>
              The app introduces an AI chat feature
              that allows users to ask questions,
              describe their needs, or send
              photos. Instead of relying only
              on filters, travelers receive
              interactive and personalized
              guidance to make faster and
              more confident choices.
            </p>
          </div>
        </div>
      </div>
      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Design Process</h2>
        </div>
        <div className="details-image-container">
          <img src="/HotelDP.png" alt="Design Process" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">User Flow</h2>
        </div>
        <div className="details-image-container">
          <img src="/HotelUF.png" alt="User Flow" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Low Fidelity Wireframe</h2>
        </div>
        <div className="details-image-container">
          <img src="/HotelWF.png" alt="Low Fidelity Wireframe" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Card Sorting</h2>
        </div>
        <div className="details-image-container">
          <img src="/HotelCD.png" alt="Card Sorting" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Mockups</h2>
        </div>
        <div className="details-image-container">
          <img src="/HotelMK.png" alt="Mockups" className="details-image" />
        </div>
      </div>

    </div>
  );

  const renderLahjDetails = () => (
    <div className="project-details fade-in">
      <div className="details-header-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h1 className="details-title">Lahj | لهج</h1>
        </div>
        <p className="details-desc">
          This mobile application designed to promote and facilitate heritage tourism in Saudi Arabia for international visitors. The app serves as an all-in-one travel companion, from booking a flight to discovering ancient landmarks. It built to make Saudi Arabia's rich cultural destinations accessible and appealing to a global audience.
        </p>

      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Meaning of "Lahj"?</h2>
        </div>
        <p className="details-desc">
          a word from old Saudi dialects in the southern regions, meaning a window or a small opening in a wall.
        </p>
      </div>

      <div className="problem-solution-section lahj-ps-section">
        <div className="ps-container">
          <div className="ps-column">
            <h3>Problem</h3>
            <p>
              International travelers have no single platform to discover, plan, and book a heritage-focused trip to Saudi Arabia. Information about sites, visiting hours, and entry fees is scattered and unreliable, making the trip feel overwhelming and inaccessible to foreign tourists.
            </p>
          </div>
          <div className="ps-column">
            <h3>Solution</h3>
            <p>
              Lahj brings everything into one app. users can book flights to Saudi Arabia, explore curated heritage sites with accurate visiting hours and admission details, and instantly access emergency contact numbers, giving international tourists a smooth and confident travel experience from start to finish.
            </p>
          </div>
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Design thinking</h2>
        </div>
        <div className="details-image-container">
          <img src="/LahjDT.png" alt="Design thinking" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">User Flow</h2>
        </div>
        <div className="details-image-container">
          <img src="/LahjUF.png" alt="User Flow" className="details-image" />
        </div>
      </div>
      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Typograph</h2>
        </div>
        <div className="typography-container">
          <h3 className="typo-name">Fredoka One</h3>
          <p className="typo-letters">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
          <p className="typo-numbers">0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ &amp; * ( ) _ + = , . &lt; &gt; / ?</p>
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Colors</h2>
        </div>
        <div className="details-image-container">
          <img src="/LahjColors.png" alt="Colors" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Low-fid wireframe</h2>
        </div>
        <div className="details-image-container">
          <img src="/LahjWF.png" alt="Low-fid wireframe" className="details-image" />
        </div>
      </div>
      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Mockups</h2>
        </div>
        <div className="details-image-container">
          <img src="/LahjMK.png" alt="Mockups" className="details-image" />
        </div>
      </div>
    </div>
  );

  const renderFreshForkDetails = () => (
    <div className="project-details fade-in">
      <div className="details-header-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h1 className="details-title">FreshFork</h1>
        </div>
        <p className="details-desc">
          It is a web application with role-based authentication supporting two types of users (chefs and regular users). Chefs can manage their own recipes with full CRUD operations, view preparation steps, track calories, and leave reviews, while regular users can browse and discover healthy meals across the platform.
        </p>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">User Flow</h2>
        </div>
        <div className="details-image-container">
          <img src="/FFUF.png" alt="User Flow" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Typograph</h2>
        </div>
        <div className="typography-container typo-inter">
          <h3 className="typo-name">Inter</h3>
          <p className="typo-letters">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
          <p className="typo-numbers">0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ &amp; * ( ) _ + = , . &lt; &gt; / ?</p>
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Colors</h2>
        </div>
        <div className="details-image-container">
          <img src="/FFColors.png" alt="Colors" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Register Screens</h2>
        </div>
        <div className="details-image-container">
          <img src="/FFRG.png" alt="Register Screens" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Users Screens</h2>
        </div>
        <div className="details-image-container">
          <img src="/FFUS.png" alt="Users Screens" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Chef Screens</h2>
        </div>
        <div className="details-image-container">
          <img src="/FFCS.png" alt="Chef Screens" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="github-link-container">
          <a href="https://github.com/iif6mh/FreshFork.git" target="_blank" rel="noreferrer" className="github-button">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="github-icon">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            View Code on GitHub
          </a>
        </div>
      </div>
    </div>
  );

  const renderGCWebsiteDetails = () => (
    <div className="project-details fade-in">
      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Ui Screens</h2>
        </div>
        <div className="details-image-container">
          <img src="/GC.png" alt="Ui Screens" className="details-image" />
        </div>
      </div>
    </div>
  );

  const renderSafeLeafDetails = () => (
    <div className="project-details fade-in">
      <div className="details-header-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h1 className="details-title">SafeLeaf</h1>
        </div>
        <p className="details-desc">
          SafeLeaf is an AI-based image recognition system designed to identify and classify toxic and non-toxic plants that may be toxic to children and pets. Using Deep learning and computer vision techniques, the system analyzes plant images and delivers accurate predictions. The AI model was integrated into a mobile application to enhance accessibility and provide a smooth, user-friendly experience.
        </p>
      </div>

      <div className="problem-solution-section safeleaf-ps-section">
        <div className="ps-container">
          <div className="ps-column">
            <h3>Problem</h3>
            <p>
              Identifying toxic plants can be challenging for people without botanical knowledge, especially since some plants can be harmful to children and pets. Accidental exposure may lead to serious health risks, and there is a lack of quick and accessible tools for plant toxicity identification.
            </p>
          </div>
          <div className="ps-column">
            <h3>Solution</h3>
            <p>
              SafeLeaf uses AI image recognition technology to classify toxic and non-toxic plants from images. The system helps users identify plants that may pose risks to children and animals. To improve accessibility and usability, the AI model was integrated into a mobile application that provides instant results through a simple user experience.
            </p>
          </div>
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Logo Idea</h2>
        </div>
        <div className="details-image-container custom-sl-img">
          <img src="/SLogo.png" alt="Logo Idea" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Design Thinking</h2>
        </div>
        <div className="details-image-container custom-sl-img">
          <img src="/SLDT.png" alt="Design Thinking" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">UI Kit</h2>
        </div>
        <div className="details-image-container">
          <img src="/SLUK.png" alt="UI Kit" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Low-fid wireframe</h2>
        </div>
        <div className="details-image-container">
          <img src="/SLWF.png" alt="Low-fid wireframe" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Mockups</h2>
        </div>
        <div className="details-image-container">
          <img src="/SLMK.png" alt="Mockups" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="github-link-container">
          <a href="https://github.com/iif6mh/SafeLeaf-" target="_blank" rel="noreferrer" className="github-button">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="github-icon">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            View Code on GitHub
          </a>
        </div>
      </div>
    </div>
  );

const renderHospitalDetails = () => (
    <div className="project-details fade-in">
      <div className="details-header-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h1 className="details-title">Hospital Clinical & Operational Performance Analytics</h1>
        </div>
        <p className="details-desc">
          An end-to-end Healthcare Business Intelligence dashboard developed in Power BI to monitor clinical outcomes, operational efficiency, and financial performance across 984 inpatient encounter records.
        </p>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Dashboard Overview</h2>
        </div>
        <div className="details-image-container">
          <img src="/hospital-dash.png" alt="Hospital Dashboard" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Data Architecture & Star Schema</h2>
        </div>
        <ul className="timeline-desc" style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <li style={{ marginBottom: '8px' }}><strong>Dimensional Modeling:</strong> Transformed flat medical transactional data into a Star Schema structure (Dim_Patients, Dim_Clinical, and Fact_Hospital_Activity).</li>
          <li><strong>Integrity & Optimization:</strong> Implemented strict 1:* relationships with single-direction cross-filtering.</li>
        </ul>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Key Performance Indicators (KPIs)</h2>
        </div>
        <ul className="timeline-desc" style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <li style={{ marginBottom: '8px' }}><strong>Total Patients:</strong> 984 Active Encounters</li>
          <li style={{ marginBottom: '8px' }}><strong>Total Medical Revenue:</strong> $8.23M</li>
          <li style={{ marginBottom: '8px' }}><strong>Average Length of Stay (ALOS):</strong> 37.7 Days</li>
          <li style={{ marginBottom: '8px' }}><strong>30-Day Readmission Rate:</strong> 26.83%</li>
          <li><strong>Patient Satisfaction Score:</strong> 3.60 / 5.0 (Benchmark: 4.50)</li>
        </ul>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Core SQL Queries</h2>
        </div>
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '12px', overflowX: 'auto', marginTop: '16px' }}>
          <pre style={{ margin: 0, color: '#d4d4d4', fontFamily: 'monospace', fontSize: '0.95rem', lineHeight: '1.6' }}>
{`SELECT 
    c.Condition,
    COUNT(f.Patient_ID) AS Total_Patients,
    SUM(f.Cost) AS Total_Cost,
    AVG(f.Length_of_Stay) AS Avg_Stay_Days
FROM Fact_Hospital_Activity f
JOIN Dim_Clinical c ON f.Clinical_ID = c.Clinical_ID
GROUP BY c.Condition
ORDER BY Total_Patients DESC;

-- Readmission Rate Calculation
SELECT 
    Readmission,
    COUNT(Patient_ID) AS Patient_Count,
    ROUND(COUNT(Patient_ID) * 100.0 / (SELECT COUNT(*) FROM Fact_Hospital_Activity), 2) AS Percentage
FROM Fact_Hospital_Activity
GROUP BY Readmission;`}
          </pre>
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">📐 Key DAX Measures</h2>
        </div>
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '12px', overflowX: 'auto', marginTop: '16px' }}>
          <pre style={{ margin: 0, color: '#d4d4d4', fontFamily: 'monospace', fontSize: '0.95rem', lineHeight: '1.6' }}>
{`Total Patients = COUNTROWS(Fact_Hospital_Activity)

Total Cost = SUM(Fact_Hospital_Activity[Cost])

Avg Length of Stay = AVERAGE(Fact_Hospital_Activity[Length_of_Stay])

Readmission Rate % = 
DIVIDE(
    CALCULATE([Total Patients], Fact_Hospital_Activity[Readmission] = "Yes"),
    [Total Patients],
    0
)

Avg Satisfaction = AVERAGE(Fact_Hospital_Activity[Satisfaction])`}
          </pre>
        </div>
      </div>
    </div>
  );

  const renderHRDetails = () => (
    <div className="project-details fade-in">
      <div className="details-header-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h1 className="details-title">HR Workforce Analytics Dashboard</h1>
        </div>
        <p className="details-desc">
          An interactive Power BI dashboard designed with department-level filtering, integrating UX principles for clarity and decision-support to effectively monitor workforce metrics and retention risks.
        </p>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Dashboard Overview</h2>
        </div>
        <div className="details-image-container">
          <img src="/hr-dash.png" alt="HR Analytics Dashboard" className="details-image" />
        </div>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Data Architecture & DAX</h2>
        </div>
        <ul className="timeline-desc" style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <li style={{ marginBottom: '8px' }}><strong>Data Transformation:</strong> Cleaned and modeled employee data using Power Query, structuring it into a star schema containing fact and dimension tables for streamlined workforce analysis.</li>
          <li><strong>Custom Measures:</strong> Built dynamic DAX measures calculating key HR metrics, including attrition rate, average tenure, and average monthly income.</li>
        </ul>
      </div>

      <div className="details-section">
        <div className="details-title-row">
          <div className="details-line"></div>
          <h2 className="details-section-title">Key Insights & Findings</h2>
        </div>
        <ul className="timeline-desc" style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <li><strong>Retention Risk Identification:</strong> Data analysis revealed that employees working overtime had nearly double the attrition rate compared to those with standard hours, highlighting overtime as a critical retention risk factor for HR management.</li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-links">
            <a href="#home" className="nav-link" onClick={() => setActivePage('home')}>Home</a>
            <a href="#projects" className="nav-link" onClick={() => setActivePage('home')}>Projects</a>
            <a href="#about" className="nav-link" onClick={() => {setActivePage('about'); window.scrollTo(0,0);}}>About</a>
          </div>
        </nav>
        
        {activePage === 'about' ? renderAbout() : 
         activePage === 'home' ? renderHome() : 
         activePage === 'safeleaf' ? renderSafeLeafDetails() : 
         activePage === 'hotelbuddy' ? renderProjectDetails() : 
         activePage === 'gcwebsite' ? renderGCWebsiteDetails() : 
         activePage === 'freshfork' ? renderFreshForkDetails() : 
         activePage === 'hospital' ? renderHospitalDetails() : 
         activePage === 'hr' ? renderHRDetails() : 
         renderLahjDetails()}
        
      </div>
      
      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="footer-title">Get in Touch</h2>
          <p className="footer-desc">Interested in working together? Reach out to me.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/fatimah-almaki-4295b224a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://www.behance.net/fatimajamal10" target="_blank" rel="noreferrer" className="social-icon" aria-label="Behance">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M14.615 13.064c-.067 1.144 1.154 2.227 2.766 2.227 1.258 0 2.063-.564 2.408-1.554h2.721c-.42 2.658-2.607 3.842-5.23 3.842-3.832 0-5.834-2.585-5.834-5.834 0-3.322 2.115-5.918 5.666-5.918 3.551 0 5.434 2.459 5.434 5.23H14.615Zm3.02-2.146c-.066-1.123-1.049-1.92-2.327-1.92-1.289 0-2.226.797-2.316 1.92h4.643ZM6.962 5.826h-6.96v11.75h7.24c3.488 0 5.21-1.637 5.21-4.006 0-1.668-1.113-2.915-2.695-3.23 1.164-.471 2.022-1.467 2.022-2.735 0-2.116-1.508-3.41-3.83-3.41h-.987Zm-3.924 2.15h2.903c1.332 0 1.908.64 1.908 1.48 0 .89-.607 1.551-1.897 1.551h-2.914v-3.031Zm0 5.12h3.29c1.467 0 2.17.65 2.17 1.636 0 .975-.764 1.636-2.032 1.636h-3.428v-3.272Zm8.572-5.326h4.526v2.106h-4.526Z"/>
              </svg>
            </a>
            <a href="https://github.com/iif6mh" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
          <p className="footer-copyright" style={{ marginBottom: 0 }}>Done By Fatimah Almaki@2026</p>
          <div style={{ marginTop: '2px', fontSize: '1.2rem', lineHeight: 1 }}>⭐</div>
        </div>
      </footer>
    </>
  );
}

export default App;
