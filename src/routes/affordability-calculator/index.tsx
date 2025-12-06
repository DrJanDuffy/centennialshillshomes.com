import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';

export default component$(() => {
  const annualIncome = useSignal(100000);
  const monthlyDebt = useSignal(500);
  const downPayment = useSignal(50000);
  const interestRate = useSignal(6.5);
  const loanTerm = useSignal(30);
  
  const maxHomePrice = useSignal(0);
  const monthlyPayment = useSignal(0);
  const downPaymentPercent = useSignal(0);

  const calculateAffordability = () => {
    // 28% rule: housing costs should not exceed 28% of gross monthly income
    const monthlyIncome = annualIncome.value / 12;
    const maxMonthlyPayment = (monthlyIncome * 0.28) - monthlyDebt.value;
    
    const monthlyRate = (interestRate.value / 100) / 12;
    const numPayments = loanTerm.value * 12;
    
    if (monthlyRate === 0) {
      maxHomePrice.value = (maxMonthlyPayment * numPayments) + downPayment.value;
    } else {
      const loanAmount = maxMonthlyPayment * 
        ((Math.pow(1 + monthlyRate, numPayments) - 1) / 
         (monthlyRate * Math.pow(1 + monthlyRate, numPayments)));
      maxHomePrice.value = loanAmount + downPayment.value;
    }
    
    monthlyPayment.value = maxMonthlyPayment;
    downPaymentPercent.value = (downPayment.value / maxHomePrice.value) * 100;
  };

  const calculatorSchema = pageSchemas.servicePage({
    name: "Affordability Calculator",
    description: "Calculate how much home you can afford based on your income, debt, and down payment. Free affordability calculator for Las Vegas homebuyers.",
    slug: "affordability-calculator",
    serviceType: "Financial Calculator Services"
  });

  return (
    <>
      <SEOStructuredData type="Service" data={calculatorSchema} />

      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">Affordability Calculator</span>
            <br />
            How Much Home Can You Afford?
          </h1>
          <p class="hero-subtitle">
            Calculate how much home you can afford based on your income, debt, and down payment. 
            Free affordability calculator for Las Vegas homebuyers.
          </p>
        </div>
      </section>

      <section class="service-content py-16">
        <div class="container container-center max-w-4xl">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold mb-6">Affordability Calculator</h2>
            
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Annual Income ($)
                </label>
                <input
                  type="number"
                  value={annualIncome.value}
                  onInput$={(e) => {
                    annualIncome.value = Number((e.target as HTMLInputElement).value);
                    calculateAffordability();
                  }}
                  class="w-full px-4 py-2 border border-gray-300 rounded-md"
                  min="0"
                  step="1000"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Debt Payments ($)
                </label>
                <input
                  type="number"
                  value={monthlyDebt.value}
                  onInput$={(e) => {
                    monthlyDebt.value = Number((e.target as HTMLInputElement).value);
                    calculateAffordability();
                  }}
                  class="w-full px-4 py-2 border border-gray-300 rounded-md"
                  min="0"
                  step="100"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment ($)
                </label>
                <input
                  type="number"
                  value={downPayment.value}
                  onInput$={(e) => {
                    downPayment.value = Number((e.target as HTMLInputElement).value);
                    calculateAffordability();
                  }}
                  class="w-full px-4 py-2 border border-gray-300 rounded-md"
                  min="0"
                  step="1000"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={interestRate.value}
                  onInput$={(e) => {
                    interestRate.value = Number((e.target as HTMLInputElement).value);
                    calculateAffordability();
                  }}
                  class="w-full px-4 py-2 border border-gray-300 rounded-md"
                  min="0"
                  max="20"
                  step="0.1"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term (years)
                </label>
                <select
                  value={loanTerm.value}
                  onChange$={(e) => {
                    loanTerm.value = Number((e.target as HTMLSelectElement).value);
                    calculateAffordability();
                  }}
                  class="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="15">15 years</option>
                  <option value="20">20 years</option>
                  <option value="30">30 years</option>
                </select>
              </div>

              <button
                onClick$={() => calculateAffordability()}
                class="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                Calculate Affordability
              </button>
            </div>

            {maxHomePrice.value > 0 && (
              <div class="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 class="text-xl font-bold mb-4">Affordability Results</h3>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Maximum Home Price:</span>
                    <span class="font-bold text-lg">${maxHomePrice.value.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Monthly Payment:</span>
                    <span class="font-semibold">${monthlyPayment.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Down Payment:</span>
                    <span class="font-semibold">${downPayment.value.toLocaleString('en-US', { maximumFractionDigits: 0 })} ({downPaymentPercent.value.toFixed(1)}%)</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div class="mt-8">
            <h2 class="text-2xl font-bold mb-4">Understanding Affordability</h2>
            <p class="text-gray-700 mb-4">
              This calculator uses the 28% rule, which suggests that housing costs should not exceed 28% of 
              your gross monthly income. Your actual affordability may vary based on credit score, debt-to-income 
              ratio, and other factors. Understanding affordability helps you make informed decisions about home 
              purchases and ensures that you don't overextend financially.
            </p>
            <p class="text-gray-700 mb-4">
              Contact Dr. Jan Duffy for personalized affordability analysis and to connect with trusted lenders 
              for pre-approval. Her expertise in Las Vegas real estate and financing ensures that you receive 
              expert guidance throughout your home purchase process.
            </p>
          </div>
        </div>
      </section>

      <section class="service-content py-16 bg-gray-50">
        <div class="container container-center">
          <h2>Understanding Home Affordability</h2>
          <p>
            Home affordability is determined by several factors including income, debt, down payment, interest 
            rates, and loan terms. Understanding these factors helps you determine how much home you can afford 
            and make informed decisions about home purchases that support your financial goals.
          </p>

          <h3>The 28% Rule</h3>
          <p>
            The 28% rule is a common guideline that suggests housing costs should not exceed 28% of gross monthly 
            income. This rule helps ensure that homeowners can afford their mortgage payments while maintaining 
            financial stability and covering other expenses.
          </p>
          <p>
            Housing costs in the 28% rule typically include principal, interest, property taxes, and homeowners 
            insurance. HOA fees, utilities, and maintenance costs are separate but should also be considered when 
            evaluating affordability.
          </p>
          <p>
            The 28% rule provides a conservative guideline that helps buyers avoid overextending financially. 
            However, actual affordability can vary based on individual circumstances, debt levels, and financial 
            goals. Some buyers may be comfortable with higher housing cost ratios, while others may prefer lower 
            ratios for greater financial flexibility.
          </p>

          <h3>Debt-to-Income Ratio</h3>
          <p>
            Debt-to-income ratio is another important factor in affordability, measuring total monthly debt 
            payments relative to monthly income. Lenders typically prefer debt-to-income ratios below 43%, 
            including housing costs and other debts.
          </p>
          <p>
            Understanding your debt-to-income ratio helps you evaluate affordability and identify opportunities 
            to improve your borrowing capacity. Reducing debt or increasing income can improve your debt-to-income 
            ratio and increase your purchasing power.
          </p>

          <h3>Down Payment Impact</h3>
          <p>
            Down payments significantly affect affordability by reducing loan amounts, monthly payments, and 
            potentially improving interest rates. Larger down payments increase purchasing power and reduce 
            monthly housing costs, making homes more affordable.
          </p>
          <p>
            Understanding how down payments affect affordability helps you plan your home purchase and make 
            informed decisions about how much to put down. Down payment assistance programs may be available 
            for first-time buyers, providing additional options for achieving homeownership.
          </p>

          <h2>Factors Affecting Affordability</h2>
          <p>
            Several factors affect home affordability beyond income and debt, including interest rates, loan terms, 
            property taxes, insurance, and HOA fees. Understanding these factors helps you evaluate total housing 
            costs and make informed affordability decisions.
          </p>

          <h3>Interest Rates</h3>
          <p>
            Interest rates significantly affect affordability by determining monthly payments and total loan costs. 
            Lower interest rates reduce monthly payments and increase purchasing power, while higher rates reduce 
            affordability and purchasing power.
          </p>
          <p>
            Understanding how interest rates affect affordability helps you evaluate financing options and make 
            informed decisions about when to buy. Interest rates can change over time, affecting affordability 
            and purchasing power.
          </p>

          <h3>Loan Terms</h3>
          <p>
            Loan terms affect affordability by determining monthly payments and total loan costs. Shorter loan 
            terms increase monthly payments but reduce total interest, while longer terms reduce monthly payments 
            but increase total interest costs.
          </p>
          <p>
            Understanding how loan terms affect affordability helps you choose financing options that match your 
            financial situation and goals. Different loan terms provide different balances between monthly payments 
            and total costs.
          </p>

          <h3>Additional Costs</h3>
          <p>
            Additional costs including property taxes, homeowners insurance, and HOA fees affect total housing 
            costs and affordability. These costs can significantly increase monthly housing expenses beyond 
            principal and interest payments.
          </p>
          <p>
            Understanding additional costs helps you budget accurately and evaluate total affordability. These 
            costs vary by location, property type, and community, affecting overall housing affordability.
          </p>

          <h2>Improving Your Affordability</h2>
          <p>
            Several strategies can improve affordability including increasing income, reducing debt, saving for 
            larger down payments, and improving credit scores. Understanding these strategies helps you take steps 
            to increase your purchasing power and achieve homeownership goals.
          </p>

          <h3>Increasing Income</h3>
          <p>
            Increasing income improves affordability by increasing the amount you can spend on housing while 
            maintaining the 28% guideline. Higher income provides more flexibility in housing choices and can 
            support purchases of more expensive properties.
          </p>

          <h3>Reducing Debt</h3>
          <p>
            Reducing debt improves affordability by reducing debt-to-income ratios and freeing up income for 
            housing costs. Paying down debts before purchasing a home can significantly improve affordability and 
            purchasing power.
          </p>

          <h3>Saving for Larger Down Payments</h3>
          <p>
            Saving for larger down payments improves affordability by reducing loan amounts and monthly payments. 
            Larger down payments can also improve interest rates and reduce total loan costs, further improving 
            affordability.
          </p>

          <h3>Improving Credit Scores</h3>
          <p>
            Improving credit scores can improve affordability by qualifying for better interest rates that reduce 
            monthly payments and total loan costs. Higher credit scores provide access to more favorable financing 
            terms that improve affordability.
          </p>

          <h2>Working with Dr. Jan Duffy for Affordability Guidance</h2>
          <p>
            Dr. Jan Duffy provides expert guidance for buyers seeking to understand affordability and make informed 
            home purchase decisions. Her expertise in Las Vegas real estate and financing ensures that clients 
            receive comprehensive support throughout their home purchase process.
          </p>
          <p>
            Whether you're a first-time buyer, move-up buyer, or luxury homebuyer, Dr. Duffy's expertise in 
            affordability analysis and financing makes her the ideal choice for your real estate needs. Her 
            understanding of affordability factors, combined with her commitment to client service, ensures that 
            your experience in home affordability will be exceptional.
          </p>
        </div>
      </section>

      <section class="cta-section">
        <div class="container container-center">
          <h2>Ready to Find Your Home?</h2>
          <p>Contact Dr. Jan Duffy for expert guidance and lender connections.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Dr. Duffy</a>
            <a href="/buy-a-home" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Affordability Calculator | How Much Home Can You Afford | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content: 'Calculate how much home you can afford based on your income, debt, and down payment. Free affordability calculator for Las Vegas homebuyers.',
    },
  ],
};

