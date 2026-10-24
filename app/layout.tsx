import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'webnibo',
  description: 'Playful everyday clothing for little people with big personalities.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
