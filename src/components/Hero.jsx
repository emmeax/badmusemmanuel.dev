import React, { useState, useEffect } from 'react';
import emmeax from '../assets/emmeax.jpg';

const Hero = () => {
  const phrases = [
    'I specialize in building modern and responsive web applications.',
    'Creating visually appealing and user-friendly web designs.',
    'Building responsive and interactive user interfaces.',
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;
    const pauseDuration = 1500;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentPhrase.length) {
          setPause(true);
          setTimeout(() => {
            setIsDeleting(true);
            setPause(false);
          }, pauseDuration);
        }
      } else {
        setDisplayedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, pause, phraseIndex, phrases]);

  return (
    <div className='bg-black text-white text-center py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24'>
      <img
        src={emmeax}
        alt="Emmanuel"
        className='mx-auto mb-8 w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I'm{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          BADMUS EMMANUEL
        </span>
        , Front-End Developer
      </h1>

      <p className='mt-4 text-lg text-gray-300 min-h-[40px]'>
        {displayedText}
        <span className="border-r border-gray-300 animate-pulse ml-1"></span>
      </p>

      <div className='mt-8 space-x-4'>
        <a
          href="#contact"
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Contact With Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
