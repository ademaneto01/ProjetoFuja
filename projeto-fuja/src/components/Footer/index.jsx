import './styles.css'
const Footer = () => (
    <footer className='footer'>
        <div className='left-container'>
            <a href="/">
                <img src="/img/logoFuja.svg" alt="logoFuja" className="logo" />
            </a>
            <p>A sua produção audiovisual fora do convencional</p>
        </div>
        <div className='right-container'>
            <nav>
                <a href="/">Home</a>
                <a href="/">historia do fuja</a>
                <a href="/">Portifólio</a>
                <a href="/">Portal de aventuras</a>
            </nav>
            <div className="social-media">
                <p>Acompanhe a gente nas redes sociais</p>
                <div className='social-media-icons'>
                    <a  href="https://www.youtube.com/"><img src="/img/social-icons/youtube.svg" alt="youtube"/></a>
                    <a  href="https://www.instagram.com/"><img src="/img/social-icons/insta.svg" alt="insta"/></a>
                    <a  href="https://www.tiktok.com/"><img src="/img/social-icons/tiktok.svg" alt="tiktok"/></a>
                    <a  href="https://www.facebook.com/"><img src="/img/social-icons/face.svg" alt="face"/></a>
                </div>
                <div className="contact">
                    <a href="mailto:fuja@gmail.com">fuja@gmail.com</a> | <a href="tel:5511983743838">+55 (11) 98374-3838</a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer