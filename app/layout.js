import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Your App Title</title>
        {/* Add any other head elements here */}
      </head>
      <body>
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
