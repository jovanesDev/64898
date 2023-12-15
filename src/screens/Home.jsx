import Count from "../components/Count";
import WithTitle from "../templates/WithTitle";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <WithTitle text={'Contador del Home'}>
        <Count counter_default={2} />
        <Count counter_default={10} />
      </WithTitle>
      <WithTitle text={'Contador del los clicks!'}>
        <Count counter_default={2} />
      </WithTitle>
    </div>
  );
};

export default Home;
