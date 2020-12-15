import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useProtected = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
      setEmail("");
      setPassword("")
    }
  }, [history]);
};

export default useProtected;