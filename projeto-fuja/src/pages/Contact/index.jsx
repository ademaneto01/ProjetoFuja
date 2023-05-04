import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="container">
      <Header />
      <div className="contactPage">
        <div className="contactPageInfo">
          <h1>FUJA DO CONVENCIONAL</h1>
          <div className="contactList">
            <h2>Entre em contato</h2>
            <a href="mailto:fuja@gmail.com">fuja@gmail.com</a>
            <a href="tel:5511983743838">+55 (11) 98374-3838</a>
            <div className="contactSocialMedia">
              <p>Acompanhe a gente nas redes sociais</p>
              <div className="contactSocialMediaIcons">
                <a
                  href="https://www.youtube.com/@FUJAbr/videos"
                  target="_blank"
                >
                  <img src="/img/social-icons/youtube.svg" alt="youtube" />
                </a>
                <a
                  href="https://instagram.com/fujabr?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  <img src="/img/social-icons/insta.svg" alt="insta" />
                </a>
                <a href=" https://www.tiktok.com/@fuja_br" target="_blank">
                  <img src="/img/social-icons/tiktok.svg" alt="tiktok" />
                </a>
                <a href="https://www.facebook.com/fujabr/" target="_blank">
                  <img src="/img/social-icons/face.svg" alt="face" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
