export const Practice2 = () => {
  // const func-name = (arg: arg-type): return-tye => {}
  const getCalcTotalFee = (fee: number): number => {
    const total = fee * 1.1;
    return total;
  };
  const onClickPractice2 = () => console.log(getCalcTotalFee(1000));

  return (
    <div>
      <p>TypeScript練習問題2 - 返却値の型指定</p>
      <button onClick={onClickPractice2}>TypeScript練習問題1を実行</button>
    </div>
  );
};
