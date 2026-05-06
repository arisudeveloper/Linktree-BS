import logo from "../../assets/images/logo-bs.png"
import iconEmail from "../../assets/images/icon-email.png"
import iconWhats from "../../assets/images/icon-whats.png"
import iconSite from "../../assets/images/icon-site.png"
import iconInsta from "../../assets/images/icon-instagram.png"
import iconLinkedin from "../../assets/images/icon-linkedin.png"
import { useTranslation } from 'react-i18next';
import './Home.css'

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <div className='containerHome'>
      
      <section className='items'>
        <img src={logo} alt="logo-bs" className='logo' />

        <h2>Brazil Sensations</h2>
        <section className="sectionItemsVote">
          <a href="https://www.worldtravelawards.com/vote" target="_blank"><button id="vote">🏆 VOTE HERE | WORLD TRAVEL AWARDS <br /> <br />Brazil’s Leading Destination Management Company 2026</button></a>
        </section>

        <section className="sectionItems">
          <a href="https://brazilsensations.com/" target='_blank' className="linkIcon"><button><img src={iconSite} className='icon' /></button></a>
          <a href="https://www.instagram.com/brazilsensations/" target='_blank' className="linkIcon"><button><img src={iconInsta} className='icon' /></button></a>
          <a href="https://br.linkedin.com/company/brazil-sensations" target='_blank' className="linkIcon"><button><img src={iconLinkedin} className='icon' /></button></a>
        </section>
        <h2>Chloé Hathaway - Director:</h2>
        <section className="sectionItems">
          <a href="mailto:chloe.hathaway@brazilsensations.com" title='Chloé' className="linkIcon"><button><img src={iconEmail} className='icon' /></button></a>
        </section>

        <h2>Laura Policastro - Director LATAM:</h2>
        <section className="sectionItems">
          <a href="mailto:laura.policastro@brazilsensations.com" title='Laura' className="linkIcon"><button className="buttons"><img src={iconEmail} className='icon' /></button></a>
          <a href="https://wa.me/5521994852232" target='_blank' title='Laura' className="linkIcon"><button className="buttons"><img src={iconWhats} className='icon' /></button></a>
        </section>

        

      </section>
    </div>
  )
}

export default Home