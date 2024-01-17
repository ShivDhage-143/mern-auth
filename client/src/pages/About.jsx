import React from 'react';

export default function About() {
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/5745761/pexels-photo-5745761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    height: "100vh", // Set the height to cover the entire viewport
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    position: "relative",
  };

  
  return (
    <div style={backgroundImageStyle}>
      <div className='px-4 py-12 max-w-2xl mx-auto text-white'>
        <h1 className='text-3xl font-bold mb-4 t'>About</h1>
        <p className='font-medium italic mb-4 text-neutral'>
          Our Mission, Vision, and Values
        </p>
        <p className='line-clamp-3 mb-4 text-neutral-100'>
          We are a cutting-edge IT solutions provider having expertise in outsourcing,
          software development, cloud computing, cybersecurity, data analytics,
          and digital transformation.
        </p>
        <p className='line-clamp-3 mb-4 text-neutral-100'>
          Affworld Technologies has got you covered at every step of your growth journey.
          With years of experience in providing IT solutions,
          we ensure that our clients have access to the latest technology
          that is tailor-made to suit their specific needs.
        </p>
        <p className='line-clamp-4 mb-4 text-neutral-100'>
          Our proven track record speaks for itself. With Affworld Technologies,
          you can rest assured that your IT needs are in good hands. We use patented
          technology and delivery engines to ensure that our clients enjoy a 95%+ inbox
          placement and an 80%+ app notification delivery rate.
        </p>
      </div>
    </div>
  );
}