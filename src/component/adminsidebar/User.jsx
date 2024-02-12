// Import necessary modules
import style from "./style.module.css";
import React from "react";
import Deletebtn from "./Deletebtn";

// Define your functional component
export default function User({ users }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Users</h1>
      <table
        style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
      >
        <thead>
          <tr>
            <th
              style={{ padding: "20px 40px", borderBottom: "1px solid #ddd" }}
            >
              ID
            </th>
            <th
              style={{ padding: "20px 40px", borderBottom: "1px solid #ddd" }}
            >
              Username
            </th>
            <th
              style={{ padding: "20px 40px", borderBottom: "1px solid #ddd" }}
            >
              E-MAIL
            </th>
            <th
              style={{ padding: "20px 40px", borderBottom: "1px solid #ddd" }}
            >
              DATE
            </th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td
                style={{ padding: "20px 40px", borderBottom: "1px solid #ddd" }}
              >
                {user._id}
              </td>
              <td
                style={{ padding: "20px 40px", borderBottom: "1px solid #ddd" }}
              >
                {user.name}
              </td>
              <td
                style={{ padding: "20px 40px", borderBottom: "1px solid #ddd" }}
              >
                {user.email}
              </td>
              <td
                style={{ padding: "20px 40px", borderBottom: "1px solid #ddd" }}
              >
                {user.createdAt}
              </td>
              <td>
                <Deletebtn id={user._id} />
              </td>
              {/* Add more cells if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// Implement getServerSideProps function to fetch data on the server-side
export async function getServerSideProps() {
  try {
    // Fetch users from API
    const response = await fetch("https://fullstack-sass-79w7piblh-hellowhq67.vercel.app/api/users");
    if (response.ok) {
      const data = await response.json();
      const users = data.users;
      // Return users as props
      return {
        props: { users }
      };
    } else {
      console.error("Failed to fetch users:", response.statusText);
      return {
        props: { users: [] } // Return empty array in case of error
      };
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: { users: [] } // Return empty array in case of error
    };
  }
}
