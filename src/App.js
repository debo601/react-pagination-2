import { useState, useEffect } from "react";
import Userdata from "./components/userData";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "./components/Pagination";
import './index.css'

const API = "https://swapi.dev/api/people";


const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); // Number of u

  const fetchUsers = async () => {
    let allUsers = [];
    let nextUrl = API;


    try {
      while (nextUrl) {
        const res = await fetch(nextUrl);
        const data = await res.json();
        allUsers = allUsers.concat(data.results);
        nextUrl = data.next;

      }
      setUsers(allUsers);
    } catch (error) {
      console.error(error);
    }

    // if (data.results) {
    //   setUsers(data.results);
    // }


    //   console.log(data);
    // } catch (e) {
    //   console.error(e)
    // }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center text-white bg-dark p-3">Star Wars Api</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Hair_color</th>
              <th>Skin_color</th>
              <th>Eye_color</th>
            </tr>

          </thead>

          <tbody>
            <Userdata users={currentUsers} />
          </tbody>



        </table>
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          paginate={paginate}
        />
      </div>

    </>
  );
};

export default App 