import { useCallback, useState } from "react";

const useFetch = () => {
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (confidObj, applyData) => {
    console.log(confidObj.url ? confidObj.url : "url undefined");
    let url = confidObj.url;
    if (confidObj.params) {
      url += "?" + new URLSearchParams(confidObj.params);
    }
    const response = await fetch(url, {
      method: confidObj.method ? confidObj.method : "GET",
      headers: confidObj.headers ? confidObj.headers : {},
      body: confidObj.body ? JSON.stringify(confidObj.body) : null,
    });
    console.log(url);
    if (!response.ok) {
      const err = await response.json();
      setError(new Error(err.message));
    }
    const data = await response.json();
    applyData(data);
  }, []);

  sendRequest();

  return {
    error,
    sendRequest,
  };
};

export default useFetch;
