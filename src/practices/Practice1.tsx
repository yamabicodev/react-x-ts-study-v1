export const Practice1 = () => {
  const calcTotalFee = (fee: number) => {
    const total = fee * 1.1;
    console.log(total);
  };
  const onClickPractice1 = () => calcTotalFee(1000);

  return (
    <div>
      <p>TypeScript練習問題1 - 引数の型指定</p>
      <button onClick={onClickPractice1}>TypeScript練習問題1を実行</button>
    </div>
  );
};
