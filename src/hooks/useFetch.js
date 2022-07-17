import { useCallback, useState } from "react";

const useFetch = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = useCallback(async (confidObj, applyData) => {
    //run useFetch only if configObj is passed
    if (confidObj) {
      setLoading(true);
      let url = confidObj.url;
      if (confidObj.params) {
        url += "?" + new URLSearchParams(confidObj.params);
      }
      const response = await fetch(url, {
        method: confidObj.method ? confidObj.method : "GET",
        headers: confidObj.headers ? confidObj.headers : {},
        body: confidObj.body ? confidObj.body : null,
      });
      if (!response.ok) {
        const err = await response.json();
        setError(new Error(err.message));
        console.log(error);
      }
      setLoading(false);
      const data = await response.json();

      data && applyData(data);
    }
  }, []);

  sendRequest();

  return {
    error,
    sendRequest,
    loading,
  };
};

export default useFetch;
