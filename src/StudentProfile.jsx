import React, { createContext, useState, useContext } from 'react';

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [ user, setUser ] = useState({ name: 'Miguel Mañabo', age: 21, major: 'BSIS' });

  return (
	<StudentContext.Provider value={{ user, setUser }}>
  	{children}
	</StudentContext.Provider>
  );
};

const Profile = () => {
  const { user, setUser } = useContext(StudentContext);

  return (
	<div>
  	<p>Name: {user.name}</p>
  	<p>Age: {user.age}</p>
    <p>Major: {user.major}</p>
	</div>
  );
};

const StudentProfile = () => {
  return (
	<StudentProvider>
      	<Profile />
    </StudentProvider>
  );
};

export default StudentProfile