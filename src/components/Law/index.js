import React, { Fragment, useEffect, useState } from "react";
import "./index.css";
import MyFooter from "../MyFooter";
import { oneList, twoList, threeList, fourList, standList } from "./data";

const label1 = ["水环境保护", "大气环境保护", "环境躁动与震动", "土壤环境保护"];
const label2 = ["固体废物与化学品环境污染控制", "核辐射与电磁辐射环境保护"];
const label3 = ["生态环境保护", "环境影响评价", "排污许可", "其他环境保护标准"];
const label4 = [
  "污染防治技术政策",
  "可行技术指南",
  "环境检测方法标准及监测规范",
];
export default function (props) {
  const [oneD, setOneD] = useState([]);
  const [twoD, setTwoD] = useState([]);
  const [threeD, setThreeD] = useState([]);
  const [fourD, setFourD] = useState([]);

  const [sList, setSList] = useState([]);

  // active
  const [act1, setAct1] = useState("水环境保护");
  const [cur1, setCur1] = useState("水环境保护");

  const [act2, setAct2] = useState("固体废物与化学品环境污染控制");
  const [cur2, setCur2] = useState("固体废物与化学品环境污染控制");

  const [act3, setAct3] = useState("生态环境保护");
  const [cur3, setCur3] = useState("生态环境保护");

  const [act4, setAct4] = useState("污染防治技术政策");
  const [cur4, setCur4] = useState("污染防治技术政策");

  useEffect(() => {
    setOneD(oneList);
    setTwoD(twoList);
    setThreeD(threeList);
    setFourD(fourList);
    setSList(standList);
  }, []);
  console.log(899, process.env.NODE_ENV, process.env);
  const handleClick = (val) => {
    console.log(899, val);
    setCur1(val);
    setAct1(val);
  };
  const handleClick2 = (val) => {
    setCur2(val);
    setAct2(val);
  };
  const handleClick3 = (val) => {
    setCur3(val);
    setAct3(val);
  };
  const handleClick4 = (val) => {
    setCur4(val);
    setAct4(val);
  };
  const RenderOne = () => {
    let cur = [];

    const getCurList = () => {
      oneD.map((item) => {
        console.log(99, item, act1, item.label == act1);
        if (item.label == act1) {
          cur = item.list;
        }
      });
    };
    getCurList();

    return (
      <div className="l_box">
        <div className="l_box_tab">
          {label1.map((j) => {
            return (
              <div
                className={cur1 == j ? "l_box_tab_b l_activity" : "l_box_tab_b"}
                onClick={() => {
                  handleClick(j);
                }}
              >
                {j}
              </div>
            );
          })}
        </div>
        <div className="l_box_list">
          <div className="l_box_list_box">
            <ul className="l_box_list_box_ul">
              {cur.map((item, index) => {
                return (
                  <li key={index} className="l_box_list_box_ul_li ">
                    <a href="">
                      <i style={{ padding: "4px" }}>·</i> {item.text}
                    </a>
                    <span>{item.time}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const RenderTwo = () => {
    let cur = [];

    const getCurList = () => {
      twoD.map((item) => {
        if (item.label == act2) {
          cur = item.list;
        }
      });
    };
    getCurList();

    return (
      <div className="l_box">
        <div className="l_box_tab">
          {label2.map((j) => {
            return (
              <div
                className={cur2 == j ? "l_box_tab_b l_activity" : "l_box_tab_b"}
                onClick={() => {
                  handleClick2(j);
                }}
              >
                {j}
              </div>
            );
          })}
        </div>
        <div className="l_box_list">
          <div className="l_box_list_box">
            <ul className="l_box_list_box_ul">
              {cur.map((item, index) => {
                return (
                  <li key={index} className="l_box_list_box_ul_li ">
                    <a href="">
                      <i style={{ padding: "4px" }}>·</i> {item.text}
                    </a>
                    <span>{item.time}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const RenderThree = () => {
    let cur = [];

    const getCurList = () => {
      threeD.map((item) => {
        if (item.label == act3) {
          cur = item.list;
        }
      });
    };
    getCurList();

    return (
      <div className="l_box">
        <div className="l_box_tab">
          {label3.map((j) => {
            return (
              <div
                className={cur3 == j ? "l_box_tab_b l_activity" : "l_box_tab_b"}
                onClick={() => {
                  handleClick3(j);
                }}
              >
                {j}
              </div>
            );
          })}
        </div>
        <div className="l_box_list">
          <div className="l_box_list_box">
            <ul className="l_box_list_box_ul">
              {cur.map((item, index) => {
                return (
                  <li key={index} className="l_box_list_box_ul_li ">
                    <a href="">
                      <i style={{ padding: "4px" }}>·</i> {item.text}
                    </a>
                    <span>{item.time}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const RenderFour = () => {
    let cur = [];

    const getCurList = () => {
      fourD.map((item) => {
        if (item.label == act4) {
          cur = item.list;
        }
      });
    };
    getCurList();

    return (
      <div className="l_box">
        <div className="l_box_tab">
          {label4.map((j) => {
            return (
              <div
                className={cur4 == j ? "l_box_tab_b l_activity" : "l_box_tab_b"}
                onClick={() => {
                  handleClick4(j);
                }}
              >
                {j}
              </div>
            );
          })}
        </div>
        <div className="l_box_list">
          <div className="l_box_list_box">
            <ul className="l_box_list_box_ul">
              {cur.map((item, index) => {
                return (
                  <li key={index} className="l_box_list_box_ul_li ">
                    <a href="">
                      <i style={{ padding: "4px" }}>·</i> {item.text}
                    </a>
                    <span>{item.time}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <div className="box">
        <div className="law_box">
          <p className="law_box_label">
            关于印发《国家环境保护标准“十三五”发展规划》的通知
          </p>
          <div className="law_box_tit">标准文本</div>
          <RenderOne />
          <RenderTwo />
          <RenderThree />
          <RenderFour />
          <div className="law_box_tit">标准修改与解释</div>
          <div>
            <div className="l_box_list">
              <div className="l_box_list_box">
                <ul className="l_box_list_box_ul">
                  {sList.map((item, index) => {
                    return (
                      <li key={index} className="l_box_list_box_ul_li ">
                        <a href="">
                          <i style={{ padding: "4px" }}>·</i> {item.text}
                        </a>
                        <span>{item.time}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyFooter></MyFooter>
    </Fragment>
  );
}
