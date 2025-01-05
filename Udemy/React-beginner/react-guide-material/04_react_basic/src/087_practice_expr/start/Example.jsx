const title = 'Expression';
const array = ['item1', 'item2', 'item3'];
const fn = (arg) => {
  return `${arg} Function`;
};
const upperCaseText = 'UpperCaseText';

const Example = () => {
  return (
    <div className="fragment">
      <h3>Hello JSX</h3>
      <h3>{upperCaseText.toUpperCase()}</h3>
      <h3>Hello {title}</h3>
      <h3>{array}</h3>
      <h3>{fn('Hello')}</h3>
      <h3></h3>
    </div>
  );
};

export default Example;
