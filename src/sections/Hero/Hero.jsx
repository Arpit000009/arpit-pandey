import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import leetcodeIcon from '../../assets/icons8-leetcode-50.png'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/Resume_arpit_s.pdf'
import { useTheme } from '../../common/ThemeContext'
function Hero() {
    const {theme,toggleTheme} = useTheme();
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture of Arpit Pandey" />
        <img
         className = {styles.color} 
         src={themeIcon} 
         alt="color mode icon" />
      </div>
      <div className={styles.info}>
        <h1>
            Arpit <br />
            Pandey
        </h1>
        <h2>FullStack Developer</h2>
        <span>
            <a href="https://leetcode.com/u/arpitpandey_cse21/" target='_blank'>
            <img src={leetcodeIcon} alt="leetcode icon" />
            </a>
            <a href="https://github.com/Arpit000009" target='_blank'>
            <img src={githubIcon} alt="github icon" />
            </a>
            <a href="https://www.linkedin.com/in/arpit-pandey-b7814027b" target='_blank'>
            <img src={linkedinIcon} alt="linkedin icon" />
            </a>
        </span>
        <p>with a passion for devloping mordern mernStack websites.</p>
        <a href={CV} download>
            <button className='hover' >
                Resume
            </button>
        </a>
      </div>
    </section>
  )
}

export default Hero
