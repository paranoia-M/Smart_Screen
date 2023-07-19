/**
 * 
 * 
 *  
          <iframe
        id="iframe_key"
        src="/Chart.html"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
 */
import React, { Fragment, useState } from "react";
import styles from './index.module.css';
import MyFooter from "../MyFooter";
import MyEcharts from "../../common/MyEcharts";
import { Card, Carousel, Button, Modal } from "antd";
import options1 from "./options1";
import options2 from "./options2";
import options3 from "./options3";
import options4 from "./options4";
import options5 from "./options5";
import { BorderBox13 } from "@jiaminghi/data-view-react";
import styled from "styled-components";
export default function () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const carData = [
    {
      id: "1",
      url: "https://syb.shanxiszxc.com:8088/digit-village/szxcfile/16837978084737205.png",
      text: "五星创建，双强争优，创五星，聚合力，争双强，促发展",
    },
    {
      id: "2",
      url: "https://syb.shanxiszxc.com:8088/digit-village/szxcfile/16837978084737205.png",
      text: "五星创建，双强争优，创五星，聚合力，争双强，促发展",
    },
    {
      id: "3",
      url: "https://syb.shanxiszxc.com:8088/digit-village/szxcfile/16837978084737205.png",
      text: "五星创建，双强争优，创五星，聚合力，争双强，促发展",
    },
    {
      id: "4",
      url: "https://syb.shanxiszxc.com:8088/digit-village/szxcfile/16837978084737205.png",
      text: "五星创建，双强争优，创五星，聚合力，争双强，促发展",
    },
  ];
  const contentStyle = {
    height: "300px",
    // width:'80%',
    color: "#fff",
    // lineHeight: "160px",
    textAlign: "center",
    // background: "#364d79",
    // border: '1px solid  rgba(255, 255, 255, 0.2)',
    // margin:'4px 0',
    marginTop: "20px",

    // margin:'0 auto'
  };
  const picStyle = {
    height: "300px",
    width: "96%",
    margin: "0 auto",
  };
  const titStyle = {
    background: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    // margin: '0 4px',
    background: "linear-gradient(rgb(9,13,24), #7288b6)",
    color: "#fff",
    padding: "4px",
    paddingTop: "8px",
  };
  const chartStyle = {
    height: '90%',
    width: '100%',
    left:'0',
    position: 'absolute',
    bottom:'10px'
}
  const chartStyleB = {
    height: '60%',
    marginTop:'80px'
    // width: '70%',
    // left:'0',
    // position: 'absolute',
    // bottom: '10px',
    // left:'60px'
}
  const handleLook = (val) => {
    console.log(833, val);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
      <div className={styles.party_main}>
        <div className={styles.party_main_box}>
          <div className={styles.party_main_box_l}>
            <div className={styles.party_main_box_p}>
              <div className={styles.chart_tit}>标题</div>
              <div style={chartStyle}>
              <MyEcharts options={options4} />
             </div>
            </div>
            <div className={styles.party_main_box_p}>
              <div className={styles.chart_tit}>标题</div>
              <div style={chartStyle}>
              <MyEcharts options={options2} />
             </div>
            </div>
          </div>
          <div className={styles.party_main_box_m}>
            {/* <div className='party_main_box_m_t'>
                    智慧党建
                  </div> */}
            <div className={styles.party_main_box_m_t2}>
              <ul>
                <li>
                  党委:
                  <span
                    style={{
                      fontSize: "24px",
                      marginLeft: "4px",
                      color: "#FAAB11",
                    }}
                  >
                    383个
                  </span>
                </li>
                <li>
                  党支书:
                  <span
                     style={{
                      fontSize: "24px",
                      marginLeft: "4px",
                      color: "#FAAB11",
                    }}
                  >
                    383个
                  </span>
                </li>
                <li>
                  一级党支部:
                  <span
                      style={{
                      fontSize: "24px",
                      marginLeft: "4px",
                      color: "#FAAB11",
                    }}
                  >
                    383个
                  </span>
                </li>
                <li>
                  二级党支部:
                  <span
                      style={{
                      fontSize: "24px",
                      marginLeft: "4px",
                      color: "#FAAB11",
                    }}
                  >
                    383个
                  </span>
                </li>
                <li>
                  党员人数:
                  <span
                      style={{
                      fontSize: "24px",
                      marginLeft: "4px",
                      color: "#FAAB11",
                    }}
                  >
                    383人
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.party_main_box_m_c}>
              <div className={styles.party_main_box_m_c_c}>
                {/* autoplay */}
                <Carousel autoplay>
                  {carData.map((item, index) => {
                    return (
                      <div key={index} onClick={() => handleLook(item)}>
                        <div style={contentStyle}>
                          <img style={picStyle} src={item.url} alt="" />
                        </div>
                        {/* <div style={{height:'10px'}}></div> */}
                        <div style={titStyle}>{item.text}</div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>

            <div className={styles.party_main_box_m_t3}>
              <div className="chart_tit">标题</div>{" "}
              <div style={chartStyle}>
              <MyEcharts options={options1} />
             </div>
            </div>
          </div>
          <div className={styles.party_main_box_r}>
            <div className={styles.party_main_box_p}>
              {" "}
              <div className={styles.chart_tit}>标题</div>{" "}
              <div style={chartStyleB}>
              <MyEcharts options={options3} />
             </div>
            </div>
            <div className={styles.party_main_box_p}>
              {" "}
              <div className={styles.chart_tit}>标题</div>{" "}
              <div style={chartStyleB}>
              <MyEcharts options={options5} />
             </div>
            </div>
          </div>
        </div>
        <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </div>
  
  );
}
