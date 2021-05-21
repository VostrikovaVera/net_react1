import React, { useState } from 'react';
import './App.css';
import { userData as rawUserData } from "./data/userData";
import { UserCard } from "./components/user-card/UserCard";

function App() {
  const [userData, setUserData] = useState(rawUserData);
  const [currentFilterValue, setCurrentFilterValue] = useState('');
  const [currentSortType, setCurrentSortType] = useState('');

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setCurrentFilterValue(filterValue);

    const filteredData = onDataFilter(rawUserData, filterValue);
    const filteredSortedData = onDataSort(filteredData, currentSortType);

    setUserData(filteredSortedData);
  }

  const handleSortChange = (e) => {
    const sortType = e.target.value;
    setCurrentSortType(sortType);

    const sortedData = sortType === '' ?
        onDataFilter(rawUserData, currentFilterValue) :
        onDataSort([...userData], sortType);

    setUserData(sortedData)
  }

  const handleReset = () => {
    setCurrentSortType('');
    setCurrentFilterValue('');
    setUserData(rawUserData);
  }

  const onDataFilter = (data, filterValue) => {
    return data.filter(user => {
      if (user.name.toLowerCase().includes(filterValue.toLowerCase())) {
        return user;
      }
    })
  }

  const onDataSort = (data, sortType) => {
    return data.sort((a,b) => sortType === 'asc' ? a.age - b.age : b.age - a.age);
  }

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <input type="text" placeholder="Search by user name" value={currentFilterValue} onChange={handleFilterChange}/>
          <select onChange={handleSortChange} value={currentSortType}>
            <option value="">--Please select--</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
          <button onClick={handleReset}>Reset All</button>
        </header>

        <div className="App-users-container">
          {userData.map((user, i) => <UserCard key={i} users={user}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
