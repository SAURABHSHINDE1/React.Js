import React from "react";
import CommitteeData from "./CommitteeData";
import "./NaacIqac.css";
import CommitteeRow from "./CommitteRow";

function NaacIqac() {
  return (
    <>
      <h3>IQAC Committee</h3>
      <hr className="divider" />
      <div className="table-wrapper">
        <table className="committee-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {CommitteeData.map((member, index) => (
              <CommitteeRow key={index} {...member} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default NaacIqac;
