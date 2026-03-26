import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  // Implementation for fetching currency info
  useEffect(() => {
    // Fetch currency info based on the provided currency
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => {
        console.error("Error fetching currency info:", err);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
