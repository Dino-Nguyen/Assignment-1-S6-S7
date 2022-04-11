import Map from './Map.js'
import Item from './Item.js';
function Info() {
    return (
      <div > 
          <div>
             <div>Filter by year</div>
             <div>2022 dropdown</div>
         </div>
         <div>
              <Map/>
         </div>
         <div>
              <Item/>
         </div>
      </div>
    );
  }
  
  export default Info;