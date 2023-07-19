import React, { Fragment } from "react";
import styles from "./index.module.css";
import MyFooter from "../MyFooter";
import Roll from '../../common/MyEcharts/Roll'

export default function index() {
  const arrData = [
    {
      id: 1,
      name1: "zzs",
      name2: "zwb",
    },
    {
      id: 2,
      name1: "zzs",
      name2: "zwb",
    },
    {
      id: 3,
      name1: "zzs",
      name2: "zwb",
    },
    {
      id: 4,
      name1: "zzs",
      name2: "zwb",
    },
  ];
  return (
    <Fragment>
      <div className={styles.box}>
        <div className={styles.con_news}>
          <div className={styles.tit}>奖励XXX家企业，惩罚XXX家企业</div>

          <div className={styles.main}>

            <div className={styles.left}>
          <div className={styles.left_tit}>奖励</div>
              {/* <Marquee
                direction="up"
                autoFill={true}
                style={{
                  width: "100%",
                  fontSize: "20px",
                  height: '540px',
                  
                  // height: "100%",
                  // marginTop: '-60px',
                  // borderRight:'1px solid red'
                }}
              >
                <div className={styles.list}>
                  <div className={styles.list_i}>
                    <td>XXX企业</td>
                    <td>¥93899</td>
                    <td>48</td>
                  </div>
                </div>
              </Marquee> */}
              <Roll/>
            </div>
            <div className={styles.right}>
              <div className={styles.left_tit}>惩罚</div>
              {/* <Marquee
                direction="up"
                autoFill={true}
                style={{
                  fontSize: "20px",
                  height: '540px',
                  // marginTop:'-60px',
                }}
              >
                <div className={styles.list}>
                  <div className={styles.list_i}>
                    <span>
                    XXX企业
                    </span>
                    <span>
                    ¥93899
                    </span>
                    <span>
                      48
                    </span>
                  </div>
                </div>
              </Marquee> */}
            </div>
          </div>
        </div>
      </div>
      <MyFooter></MyFooter>
    </Fragment>
  );
}
