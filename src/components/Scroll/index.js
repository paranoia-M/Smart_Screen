import React, { useRef, useEffect } from "react";
import './index.css'
function Roll(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === "childList") {
          const container = containerRef.current;
          const { scrollTop, scrollHeight, clientHeight } = container;

          if (scrollTop + clientHeight >= scrollHeight - 50) {
            props.loadMore();
          }
        }
      });
    });

    observer.observe(containerRef.current, { childList: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "54vh", overflowY: "scroll" }}>
      <div className="header">
        <span>{ props.data.header[0]}</span>
        <span>{ props.data.header[1]}</span>
        <span>{ props.data.header[2]}</span>
      </div>
      {props.data.data.map((item,index) => (
        <div key={index} className={index%2 !== 0 ? 'list_ul shallow' : 'list_ul deep'}>
          <span className="list_li">{item[0]}</span>
          <span className="list_li">{item[1]}</span>
          <span className="list_li">{item[2]}</span>
        </div>
      ))}
    </div>
  );
}

export default Roll;

