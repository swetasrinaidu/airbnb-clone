import photo from '../Images/hero-photo.webp'
export default function Hero(){
    return(
        <section className="hero-section">
            <img src={photo} alt="airbnb photo" className='hero-photo'/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quos error hic assumenda alias atque delectus ut aut quae consequatur tenetur molestiae saepe nisi exercitationem praesentium earum, eaque optio ea.</p>
        </section>
    )
}