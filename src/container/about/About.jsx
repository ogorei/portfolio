import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [blogs, setBlogs] = useState([]);
  const itemsPerView = isMobile ? 1 : 3;

  // Replace with your actual Instagram username
  const INSTAGRAM_USERNAME = 'reina_codes';

  const interests = [
    {
      id: 1,
      title: 'Stargazing Adventures',
      description: 'Exploring the night sky and sharing astronomical discoveries. Follow my journey as I capture the beauty of the cosmos.',
      // To get Instagram image URL:
      // 1. Open your Instagram post
      // 2. Right-click on the image
      // 3. Select "Copy image address"
      // 4. Paste the URL here
      imageUrl: 'https://i.gyazo.com/5825360184262c9c484d4dedee2a72ab.jpg',
      link: `https://www.instagram.com/${INSTAGRAM_USERNAME}/`
    },
    {
      id: 2,
      title: 'Chess Strategies',
      description: 'Sharing chess tips, strategies, and game analyses. Join me in exploring the fascinating world of chess.',
      imageUrl: 'https://i.gyazo.com/295aa12296de98db65744346cb487cbb.jpg',
      link: `https://www.instagram.com/${INSTAGRAM_USERNAME}/`
    },
    {
      id: 3,
      title: 'Cosmetics Blog',
      description: 'Latest updates from my cosmetics blog. Sharing beauty tips, product reviews, and DIY beauty recipes.',
      imageUrl: 'https://i.gyazo.com/b42e2fba6668834b166dab85e2d7e43c.jpg',
      link: `https://www.instagram.com/${INSTAGRAM_USERNAME}/`
    },
    {
      id: 4,
      title: 'Sunday DIY Projects',
      description: 'Weekly DIY projects and creative endeavors. From home decor to handmade crafts, join me in my creative journey.',
      imageUrl: 'https://i.gyazo.com/8f8bfbd2727baa4efdc1a0a19f605237.jpg',
      link: `https://www.instagram.com/${INSTAGRAM_USERNAME}/`
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setBlogs(data);
    });
  }, []);

  const nextSlide = (setIndex, items) => {
    setIndex((prevIndex) => {
      const maxIndex = items.length - itemsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = (setIndex, items) => {
    setIndex((prevIndex) => {
      const maxIndex = items.length - itemsPerView;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  const visibleInterests = interests.slice(currentInterestIndex, currentInterestIndex + itemsPerView);
  const visibleBlogs = blogs.slice(currentBlogIndex, currentBlogIndex + itemsPerView);

  return (
    <>
      <motion.div 
        className="app__about-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="head-text">About <span>Me</span></h2>
        <motion.p 
          className="p-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ marginTop: 20, maxWidth: '800px', margin: '0 auto' }}
        >
          I'm a passionate individual who finds joy in the simple pleasures of life. When I'm not coding, 
          you'll find me stargazing under the night sky, strategizing over a game of chess, or getting 
          creative with DIY projects on Sundays. I love sharing my thoughts and experiences through writing, 
          and I'm currently building a new blog focused on cosmetics, combining my love for beauty and technology.
        </motion.p>
      </motion.div>

      <motion.h2 
        className="head-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{ marginTop: 40 }}
      >
        My <span>Interests</span>
      </motion.h2>

      <div className="app__profiles">
        <motion.button 
          className="slider-button prev"
          onClick={() => prevSlide(setCurrentInterestIndex, interests)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </motion.button>

        <div className="slider-container">
          <AnimatePresence mode="wait">
            {visibleInterests.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="app__profile-item"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleClick(item.link)}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  loading="lazy"
                />
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {item.title}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {item.description}
                </p>
                <a 
                  href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-link"
                >
                  Follow on Instagram →
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.button 
          className="slider-button next"
          onClick={() => nextSlide(setCurrentInterestIndex, interests)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </motion.button>
      </div>

      <div className="slider-dots">
        {Array.from({ length: interests.length - itemsPerView + 1 }).map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${index === currentInterestIndex ? 'active' : ''}`}
            onClick={() => setCurrentInterestIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      <motion.h2 
        className="head-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ marginTop: 60 }}
      >
        My <span>Blogs</span>
      </motion.h2>

      <div className="app__profiles">
        <motion.button 
          className="slider-button prev"
          onClick={() => prevSlide(setCurrentBlogIndex, blogs)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </motion.button>

        <div className="slider-container">
          <AnimatePresence mode="wait">
            {visibleBlogs.map((blog, index) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="app__profile-item"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleClick(blog.link)}
              >
                <img 
                  src={urlFor(blog.image)} 
                  alt={blog.title}
                  loading="lazy"
                />
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {blog.title}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {blog.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.button 
          className="slider-button next"
          onClick={() => nextSlide(setCurrentBlogIndex, blogs)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </motion.button>
      </div>

      <div className="slider-dots">
        {Array.from({ length: Math.max(0, blogs.length - itemsPerView + 1) }).map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${index === currentBlogIndex ? 'active' : ''}`}
            onClick={() => setCurrentBlogIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);