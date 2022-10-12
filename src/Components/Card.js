import star from '../Images/star.png'
export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt="" className="card-image" />
            <div className="card-stats">
               <span>India</span>
               <img src={star} alt="" className="card-star" />
               <span>{props.rating}</span>
            </div>
            <p className='gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate id laudantium deleniti omnis, tempore aliquam laborum ratione dolorem, tempora, sit molestias nemo nulla provident magni numquam dolorum at consequuntur neque.</p>
            <p className='bold'>₹ {props.cost}</p>
         
        </div>
    )
}