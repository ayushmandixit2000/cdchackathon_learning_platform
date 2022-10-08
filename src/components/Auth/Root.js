import React, { useEffect } from "react";
import { useMoralis, MoralisProvider } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";


const Root = () => {
    const history = useHistory();
    const { authenticate, isAuthenticated } = useMoralis();
  
    useEffect(() => {
      if (isAuthenticated) {
        history.push("/");
        // window.location.reload();
      }
    }, [isAuthenticated]);
  
    if (isAuthenticated) return (
        <button
          className="btn-black"
        >
          Connected
        </button>
  );
  
  
    return (
          <button
            className="btn-black"
            onClick={authenticate}
          >
            Connect
          </button>
    );
  };


  export default Root;