import { useState, useEffect } from "react";

const useCounter = (forwards = true) =>{
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(forwards) setCounter((prevCounter) => prevCounter + 1);
      else setCounter(prevCounter => prevCounter - 1)
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter
}

// export const useUpdateCounter = (counterUpdateFunction) =>{
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter(counterUpdateFunction())
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [counterUpdateFunction]);

//   return counter
// }

export default useCounter;