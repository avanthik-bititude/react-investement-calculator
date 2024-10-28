import React from "react";
import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

const Results = ({ value }) => {
  let initialInvestment = +value.initialInvestment;
  let annualInvestment = +value.annualInvestment;
  let expectedReturn = +value.expectedReturn;
  let duration = +value.duration;
  console.log(typeof duration);

  let result = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });
  console.log(result);

  const firstInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Intrest (Year) </th>
            <th>Total intrest</th>
            <th>invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((yearData, index) => {
            const totalIntrest =
              yearData.valueEndOfYear -
              yearData.interest * yearData.year -
              firstInvestment;
            const investedCapital = yearData.valueEndOfYear - totalIntrest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalIntrest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Results;
