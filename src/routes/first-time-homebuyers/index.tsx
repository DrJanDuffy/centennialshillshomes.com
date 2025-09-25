import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutOfficeListings from '../../components/realscout-office-listings';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            First-Time Homebuyers Guide - <span class="highlight">Las Vegas Real Estate</span>
          </h1>
          <p class="hero-subtitle">
            Navigate the Las Vegas real estate market with confidence as a first-time homebuyer. 
            Dr. Janet Duffy provides comprehensive guidance through every step of the homebuying process.
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn btn-primary">First-Time Buyer Consultation</a>
            <a href="/buy-a-home" class="btn btn-secondary">Buying Process</a>
          </div>
        </div>
      </section>

      {/* Featured First-Time Buyer Properties - Lead Generator */}
      <section class="featured-properties-section bg-gray-50 py-16">
        <div class="container container-center">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Perfect First-Time Buyer Homes
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse homes ideal for first-time buyers in Las Vegas
            </p>
          </div>
          
          {/* RealScout Office Listings - Primary Lead Generator */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin="350000"
            priceMax="600000"
          />
          
          <div class="text-center mt-8">
            <a href="/contact" class="btn btn-primary btn-lg">
              Get First-Time Buyer Guidance
            </a>
          </div>
        </div>
      </section>

      <div class="container container-center">
        <h2>Your Complete First-Time Homebuyer Journey</h2>
        <p>Navigate the Las Vegas real estate market with confidence as a first-time homebuyer. Dr. Janet Duffy provides comprehensive guidance through every step of the homebuying process, from pre-approval to closing, with specialized expertise in Centennial Hills and northwest Las Vegas neighborhoods perfect for first-time buyers.</p>

        <h2>First-Time Buyer Programs and Assistance</h2>
        <p>Discover first-time homebuyer programs available in Las Vegas including down payment assistance, low-interest loans, and government-backed financing options. We help you understand eligibility requirements, application processes, and how to maximize available programs to make your first home purchase more affordable.</p>

        <h2>Understanding the Las Vegas Market</h2>
        <p>Learn about Las Vegas real estate market dynamics, pricing trends, and neighborhood characteristics that affect first-time buyers. Our market education covers everything from property types and price ranges to seasonal trends and investment potential in Centennial Hills and surrounding areas.</p>

        <h2>Financial Preparation and Budgeting</h2>
        <p>Get expert guidance on financial preparation for homeownership including credit improvement, debt management, and savings strategies. We help you understand all costs associated with buying a home beyond the purchase price, including closing costs, insurance, and ongoing maintenance expenses.</p>

        <h2>Neighborhood Selection for First-Time Buyers</h2>
        <p>Explore Las Vegas neighborhoods ideal for first-time buyers, with special focus on Centennial Hills' family-friendly communities, excellent schools, and recreational amenities. We provide detailed neighborhood comparisons, commute analysis, and lifestyle considerations to help you choose the perfect area for your first home.</p>

        <h2>Step-by-Step Buying Process</h2>
        <p>Follow our detailed guide to the homebuying process from initial consultation through closing day. Dr. Janet Duffy provides personalized support, explains each step clearly, and ensures you understand all paperwork, inspections, and legal requirements involved in purchasing your first Las Vegas home.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'First-Time Homebuyers Guide - Las Vegas Real Estate | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Complete first-time homebuyer guide for Las Vegas real estate with Dr. Janet Duffy. Programs, financing, and neighborhood guidance for Centennial Hills.',
    },
  ],
};







