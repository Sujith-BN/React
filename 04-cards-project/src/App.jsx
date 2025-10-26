import React from "react";

import Card from "./components/Card";



const App = () => {
const jobs = [
  {
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    posted: "2 days ago",
    title: "Senior Engineer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$220k/year",
    location: "Bangalore, India",
  },
  {
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    posted: "1 week ago",
    title: "Cloud Architect",
    type: "Full Time",
    level: "Mid Level",
    salary: "$180k/year",
    location: "Hyderabad, India",
  },
  {
    company: "Amazon",
    logo: "https://thumbs.dreamstime.com/z/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    posted: "3 days ago",
    title: "Software Development Manager",
    type: "Full Time",
    level: "Senior Level",
    salary: "$250k/year",
    location: "Seattle, USA",
  },
  {
    company: "Netflix",
    logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    posted: "5 days ago",
    title: "Frontend Developer",
    type: "Remote",
    level: "Mid Level",
    salary: "$200k/year",
    location: "Remote",
  },
  {
    company: "Apple",
    logo: "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png",
    posted: "1 day ago",
    title: "iOS Developer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$150k/year",
    location: "Cupertino, USA",
  },
];

 
  return (
    
    <div className="parent flex items-center justify-center">
      {jobs.map(function(ele,id){
        return <div>
          <Card company={ele.company} logo= {ele.logo}posted={ele.posted} title={ele.title} type ={ele.type} level={ele.level} salary={ele.salary} location={ele.location}/>
        </div>
      })}
      
      
    </div>
  );
};

export default App;
