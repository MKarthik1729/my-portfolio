import React, { useState } from 'react'
import styles from './style.module.scss'
function Navbar() {
    const [isHovered, setIsHovered] = useState(true);
    const handleMouseMove = (event) => {
      const hoverArea = event.currentTarget;
      const height = hoverArea.offsetHeight;
      const top20Percent = height * 1;
  
      if (event.clientY<= top20Percent) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };
  return (
    <div>

    {/* <div onMouseMove={handleMouseMove} className={`${styles.navbar} ${isHovered?styles.notHovered:styles.hovered}` } > */}
    <div className={styles.navbar}>
        <a href='/'>Home</a>
        <ul>
            <li>Projects</li>
            <li>Skills</li>
            <li>Resume</li>
        </ul>
        <i className={`fa fa-bars ${styles.icon}`} aria-hidden="true"></i>
    </div>
    </div>
  )
}

export default Navbar