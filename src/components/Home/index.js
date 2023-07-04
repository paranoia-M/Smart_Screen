import React from "react";
import Reflv from "@/utils/Reflv";
import RevflvVideo from "../../utils/RevflvVideo";

import styles from "./index.module.less";

export default function Home() {
  const handleClick = () => {
    console.log(922);
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* <Reflv
          style={{ width: 400 }}
          url={"http://111.31.48.42:1360/sdfg/hht.flv"}
          type="flv"
        />
        <Reflv
          style={{ width: 400 }}
          url={
            "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv"
          }
          type="flv"
        /> */}
      </div>
    </div>
  );
}
