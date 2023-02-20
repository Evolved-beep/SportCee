import { useEffect, useState } from "react";
import {
  userMainData,
  userActivity,
  userAverageSession,
  userPerformance,
} from "./modelisation";

export const GetData = (urlFetch) => {
  const [result, setResult] = useState(undefined)
  useEffect(() => {
    fetch(urlFetch)
      .then((data) => data.json())
      .then((data) => {
        if (urlFetch.includes("activity")) {
          setResult (new userActivity(data));
        }
        if (urlFetch.includes("average")) {
          setResult( new userAverageSession(data));
        }
        if (urlFetch.includes("performance")) {
          setResult (new userPerformance(data));
        }
        setResult(new userMainData(data));
      });
  }, [urlFetch]);
  return result
};
