import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { people } = useContext(UserContext);

  const countries = people.reduce((accum, current) => {
    const country = current.location.country;
    if (!accum.hasOwnProperty(country)) {
      accum[country] = 1;
    }

    return accum;
  }, {});

  return (
    <div className="header">
      Welcome to our community! Now we have {people.length} users from{" "}
      {Object.keys(countries).length}
      countries
    </div>
  );
};

export default Header;

// cell: "06-54-40-33-78"
// dob: {date: "1978-08-07T03:56:10.775Z", age: 43}
// email: "yann.dupont@example.com"
// gender: "male"
// id: {name: "INSEE", value: "1NNaN16176854 71"}
// location: {street: {number: 2766, name: "Rue Louis-Blanqui"}, city: "Champigny-sur-Marne", state: "Haute-Corse", country: "France", postcode: 50429, …}
// login: {uuid: "f324e357-16eb-4772-b949-ea0bd7cc8137", username: "crazymeercat916", password: "moneys", salt: "fx6RDEjQ", md5: "fcc4bca2cc77219ae595ff08d04aba8a", …}
// name: {title: "Mr", first: "Yann", last: "Dupont"}
// nat: "FR"
// phone: "05-47-85-02-45"
// picture: {large: "https://randomuser.me/api/portraits/men/71.jpg", medium: "https://randomuser.me/api/portraits/med/men/71.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg"}
// registered: {date: "2002-09-17T08:07:25.206Z", age: 19}
