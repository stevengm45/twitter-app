import React, { useState } from "react";
import SignInSingUp from "./page/SignInSingUp";


export default function App() {

  const [user, setUser] = useState({ name: "Steven"});

  return (
    <div>
      {user ? (
        <div>
          <SignInSingUp />
        </div>
      ) : (
        <h1>No esta logeado</h1>
      )}
      </div>
  );

}
