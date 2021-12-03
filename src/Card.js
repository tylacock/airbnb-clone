import katie from './images/katie-zaferes.png'
import star from './images/star.png'

export default function Card() {
    return (
        <section className="cards">
        <div className="card">
            <span className="availability">sold out</span>
            <img src={katie} alt="Katie" className="card--image"/>
            <div className="info">
                <img src={star} alt="star rating" className="info--ratings" />
                <span className="ratings--number">5.0</span>
                <span className="info--ratings">(6) • USA</span>
            </div>
            <p className="info--description">Life lessons with Katie Zaferes</p>
            <span className="info--price">From $136</span>
            <span className="info--person"> / person</span>
        </div></section>
    )
}