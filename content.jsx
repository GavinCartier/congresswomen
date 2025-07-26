import React from 'react';

const unifiedStyles = {
  section: (bgColor) => ({
    background: bgColor,
    padding: '80px 40px',
    fontFamily: "'Inter', sans-serif",
  }),
  heading: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '48px',
    textAlign: 'center',
    color: '#000350',
    marginBottom: '60px',
  },
  grid: (columns) => ({
    display: 'grid',
    gridTemplateColumns: columns || 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  }),
  box: {
    background: 'linear-gradient(145deg, #000350, #1e275c)',
    color: '#ffffff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.3)',
  },
  boxTitle: {
    fontSize: '22px',
    marginBottom: '15px',
    fontWeight: '600',
  },
  boxText: {
    fontSize: '16px',
    lineHeight: '1.6',
    opacity: 0.95,
  },
  learnBox: {
    background: 'linear-gradient(145deg, #000350, #1e275c)',
    textAlign: 'center',
    padding: '24px',
    borderRadius: '16px',
    margin: '60px auto 0 auto',
    maxWidth: '320px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  },
  learnLink: {
    display: 'inline-block',
    padding: '12px 28px',
    fontSize: '18px',
    color: '#ffffff',
    backgroundColor: 'transparent',
    border: '2px solid #ffffff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
};

const contentStages = [
  {
    title: 'SkillShift',
    text: 'Advance your career with key tech skills for evolving workplaces.',
  },
  {
    title: 'TechStrategy',
    text: 'Drive value by integrating resilient and secure technology.',
  },
  {
    title: 'WorkForce',
    text: 'Empower teams with future-ready skills and inclusive culture.',
  },
];

const exhibitionStages = [
  {
    title: 'AI & Software',
    text: 'Explore strategies and skills to thrive in tech’s exponential growth—from Cloud to Web3 and automation.',
  },
  {
    title: 'Get into Tech',
    text: 'For career pivots and newcomers. Learn how to climb the tech ladder with insights, skills, and connections.',
  },
];

const benefits = [
  {
    title: 'Skills Development',
    description: 'Future-proof your career through interactive learning and hands-on tech sessions.',
  },
  {
    title: 'Career Opportunities',
    description: 'Connect with tech organisations and unlock new roles and strategic partnerships.',
  },
  {
    title: 'Industry Trends',
    description: 'Learn from real-world case studies and explore what’s driving innovation.',
  },
  {
    title: 'Network Building',
    description: 'Grow meaningful connections at European Women in Technology through curated meetups and features.',
  },
];

const TechShowcaseAndWhyAttend = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#f8f9fc', margin: 0 }}>
      {/* Content Stages */}
      <section style={unifiedStyles.section('#ffffff')}>
        <h1 style={unifiedStyles.heading}>2025 Content Stages 💫</h1>
        <div style={unifiedStyles.grid()}>
          {contentStages.map((stage, index) => (
            <div key={index} style={unifiedStyles.box}>
              <h2 style={unifiedStyles.boxTitle}>{stage.title}</h2>
              <p style={unifiedStyles.boxText}>{stage.text}</p>
            </div>
          ))}
        </div>
        <div style={unifiedStyles.learnBox}>
          <a href="https://example.com" style={unifiedStyles.learnLink}>Learn More</a>
        </div>
      </section>

      {/* Exhibition Stages */}
      <section style={unifiedStyles.section('#eef1f7')}>
        <h1 style={unifiedStyles.heading}>2025 Exhibition Stages 💡</h1>
        <div style={unifiedStyles.grid()}>
          {exhibitionStages.map((stage, index) => (
            <div key={index} style={unifiedStyles.box}>
              <h2 style={unifiedStyles.boxTitle}>{stage.title}</h2>
              <p style={unifiedStyles.boxText}>{stage.text}</p>
            </div>
          ))}
        </div>
        <div style={unifiedStyles.learnBox}>
          <a href="https://example.com" style={unifiedStyles.learnLink}>Learn More</a>
        </div>
      </section>

      {/* Why Attend */}
      <section style={unifiedStyles.section('#ffffff')}>
        <h1 style={unifiedStyles.heading}>Why Attend 🔍</h1>
        <div style={unifiedStyles.grid('repeat(auto-fit, minmax(280px, 1fr))')}>
          {benefits.map((item, index) => (
            <div key={index} style={unifiedStyles.box}>
              <h2 style={unifiedStyles.boxTitle}>{item.title}</h2>
              <p style={unifiedStyles.boxText}>{item.description}</p>
            </div>
          ))}
        </div>
        <div style={unifiedStyles.learnBox}>
          <a href="https://example.com" style={unifiedStyles.learnLink}>Learn More</a>
        </div>
      </section>
    </div>
  );
};

export default TechShowcaseAndWhyAttend;
