import star from '../Images/star.png'
export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img src={props.img} alt="image of place" className="card-image" />
            <div className="card-stats">
               <span>{props.country}</span>
               <img src={star} alt="" className="card-star" />
               <span>{props.rating}</span>
            </div>
            <p className='gray'>{props.description}</p>
            <p className='bold'> From ₹ {props.cost}/person</p>        
        </div>
    )
}