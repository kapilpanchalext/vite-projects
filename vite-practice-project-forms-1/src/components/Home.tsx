import { useState, useTransition } from 'react';
import { Link } from 'react-router';
import type { UserDetails } from '../model/UserDetails';
import { redirect } from 'react-router';
import styles from './Home.module.css';

const Home = () => {
  // const [name, setName] = useState("");
  // const [error, setError] = useState<string | null>(null);
  // const [isPending, startTransition] = useTransition();

  // const handleSubmit = () => {
  //   startTransition(async () => {
  //     try {
  //       const response = await fetch("http://localhost:9001/api/v1/user", {
  //         method: "GET",
  //       });

  //       if (!response.ok) {
  //         const data = await response.json();
  //         throw new Error(data.message || "Failed to update name");
  //       }

  //       redirect("/products");
  //     } catch (err) {
  //       if (err instanceof Error) {
  //         setError(err.message);
  //       } else {
  //         setError("An unknown error occurred.");
  //       }
  //     }
  //   });
  const [users, setUsers] = useState<UserDetails[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:9001/api/v1/user");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const handleLoadUsers = () => {
    startTransition(() => {
      fetchUsers();
    });
  };
  // };

  return (
    <>
      <h1>Home Page</h1>
      <Link to="/products">Go to Products</Link>
      <br />
      <Link to="/user-details">Go to User Details</Link>
      <br />

      <div style={{ padding: '1rem' }}>
        <h1>Users</h1>
        <h2>{isPending.toString()}</h2>
        <button onClick={handleLoadUsers} disabled={isPending}>
          {!isPending ? "Loading..." : "Load Users"}
        </button>

        {isPending ? (<>Updating... <span className={styles.spinner} /></>) : "Update"}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <ul style={{ maxHeight: '400px', overflow: 'auto' }}>
          {users.map((user, index) => (
            <li key={index}>{user.firstName || user.email || JSON.stringify(user)}</li>
          ))}
        </ul>
      </div>
    </>
    // <div>
    //   <input
    //     value={name}
    //     onChange={(event) => setName(event.target.value)}
    //     placeholder="Enter your name"
    //   />
    //   <button onClick={handleSubmit} disabled={isPending}>
    //     {isPending ? (<>Updating... <span className={styles.spinner} /></>) : "Update"}
    //   </button>
    //   {error && <p style={{ color: "red" }}>{error}</p>}
    // </div>
  )
};

export default Home;