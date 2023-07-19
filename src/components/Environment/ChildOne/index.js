import React, { useEffect, useState } from "react";
import "./index.css";
import { Image, Progress } from "antd";

import {
  getCurWeather,
  getCurQuality,
  getSixWeather,
  getLife,
} from "@/services";
import { div } from "zrender/lib/core/vector";

export default function index() {
  // 当前天气情况
  const [curWtData, setCurWtData] = useState([]);
  // 天气预警
  const [curQlData, setCurQlData] = useState([]);
  // 四十日天气
  const [sixWtData, setSixWtData] = useState([]);
  // 生活指数
  const [lifeData, setLifeData] = useState([]);
  const getCurDate = (a) => {
    let arr = a
    let res = arr.split('').splice(4)
    res.splice(2, 0, "月");
    res.push("日");
    console.log();
    return res.join("")
  };
  useEffect(() => {
    // 获取当前天气情况
    getCurWeather().then((res) => {
      console.log(3982, res.data);
      setCurWtData(res.data);
    });
    getCurQuality().then((res) => {
      console.log(477, res.data);
      setCurQlData(res.data);
    });
    getSixWeather().then((res) => {
      console.log(44837);
      // res.data.splice(0,7)
      setSixWtData(res?.data?.datas?.splice(1, 7));
    });
    getLife().then((res) => {
      setLifeData(res?.data?.data);
    });
  }, []);

  console.log(899, sixWtData);
  return (
    <div className="one">
      <div className="one_t">
        {/* <p className='one_top_tit'>略阳县空气质量</p> */}
      </div>

      <div className="one_top">
        <div className="one_top_left">
          <div className="one_top_left_top">
            <div className="one_top_left_top_temp">{curWtData.temp}</div>
            <div className="one_top_left_top_mid">
              <div>{curWtData.today}</div>
              <div>空气质量：</div>
              <div className="one_top_left_top_ql">{curQlData.lev}</div>
            </div>

            <div>
              <img
                width={160}
                src={require("@/assets/images/weather.png")}
              />
            </div>
          </div>

          <div className="one_top_left_bottom">
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_ag?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_ag?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_kt?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_kt?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_cl?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_cl?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_ag?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_ag?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_ssd?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_ssd?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_cy?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_cy?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_dy?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_dy?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_fs?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_fs?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_tyj?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_tyj?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_gj?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_gj?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_hc?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_hc?.info}</p>
            </div>
            {/* <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_ag?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_ag?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_jt?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_jt?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_mf?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_mf?.info}</p>
            </div> */}
            {/* <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_ysh?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_ysh?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_pj?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_pj?.info}</p>
            </div>
            <div className="one_top_left_bottom_item">
              <p className="my_p">{lifeData?.zs_ys?.name}</p>
              <span className="split"></span>
              <p className="my_p right_p">{lifeData?.zs_ys?.info}</p>
            </div> */}
          </div>

          {/* <div>进度条</div> */}

          {/* <div>提示框</div> */}
        </div>

        <div className="one_top_right">
          {curQlData?.data?.map((item, index) => {
            return (
              <div className="one_top_right_box" key={index}>
                <div className="one_top_right_box_top">
                  <div>{item.en}</div>
                  <div>{`(${item.cn})`}</div>
                </div>
                <div className="one_top_right_box_mid">
                  <div>{`${item.val} μg/m³`}</div>
                </div>
                <div>
                  <Progress
                    showInfo={false}
                    strokeColor={"#46BD15"}
                    trailColor={"#6e6f6e"}
                    percent={10}
                    size="small"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="one_bottom">
        <div className="one_bottom_tit">
          <span className="one_bottom_tit_label">|</span>
          <h2>未来七天AQI预报</h2>
        </div>
        <div className="one_bottom_main">
          {sixWtData?.map((item, index) => {
            return (
              <div className="one_bottom_list">
                <div className="one_bottom_list_top">
                  <div className="one_bottom_list_top_l">{getCurDate(item.date)}</div>
                  <div className="one_bottom_list_top_l" style={{marginLeft:'20px'}}>{item.week}</div>
                </div>
                <div className="one_bottom_list_mid">
                  最高气温:{item.temp_max}
                </div>
                <div className="one_bottom_list_mid">
                  最低气温:{item.temp_min}
                </div>
                <div className="one_bottom_list_mid">
                  天气:{item.weather}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
