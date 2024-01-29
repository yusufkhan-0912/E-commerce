import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/Productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "DigitalEra E-commerce",
  };
  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
