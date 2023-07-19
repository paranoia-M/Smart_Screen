import React, { Fragment, useEffect, useState } from "react";
import styles from "./index.module.css";
import zh_CN from "antd/es/locale/zh_CN";
import { Pagination, ConfigProvider } from "antd";
import MyFooter from "../MyFooter";
import OneSvg from "./OneSvg";
import TwoSvg from "./TwoSvg";
import ThreeSvg from "./ThreeSvg";
import { useNavigate } from "react-router";
import { div } from "zrender/lib/core/vector";
export default function () {
  const [data, setData] = useState([]);

  useEffect(() => { }, []);
  
  const navigate = useNavigate()

  const handleSearch = () => [];

  const arrList = [
    {
      title: "对实名举报人给予奖励",
      online: {
        text: "在线办理",
        url: "https://zwfw.hanzhong.gov.cn/icity/icity/submitsp/baseinfo?itemId=c59740cbffbc2fa7c74fc12e9584d1d9",
      },
      thing: {
        text: "办事指南",
        url: "https://zwfw.hanzhong.gov.cn/icity/icity/proinfo/indexSimple?code=f6edeb41ac282e5a46ac0a87d18776eb",
      },
      booking: {
        text: "预约",
        url: "",
      },
    },
    {
      title: "污染源自动监控设施登记备案",
      online: {
        text: "在线办理",
        url: "https://zwfw.hanzhong.gov.cn/icity/icity/submitsp/baseinfo?itemId=84b8535a7c4d22efead254ea89723582",
      },
      thing: {
        text: "办事指南",
        url: "https://zwfw.hanzhong.gov.cn/icity/icity/proinfo/indexSimple?code=0340b3b6ef202ac7c32afcf32321c965",
      },
      booking: {
        text: "预约",
        url: "",
      },
    },
    {
      title: "监督投诉咨询服务",
      online: {
        text: "在线办理",
        url: "https://zwfw.hanzhong.gov.cn/icity/icity/submitsp/baseinfo?itemId=3bba13552ecbcbb355e29f1944344c73",
      },
      thing: {
        text: "办事指南",
        url: "https://zwfw.hanzhong.gov.cn/icity/icity/proinfo/indexSimple?code=fc8cafb54fd106974b4d4aea6e148ea9",
      },
      booking: {
        text: "预约",
        url: "",
      },
    },
  ];

  const RenderSvg = (prop) => {
    switch (prop.title) {
      case "对实名举报人给予奖励":
        return <OneSvg />;
      case "污染源自动监控设施登记备案":
        return <TwoSvg />;
      case "监督投诉咨询服务":
        return <ThreeSvg />;

      default:
        break;
    }
  };
  const RenderLabel = (prop) => {
    console.log(833, prop);

    switch (prop.inx) {
      case 0:
        return <p>对实名举报人给予奖励</p>
      case 1:
        return <p>污染源自动监控设施登记备案</p>
      case 2:
        return <p>监督投诉咨询服务</p>
    
      default:
        break;
    }
    return (
      <div>{ prop.label}</div>
    )
  }
  const handleClick = (target) => {
    console.log(84, target);
    window.location.href = target
  };
  return (
    <Fragment>
      <div className={styles.box}>
        <div className={styles.con_news}>
          {arrList.map((item, index) => {
            return (
              <div className={styles.online_cen} key={index}>
                <RenderSvg title={item.title} />
                <RenderLabel label={item} inx={index}></RenderLabel>
                <div className={styles.online_btn}>
                  <button
                    className={styles.online_an}
                    onClick={() => {
                      handleClick(item.online.url);
                    }}
                  >
                    {item.online.text}
                  </button>
                  <button
                    className={styles.online_an}
                    onClick={() => {
                      handleClick(item.thing.url);
                    }}
                  >
                    {item.thing.text}
                  </button>
                  <button className={styles.online_an}>
                    {item.booking.text}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <MyFooter></MyFooter>
    </Fragment>
  );
}
