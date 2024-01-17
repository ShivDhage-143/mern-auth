import React from 'react';

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative", // Set the position to relative
  };

  const contentContainerStyle = {
    position: "absolute",
    top: "40%", // Adjust the top position as needed
    left: "6rem", // Adjust the left position as needed
    transform: "translateY(-50%)", // Center the content vertically
    color: "white", // Set the text color to white
    width: "calc(100% - 4rem)", // Use calc() to consider left and right margins
  };

  return (
    <div style={backgroundImageStyle}>
      <div className='px-4 py-12 max-w-2xl mx-auto text-white' style={contentContainerStyle}>
        <h1 className='text-3xl font-bold mb-4 text-neutral'>
          Welcome to Affworld Technologies
        </h1>
        <p className='line-clamp-3 font-medium italic mb-4 text-neutral'>
          Intelligent Technology Solutions.
        </p>
        <p className='line-clamp-3 mb-4 text-neutral-100'>
          Unlock your business's digital potential with our expert IT solutions -
          design, develop, and market your way to success.
        </p>
        <p className='line-clamp-3 mb-4 text-neutral-100'>
          Affworld is an affiliate network platform that focuses on growing sales and growth for Advertisers.
          It is an affiliate marketplace. Our mission is to accomplish and give growth to the advertisers.
        </p>
        <p className='line-clamp-3 mb-4 text-neutral-100'>
          Offering the best solutions of IT world.
          Working with trusted global experts who know your operating business mode.
        </p>
      </div>
    </div>
  );
}