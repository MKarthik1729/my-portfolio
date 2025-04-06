import React, { useState } from 'react';
import { contact as styles } from './styled';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This feature is not yet available. \nPlease use mail (mkarthik1729@gmail.com) or mobile (7671859776)");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section id="contact" className={styles.contact}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className={styles.title}>
          Get In Touch
        </motion.h2>
        <motion.p variants={itemVariants} className={styles.subtitle}>
          Let's work together
        </motion.p>

        <div className={styles.content}>
          <motion.form 
            className={styles.form}
            variants={containerVariants}
            onSubmit={handleSubmit}
          >
            <motion.div variants={itemVariants} className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants} className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants} className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div variants={itemVariants} className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.button
              variants={itemVariants}
              type="submit"
              className={styles.submitButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div 
            className={styles.info}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className={styles.infoContent}>
              <h3>About Me</h3>
              <p>
                As a dedicated front-end and full-stack developer, I specialize in creating 
                dynamic, user-friendly websites tailored to the unique needs of companies, 
                shops, and various businesses. Whether you require a sleek, responsive 
                front-end design or a comprehensive full-stack solution, I am here to bring 
                your vision to life with modern technologies and best practices.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaPhone className={styles.icon} />
                <a href="tel:+917671859776">+91 7671859776</a>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <a href="mailto:mkarthik1729@gmail.com">mkarthik1729@gmail.com</a>
              </div>
              <div className={styles.socialLinks}>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;