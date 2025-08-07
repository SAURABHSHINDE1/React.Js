import React from "react";
import "./NaacAbout.css";

function NaacAbout() {
  return (
    <>
      <h3 className="right-title">Welcome To NAAC / IQAC</h3>
      <hr />

      <section className="gray">
        <div className="th">About NAAC / IQAC</div>
        <div className="break"></div>
        <p>
          As per the guidelines by The National Assessment and Accreditation
          Council (NAAC), the institution formed the Internal Quality Assurance
          Cell (IQAC) on 21st June, 2005 with the aim of quality sustenance and
          enhancement. The IQAC is actively involved in developing mechanisms
          for conscious, consistent and catalytic improvement in the overall
          performance of the institution.
        </p>
      </section>

      <section className="gray">
        <h4 className="th">Quality Policy of IQAC</h4>
        <div className="break"></div>
        <ul>
          <li>
            Ensuring timely, efficient and progressive performance of academic,
            administrative and financial tasks;
          </li>
          <li>
            The relevance and quality of academic and research programmes;
          </li>
          <li>
            Equitable access to and affordability of academic programmes for
            various sections of society;
          </li>
          <li>
            Optimization and integration of modern methods of teaching and
            learning;
          </li>
          <li>The credibility of evaluation procedures;</li>
          <li>
            Ensuring the adequacy, maintenance and proper allocation of support
            structure and services;
          </li>
          <li>
            Sharing of research findings and networking with other institutions.
          </li>
        </ul>
      </section>
    </>
  );
}

export default NaacAbout
