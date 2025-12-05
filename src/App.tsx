import { useState } from 'react';
import Header from './components/Header';
import CheckoutSection from './components/CheckoutSection';
import AccountSection from './components/AccountSection';
import OrderSummary from './components/OrderSummary';

function App() {
  const [expandedSection, setExpandedSection] = useState<number>(1);

  const toggleSection = (section: number) => {
    setExpandedSection(expandedSection === section ? 0 : section);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSignIn={() => console.log('Sign in clicked')} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CheckoutSection
              number={1}
              title="Account"
              isExpanded={expandedSection === 1}
              isActive={true}
              onToggle={() => toggleSection(1)}
            >
              <AccountSection />
            </CheckoutSection>

            <CheckoutSection
              number={2}
              title="Delivery Address"
              isExpanded={expandedSection === 2}
              isActive={false}
              onToggle={() => toggleSection(2)}
            >
              <div className="py-8 text-center text-gray-500">
                Please log in to add delivery address
              </div>
            </CheckoutSection>

            <CheckoutSection
              number={3}
              title="Payment"
              isExpanded={expandedSection === 3}
              isActive={false}
              onToggle={() => toggleSection(3)}
            >
              <div className="py-8 text-center text-gray-500">
                Please complete previous steps
              </div>
            </CheckoutSection>
          </div>

          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
