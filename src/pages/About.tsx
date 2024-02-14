import React from 'react';

interface AboutProps { }

const About: React.FC<AboutProps> = () => {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      {/* Your Background, Skills, Interests, etc. */}
    </div>
  );
};

export default About;
