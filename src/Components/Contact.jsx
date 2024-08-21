import React from 'react'
import { contact as styles } from './styled'
function Contact() {
  return (
    <section id='contact' className={styles.contact}>
      <h5>Contact</h5>
      <div>
      <form>
        <p>Send me message</p>
        <input type='text' placeholder='Subject' />
        <input type='email' placeholder='Email' />
        <input type='number' placeholder='Phone' />
        <textarea  rows='8' placeholder='message' />
        <button> Send</button>
      </form>
      <div>
        {/* <h5>Hello</h5> */}
        <p>As a dedicated front-end and full-stack developer, I specialize in creating dynamic, user-friendly websites tailored to the unique needs of companies, shops, and various businesses. Whether you require a sleek, responsive front-end design or a comprehensive full-stack solution, I am here to bring your vision to life with modern technologies and best practices.

    </p>
    <p>+91 7671859776</p>
    <p>mkarthik1729@gmail.com</p>
      </div>
      </div>
    </section>
  )
}

export default Contact