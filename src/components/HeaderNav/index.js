import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
function Index(props) {
  const location = useLocation();
  const [activity, setActivity] = useState(true);
  const [curUrl, setCurUrl] = useState("/");

  useEffect(() => {
    getCurUrl();
  }, [location.pathname]);

  const getCurUrl = () => {
    let cur = location.pathname;
    setCurUrl(cur);
  };

  console.log(82, curUrl);

  return (
    <header className="top">
      <span className="top_tit">汉中市生态环境局略阳分局智慧云平台</span>
      <Link className={curUrl == "/" ? "activity link" : "link"} to="/">
        智慧大屏
      </Link>
      <Link
        className={curUrl == "/party" ? "activity link" : "link"}
        to="party"
      >
        智慧党建
      </Link>
      <Link
        className={curUrl == "/environment" ? "activity link" : "link"}
        to="environment"
      >
        智慧云平台
      </Link>

      <Link
        className={curUrl == "/smart" ? "activity link" : "link"}
        to="http://202.100.24.118"
      >
        监控
      </Link>
      <Link
        className={curUrl == "/internet" ? "activity link" : "link"}
        to="internet"
      >
        物联网
      </Link>

      <Link className={curUrl == "/news" ? "activity link" : "link"} to="news">
        新闻发布
      </Link>
      <Link className={curUrl == "/law" ? "activity link" : "link"} to="law">
        法律普及
      </Link>
      <Link className={curUrl == "/online" ? "activity link" : "link"} to="online">
        在线办理
      </Link>
      <Link className={curUrl == "/publicity" ? "activity link" : "link"} to="publicity">
        处罚公示
      </Link>
      <Link
        className={curUrl == "/admin" ? "activity link" : "link"}
        to="http://124.220.18.66:82 "
      >
        管理台
      </Link>
    </header>
  );
}

export default Index;

// 物联网平台 智慧党建 新闻发布 法律普及 实时环境数据 admin
