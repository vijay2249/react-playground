import { useState, useCallback } from "react";

const useFetchTasks = (requestConfig, transformData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getData = () =>{
    setIsLoading(true);
    setError(null);
    console.log("Request to use-fetchTask received...");
    fetch(
      requestConfig.url,{
        method: requestConfig.method || "GET",
        headers: requestConfig.headers || {},
        body: requestConfig.body? JSON.stringify(requestConfig.body) : null
      })
      .then(response => {
        if(!response.ok) throw new Error("Request failed...");
        return response.json();
      })
      .then(data => transformData(data) )
      .catch(err =>{
        setError(err.message || "Something went wrong")
      })
    setIsLoading(false);
  }
  return {isLoading, error, fetchData: getData}
};

export const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getData = useCallback(async (requestConfig, transformData) =>{
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        headers: requestConfig.headers || {},
        body: requestConfig? JSON.stringify(requestConfig.body) : null
      })
      if(!response.ok) throw new Error("Something went wrong")
      const data = await response.json()
      transformData(data);
    }catch(err){
      setError(err.message || "Something went wrong")
    }
    setIsLoading(false)
  }, [])
  return {isLoading, error, fetchData: getData}
}


export default useFetchTasks