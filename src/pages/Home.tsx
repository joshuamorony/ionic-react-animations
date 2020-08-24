import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonButton,
  IonToolbar,
  createAnimation,
  CreateAnimation,
} from "@ionic/react";
import React, { useState, useRef } from "react";
import "./Home.css";

const Home: React.FC = () => {
  // Animation Method One (CreateAnimation)
  const animationOneRef = useRef<CreateAnimation>(null);
  const [playAnimation, setPlayAnimation] = useState(false);

  // Animation Method Two (createAnimation)
  const animationTwoRef = useRef<HTMLDivElement>(null);

  const handlePlayAnimationOne = () => {
    // Play Animation by changing state
    // setPlayAnimation(true);

    if (animationOneRef.current !== null) {
      // Set up animation manually
      /*animationOneRef.current.setupAnimation({
        duration: 1000,
        fromTo: {
          property: "transform",
          fromValue: "translateY(0) rotate(0)",
          toValue: `translateY(200px) rotate(180deg)`,
        },
        easing: "ease-out",
      });*/

      // Play animation with animation reference
      animationOneRef.current.animation.play();
    }
  };

  const handlePlayAnimationTwo = () => {
    if (animationTwoRef.current !== null) {
      const animation = createAnimation()
        .addElement(animationTwoRef.current)
        .duration(1000)
        .fromTo("transform", "translateY(0) rotate(0)", "translateY(200px) rotate(180deg)")
        .easing("ease-out");

      animation.play();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>React Animations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="animation-container">
          <div className="animation-section">
            <IonButton expand="full" onClick={() => handlePlayAnimationOne()}>
              Play Animation #1
            </IonButton>
            <CreateAnimation
              ref={animationOneRef}
              duration={1000}
              fromTo={{
                property: "transform",
                fromValue: "translateY(0) rotate(0)",
                toValue: `translateY(200px) rotate(180deg)`,
              }}
              easing="ease-out"
              /*play={playAnimation}*/
            >
              <div className="square"></div>
            </CreateAnimation>
          </div>
          <div className="animation-section">
            <IonButton expand="full" onClick={() => handlePlayAnimationTwo()}>
              Play Animation #2
            </IonButton>
            <div ref={animationTwoRef} className="square"></div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
