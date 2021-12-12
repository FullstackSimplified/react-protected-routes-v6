import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";

const App = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");
    user && JSON.parse(user) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", auth);
  }, [auth]);

  return (
    <Routes>
      {!auth && (
        <Route
          path="/auth"
          element={<Auth authenticate={() => setAuth(true)} />}
        />
      )}

      {auth && (
        <>
          <Route
            path="/profile"
            element={<Profile logout={() => setAuth(false)} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </>
      )}
      <Route path="*" element={<Navigate to={auth ? "/profile" : "/auth"} />} />
    </Routes>
  );
};

export default App;
