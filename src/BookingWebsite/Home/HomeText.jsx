import BlurText from "./BlurText";
import BlurText2 from "./BlurText"

export default function HomeText(){
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

return(
       <>
      <BlurText
        text="Hop On"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
      <BlurText2
        text="Let's Go!"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
      </>
);
}