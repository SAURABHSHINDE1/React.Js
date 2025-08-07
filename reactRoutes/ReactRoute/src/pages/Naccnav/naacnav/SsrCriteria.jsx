import React from "react";
import "./SsrCriteria.css";
import criteriaData from "./CriteriaData";

export default function SsrCriteria() {
  return (
    <>
      <h3 className="ssr-title">SSR Criteria</h3>
      <hr />

      <div className="ssr-table-wrapper">
        <table className="ssr-table">
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Uploaded File Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {criteriaData.map((item, index) => (
              <tr key={index}>
                <td data-label="Criteria">{item.title}</td>
                <td data-label="Uploaded File Count" className="text-center">{item.count}</td>
                <td data-label="Action" className="text-center">
                  <a
                    href={item.link}
                    className="btn-view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
