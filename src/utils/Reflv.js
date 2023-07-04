import React, { Component } from "react";
import PropTypes from "prop-types";
import flvjs from "flv.js";
import styles from "./flv.module.less";
import { Button, message, Space } from "antd";
import { logDOM } from "@testing-library/react";

/**
 * react component wrap flv.js
 */
export default class Reflv extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * media URL, can be starts with 'https(s)' or 'ws(s)' (WebSocket)
     */
    url: PropTypes.string,
    /**
     * media type, 'flv' or 'mp4'
     */
    type: PropTypes.oneOf(["flv", "mp4"]).isRequired,
    /**
     * whether the data source is a **live stream**
     */
    isLive: PropTypes.bool,
    /**
     * whether to enable CORS for http fetching
     */
    cors: PropTypes.bool,
    /**
     * whether to do http fetching with cookies
     */
    withCredentials: PropTypes.bool,
    /**
     * whether the stream has audio track
     */
    hasAudio: PropTypes.bool,
    /**
     * whether the stream has video track
     */
    hasVideo: PropTypes.bool,
    /**
     * total media duration, in milliseconds
     */
    duration: PropTypes.bool,
    /**
     * total file size of media file, in bytes
     */
    filesize: PropTypes.number,
    /**
     * Optional field for multipart playback, see MediaSegment
     */
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * indicates segment duration in milliseconds
         */
        duration: PropTypes.number.isRequired,
        /**
         * indicates segment file size in bytes
         */
        filesize: PropTypes.number,
        /**
         * indicates segment file URL
         */
        url: PropTypes.string.isRequired,
      })
    ),
    /**
     * @see https://github.com/Bilibili/flv.js/blob/master/docs/api.md#config
     */
    config: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      flvObj: {},
    };
  }

  initFlv = ($video) => {
    if ($video) {
      if (flvjs.isSupported()) {
        let flvPlayer = flvjs.createPlayer(
          { ...this.props },
          this.props.config
        );

        flvPlayer.attachMediaElement($video);
        flvPlayer.load();
        flvPlayer.play();
        this.flvPlayer = flvPlayer;
      } else {
        message.warning("不支持该浏览器");
      }
    }
  };

  componentWillUnmount() {
    if (this.flvPlayer) {
      this.flvPlayer.unload();
      this.flvPlayer.detachMediaElement();
    }
  }

  handleFull() {
    let dom = document.querySelector('#flvId')
    // this.flvPlayer.requestFullScreen()
    // dom.requestFullScreen()
    console.log(9993,this.initFlv.current,dom.requestFullscreen());
  
  }
  render() {
    console.log(74764, this.flvPlayer);

    const { className, style } = this.props;
    return (
      <div className={styles.live}>
        <div className={styles.container}>
          <video
            className={className}
            id={'flvId'}
            controls
            controlsList="nodownload noremoteplayback noplaybackrate"
            disablePictureInPicture
            style={Object.assign(
              {
                width: "100%",
              },
              style
            )}
            ref={this.initFlv}
          />

          {/* <div className={styles.control}>oooo</div>
          <button>静音</button>
          <button>打开声音</button>
          <button>播放</button>
          <button>停止播放</button>
          <button onClick={() => this.handleFull()}>全屏</button> */}
        </div>
      </div>
    );
  }
}
