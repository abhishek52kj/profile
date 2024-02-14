import React from 'react';

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home-page">
      <h2>Welcome to My Personal Website!</h2>
      {/* Introduction, Featured Content, etc. */}
    </div>
  );
};

export default Home;
