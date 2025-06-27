import TrueFocus from './TrueFocus';
import Explore from './Explore';
import BlurText from '../Home/BlurText';
import NavBar from '../Home/NavBar';
import ImageStack from './ImageStack';
export default function AboutUs() {


  return (
    <div className="container-fluid">
      
      <div className="row mx-my-5 justify-content-center">
        <div className="col-11 shadow-lg rounded p-4 my-5">
          <div className="text-center mb-4">
            <TrueFocus 
              sentence="Explore Now!"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
          <Explore />
        </div>
      </div>
      <section id='About'>
      <h2 className="text-center justify-content-center fw-bold mb-5 display-4" style={{marginLeft:'40%'}}>
         <BlurText
        text="About Us!"
        delay={100}
        animateBy="words"
        direction="top"
       
        className="text-xl mb-8"
      />
      </h2>
            <div className='container'>
                <div className='row align-items-start'>
            <div className="col-lg-8 bg-light p-5 mx-4 my-auto rounded">
                <p className="fs-4 text-muted">
                <span className="fst-italic text-dark">
                    “Trip Bolt is your trusted travel companion, offering fast, safe, and
                    affordable bus booking across India. Whether you're heading home, planning a weekend getaway,
                    or exploring new cities — we make your journey smooth and simple.”
                </span>
                <br /><br />
                <span className="fw-semibold text-dark">
                    With real-time seat availability, secure payment options, and easy cancellations, booking your
                    next trip is just a few clicks away. <span className="text-primary">Your Journey, Our Priority.</span>
                </span>
                </p>
            </div>
           <div className="col position-relative my-2 p-2">
            <ImageStack />
            </div>

      </div>      
    </div>
    </section>
   
    </div>
  );
}
