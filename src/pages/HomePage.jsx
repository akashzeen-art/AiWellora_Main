import { Link } from 'react-router-dom'
import { useLang } from '../components/LanguageContext'
import heroImg from '../assets/hero.png'
import lifestyleImg from '../assets/lifestyle.png'
import healthImg from '../assets/health.png'
import relaxationImg from '../assets/relaxation.png'
import swearlImg from '../assets/swearl.png'
import grayImg from '../assets/gray.png'
import lifestyleIcon from '../assets/lifestyle_icon.png'
import healthIcon from '../assets/health_icon.png'
import relaxationIcon from '../assets/relaxation_icon.png'
import './HomePage.css'

export default function HomePage() {
  const { t } = useLang()
  const scrollToLifestyle = () => {
    document.getElementById('lifestyle')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="home hero">
      {/* Hero — matches homepage.html */}
      <div className="home-hero-wrap">
        <div className="container home-hero-container">
          <div className="circle" aria-hidden="true" />
          <div className="content mb-5">
            <div className="header title my-5">{t.home.hero}</div>
            <button
              type="button"
              className="more_button my-5 mx-auto start"
              onClick={scrollToLifestyle}
            >
              {t.home.startHere}
            </button>
            <div className="image-container py-5 my-5">
              <img src={heroImg} alt="Relaxation Image" width="90%" />
            </div>
          </div>
        </div>
      </div>

      {/* Lifestyle section */}
      <div className="container-fluid relative index5 py-5 px-0 mx-0 first" id="lifestyle">
        <div className="circle_2" aria-hidden="true" />
        <img className="swearl" src={swearlImg} alt="" width="90%" aria-hidden="true" />

        <div className="container relative index-2">
          <div className="row g-5 py-4 align-items-center">
            <div className="col-12 col-md-6 ps-3">
              <img className="category-images" src={lifestyleImg} alt="Lifestyle" width="100%" />
            </div>
            <div className="col-12 col-md-6 ps-3 px-lg-5">
              <div
                className="icon-category lifestyle_icon"
                style={{ backgroundImage: `url(${lifestyleIcon})` }}
              />
              <div className="title pt-3">{t.home.lifestyle}</div>
              <div className="basic_text my-5">{t.home.lifestyleText}</div>
            </div>
            <div className="col-12 mx-auto my-5">
              <Link to="/lifestyle" className="moreButton">{t.home.more}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Health section */}
      <div className="container-fluid relative index5 py-5 px-0 mx-0 second">
        <div className="circle_3" aria-hidden="true" />
        <img className="gray" src={grayImg} alt="" width="90%" aria-hidden="true" />

        <div className="container">
          <div className="row g-5 py-4 align-items-center">
            <div className="col-12 col-md-6 ps-3 px-lg-5">
              <div
                className="icon-category health_icon"
                style={{ backgroundImage: `url(${healthIcon})` }}
              />
              <div className="title pt-3">{t.home.health}</div>
              <div className="basic_text my-5">{t.home.healthText}</div>
            </div>
            <div className="col-12 col-md-6 ps-3">
              <img className="category-images" src={healthImg} alt="Health" width="100%" />
            </div>
            <div className="col-12 mx-auto my-5">
              <Link to="/health" className="moreButton">{t.home.more}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Relaxation section */}
      <div className="container-fluid relative index5 py-5 px-0 mx-0 third">
        <div className="container">
          <div className="row g-5 py-4 align-items-center">
            <div className="col-12 col-md-6 ps-3">
              <img
                className="category-images"
                src={relaxationImg}
                alt="Relaxation"
                width="100%"
              />
            </div>
            <div className="col-12 col-md-6 ps-3 px-lg-5">
              <div
                className="icon-category relaxation_icon"
                style={{ backgroundImage: `url(${relaxationIcon})` }}
              />
              <div className="title pt-3">{t.home.relaxation}</div>
              <div className="basic_text my-5">{t.home.relaxationText}</div>
            </div>
            <div className="col-12 mx-auto my-5">
              <Link to="/relaxation" className="moreButton">{t.home.more}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
