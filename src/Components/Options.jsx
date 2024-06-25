import React from "react";
import { optionData } from "../Db/database";

const Options = () => {
  console.log(optionData);

  return (
    <div>
      {optionData &&
        optionData.map((items) => (
          <div key={items.id} className="flex dir-row">
            <div>
              <p>{items.optionName}</p>
              <button>^</button>
            </div>
            <div>
              <p>Recent 5 Orders</p>
              <div>
                {items.recentOrder && (
                  <div>
                    <img src={`${items.recentOrder.imgLink}`} alt="an image" />
                    <div>
                      <p>{items.recentOrder.description}</p>
                      <span>{items.recentOrder.deliveringDate}</span>
                    </div>
                  </div>
                )}
              </div>
              <button>View All</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Options;
