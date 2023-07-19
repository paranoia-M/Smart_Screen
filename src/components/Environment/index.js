import React, { Fragment, useCallback, useState } from "react";
import "./index.css";
import MyFooter from "../MyFooter";
import ShadowSvg from "../MySvg/ShadowSvg";
import DeepSvg from "../MySvg/DeepSvg";
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ChildThree from './ChildThree';
import ChildFour from './ChildFour';
import ChildFive from './ChildFive';
import ChildSix from './ChildSix';

const tabBar = [
  {
    id: 1,
    target: "实时环境数据",
  },
  {
    id: 2,
    target: "测点实时数据",
  },
  // {
  //   id: 3,
  //   target: "新闻发布",
  // },
  // {
  //   id: 4,
  //   target: "法律普及",
  // },
  {
    id: 5,
    target: "相关知识",
  },
  // {
  //   id: 6,
  //   target: "智慧天气",
  // },
];
export default function () {
  const handleClick = (item) => {
    console.log(932, item);
    setActivity(item.id)
  };

  const HandleRender = useCallback(() => {
    console.log(32,activity);
      switch (activity) {
        case 1:
         return <ChildOne/>
        case 2:
         return  <ChildTwo/>
        case 3:
          return  <ChildThree/>
        case 4:
          return <ChildFour/>
        case 5:
          return <ChildFive/>
        case 6:
          return  <ChildSix/>
        default:
          break;
      }
  })
  const [activity,setActivity] = useState(1)
  return (
    <Fragment>
      <div className="box">
        <div className="container">
          <div className="con_mains">
 
            <HandleRender/>
          </div>
          <div className="con_tab">
            {tabBar.map((item) => {
              return (
                <div className="con_tab_box"  onClick={() => handleClick(item)} key={item.id}>
                  <div className={activity == item.id ? 'con_tab_box_item active' : 'con_tab_box_item'}>
                    {activity == item.id ? <ShadowSvg/> : <DeepSvg />}
                    <div className="con_tab_box_item_t"> {item.target}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <MyFooter></MyFooter>
    </Fragment>
  );
}
