const Userdata = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { name, height, mass, hair_color, skin_color, eye_color } =
          curUser;

        return (
          <tr>
            <td>{name}</td>
            <td>{height}</td>
            <td>{mass}</td>
            <td>{hair_color}</td>
            <td>{skin_color}</td>
            <td>{eye_color}</td>
          </tr>
        );
      })}
    </>
  );
};
export default Userdata;
