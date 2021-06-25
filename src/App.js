import Users from "./component/Users";
import Header from "./component/Header";
import React, { useState, useEffect } from "react";
import { UserProvider } from "./context/UserContext";
import "./styles.css";

// 1. Lifting up the state
// 2. props Drilling
// 3. useContext hook
export default function App() {
  // const [people, setPeople] = useState([]);

  // const getUsers = async () => {
  //   const apiCall = await fetch("https://randomuser.me/api/?results=50");
  //   const users = await apiCall.json();
  //   setPeople(users.results);
  // };

  // const deleteUser = (id) => {
  //   // console.log(id);
  //   const newPeople = people.filter((person) => person.cell !== id);
  //   setPeople(newPeople);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Users />
      </div>
    </UserProvider>
  );
}
