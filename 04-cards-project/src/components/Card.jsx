import React from 'react'
import { Bookmark } from "lucide-react";
const Card = (data) => {
  return (
   <div className="card">
      
        <div className="top">
          <img
            src={data.logo}
          />
          <button>
            <Bookmark color="white" size={18} />
          </button>
        </div>

       
        <div className="center">
          <h3>
            {data.company} <span> {data.posted}</span>
          </h3>
          <h1>{data.title}</h1>

          <div className="exp">
            <h3>{data.type}</h3>
            <h3>{data.level}</h3>
          </div>
        </div>

        <div className="bottom" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px"
        }}>
          <div>
            <h2 style={{ margin: 0 }}>{data.salary}</h2>
            <h3 style={{ fontSize: "14px", fontWeight: 300, margin: 0 }}>
              {data.location}
            </h3>
          </div>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              border: "none",
              borderRadius: "20px",
              padding: "8px 16px",
              cursor: "pointer",
              fontWeight: "500"
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
  )
}

export default Card
