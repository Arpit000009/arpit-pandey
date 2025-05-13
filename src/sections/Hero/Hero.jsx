import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import leetcodeIcon from '../../assets/icons8-leetcode-50.png'
function Hero() {
  return (
    <section id='hero' className='styles.container'>
      <div className='styles.colorModeContainer'>
        <img className={styles.hero} src={heroImg} alt="Profile picture of Arpit Pandey" />
        <img
         classname = {styles.color} 
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
        </span>
      </div>
    </section>
  )
}

export default Hero
