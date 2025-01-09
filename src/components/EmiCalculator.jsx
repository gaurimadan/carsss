import React, { useState, useEffect } from 'react';

export default function EmiCalculator({ carPrice }) {
  const [loanAmount, setLoanAmount] = useState(carPrice);
  const [months, setMonths] = useState(60);
  const [interestRate, setInterestRate] = useState(5);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, months, interestRate]);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = months;
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    setEmi(emi.toFixed(2));
  };

  return (
    <div className="bg-green-50 p-6 rounded-3xl shadow-xl space-y-6">
      <h2 className="text-3xl font-semibold mb-6 text-green-800">EMI Calculator</h2>
      <div>
        <label htmlFor="loanAmount" className="block text-sm font-medium text-green-700">
          Loan Amount ($)
        </label>
        <input
          id="loanAmount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="months" className="block text-sm font-medium text-green-700">
          Loan Term (months)
        </label>
        <input
          id="months"
          type="range"
          min="12"
          max="84"
          step="12"
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className="mt-1 block w-full"
        />
        <div className="mt-1 text-sm text-green-600">{months} months</div>
      </div>
      <div>
        <label htmlFor="interestRate" className="block text-sm font-medium text-green-700">
          Interest Rate (%)
        </label>
        <input
          id="interestRate"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          step="0.1"
        />
      </div>
      <div className="mt-6 text-center">
        <span className="text-2xl font-bold text-green-700">Monthly EMI: ${emi}</span>
      </div>
    </div>
  );
}

