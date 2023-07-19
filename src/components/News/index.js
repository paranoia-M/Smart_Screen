import React, { Fragment, useEffect, useState } from "react";
import "./index.css";
import zh_CN from "antd/es/locale/zh_CN";
import { Pagination, ConfigProvider } from "antd";
import MyPagination from "../../utils/MyPagination";
import MyFooter from "../MyFooter";
import dataList from "./data";
export default function () {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataList);
  }, []);
  const handleSearch = () => [];
  return (
    <Fragment>
      <div className="box">
        <div className="con_news">
          <div className="con_news_tit">新闻发布</div>
          <ul className="con_news_tit_ul">
            {data.map((item, index) => {
              return (
                <li
                  className={`con_news_tit_ul_li ${
                    (index + 1) % 5 == 0 ? "text_dashed" : ""
                  }`}
                >
                  <a className="con_news_tit_ul_li_a " href="">
                    <span style={{ padding: "4px" }}>·</span>
                    {item.label}
                  </a>
                  <span className="con_news_tit_ul_li_s">{item.time}</span>
                </li>
              );
            })}
          </ul>

          <div>
            {/* <MyPagination allPage={20} currentPage={1} handleSearch={() => handleSearch()} loading={ false} /> */}
            <ConfigProvider locale={zh_CN}>
              <Pagination
                className="page_bottom"
                total={25}
                showSizeChanger
                showQuickJumper
                showTotal={(total) => `共 ${total} 条`}
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
      <MyFooter></MyFooter>
    </Fragment>
  );
}
