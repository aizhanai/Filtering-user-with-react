const SingleUser = ({ person, deleteUser }) => {
  const { name, picture, location, cell } = person;
  return (
    <div className="wrapper">
      <h3>{`${name.last} ${name.first}`}</h3>
      <img src={picture.large} alt={name.last} />
      <p>Location: {location.city}</p>
      <button
        onClick={() => {
          deleteUser(cell);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default SingleUser;
