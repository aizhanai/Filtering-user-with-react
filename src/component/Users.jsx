import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import SingleUser from "./SingleUser";
import "./users.css";
const Users = () => {
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");

  const { people } = useContext(UserContext);

  const filteredByGender = people.filter((person) => {
    if (!gender) return true;
    return person.gender === gender;
  });
  const newPeople = filteredByGender.filter((person) => {
    if (!value) {
      return true;
    } else if (
      person.name.first.toLowerCase().substr(0, value.length) ===
      value.toLowerCase()
    ) {
      return true;
    }
    return false;
    // if (value) {
    //   return (
    //     person.name.first.toLowerCase().substr(0, value.length) ===
    //     value.toLowerCase()
    //   );
    // }
    // return true;
  });

  return (
    <div>
      <input
        placeholder="search user.."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div>
        <h3>Select Gender</h3>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="male"
          name="gender"
          checked={gender === "male"}
          onChange={() => setGender("male")}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          id="female"
          name="gender"
          checked={gender === "female"}
          onChange={() => setGender("female")}
        />
      </div>
      {newPeople.map((person) => {
        return <SingleUser person={person} key={person.cell} />;
      })}
    </div>
  );
};

export default Users;
/*cell: "433-340-0707"
dob: {date: "1998-06-03T04:03:10.034Z", age: 23}
email: "charlotte.ginnish@example.com"
gender: "female"
id: {name: "", value: null}
location: {street: {…}, city: "Deer Lake", state: "Prince Edward Island", country: "Canada", postcode: "J9V 1D1", …}
login: {uuid: "45d3204b-504e-4076-b980-6af020f56774", username: "angrygorilla682", password: "liquid", salt: "ap4dDzlL", md5: "0d4baa50c73526bfb671d7db49db2a7e", …}
name: {title: "Ms", first: "Charlotte", last: "Ginnish"}
nat: "CA"
phone: "093-444-3415"
picture: {large: "https://randomuser.me/api/portraits/women/14.jpg", medium: "https://randomuser.me/api/portraits/med/women/14.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg"}
registered: {date: "2002-03-21T23:37:03.457Z", age: 19} */
