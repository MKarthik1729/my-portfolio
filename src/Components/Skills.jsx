import React from 'react'
import { skills as styles } from './styled'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
function Skills() {
  return (
    <div id='skills' className={styles.skill}>
      <h2>Skills</h2>
      <div>
        <div>
        <FaPython />
        <p>Python</p>
        </div>
        <div>
          
        <FaHtml5 />
        <p>HTML</p>
          </div>
          <div>
          
        <FaCss3Alt />
        <p>CSS</p>
          </div>
          <div>
          
        <FaJsSquare />
        <p>JavaScript</p>
          </div>
          <div>
          
        <FaJava />
        <p>JAVA</p>
          </div>
          <div>
          
        <FaReact />
        <p>React JS</p>
          </div>
          <div>
          
        <FaNode />
        <p>Node JS</p>
          </div>
          <div>
          
        <GrMysql />
        <p>MySQL</p>
          </div>

          <div>
        <SiMongodb />
        <p>MongoDb</p>
          </div>

          <div>
        <TbBrandFramerMotion />
        <p>MongoDb</p>
          </div>
          <div>
        <FaBootstrap />
        <p>Bootstrap</p>
          </div>
          <div>
        <SiMui />
        <p>Material-UI</p>
          </div>

      </div>

    </div>
  )
}

export default Skills