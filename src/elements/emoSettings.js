import happyIcon from './happy.png'
import angryIcon from './angry.png'
import sadIcon from './sad.png'
import anxiousIcon from './anxious.png'



const moods = {
    happy:{
        bgColor: '#F7BF12',
        color: 'white',
        icon: happyIcon
      },
     angry: {
       bgColor: '#FE5B60',
       color: 'white',
       icon: angryIcon
     },
     anxious: {
       bgColor: '#FE5BC2',
       color: 'white',
       icon: anxiousIcon
     },
     sad: {
       bgColor: '#615BFE',
       color: 'white',
       icon: sadIcon
     },
     default: {
       bgColor: 'white',
       color: 'black',
       icon:'no icon'
     }
  }

  export default moods