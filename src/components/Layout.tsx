
import React, { ReactNode } from 'react';
import Nav from './Nav';
import StarField from './StarField';
import ParticleBackground from './ParticleBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <StarField />
      <ParticleBackground />
      <Nav />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
