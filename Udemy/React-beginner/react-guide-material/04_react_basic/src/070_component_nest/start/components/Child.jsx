import "./Child.css";
import { List } from "./List.jsx"; 

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>   
      <List />
    </div>
  );
};

export default Child;
