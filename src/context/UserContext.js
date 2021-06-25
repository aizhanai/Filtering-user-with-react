import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [people, setPeople] = useState([]);

  const getUsers = async () => {
    const apiCall = await fetch("https://randomuser.me/api/?results=50");
    const users = await apiCall.json();
    setPeople(users.results);
  };

  const deleteUser = (id) => {
    // console.log(id);
    const newPeople = people.filter((person) => person.cell !== id);
    setPeople(newPeople);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(props, "props from UserContext");

  return (
    <UserContext.Provider value={{ people, deleteUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
