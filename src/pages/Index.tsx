import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import Lessons from '@/components/Lessons';
import Practice from '@/components/Practice';
import Community from '@/components/Community';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'courses' && <Courses />}
        {activeSection === 'lessons' && <Lessons />}
        {activeSection === 'practice' && <Practice />}
        {activeSection === 'community' && <Community />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
