import Lottie from "lottie-react";
import loadingAnimation from "../../animations/LoadingUI.json";

const LoadingScreen = () => {
  return (
    <div>
      {
        <div className="bg-white w-full h-full fixed top-0 left-0 elements-center-row z-10000 ">
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            autoplay={true}
            style={{ height: 200, width: 200 }}
          />
        </div>
      }
    </div>
  );
};

export default LoadingScreen;
