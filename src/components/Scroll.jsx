import React, { useState, useEffect } from 'react';

const data = [
  {
    id: 1,
    title: "Welcome to Building 1",
    description: "This is the description for Building 1.",
    imageUrl: "/building-1.png",
  },
  {
    id: 2,
    title: "Welcome to Building 2",
    description: "This is the description for Building 2.",
    imageUrl: "/img-2.png",
  },
  {
    id: 3,
    title: "Welcome to Building 3",
    description: "This is the description for Building 3.",
    imageUrl: "/Img-3.png",
  },
];

const DynamicScrollSection = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionHeight = window.innerHeight;

    // Calculate the current section based on scroll position
    const newSection = Math.floor(scrollPosition / sectionHeight);

    // Ensure that currentSection stays within bounds
    if (newSection !== currentSection && newSection < data.length) {
      setCurrentSection(newSection);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-500" 
        style={{ backgroundImage: `url(${data[currentSection].imageUrl})` }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-4xl font-bold  text-black">{data[currentSection].title}</h1>
        <p className="text-lg mt-4 text-black">{data[currentSection].description}</p>
      </div>
    </div>
  );
};

export default DynamicScrollSection;
