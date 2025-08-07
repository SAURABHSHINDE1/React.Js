import React from 'react';
import './dept.css';

const Departments = () => {
  return (
    
    <div className="department-section">
      <h2>Departments</h2>
      <table>
        <thead>
          <tr> 
            <th>Arts</th>
            <th>Science</th>
            <th>Commerce</th>
            <th>Professional Course</th>
            <th>Other</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Department of Economics & Post Graduate Research Center</td>
            <td>Chemistry</td>
            <td rowSpan="6">Commerce</td>
            <td>Computer Science <strong>(U.G and P.G)</strong></td>
            <td rowSpan="6">Physical Education</td>
          </tr>
          <tr>
            <td>Political Science</td>
            <td>Botany</td>
            <td>B.B.A. (Computer Application)</td>
          </tr>
          <tr>
            <td>History</td>
            <td>Zoology</td>
            <td>B.B.A.</td>
          </tr>
          <tr>
            <td>Geography</td>
            <td>Physics</td>
            <td>B.C.A. (Science)</td>
          </tr>
          <tr>
            <td>Marathi</td>
            <td>Mathematics</td>
            <td></td>
          </tr>
          <tr>
            <td>Hindi</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>English</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sanskrit</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Departments;
