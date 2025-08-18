import { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';

export const metadata: Metadata = {
  title: 'D Lalithraj - Portfolio',
  description: 'Portfolio of D Lalithraj, Aspiring Data Analyst and System Engineer',
  openGraph: {
    title: 'D Lalithraj - Portfolio',
    description: 'Portfolio of D Lalithraj, Aspiring Data Analyst and System Engineer',
    images: ['/images/avatar.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}