import React, { useState } from "react";
import data from "../careerData";
import { FcFlashOn } from "react-icons/fc";
import { BsArrowRightShort } from "react-icons/bs";

function CompanyCard() {
  const [query, setQuery] = useState("");
  return (
    <>
      <main>
        <nav>
          <div id="logo">
            <h2>YourDreamJob</h2>
          </div>
          <div id="search-btn">
            <input
              type="text"
              placeholder="Search Your Dream Job"
              className="search"
              onChange={(e) => setQuery(e.target.value)}
              />
          </div>
        </nav>
        <div className="main-heading">
          <h1>Find Your Dream Company</h1>
          <p>Here are all the career pages of companies where you want to work.</p>
        </div>
      </main>
      <section>
        <div className="cardList">
          {data
            .filter((company) => company.Title.toLowerCase().includes(query))
            .map((company) => {
              return (
                <div key={company.id} className="cardItem">
                  <div className="cardText">
                    <FcFlashOn
                      className="icon"
                    />
                    <h4>{company.Title}</h4>
                  </div>
                  <div className="cardText">
                  <a href={company.Link} target="_blank">Apply Now </a>
                  <BsArrowRightShort className="icon"/>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default CompanyCard;
