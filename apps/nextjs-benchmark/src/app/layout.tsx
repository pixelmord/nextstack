import '@/styles/globals.css';

import { MainNavigation } from '@/components/MainNavigation/MainNavigation';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
