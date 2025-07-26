import React from 'react';

const teamMembers = [
  { name: 'Person 1', company: 'Company', image: 'image1.jpg', link: 'profile1.html' },
  { name: 'Person 2', company: 'Company', image: 'image2.jpg', link: 'profile2.html' },
  { name: 'Person 3', company: 'Company', image: 'image3.jpg', link: 'profile3.html' },
  { name: 'Person 4', company: 'Company', image: 'image4.jpg', link: 'profile4.html' },
  { name: 'Person 5', company: 'Company', image: 'image5.jpg', link: 'profile5.html' },
  { name: 'Person 6', company: 'Company', image: 'image6.jpg', link: 'profile6.html' },
  { name: 'Person 7', company: 'Company', image: 'image7.jpg', link: 'profile7.html' },
  { name: 'Person 8', company: 'Company', image: 'image8.jpg', link: 'profile8.html' },
  { name: 'Person 9', company: 'Company', image: 'image9.jpg', link: 'profile9.html' },
  { name: 'Person 10', company: 'Company', image: 'image10.jpg', link: 'profile10.html' },
];

const TeamGrid = () => {
  const styles = {
    page: {
      margin: 0,
      background: 'linear-gradient(145deg, #000350, #1e275c)',
      fontFamily: "'Raleway', sans-serif",
      padding: '50px 20px',
      color: '#ffffff',
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    heading: {
      fontSize: '42px',
      fontWeight: '700',
      letterSpacing: '1px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '30px',
      maxWidth: '1300px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#ffffff',
      color: '#1e275c',
      borderRadius: '10px',
      padding: '16px',
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
    },
    img: {
      width: '100%',
      height: 'auto',
      borderRadius: '6px',
      marginBottom: '12px',
    },
    name: {
      margin: 0,
      fontSize: '20px',
      fontWeight: '700',
    },
    company: {
      marginTop: '4px',
      fontSize: '16px',
      fontWeight: '500',
      opacity: 0.85,
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.heading}>Meet the Team</h1>
      </header>
      <main>
        <section style={styles.grid}>
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.link}
              style={styles.card}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, styles.cardHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, styles.card);
              }}
            >
              <img src={member.image} alt={`Photo of ${member.name}`} style={styles.img} />
              <h2 style={styles.name}>{member.name}</h2>
              <p style={styles.company}>{member.company}</p>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
};

export default TeamGrid;
