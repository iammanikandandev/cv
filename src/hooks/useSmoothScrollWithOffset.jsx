// src/hooks/useSmoothScroll.js
import { useEffect } from 'react';

const useSmoothScroll = (offset = 70) => {
  useEffect(() => {
    const links = document.querySelectorAll('.js-scroll-trigger[href^="#"]');

    const handleClick = (e) => {
      const targetId = e.currentTarget.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });
      }
    };

    links.forEach((link) => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, [offset]);
};

export default useSmoothScroll;
