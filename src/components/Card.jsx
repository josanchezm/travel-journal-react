import LocIcon from '../assets/images/LocIcon.png'

export default function Card (props) {
    return (
        <>
            <div className="card">
                <img src={props.imageUrl} alt="Mount Fuji" />
                <section>
                    <div className="location-info">
                        <img src={LocIcon} alt="location icon" />
                        <h4>{props.location}</h4>
                        <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h2>{props.title}</h2>
                    <p className='period'>{props.startDate} - {props.endDate}</p>
                    <p className='description'>{props.description}</p>
                </section>
            </div>
            <hr />
        </>
        
    )
}