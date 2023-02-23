import { useEffect, useState } from "react";
import {
  userMainData,
  userActivity,
  userAverageSession,
  userPerformance,
} from "./modelisation";

/**
 * Fetch module
 * @module utils/const/fetch
 * @param {string} urlFetch dynamique link for fetch the database  
 * @returns the class with the data fetch 
 */

export const GetData = (urlFetch) => {
  const [result, setResult] = useState(undefined)
  useEffect(() => {
    fetch(urlFetch)
    .then((data) => data.json())
    .then((data) => {
        console.log(urlFetch)
        if (urlFetch.includes("activity")) {
          setResult (new userActivity(data));
        }
        else if (urlFetch.includes("average")) {
          setResult( new userAverageSession(data));
        }
        else if (urlFetch.includes("performance")) {
          setResult (new userPerformance(data));
        }else {
          setResult(new userMainData(data));
        }
      });
  }, [urlFetch]);
  console.log("result=", result)
  return result
};
