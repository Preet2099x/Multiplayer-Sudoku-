import React, { useState } from 'react';
import './Login.scss';
import AJU from '../../assets/AJU.png';
import CodingClub from '../../assets/CodingClub.png';

function Login() {
  const [name, setName] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [semester, setSemester] = useState('');
  const [college, setCollege] = useState('');
  const [error, setError] = useState('');

  const submitForm = () => {
    if (!name || !enrollmentNumber || !semester || !college) {
      setError('All fields are required.');
      return;
    }

    // Save the data to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('enrollmentNumber', enrollmentNumber);
    localStorage.setItem('semester', semester);
    localStorage.setItem('college', college);

    // Redirect to rules.html
    window.location.href = '/HTML/rules.html';
  };

  return (
    <>
      <div id="images">
        <img src={AJU} alt="AJU Logo" />
      </div>

      <div id="logo">
        <img src={CodingClub} alt="Coding Club Logo" />
      </div>

      {/* ring div starts here */}
      <div className="ring">
        <i style={{ '--clr': '#2600ff' }}></i>
        <i style={{ '--clr': '#ff0057' }}></i>
        <i style={{ '--clr': '#fffd44' }}></i>
        <div className="login">
          <h2>SUDOKU</h2>
          <form id="sudokuForm" onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
            {error && <p className="error">{error}</p>}
            <div className="inputBx">
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="inputBx">
              <input
                type="text"
                placeholder="Enrollment Number"
                value={enrollmentNumber}
                onChange={(e) => setEnrollmentNumber(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="inputBx">
              <input
                type="text"
                placeholder="Semester"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="inputBx">
              <input
                type="text"
                placeholder="College"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="inputBx">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      {/* ring div ends here */}
      <div id="details">
        <p>Developed by: Preet Singh</p>
        <p>Email: preetsingh3101a@gmail.com</p>
        <p>Github: <a href="https://github.com/Preet2099x">Preet2099x</a></p>
      </div>
    </>
  );
}

export default Login;
