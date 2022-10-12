import Card from './Card';
import data from '../data';

console.log(data)

export default function CardList(){
    const newData = data.map(el=>{
        return(<Card 
                key={el.id}
                {...el}
            />
        )
    })
    return(
        <div>
           <h1>Plan a trip with help from local Hosts around the world </h1>
           <div className='cardlist'>
              {newData}
           </div>


        </div>
    )
}