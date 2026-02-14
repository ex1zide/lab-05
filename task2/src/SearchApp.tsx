import { useState } from 'react';
import { User } from './types';

const INITIAL_DATA: User[] = [
  { name: 'Alice', email: 'alice@mail.com', age: 25 },
  { name: 'Bob', email: 'bob@mail.com', age: 30 },
  { name: 'Charlie', email: 'charlie@mail.com', age: 28 },
  { name: 'Diana', email: 'diana@mail.com', age: 22 },
  { name: 'Eve', email: 'eve@mail.com', age: 35 }
];

const SearchApp = () => {
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm('');
    setFilteredUsers(users);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>User Search</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name..."
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <button
          onClick={handleClear}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Clear
        </button>
      </div>

      <p style={{ color: '#666', marginBottom: '16px' }}>
        Showing {filteredUsers.length} of {users.length} users
      </p>

      {filteredUsers.length === 0 ? (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          color: '#666'
        }}>
          <h3>No results found</h3>
          <p>Try a different search term</p>
        </div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredUsers.map((user, index) => (
            <li
              key={index}
              style={{
                padding: '16px',
                marginBottom: '12px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                border: '1px solid #e0e0e0'
              }}
            >
              <h3 style={{ margin: '0 0 8px 0' }}>{user.name}</h3>
              <p style={{ margin: '4px 0', color: '#666' }}>{user.email}</p>
              <p style={{ margin: '4px 0', color: '#999', fontSize: '14px' }}>
                Age: {user.age}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchApp;
