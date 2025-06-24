import { createContext, useContext, useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import env from "../env";
import axiosClient from "../axiosClient";


const stateContext = createContext({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
});

export const ContextProvider = ({ children }) => {
  const [token, _setToken] = useState(localStorage.getItem("Token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const apiUrl= env.REACT_APP_API_URL
  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("Token", token);
    } else {
      localStorage.removeItem("Token");
    }
  };

  const setUserState = (user) => {
    setUser(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  };
  const SignupMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosClient.post("/register", data);
      console.log("Signup response:", res.data);
      return res.data;
    },
    onError: (err) => {
      // alert(err);
      console.log(err);
      setLoading(false);
    },
    onSuccess: (data) => {
      console.log("Signup success:", data);
       setUserState(data.user);
      setToken(data.token);
      // setToken(data.token);
        if (data.role === "supplier") {
      window.location.href = "/supplier/dash";
    } else {
      window.location.href = "/admin/dashboard";
    }
    },
  });

  const LoginMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosClient .post("/login", data);
      return res.data;
    },
    onError: (err) => {
      setLoading(false);
      const response = err.response;
      if (response && response.status === 422) {
        if (response.data.errors_login) {
          setErrors_login(response.data.errors_login);
        } else {
          setErrors_login({
            email: [response.data.message],
          });
        }
      }
    },
    onSuccess: (data) => {
      console.log("Login success:", data);
      setUserState(data.user);
      setToken(data.token);
        if (data.role === "supplier") {
      window.location.href = "/supplier/dash";
    } else {
      window.location.href = "/admin/dashboard";
    }
    },
  });

  return (
    <stateContext.Provider
      value={{
        token,
        setToken,
        user,

        setUser: setUserState,
        SignupMutation,
        LoginMutation,
       
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const usestateContext = () => useContext(stateContext);
