import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { optionData } from "../Db/database";

const Options = () => {
  const [showOrder, setShowOrder] = useState(null);
  const [arrowColors, setArrowColors] = useState([]);

  useEffect(() => {
    if (optionData.length > 0) {
      setShowOrder(optionData[0]);
    }

    const colors = generateArrowColors(optionData.length);
    setArrowColors(colors);
  }, []);

  const generateArrowColors = (length) => {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF5733", "#33FF57", "#5733FF"];
    return Array.from({ length }, (_, index) => colors[index % colors.length]);
  };

  const showRecentOrder = (id) => {
    const selectedItem = optionData.find(item => item.id === id);
    setShowOrder(selectedItem);
  };

  // console.log(optionData);

  return (
    <div>
      {optionData &&
        optionData.map((items, index) => (
          <div key={items.id} className="flex dir-row">
            <div className="width-50 cursor flex dir-row items-center shadow opt-height justify-between p opt-border m-5 bg-white"  onClick={() => showRecentOrder(items.id)} style={{ borderLeft: `4px solid ${arrowColors[index]}`}}>
              <p className="text-1">{items.optionName}</p>
              <button className="cursor icons-bg" style={{ color: arrowColors[index] }}><IoIosArrowDown className="icons-bg" /></button>
            </div>
              {
                showOrder && showOrder.id === items.id && (
                <div className="width-50 flex dir-col sticky top-0 opt-border bg-white p m-rl-5">
                <p className="m-5">{items.title}</p>
                {showOrder.recentOrder.map((data) => (
                  <div key={data.id}>
                    <p className="p">{data.title}</p>
                    <div className="flex dir-row">
                      <img
                        className="img"
                        src={`${data.imgLink}`}
                        alt={''}
                      />
                      <div className="text-1 p flex dir-col">
                        <p>{data.description}</p>
                        <span>{data.deliveringDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <div>
                  <button className='shadow b-5 p cursor m-5 items-center flex'>View All <IoIosArrowForward className="icons-bg" /></button>
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
