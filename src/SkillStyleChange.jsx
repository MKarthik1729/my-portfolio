import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaReact, FaNode, FaBootstrap } from 'react-icons/fa';
import { SiReact, SiPostgresql, SiMongodb, SiMui } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { useTheme } from './context/ThemeContext';
import styles from './Styles/skills.module.scss';

const skillsData = [
    { icon: <FaPython />, name: "Python", category: "Language", proficiency: 85, description: "Used for data analysis, automation, and backend development" },
    { icon: <FaHtml5 />, name: "HTML", category: "Frontend", proficiency: 95, description: "Semantic HTML5 for modern web applications" },
    { icon: <FaCss3Alt />, name: "CSS", category: "Frontend", proficiency: 90, description: "Advanced styling with SCSS, animations, and responsive design" },
    { icon: <FaJsSquare />, name: "JavaScript", category: "Language", proficiency: 90, description: "ES6+ features, async programming, and DOM manipulation" },
    { icon: <FaJava />, name: "Java", category: "Language", proficiency: 80, description: "Object-oriented programming and enterprise applications" },
    { icon: <FaReact />, name: "React", category: "Frontend", proficiency: 85, description: "Component-based UI development with hooks and context" },
    { icon: <SiReact />, name: "React Native", category: "Mobile", proficiency: 75, description: "Cross-platform mobile app development with React" },
    { icon: <FaNode />, name: "Node.js", category: "Backend", proficiency: 80, description: "Server-side JavaScript and RESTful API development" },
    { icon: <GrMysql />, name: "MySQL", category: "Database", proficiency: 75, description: "Relational database design and SQL optimization" },
    { icon: <SiPostgresql />, name: "PostgreSQL", category: "Database", proficiency: 70, description: "Advanced relational database with JSON support" },
    { icon: <SiMongodb />, name: "MongoDB", category: "Database", proficiency: 70, description: "NoSQL database for flexible data storage" },
    { icon: <TbBrandFramerMotion />, name: "Framer Motion", category: "Animation", proficiency: 85, description: "Advanced animations and transitions for React" },
    { icon: <FaBootstrap />, name: "Bootstrap", category: "Frontend", proficiency: 90, description: "Responsive design and UI components" },
    { icon: <SiMui />, name: "Material-UI", category: "Frontend", proficiency: 85, description: "React component library for consistent design" }
];

const SkillStyleChange = () => {
    const { isDarkMode } = useTheme();
    const reactNativeIndex = skillsData.findIndex(skill => skill.name === "React Native");
    const [selectedSkill, setSelectedSkill] = useState(reactNativeIndex);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    // Split skills into 4 columns (2 on each side)
    const totalSkills = skillsData.length;
    const skillsPerColumn = Math.ceil(totalSkills / 4);
    const leftColumn1 = skillsData.slice(0, skillsPerColumn);
    const leftColumn2 = skillsData.slice(skillsPerColumn, skillsPerColumn * 2);
    const rightColumn1 = skillsData.slice(skillsPerColumn * 2, skillsPerColumn * 3);
    const rightColumn2 = skillsData.slice(skillsPerColumn * 3);

    return (
        <section id="skills" className={styles.skills}>
            <motion.div
                className={styles.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.h2 variants={itemVariants} className={styles.title}>
                    My Skills
                </motion.h2>
                <motion.p variants={itemVariants} className={styles.subtitle}>
                    Technologies I work with
                </motion.p>

                <div className={styles.skillsLayout}>
                    {/* Left Side - Two Columns */}
                    <div className={styles.skillsSide}>
                        <motion.div className={styles.skillsColumn}>
                            {leftColumn1.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className={`${styles.skillIcon} ${selectedSkill === index ? styles.selected : ''}`}
                                    onClick={() => setSelectedSkill(index)}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {skill.icon}
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div className={styles.skillsColumn}>
                            {leftColumn2.map((skill, index) => (
                                <motion.div
                                    key={index + skillsPerColumn}
                                    className={`${styles.skillIcon} ${selectedSkill === index + skillsPerColumn ? styles.selected : ''}`}
                                    onClick={() => setSelectedSkill(index + skillsPerColumn)}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {skill.icon}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Middle Column - Skill Details */}
                    <motion.div className={styles.skillDetails}>
                        {selectedSkill !== null ? (
                            <motion.div
                                className={styles.selectedSkillCard}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className={styles.skillIcon}>
                                    {skillsData[selectedSkill].icon}
                                </div>
                                <h3 className={styles.skillName}>{skillsData[selectedSkill].name}</h3>
                                <p className={styles.skillCategory}>{skillsData[selectedSkill].category}</p>
                                <div className={styles.proficiencyBar}>
                                    <div
                                        className={styles.proficiencyFill}
                                        style={{ width: `${skillsData[selectedSkill].proficiency}%` }}
                                    />
                                </div>
                                <p className={styles.skillDescription}>{skillsData[selectedSkill].description}</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                className={styles.placeholder}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <p>Select a skill to view details</p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Right Side - Two Columns */}
                    <div className={styles.skillsSide}>
                        <motion.div className={styles.skillsColumn}>
                            {rightColumn1.map((skill, index) => (
                                <motion.div
                                    key={index + skillsPerColumn * 2}
                                    className={`${styles.skillIcon} ${selectedSkill === index + skillsPerColumn * 2 ? styles.selected : ''}`}
                                    onClick={() => setSelectedSkill(index + skillsPerColumn * 2)}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {skill.icon}
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div className={styles.skillsColumn}>
                            {rightColumn2.map((skill, index) => (
                                <motion.div
                                    key={index + skillsPerColumn * 3}
                                    className={`${styles.skillIcon} ${selectedSkill === index + skillsPerColumn * 3 ? styles.selected : ''}`}
                                    onClick={() => setSelectedSkill(index + skillsPerColumn * 3)}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {skill.icon}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default SkillStyleChange;
