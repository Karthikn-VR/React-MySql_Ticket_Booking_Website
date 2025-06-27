import Stack from './Stack'
import bus from './images/bus.png';
import passengers from './images/passengers.png';
import buses from './images/buses.png';
import seats from './images/seats.png';
import sleeper from './images/sleeper.png';

export default function ImageStack(){
const images = [
  { id: 1, img: bus },
  { id: 2, img: passengers},
  { id: 3, img: seats},
  { id: 4, img: sleeper },
  { id: 5, img: buses }
];
  
return (<Stack
  randomRotation={true}
  sensitivity={180}
  sendToBackOnClick={false}
  cardDimensions={{ width: 360, height: 300 }}
  cardsData={images}
/>);
}