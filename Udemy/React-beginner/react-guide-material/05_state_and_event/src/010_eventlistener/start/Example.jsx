const Example = () => {
  const clickHandler = () =>{
    alert('クリックされました');  
  }
  const clickHandler1 = () =>{
    alert('だれですか？');  
  }
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler1}>クリックしてね</button>
    </>
  );
};

export default Example;
