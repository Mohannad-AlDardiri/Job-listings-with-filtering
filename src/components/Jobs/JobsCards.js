import React from "react";
import { useSelector } from "react-redux";
import Data from "./data.json";

// import every jop logo because an error when using jop.logo
import photosnapLogo from "./images/photosnap.svg";
import managaLogo from "./images/manage.svg";
import accountLogo from "./images/account.svg";
import myHomeLogo from "./images/myhome.svg";
import loopStudiosLogo from "./images/loop-studios.svg";
import faceitLogo from "./images/faceit.svg";
import shortlyLogo from "./images/shortly.svg";
import insureLogo from "./images/insure.svg";
import eyecamCoLogo from "./images/eyecam-co.svg";
import airFilterCompanayLogo from "./images/the-air-filter-company.svg";

export const FilterCategories = [];
const JobsCards = () => {
  const GlobalState = useSelector((state) => state);
  const JopsLogos = [
    photosnapLogo,
    managaLogo,
    accountLogo,
    myHomeLogo,
    loopStudiosLogo,
    faceitLogo,
    shortlyLogo,
    insureLogo,
    eyecamCoLogo,
    airFilterCompanayLogo
  ];
  let FilterdData = Data;

  // if filtercategories arr is not empty filter cards
  if (GlobalState.filter.filterCategories.length > 0) {
    console.log("readed");
    FilterdData = Data.filter((jop) =>
      GlobalState.filter.filterCategories.every((v) =>
        [jop.role, jop.level, ...jop.tools, ...jop.languages].includes(v)
      )
    );

    console.log(FilterdData);
  }

  const Jops = FilterdData.map((jop) => {
    // to create the categories items
    const Languages = jop.languages.map((lang) => <li key={lang}>{lang}</li>);
    const tools = jop.tools.map((tool) => <li key={tool}>{tool}</li>);
    let jopCategs = [jop.role, jop.level, ...jop.tools, ...jop.languages];
    FilterCategories.push(...jopCategs);

    return (
      <div
        className={jop.featured ? "jop border-desaturatedDarkCyan" : "jop"}
        key={jop.id}
      >
        <div>
          <img src={JopsLogos[jop.id]} alt="jop logo" />

          <ul className="features">
            <li className="company">{jop.company}</li>
            {jop.new && <li className="new">NEW!</li>}
            {jop.featured && <li className="featured">FEATURED</li>}
          </ul>
          <h1 className="position">{jop.position}</h1>
          <ul className="Characteristics">
            <li>{jop.postedAt}</li>
            <li>{jop.contract}</li>
            <li>{jop.location}</li>
          </ul>
        </div>

        <hr />
        <ul className="required-skills">
          <li>{jop.role}</li>
          <li>{jop.level}</li>
          {Languages}
          {tools}
        </ul>
      </div>
    );
  });
  return Jops;
};
export default JobsCards;
