// These styles apply to every route in the application
import './globals.css';
import { Style } from 'util';
import Header from '../../components/layout/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='wrapper'>
        {children}
        </main>
        </body>
    </html>
  );
}