import { BsGithub } from 'react-icons/bs'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.contacts}>
          <a href="https://www.github.com/jngmnj">
            {" "}
            <BsGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer