import React, { useEffect } from 'react';
import AJU from '../../assets/AJU.png';
import CodingClub from '../../assets/CodingClub.png';
import './Rules.scss';

function Rules() {
  useEffect(() => {
    const points = [
      "Fill the grid so that each row, each column, and each of the nine 3×3 subgrids contain all of the numbers from 1 to 9.",
      "Use the 'Check' button to verify your progress. You can only use 'Check' 3 times.",
      "The score is calculated based on the number of correct cells filled.",
      "The game has a time limit of 10 minutes. If the time runs out, the puzzle will be automatically submitted.",
      "Your goal is to complete the puzzle as quickly as possible with the highest score."
    ];

    const ul = document.getElementById("bulletPoints");

    // Clear any existing bullet points
    if (ul) {
      ul.innerHTML = '';
      
      points.forEach(point => {
        const li = document.createElement("li");
        li.textContent = point;
        ul.appendChild(li);
      });

      // Show the neon button
      const neonButton = document.getElementById("neonButton");
      if (neonButton) {
        neonButton.style.display = "inline-block";
      }
    }
  }, []);

  return (
    <div className="rules-container">
      <div id="images">
        <img src={AJU} alt="AJU Logo" id="AJU" />
        <img src={CodingClub} alt="Coding Club Logo" id="CC" />
      </div>

      <h1>SUDOKU RULES</h1>

      <ul id="bulletPoints">
        {/* Bullet points will be dynamically added here */}
      </ul>

      <a href="/HTML/sudoku.html" className="neon-button" id="neonButton">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        START
      </a>
    </div>
  );
}

export default Rules;
