import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const experiencesQuery = '*[_type == "experiences"] | order(year desc)';
    const skillsQuery = '*[_type == "skills"]';
    
    client.fetch(experiencesQuery).then((data) => {
      setExperiences(data);
    });
    
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
       

        <motion.div 
          className="app__experiences-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {experiences && experiences.map((experience, index) => (
            <motion.div
              className="app__experience-card"
              key={experience._id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="app__experience-card-content">
                <div className="app__experience-header">
                  <div className="app__experience-icon">
                    {experience.icon && (
                      <img 
                        src={urlFor(experience.icon)} 
                        alt={experience.name}
                        className="experience-icon-img"
                      />
                    )}
                  </div>
                  <div className="app__experience-title-section">
                    <h3 className="app__experience-name">{experience.name}</h3>
                    <p className="app__experience-company">{experience.company}</p>
                    <p className="app__experience-year">{experience.year}</p>
                  </div>
                </div>
                
                <div className="app__experience-body">
                  <p className="app__experience-description">{experience.desc}</p>
                  
                  {experience.tags && experience.tags.length > 0 && (
                    <div className="app__experience-tags">
                      {experience.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="app__experience-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);