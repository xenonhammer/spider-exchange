import React from 'react';
import responseMock from 'src/components/Home/components/Desk/mock.json';

const useGetCurrencyList = () => {
  
  const { date, base, success, rates, timestamp } = responseMock;
  
  return {
    data: {date, base, rates, timestamp},
    status: success ?? false
  };
};

export default useGetCurrencyList;