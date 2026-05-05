import './globals.css';

export const metadata = {
  title: 'Netflix Clone',
  description: 'Private Netflix-style frontend'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
