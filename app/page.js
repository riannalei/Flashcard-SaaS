import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to My Flashcard SaaS Application</h1>
      <p style={styles.description}>This application helps you create and manage flashcards for efficient learning.</p>
      
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link href="/generate" style={styles.navLink}>Generate Flashcards</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/flashcards" style={styles.navLink}>View Saved Flashcards</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  navList: {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  navItem: {
    margin: '0',
  },
  navLink: {
    display: 'block',
    padding: '10px 20px',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: '#0070f3',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  navLinkHover: {
    backgroundColor: '#005bb5',
  }
};
