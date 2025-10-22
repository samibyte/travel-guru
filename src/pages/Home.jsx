import { useOutletContext } from "react-router";
import CardSlider from "../components/CardSlider";

const Home = () => {
  const data = useOutletContext();

  console.log(data);

  return (
    <div className="flex h-[600px] justify-start relative overflow-x-hidden">
      <div className="text-white space-y-8 w-lg ml-50">
        <h2 className="font-bebas-neue text-8xl">Cox's bazar</h2>
        <p>
          Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known
          for its very long, sandy beachfront, stretching from Sea Beach in the
          north to Kolatoli Beach in the south. Aggameda Khyang monastery is
          home to bronze statues and centuries-old Buddhist manuscripts. South
          of town, the tropical rainforest of Himchari National Park has
          waterfalls and many birds. North, sea turtles breed on nearby Sonadia
          Island.
        </p>
        <button className="btn btn-primary text-black px-8">Booking </button>
      </div>
      <div className="w-7/10 absolute right-0 translate-x-1/7">
        <CardSlider data={data} />
      </div>
    </div>
  );
};

export default Home;
