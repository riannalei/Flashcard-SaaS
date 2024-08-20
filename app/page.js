import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to My Flashcard SaaS Application</h1>
      <p>This application helps you create and manage flashcards for efficient learning.</p>
      
      <nav>
        <ul>
          <li><Link href="/generate">Generate Flashcards</Link></li>
          <li><Link href="/flashcards">View Saved Flashcards</Link></li>
        </ul>
      </nav>
    </div>
  );
}
