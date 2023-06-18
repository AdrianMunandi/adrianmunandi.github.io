function calculateNetSalary(basicSalary, benefits) {

  const grossSalary = basicSalary + benefits;


  let taxableIncome = grossSalary - 2400 - 5000 - 9000;
  if (taxableIncome > 20000) {
    taxableIncome -= 20000;
  } else {
    taxableIncome = 0;
  }


  let tax = 0;
  if (taxableIncome <= 24000) {
    tax = taxableIncome * 0.1;
  } else if (taxableIncome <= 32333) {
    tax = (taxableIncome - 24000) * 0.25 + 2400;
  } else {
    tax = (taxableIncome - 32333) * 0.3 + 5600;
  }


  let nhifDeduction = 0;
  if (grossSalary <= 5999) {
    nhifDeduction = 150;
  } else if (grossSalary <= 7999) {
    nhifDeduction = 300;
  } else if (grossSalary <= 11999) {
    nhifDeduction = 400;
  } else if (grossSalary <= 14999) {
    nhifDeduction = 500;
  } else if (grossSalary <= 19999) {
    nhifDeduction = 600;
  } else if (grossSalary <= 24999) {
    nhifDeduction = 750;
  } else if (grossSalary <= 29999) {
    nhifDeduction = 850;
  } else if (grossSalary <= 34999) {
    nhifDeduction = 900;
  } else if (grossSalary <= 39999) {
    nhifDeduction = 950;
  } else if (grossSalary <= 44999) {
    nhifDeduction = 1000;
  } else if (grossSalary <= 49999) {
    nhifDeduction = 1100;
  } else if (grossSalary <= 59999) {
    nhifDeduction = 1200;
  } else if (grossSalary <= 69999) {
    nhifDeduction = 1300;
  } else if (grossSalary <= 79999) {
    nhifDeduction = 1400;
  } else if (grossSalary <= 89999) {
    nhifDeduction = 1500;
  } else if (grossSalary <= 99999) {
    nhifDeduction = 1600;
  } else {
    nhifDeduction = 1700;
  }


  let nssfContribution = 0;
  if (basicSalary <= 6000) {
    nssfContribution = basicSalary * 0.06;
  } else if (basicSalary <= 18000) {
    nssfContribution = 360;
  }


  let fringeBenefitTax = 0;
  const marketInterestRate = 9;
  const marketInterestRateDecimal = marketInterestRate / 100;
  if (benefits > 0 && benefits * marketInterestRateDecimal > 0.5 * basicSalary) {

  }
}
