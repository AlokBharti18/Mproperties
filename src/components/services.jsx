import React from "react";
import { Pic } from "./pic";

console.log("line 21",`${process.env.PUBLIC_URL}/img/bank/bob.jpg`)
export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Partners Bank</h2>
          <p>
          Financial Property Bank offers a comprehensive suite of property financing services, covering residential, commercial, and investment properties.
          Whether you're a first-time homebuyer, a property investor, or a business owner looking to expand, we have the expertise to guide you through the entire financing process
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-2">
                  {/* <i className={d.icon}></i> */}
                  <Pic pic={`${process.env.PUBLIC_URL}/${d.pic}`} />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    {/* <p>{d.text}</p> */}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
