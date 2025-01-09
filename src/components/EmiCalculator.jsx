import React, { useState, useEffect } from "react";

export default function EmiCalculator({ carPrice }) {
  const [loanAmount, setLoanAmount] = useState(carPrice); 
  const [downPayment, setDownPayment] = useState(0);
  const [months, setMonths] = useState(66); 
  const interestRate = 5; 
  const [emi, setEmi] = useState(0); 

  useEffect(() => {
    const principal = loanAmount - downPayment; 
    const rate = interestRate / 12 / 100; 
    const time = months;
    const emiValue =
      (principal * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1); 
    setEmi(principal > 0 ? emiValue.toFixed(2) : 0); 
  }, [loanAmount, downPayment, months]);

  return (
    <div className="bg-gray-800/50 p-8 rounded-3xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        EMI Calculator
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <label className="block text-gray-400 mb-2">Loan Amount ($)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full bg-gray-900/50 border border-purple-500/20 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500/40"
          />
        </div>
        
        <div>
          <label className="block text-gray-400 mb-2">Down Payment ($)</label>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max={carPrice}
              step="100"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full accent-purple-500"
            />
            <div className="text-gray-400">${downPayment}</div>
          </div>
        </div>
       
        <div>
          <label className="block text-gray-400 mb-2">Loan Term (months)</label>
          <div className="space-y-2">
            <input
              type="range"
              min="12"
              max="84"
              step="12"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full accent-purple-500"
            />
            <div className="text-gray-400">{months} months</div>
          </div>
        </div>
      
        
      </div>
      <div className="mt-8 text-center p-6 bg-gray-900/50 rounded-2xl">
        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Monthly EMI: ${emi}
        </span>
      </div>
    </div>
  );
}
