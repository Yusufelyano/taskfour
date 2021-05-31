import { useState } from 'react';
import Base from './Base.js';


const Detective = () => {

   const[sherlock, setSherlock] = useState('психопат')
   return(
      <div>
         <Base sherlock={sherlock} />
      </div>
   )
}

export default Detective