import React, { useState } from "react";
import { optionData } from "../Db/database";

const Options = () => {
  const [showOrder, setShowOrder] = useState(null);

  const showRecentOrder = (id) => {
    const selectedItem = optionData.find(item => item.id === id);
    setShowOrder(selectedItem);
  };

  console.log(optionData);

  return (
    <div>
      {optionData &&
        optionData.map((items) => (
          <div key={items.id} className="flex dir-row">
            <div className="width-50 flex dir-row items-center " onClick={() => showRecentOrder(items.id)}>
              <p className="text12">{items.optionName}</p>
              <button>^</button>
            </div>
              {
                showOrder && showOrder.id === items.id && (
                <div className="width-50 flex dir-col">
                <p>{items.title}</p>
                {showOrder.recentOrder.map((data) => (
                  <div key={data.id}>
                    <p>{data.title}</p>
                    <div className="flex dir-row">
                      <img
                        className="img"
                        src={`${data.imgLink}`}
                        alt="an image"
                      />
                      <div className="flex dir-col">
                        <p>{data.description}</p>
                        <span>{data.deliveringDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <div>
                  <button>View All</button>
                </div>
              </div>
                )
              }
          </div>
        ))}
    </div>
  );
};

export default Options;
