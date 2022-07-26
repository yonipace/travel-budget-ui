import { useCallback, useState } from "react";

const useFetch = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const NewAlert = {
    showAlert,
    alertSeverity,
    alertMessage,
  };

  const sendRequest = useCallback(async (configObj, applyData) => {
    //run useFetch only if configObj is passed
    if (configObj) {
      setLoading(true);
      let url = configObj.url;
      if (configObj.params) {
        url += "?" + new URLSearchParams(configObj.params);
      }

      try {
        const response = await fetch(url, {
          method: configObj.method ? configObj.method : "GET",
          headers: configObj.headers ? configObj.headers : {},
          body: configObj.body ? configObj.body : null,
        });

        if (!response.ok) {
          setLoading(false);
          const err = await response.json();
          setAlertMessage(err.message);
          setAlertSeverity("error");
          setShowAlert(true);
          throw new Error(err.message);
        }

        if (response.ok) {
          setLoading(false);
          const data = await response.json();
          applyData && applyData(data);
        }
      } catch (e) {
        setError(e);
      }
    }
  }, []);

  sendRequest();

  return {
    error,
    sendRequest,
    loading,
    NewAlert,
  };
};

export default useFetch;
