import React from 'react';
import TopNavbar from './TopNavbar';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar />
      <Header />
      <main className="flex-grow pt-32 sm:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;