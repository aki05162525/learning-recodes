import { useState } from "react";

const Example = () => {
  const orderObj = { item: "apple", count: 10 };
  const [order, setOrder] = useState(orderObj);
  const changeItem = (e) => {
    setOrder({ item: e.target.value, count: orderObj.count });
  };
  const countUp = () => {};
  const countDown = () => {};
  return (
    <div>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように「+と-ボタンをクリックするとCountの表示が1ずつ増減する機能」と「input要素に連動してItemの表示が変更される機能」を実装してください。コンポーネントの外側（上部）に変数や関数を準備しているためうまく使ってください。
      </p>
      <h3>Item:{order.item}</h3>
      <h3>Count:{order.count}</h3>
      <input type="text" value={order.item} onChange={changeItem} />
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default Example;
