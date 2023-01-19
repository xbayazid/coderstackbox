import React, { useEffect, useState } from "react";
import BestDevCard from "../../../components/Cards/BestDevCard";
import { bestDevs } from "../../../constants";
import styles, { layout } from "../../../style";

const BestDeveloper = () => {
  const [developers, setDevelopers] = useState([]);
  useEffect(()=>{
    fetch('https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/bestDevelopers')
    .then(res => res.json())
    .then(data => setDevelopers(data))
  },[]);

  return (
    <div className={`${layout.sectionCol}`}>
      <div className={`${layout.sectionInfo} text-center z-10`}>
        <div className={`${styles.heading2} `}>Best Developers</div>
        <div className={`${styles.paragraph} `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          necessitatibus
        </div>
      </div>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5">
        {developers.map((bestDev) => (
          <BestDevCard DevCard key={bestDev.id} props={bestDev}></BestDevCard>
        ))}
      </div>
    </div>
  );
};

export default BestDeveloper;
