export const Practice3 = () => {
  // const func-name = (arg: arg-type): return-tye => {}
  const getCalcTotalFee = (fee: number): number => {
    const total: number = fee * 1.1;
    return total;
  };
  const onClickPractice3 = () => {
    let total: number = 0;
    total = getCalcTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>TypeScript練習問題3 - 変数の型指定</p>
      <button onClick={onClickPractice3}>TypeScript練習問題3を実行</button>
    </div>
  );
};
