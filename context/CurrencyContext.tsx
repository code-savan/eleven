import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CurrencyContextType {
  currencyCode: string;
  exchangeRate: number;
  formatPrice: (priceInUsd: number) => string;
  loading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currencyCode, setCurrencyCode] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initCurrency = async () => {
      let targetCurrency = 'USD';

      try {
        // Check if we already have a stored currency to save API calls
        const storedCurrency = sessionStorage.getItem('eleven_user_currency');

        if (storedCurrency) {
          targetCurrency = storedCurrency;
        } else {
          // Attempt 1: ipapi.co (Free tier, often rate-limited or blocked by ad-blockers)
          try {
            const ipResponse = await fetch('https://ipapi.co/json/');
            if (!ipResponse.ok) throw new Error('ipapi failed');
            
            const ipData = await ipResponse.json();
            if (ipData.currency) {
              targetCurrency = ipData.currency;
            }
          } catch (error) {
            // Attempt 2: ipwho.is (Fallback, no API key required)
            try {
              const fallbackResponse = await fetch('https://ipwho.is/');
              if (fallbackResponse.ok) {
                const fallbackData = await fallbackResponse.json();
                if (fallbackData.success && fallbackData.currency?.code) {
                  targetCurrency = fallbackData.currency.code;
                }
              }
            } catch (fallbackError) {
              console.warn("Could not auto-detect location. Defaulting to USD.");
            }
          }
          
          // Store found currency to session to prevent re-fetching on reload
          if (targetCurrency !== 'USD') {
             sessionStorage.setItem('eleven_user_currency', targetCurrency);
          }
        }
        
        if (targetCurrency === 'USD') {
            setLoading(false);
            return;
        }

        // 2. Get Exchange Rate
        try {
            const rateResponse = await fetch(`https://open.er-api.com/v6/latest/USD`);
            if (rateResponse.ok) {
                const rateData = await rateResponse.json();
                const rate = rateData.rates[targetCurrency];

                if (rate) {
                    setCurrencyCode(targetCurrency);
                    setExchangeRate(rate);
                }
            }
        } catch (error) {
            console.warn("Failed to fetch exchange rates. Reverting to USD.");
            setCurrencyCode('USD');
            setExchangeRate(1);
        }

      } catch (error) {
        console.error("Currency Context Error", error);
      } finally {
        setLoading(false);
      }
    };

    initCurrency();
  }, []);

  const formatPrice = (priceInUsd: number) => {
    const converted = priceInUsd * exchangeRate;
    
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0, 
        maximumFractionDigits: 2,
      }).format(converted);
    } catch (e) {
      // Fallback if currency code is somehow invalid
      return `$${converted.toFixed(2)}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currencyCode, exchangeRate, formatPrice, loading }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};