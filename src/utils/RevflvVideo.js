import React, { useCallback, useEffect, useRef, useState } from "react";
import flvJs from "flv.js";
import "./styles.less";
import {Slider} from 'antd'

function RevflvVideo() {
  const [isPlay, setIsPlay] = useState(false);
  const flvRef = useRef();
  const divRef = useRef(null);
  const videoRef = useRef(null);

  const [isShowAudio,setIsShowAudio] = useState(false)
  useEffect(() => {
    if (flvJs.isSupported()) {
      flvRef.current = flvJs.createPlayer({
        type: "flv",
        isLive: true,
        cors: true,
        hasVideo: true,
        url: "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv",
      });
      if (videoRef.current) {
        flvRef.current.attachMediaElement(videoRef.current);
        flvRef.current.load();
      }
    }
  }, []);
  const onClickPlay = useCallback(() => {
    if (flvRef.current) {
      if (isPlay) {
        flvRef.current.pause();
      } else {
        flvRef.current.play();
      }
      setIsPlay(!isPlay);
    }
  }, [isPlay]);
//全屏
  // 开启全屏
  const requestFullscreen = useCallback(() => {
  let document = window.document
  if (document.requestFullscreen) {
    document.requestFullscreen();
  } else if (document.mozRequestFullScreen) {
    document.mozRequestFullScreen();
  } else if (document.webkitRequestFullscreen) {
    document.webkitRequestFullscreen();
  } else if (document.msRequestFullscreen) {
    document.msRequestFullscreen();
  }
}, []);
// 退出全屏
const exitFullscreen = useCallback(() => {
    // 这里的类型跟上面一样
    const document = window.document;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }, []);



  // 控制声音
  const onChange = useCallback((value) => {
    if (videoRef.current) {
      videoRef.current.volume = value / 100;
    }
  }, []);
  const onClickAudio = () => {
    let res = isShowAudio
    setIsShowAudio(!res)

  }
  // 全屏

  const fullScreen = () => {
    let document = window.document
    console.log(3874, document,document.requestFullscreen, document.exitFullscreen);
    if (document.requestFullscreen) {
      exitFullscreen()
    }
    if (document.exitFullscreen) {
      requestFullscreen()
    }
  }

  console.log(4773,isShowAudio);
  return (
    <div className={"live"}>
      <div className={"video-container"} ref={divRef}>
        <video ref={videoRef} className={"video"}>
          {`Your browser is too old which doesn't support HTML5 video.`}
        </video>
        <div className={"control"}>
          <div className={"img"} onClick={onClickPlay}>
            播放
          </div>
          <div className={"img"}>摄像头</div>
          {/* 扩音器 */}
          <div
            className={"img-container audio-container"}
            onClick={onClickAudio}
          >
            声音
            <div className={`audio ${isShowAudio ? "show" : "hide"}`}>
              <Slider
                defaultValue={100}
                min={0}
                max={100}
                vertical
                tipFormatter={null}
                onChange={onChange}
              />
            </div>
          </div>

            

          <div className={"img"} onClick={fullScreen}>全屏</div>
        </div>
      </div>
    </div>
  );
}

export default RevflvVideo;
