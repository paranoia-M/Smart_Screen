/*
 * @Author: 刘强
 * @Date: 2022-02-08 10:18:06
 * @LastEditTime: 2022-02-08 15:11:58
 * @LastEditors: 刘强
 * @Description: 公告
 * 这是注释!
 */

import React, { useState, useEffect } from 'react';
import './index.less';

let tagTimer = null; //元素初始化计时器
let tagConutStatic = 0; //初始化执行统计
let scrollTimer = null; //滚动计时器
let moveNumberStatic = 0;
let maxMoveStatic = 0;
let maxViewStatic = 0;
let ceshi = '本平台目前提供的通道带积分本平台目前提供的通道带积分，';

const Notice = () => {
	const [visible, setVisible] = useState(true); //公告显示
	const [isScroll, setIsScroll] = useState(false); //是否滚动-控制预留
	const [moveNumber, setMoveNumber] = useState(0); // 当前滚动距离
	const [maxMove, setMaxMove] = useState(0); // 最大滚动距离
	const [maxView, setMaxView] = useState(0); // 最大可视距离
	const [context, setContext] = useState(''); //公告内容
	const [list, setList] = useState([]); //公告内容
	const [tagConut, setTagConut] = useState(0); //初始化执行统计

	// api 获取公告内容-后期接入服务端的接口就行了
	function getNoticeApi() {
		setContext(ceshi);
		setList([ceshi]);
		tagTimer = setInterval(() => {
			tagConutStatic++;
			setTagConut(tagConutStatic);
		}, 300);
	}
	// 计算是否需要滚动
	function checkScrollFn() {
		try {
			let dom = document.getElementsByClassName('notice-scroll')[0];
			if (!dom || dom.clientWidth === 0) return;

			let maxWidth =
				document.getElementsByClassName('notice-context')[0]
					.clientWidth;
			let newWidth = dom.clientWidth;
			setIsScroll(newWidth > maxWidth);
			setMaxMove(newWidth);
			setMaxView(maxWidth);
			clearInterval(scrollTimer);

			if (newWidth > maxWidth && list.length < 2) {
				noticeScrollFn();
				setList([context, context]);
			} else {
				clearInterval(scrollTimer);
				scrollTimer = null;
			}
			clearInterval(tagTimer);
			tagTimer = null;
		} catch (error) {
			console.log(error);
		}
	}
	// 滚动公告
	function noticeScrollFn() {
		scrollTimer = setInterval(() => {
			if (-moveNumberStatic > maxMoveStatic) {
				setMoveNumber(maxViewStatic / 2 - 3);

				// dom.push()
			} else {
				setMoveNumber(moveNumberStatic - 3);
			}
		}, 150);
	}
	// 渲染公告列表
	function renderList() {
		return list.map((item, index) => {
			return (
				<span
					key={index}
					style={{
						transform: `translateX(${
							moveNumber + (maxView / 2) * index
						}px)`,
					}}
					className="notice-scroll"
				>
					{item}
				</span>
			);
		});
	}

	//初始化公告
	useEffect(() => {
		getNoticeApi();
	}, []);
	// 公告接收开始计算
	useEffect(() => {
		checkScrollFn();
	}, [tagConut]);
	useEffect(() => {
		moveNumberStatic = moveNumber;
	}, [moveNumber]);
	useEffect(() => {
		maxMoveStatic = maxMove;
	}, [maxMove]);
	useEffect(() => {
		maxViewStatic = maxView;
	}, [maxView]);
	return (
		<div id="notice" className={`${visible ? '' : 'notice-hidden'}`}>
			<div
				className={`notice-context ${
					isScroll ? '' : 'notice-noscroll'
				}`}
			>
				{renderList()}
			</div>
			<span
				onClick={() => {
					setVisible(false);
				}}
				className="iconfont iconclose"
			></span>
		</div>
	);
};

export default Notice;

