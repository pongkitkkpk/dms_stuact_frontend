import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const isLogged = sessionStorage.getItem('isLogged');
    if (isLogged === 'true') {
      setIsAuthenticated(true);
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const handleLogin = async (username, password, history) => {
    // ***************************admin****************************************
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      const adminUser = { username: 'admin', account_type: 'admin' };
      setUser(adminUser);
      sessionStorage.setItem('isLogged', 'true');
      sessionStorage.setItem('user', JSON.stringify(adminUser));
      history.push('/admin');
    } else {

      try {

        const response = await axios.post(
          "http://localhost:3001/api/authen",
          {
            username,
            password,
          },
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            maxBodyLength: Infinity,
          }
        );

        if (response.data.status === 'success') {

          const studentUsersResponse = await axios.get("http://localhost:3001/student/users");
          const studentUsersData = studentUsersResponse.data;
          const matchingStudent = studentUsersData.find(student => student.id_student === response.data.message.username);


          if (matchingStudent) {
            setIsAuthenticated(true);
            setUser(response.data.message);

            const studentUser = { username: response.data.message.username, role: matchingStudent.position };
            setUser(studentUser);
            const combinedUserData = { ...response.data.message, ...response.data.message2, ...matchingStudent };
            sessionStorage.setItem('isLogged', 'true');
            sessionStorage.setItem('user', JSON.stringify(combinedUserData));

            if (matchingStudent.position == "Admin") {
              history.push('/admin');
            }
            else if (matchingStudent.account_type === "personel" && matchingStudent.position == "Stuact") {
              console.log("Stuact part")
              history.replace(`/stuact/allproject`);
            }
            else if (matchingStudent.account_type === "personel" && matchingStudent.position == "AD") {
              history.replace(`/adviser/allproject`);
            }
            else if (matchingStudent.account_type === "students") {
              history.replace(`/${response.data.message.account_type}/allproject`);
            }
          }
          else {
            alert('ไม่มีข้อมูล ในระบบ dms โปรดติดต่อเจ้าหน้าที่');
          }
          // console.log(response.data.message.username)


        } else {
          alert('Authentication failed. รหัสicitผิดผลาด');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again later.');
      }
    }
  };



  const handleLogout = () => {
    sessionStorage.removeItem('isLogged');
    sessionStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser({});
  };



  return (
    <AuthContext.Provider value={{ isAuthenticated, user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
