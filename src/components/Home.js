import React from 'react';
import Sidebar from './Sidebar'; 

function HomePage() {
  return (
    <div className="homepage">
      <Sidebar /> {/* Inclua o Sidebar */}
      <section className="home">
        <div className="text">homepagessssss</div>
      </section>
      {/* Outros conteúdos da sua homepage */}
    </div>
  );
}

export default HomePage;
