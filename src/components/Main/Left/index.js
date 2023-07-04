import React, { Component } from 'react'
import { div } from 'zrender/lib/core/vector'
import { ModuleTitle } from '@/style/globalStyledSet';
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import TrafficSituation from './charts/TrafficSituation';
import UserSituation from './charts/UserSituation';
import './index.css';

export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accessFrequency: 1500,
      peakFlow: 300,
      trafficSitua: {
        timeList: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
        outData: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
        inData: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
      },
      userSitua: {
        header: ['用户', '时间', '状态'],
        data: [
          ['用户1', '2020-11-11 12:00', '在线'],
          ['用户2', '2020-11-11 12:00', '离线'],
          ['用户3', '2020-11-11 12:00', '在线'],
          ['用户4', '2020-11-11 12:00', '在线'],
          ['用户5', '2020-11-11 12:00', '在线'],
          ['用户6', '2020-11-11 12:00', '离线'],
          ['用户7', '2020-11-11 12:00', '在线'],
          ['用户8', '2020-11-11 12:00', '在线'],
          ['用户9', '2020-11-11 12:00', '离线'],
          ['用户11', '2020-11-11 12:00', '离线'],
          ['用户12', '2020-11-11 12:00', '离线'],
          ['用户13', '2020-11-11 12:00', '离线'],
          ['用户1', '2020-11-11 12:00', '在线'],
          ['用户2', '2020-11-11 12:00', '离线'],
          ['用户3', '2020-11-11 12:00', '在线'],
          ['用户4', '2020-11-11 12:00', '在线'],
          ['用户5', '2020-11-11 12:00', '在线'],
          ['用户6', '2020-11-11 12:00', '离线'],
          ['用户7', '2020-11-11 12:00', '在线'],
          ['用户8', '2020-11-11 12:00', '在线'],
          ['用户9', '2020-11-11 12:00', '离线'],
          ['用户11', '2020-11-11 12:00', '离线'],
          ['用户12', '2020-11-11 12:00', '离线'],
          ['用户13', '2020-11-11 12:00', '离线'],
          ['用户1', '2020-11-11 12:00', '在线'],
          ['用户2', '2020-11-11 12:00', '离线'],
          ['用户3', '2020-11-11 12:00', '在线'],
          ['用户4', '2020-11-11 12:00', '在线'],
          ['用户5', '2020-11-11 12:00', '在线'],
          ['用户6', '2020-11-11 12:00', '离线'],
          ['用户7', '2020-11-11 12:00', '在线'],
          ['用户8', '2020-11-11 12:00', '在线'],
          ['用户9', '2020-11-11 12:00', '离线'],
          ['用户11', '2020-11-11 12:00', '离线'],
          ['用户12', '2020-11-11 12:00', '离线'],
          ['用户13', '2020-11-11 12:00', '离线'],
          ['用户1', '2020-11-11 12:00', '在线'],
          ['用户2', '2020-11-11 12:00', '离线'],
          ['用户3', '2020-11-11 12:00', '在线'],
          ['用户4', '2020-11-11 12:00', '在线'],
          ['用户5', '2020-11-11 12:00', '在线'],
          ['用户6', '2020-11-11 12:00', '离线'],
          ['用户7', '2020-11-11 12:00', '在线'],
          ['用户8', '2020-11-11 12:00', '在线'],
          ['用户9', '2020-11-11 12:00', '离线'],
          ['用户11', '2020-11-11 12:00', '离线'],
          ['用户12', '2020-11-11 12:00', '离线'],
          ['用户13', '2020-11-11 12:00', '离线'],
       
          // {id:1,data: ['用户1', '2020-11-11 12:00', '在线'],},
          // {id:2,data: ['用户1', '2020-11-11 12:00', '在线'],},
          // {id:3,data: ['用户1', '2020-11-11 12:00', '在线'],},
          // {id:4,data: ['用户1', '2020-11-11 12:00', '在线'],},
          // {id:5,data: ['用户1', '2020-11-11 12:00', '在线'],},
          // {id:6,data: ['用户1', '2020-11-11 12:00', '在线'],},
          // {id:7,data: ['用户1', '2020-11-11 12:00', '在线'],},
          // {id:8,data: ['用户1', '2020-11-11 12:00', '在线'],},
          // {id:9,data: ['用户1', '2020-11-11 12:00', '在线'],},
          // {id:10,data: ['用户1', '2020-11-11 12:00', '在线'],},
          // {id:111,data: ['用户1', '2020-11-11 12:00', '在线'],},
        ],
      },
    };

    this.clicked = this.clicked.bind(this)
  }

  clicked() {
    console.log(993);
  }
  render() {
    const { userSitua, trafficSitua, accessFrequency, peakFlow } = this.state;
    return (
      <div className='left_page'>
        <div className='left_top_box' style={{height:'48%'}}>
        <BorderBox12 className='left-top-borderBox12'>
            <div className='left-top'>
              <ModuleTitle>
                <i className='iconfont'>&#xe78f;</i>
                <span>今日流量态势</span>
              </ModuleTitle>
              <div className='title-dis'>
                <span>
                  平均接纳次数(小时):
                  <span className='title-dis-keyword'>{accessFrequency}次</span>
                </span>
                <span>
                  流量峰值:
                  <span className='title-dis-keyword'>{peakFlow}M</span>
                </span>
              </div>
              {/* 图表 */}
              <TrafficSituation trafficSitua={trafficSitua}></TrafficSituation>
            </div>
          </BorderBox12>
        </div>
         
        
         {/* 底部图表 */}
         <div className='left_bottom_box' style={{height:'96%',paddingTop:"10px"}}> 
          <BorderBox13 className='left-bottom-borderBox13'>
            <div className='left-bottom'>
              <ModuleTitle className='title' style={{marginTop:'10px',marginBottom:'10px'}}>
                <i className='iconfont'>&#xe88e;</i>
                <span style={{fontSize:'12px'}}>略阳县企业监控在线情况</span>
       
              </ModuleTitle>
              {/* 图表 */}
              <UserSituation userSitua={userSitua}></UserSituation>
            </div>
          </BorderBox13>
        </div>
     </div>
    )
  }
}
