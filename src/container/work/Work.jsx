import React, { useEffect, useState } from 'react';
import './Work.scss';
import { AiFillEye, AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Work = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	useEffect(() => {
		const query = '*[_type == "works"]';
		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

	return (
    <>
      <h2 className="head-text">My <span>Works</span></h2>
      <p className="p-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Explore my portfolio of projects showcasing my expertise in web development and design
      </p>

      <div className="app__work-filter">
        {['All', 'UI/UX', 'Web App', 'Mobile App', 'NextJS','ReactJS', 'VUEJS', 'PHP', 'LARAVEL'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <motion.div 
            className="app__work-item app__flex" 
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="app__work-img app__flex">
              <img src={urlFor(work.image)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                {work.link && (
                  <a href={work.link} target="_blank" rel="noreferrer" title="View Live Demo">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}
                {work.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer" title="View Source Code">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tags app__flex">
                <div className="app__work-tag app__flex">
                  <FaTools style={{ marginRight: '0.5rem' }} />
                  <p className="p-text">{work.tags.join(', ')}</p>
                </div>
              </div>

              {work.features && (
                <div className="app__work-features">
                  <h5 className="bold-text" style={{ marginTop: '1rem' }}>Key Features:</h5>
                  <ul className="p-text">
                    {work.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, 'work');
