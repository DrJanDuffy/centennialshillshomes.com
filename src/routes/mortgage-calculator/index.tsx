import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';

export default component$(() => {
  const homePrice = useSignal(500000);
  const downPayment = useSignal(100000);
  const interestRate = useSignal(6.5);
  const loanTerm = useSignal(30);
  
  const monthlyPayment = useSignal(0);
  const totalInterest = useSignal(0);
  const totalPayment = useSignal(0);

  const calculateMortgage = () => {
    const principal = homePrice.value - downPayment.value;
    const monthlyRate = (interestRate.value / 100) / 12;
    const numPayments = loanTerm.value * 12;
    
    if (monthlyRate === 0) {
      monthlyPayment.value = principal / numPayments;
    } else {
      monthlyPayment.value = principal * 
        (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    }
    
    totalPayment.value = monthlyPayment.value * numPayments;
    totalInterest.value = totalPayment.value - principal;
  };

  const calculatorSchema = pageSchemas.servicePage({
    name: "Mortgage Calculator",
    description: "Free mortgage calculator to estimate monthly payments, interest, and total cost. Calculate your Las Vegas home purchase affordability.",
    slug: "mortgage-calculator",
    serviceType: "Financial Calculator Services"
  });

  return (
    <>
      <SEOStructuredData type="Service" data={calculatorSchema} />

      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">Mortgage Calculator</span>
            <br />
            Estimate Your Monthly Payment
          </h1>
          <p class="hero-subtitle">
            Use our free mortgage calculator to estimate monthly payments, total interest, and affordability 
            for your Las Vegas home purchase.
          </p>
        </div>
      </section>

      <section class="service-content py-16">
        <div class="container container-center max-w-4xl">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold mb-6">Mortgage Calculator</h2>
            
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Home Price ($)
                </label>
                <input
                  type="number"
                  value={homePrice.value}
                  onInput$={(e) => {
                    homePrice.value = Number((e.target as HTMLInputElement).value);
                    calculateMortgage();
                  }}
                  onBlur$={calculateMortgage}
                  class="w-full px-4 py-2 border border-gray-300 rounded-md"
                  min="0"
                  step="1000"
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
                    calculateMortgage();
                  }}
                  onBlur$={calculateMortgage}
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
                    calculateMortgage();
                  }}
                  onBlur$={calculateMortgage}
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
                    calculateMortgage();
                  }}
                  class="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="15">15 years</option>
                  <option value="20">20 years</option>
                  <option value="30">30 years</option>
                </select>
              </div>

              <button
                onClick$={() => calculateMortgage()}
                class="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                Calculate
              </button>
            </div>

            {monthlyPayment.value > 0 && (
              <div class="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 class="text-xl font-bold mb-4">Payment Summary</h3>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Monthly Payment:</span>
                    <span class="font-bold text-lg">${monthlyPayment.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Total Interest:</span>
                    <span class="font-semibold">${totalInterest.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Total Payment:</span>
                    <span class="font-semibold">${totalPayment.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div class="mt-8">
            <h2 class="text-2xl font-bold mb-4">Understanding Your Mortgage</h2>
            <p class="text-gray-700 mb-4">
              This calculator provides estimates based on principal, interest, and loan term. Your actual 
              payment may vary based on property taxes, homeowners insurance, HOA fees, and other factors. 
              Understanding how mortgages work helps you make informed decisions about home purchases and 
              financing options.
            </p>
            <p class="text-gray-700 mb-4">
              Contact Dr. Jan Duffy for personalized mortgage guidance and to connect with trusted lenders 
              who understand the Las Vegas market. Her expertise in Las Vegas real estate and financing ensures 
              that you receive expert guidance throughout your home purchase process.
            </p>
          </div>
        </div>
      </section>

      <section class="service-content py-16 bg-gray-50">
        <div class="container container-center">
          <h2>Understanding Mortgage Calculations</h2>
          <p>
            Mortgage calculations involve several factors that affect monthly payments, total interest, and 
            overall loan costs. Understanding these factors helps you make informed decisions about home 
            purchases, financing options, and loan terms that support your financial goals.
          </p>

          <h3>Principal and Interest</h3>
          <p>
            Principal is the amount you borrow to purchase your home, while interest is the cost of borrowing 
            that money. Monthly mortgage payments include both principal and interest, with early payments 
            primarily covering interest and later payments primarily covering principal.
          </p>
          <p>
            Understanding how principal and interest work helps you evaluate loan terms and make decisions about 
            down payments, loan amounts, and loan terms. Larger down payments reduce principal and monthly 
            payments, while lower interest rates reduce total loan costs.
          </p>

          <h3>Down Payment Impact</h3>
          <p>
            Down payments significantly affect mortgage calculations, as they reduce principal, monthly payments, 
            and total interest costs. Larger down payments provide several benefits including lower monthly 
            payments, reduced interest costs, and potentially better interest rates.
          </p>
          <p>
            Typical down payments range from 3% for first-time buyers to 20% or more for conventional loans. 
            Understanding down payment requirements and benefits helps you plan your home purchase and make 
            informed decisions about how much to put down.
          </p>
          <p>
            Down payment assistance programs may be available for first-time buyers, providing grants or 
            low-interest loans that help cover down payments and closing costs. Dr. Jan Duffy can help you 
            identify available programs and understand eligibility requirements.
          </p>

          <h3>Interest Rates and Loan Terms</h3>
          <p>
            Interest rates and loan terms significantly affect mortgage payments and total loan costs. Lower 
            interest rates reduce monthly payments and total interest, while shorter loan terms increase monthly 
            payments but reduce total interest costs.
          </p>
          <p>
            Understanding the relationship between interest rates, loan terms, and payments helps you evaluate 
            financing options and choose loan terms that match your financial situation and goals. Fixed-rate 
            mortgages provide payment stability, while adjustable-rate mortgages may offer lower initial rates 
            with potential rate adjustments.
          </p>

          <h2>Additional Costs to Consider</h2>
          <p>
            Monthly mortgage payments typically include more than just principal and interest. Understanding 
            additional costs helps you budget accurately and avoid surprises that can strain your finances.
          </p>

          <h3>Property Taxes</h3>
          <p>
            Property taxes are typically included in monthly mortgage payments through escrow accounts that 
            collect funds for taxes and insurance. Property tax rates vary by location and can significantly 
            affect monthly housing costs.
          </p>
          <p>
            Understanding property tax rates in different Las Vegas areas helps you evaluate total housing costs 
            and make informed decisions about where to live. Property taxes are typically based on assessed 
            property values and can change over time as values change.
          </p>

          <h3>Homeowners Insurance</h3>
          <p>
            Homeowners insurance is typically required by lenders and included in monthly mortgage payments 
            through escrow accounts. Insurance costs vary based on property value, location, and coverage 
            levels, affecting total monthly housing costs.
          </p>
          <p>
            Understanding homeowners insurance requirements and costs helps you budget accurately and evaluate 
            total housing costs. Shopping for insurance can help you find competitive rates that reduce monthly 
            housing costs.
          </p>

          <h3>HOA Fees</h3>
          <p>
            HOA fees are common in planned communities and condominiums, providing maintenance, amenities, and 
            community services. These fees are separate from mortgage payments but affect total monthly housing 
            costs and should be considered when evaluating affordability.
          </p>
          <p>
            Understanding HOA fees and what they cover helps you evaluate total housing costs and the value of 
            HOA-managed amenities and services. These fees vary significantly between communities and can 
            substantially affect monthly housing costs.
          </p>

          <h2>Mortgage Types and Options</h2>
          <p>
            Various mortgage types and options are available, each with different features, requirements, and 
            benefits. Understanding these options helps you choose financing that matches your financial 
            situation and goals.
          </p>

          <h3>Conventional Loans</h3>
          <p>
            Conventional loans are traditional mortgages that are not backed by government agencies. These loans 
            typically require down payments as low as 3% for qualified buyers, though larger down payments can 
            result in better interest rates and lower monthly payments.
          </p>
          <p>
            Conventional loans offer flexibility in terms of loan amounts, repayment terms, and property types. 
            They're available for primary residences, second homes, and investment properties, though terms and 
            requirements vary depending on the property type.
          </p>

          <h3>FHA Loans</h3>
          <p>
            FHA loans are government-backed loans insured by the Federal Housing Administration, designed to help 
            buyers with lower credit scores or smaller down payments qualify for home loans. FHA loans typically 
            require down payments as low as 3.5% and are more flexible with credit requirements than conventional 
            loans.
          </p>
          <p>
            FHA loans are particularly attractive for first-time homebuyers who may not have large down payments 
            or perfect credit. The government backing allows lenders to offer more favorable terms to buyers who 
            might not qualify for conventional loans.
          </p>

          <h3>VA Loans</h3>
          <p>
            VA loans are special loans available to veterans, active military members, and eligible surviving 
            spouses. These loans are guaranteed by the Department of Veterans Affairs and offer significant 
            benefits including no down payment requirements, no mortgage insurance, and competitive interest rates.
          </p>
          <p>
            VA loans are one of the most attractive financing options available to eligible buyers. The no down 
            payment requirement makes homeownership accessible to veterans and military members who may not have 
            saved large down payments.
          </p>

          <h3>Jumbo Loans</h3>
          <p>
            Jumbo loans are for luxury properties that exceed conventional loan limits, which are set annually by 
            the Federal Housing Finance Agency. In Las Vegas, jumbo loans are necessary for properties above 
            approximately $766,550. These loans typically require larger down payments, excellent credit, and 
            strong financial profiles.
          </p>

          <h2>Using the Mortgage Calculator</h2>
          <p>
            Our mortgage calculator helps you estimate monthly payments, total interest, and overall loan costs 
            based on home price, down payment, interest rate, and loan term. This calculator provides valuable 
            estimates that help you understand affordability and evaluate financing options.
          </p>

          <h3>Calculator Inputs</h3>
          <p>
            The calculator requires inputs for home price, down payment, interest rate, and loan term. These 
            inputs allow you to experiment with different scenarios and understand how changes affect monthly 
            payments and total costs.
          </p>
          <p>
            Adjusting calculator inputs helps you understand how different factors affect payments and costs. 
            This understanding helps you make informed decisions about home prices, down payments, and loan terms 
            that match your financial situation and goals.
          </p>

          <h3>Understanding Results</h3>
          <p>
            Calculator results show monthly payment, total interest, and total payment that help you understand 
            loan costs and affordability. These results provide estimates that help you evaluate financing options 
            and make informed decisions about home purchases.
          </p>
          <p>
            Remember that calculator results are estimates that don't include property taxes, insurance, HOA fees, 
            and other costs that affect total monthly housing costs. Understanding these additional costs helps 
            you budget accurately and avoid surprises.
          </p>

          <h2>Getting Pre-Approved</h2>
          <p>
            Getting pre-approved for a mortgage before you start your home search helps you understand your budget, 
            shows sellers you're serious, and ensures you're looking at properties you can actually afford. 
            Pre-approval provides confidence in your buying power and helps you make informed decisions.
          </p>
          <p>
            Dr. Jan Duffy can connect you with trusted lenders who understand the Las Vegas market and can help 
            you get pre-approved quickly and efficiently. Her network of lenders ensures that you receive 
            competitive rates and terms that support your home purchase goals.
          </p>

          <h2>Working with Dr. Jan Duffy for Mortgage Guidance</h2>
          <p>
            Dr. Jan Duffy provides expert guidance for buyers seeking mortgage information and financing options. 
            Her expertise in Las Vegas real estate and knowledge of financing options ensures that clients receive 
            comprehensive support throughout their home purchase process.
          </p>
          <p>
            Whether you're a first-time buyer, move-up buyer, or luxury homebuyer, Dr. Duffy's expertise in 
            financing and Las Vegas markets makes her the ideal choice for your real estate needs. Her 
            understanding of mortgage options, combined with her commitment to client service, ensures that your 
            experience in home financing will be exceptional.
          </p>
        </div>
      </section>

      <section class="cta-section">
        <div class="container container-center">
          <h2>Ready to Buy a Home?</h2>
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
  title: 'Mortgage Calculator | Las Vegas Home Purchase | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content: 'Free mortgage calculator to estimate monthly payments, interest, and total cost. Calculate your Las Vegas home purchase affordability.',
    },
  ],
};

