import Card from './Card';
import image1 from '../Images/image1.webp'
import image2 from '../Images/image2.webp'
import image3 from '../Images/image3.webp'

export default function CardList(){
    return(
        <div>
           <h1>Top-rated apartments</h1>
           <div className='cardlist'>
                <Card img={image1} rating={4.53} cost={3000}/>
                <Card img={image2} rating={4.58} cost={4000}/>
                <Card img={image3} rating ={4.99} cost={2000}/>
           </div>


        </div>
    )
}