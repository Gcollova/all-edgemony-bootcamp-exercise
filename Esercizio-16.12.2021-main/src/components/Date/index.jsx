import {formatRelative} from 'date-fns'
import { it } from 'date-fns/locale'


const FixedDate = (date) =>
formatRelative( new Date(date),new Date(),{            
    locale: it
    })
 
    

        
            
            
        


export default FixedDate