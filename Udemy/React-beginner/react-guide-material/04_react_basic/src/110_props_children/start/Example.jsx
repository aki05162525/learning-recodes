import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？" >
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Container> 
    </div>
  );
};

export default Example;
