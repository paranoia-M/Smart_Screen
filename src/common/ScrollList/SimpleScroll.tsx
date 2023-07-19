import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  // 指定父元素dom，默认为直接父元素
  scrollableTarget?: HTMLElement | null;
  // 当前页，用于确认下一页，必填
  recentPage: number;
  // 加载提示
  loader?: React.ReactNode;
  // 是否有下一个
  hasMore: boolean;
  // 指定加载提示元素的高度
  moreHeight?: number;
  next: (page: number) => void;
}
let preHeight = 0;
const SimpleScroll = (props: Props) => {
  const [parentNode, setparentNode] = useState<HTMLElement>();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 初始化父节点
    const node = props.scrollableTarget
      ? props.scrollableTarget
      : (ref.current?.parentNode as HTMLElement);
    setparentNode(node);
  }, []);
  useEffect(() => {
    // 重置位置
    if (parentNode && props.recentPage && props.recentPage === 1) {
      parentNode.scrollTop = 0;
    }
    if (parentNode && props.recentPage && props.hasMore) {
      const listener = (e: any) => {
        if (e && e.target) {
          console.log(e.target.scrollTop, e.target.clientHeight, e.target.scrollHeight);
          // 高度突变判断，解决请求后高度变化导致一直请求的bug
          if (preHeight !== e.target.scrollHeight) {
            if (parentNode) {
              parentNode.scrollTop = preHeight;
            }
            preHeight = e.target.scrollHeight;
            return;
          }
          preHeight = e.target.scrollHeight;
          if (
            e.target.scrollTop + e.target.clientHeight + (props.moreHeight || 0) >=
            e.target.scrollHeight
          ) {
            props.next(props.recentPage + 1);
          }
        }
      };
      parentNode.addEventListener('scroll', listener);
      return () => {
        parentNode.removeEventListener('scroll', listener);
      };
    }
  }, [parentNode, props.scrollableTarget, props.recentPage, props.hasMore]);

  return (
    <div ref={ref}>
      {props.children}
      {props.hasMore && props.loader}
    </div>
  );
};

export default SimpleScroll;

