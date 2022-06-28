import { useState } from "react";

const useFetch = (url, params, applyData, method, headers) => {
  const [loading, setLoading] = useState(false);
  let response;
  url += "?" + new URLSearchParams(params).toString();

  const getTrips = async () => {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
    } else {
      const err = await response.json();
      throw new Error(err.message);
    }
  };

  getTrips();

  return {
    response,
    loading,
  };
};

export default useFetch;
