export const Practice4 = () => {
  /**
   * tsconfigの compilerOptions > "strict": trueの場合、
   * 現在の状態では引数が暗黙的にany型になるためエラーが発生する。
   * この状態のままエラーを消す方法は、noImplicitAny:falseを設定する。
   * @param fee
   */
  //
  const calcTotalFee = (fee) => {
    const total = fee * 1.1;
    console.log(total);
  };
  const onClickPractice4 = () => calcTotalFee(1000);

  return (
    <div>
      <p>TypeScript練習問題1 - 設定ファイルを変更する</p>
      <button onClick={onClickPractice4}>TypeScript練習問題1を実行</button>
    </div>
  );
};
