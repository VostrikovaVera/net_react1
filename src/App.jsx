import React, { useState } from 'react';
import './App.css';
import { userData as rawUserData } from "./data/userData";
import { UserCard } from "./components/user-card/UserCard";

function App() {
  const [userData, setUserData] = useState(rawUserData);

  const handleFilterChange = (e) => {
    const filteredData = rawUserData.filter(user => {
      if (user.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return user;
      }
    })

    // call sort

    setUserData(filteredData);
  }

  const handleSort = (e) => {
    const sortType = e.target.value;

    const sortedData = [...userData]
        .sort((a,b) => sortType === 'asc' ? a.age - b.age : b.age - a.age)

    // call filter

    setUserData(sortedData)
  }

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <input type="text" placeholder="Search by user name" onChange={handleFilterChange} />
          <select onChange={handleSort}>
            <option value="">--Please select--</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </header>

        <div className="App-users-container">
          {userData.map((user, i) => <UserCard key={i} users={user}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
