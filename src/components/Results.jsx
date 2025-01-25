import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input); //SET CONNST for RESULTS based on the INPUT PROP
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  /* PSEUDO CODE:
    1. Store Values inside Arrays.
    2. Map Arrays inside ea. Table Value.
    3. Change based on Input Values. <-From App!
    */

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th> Years: </th>
            <th> Investment Value: </th>
            <th> Interest/Yr: </th>
            <th> Total Interest: </th>
            <th> Invested Capital: </th>
          </tr>
        </thead>

        <tbody>
          {resultData.map((yearData) => {
            //1. maps value(yearData)
            const totalInterest = //2. Sets the constant for TOTAL INTEREST
              yearData.valueEndOfYear - // where the valueEndofYear
              yearData.annualInvestment * yearData.year - // (minus) annualInvestment * initialInvestment
              initialInvestment;

            const totalAmountInvested = yearData.valueEndOfYear - totalInterest; //3.SET TOTAL  INV.AMT.
            return (
              <tr key={yearData.year}>
                <td>{yearData.year} </td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)} </td>
                <td> {formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
