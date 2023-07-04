import React, { PureComponent } from 'react';
import { BorderBox13 } from '@jiaminghi/data-view-react';
import BrowseCategories from './charts/BrowseCategories';
import UserIdentityCategory from './charts/UserIdentityCategory';
import OfflinePortal from './charts/OfflinePortal';
import Feedback from './charts/Feedback';
import { ModuleTitle } from '@/style/globalStyledSet';


class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      browseCategories: {
        data: [782, 621.2, 322.1, 525.3, 265, 224],
        indicator: [
          {
            name: '丘陵',
            max: 1000,
          },
          {
            name: '森林',
            max: 1000,
          },
          {
            name: '灌木',
            max: 1000,
          },
          {
            name: '草地',
            max: 1000,
          },
          {
            name: '河流',
            max: 1000,
          },
          {
            name: '山川',
            max: 1000,
          },
        ],
      },
      userIdentityCategory: {
        data: [
          {
            name: '户外运动',
            value: 57,
          },
          {
            name: '跑步',
            value: 167,
          },
          {
            name: '室内活动',
            value: 123,
          },
          {
            name: '健身锻炼',
            value: 55,
          },
          {
            name: '户外劳动',
            value: 198,
          },
        ],
      },
      offline: {
        feedback: [
          {
            title: '户外运动',
            number: 90,
          },
          {
            title: '交互体验',
            number: 82,
          },
          {
            title: '安全防护',
            number: 85,
          },
        ],
        offlinePortalData: {
          data1: [80, 152, 101, 134, 90, 130],
          data2: [120, 182, 191, 210, 170, 110],
          data3: [110, 132, 201, 154, 150, 80],
          data4: [90, 142, 161, 114, 190, 170],
          xData: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
          barData: [32.2, 60.0, 32.6, 36.4, 53.3, 35.0],
        },
      },
    };
  }
  render() {
    const { offline, browseCategories, userIdentityCategory } = this.state;
    return (
      <div className='right_page' style={{width:'26%'}}>
        <div className='right_top_box'>
          <div className='right-top' style={{marginTop:'10px'}}>
            <ModuleTitle>
              <i className='iconfont'>&#xe7f7;</i>
              <span>生态分布</span>
            </ModuleTitle>

            <div className='right-top-content'>
              <BrowseCategories
                style={{float:'left'}}
                browseCategories={browseCategories}></BrowseCategories>
              <div className='right-top-svg' style={{marginLeft:'210px',marginTop:'-160px'}}>
                   <img
                alt='地球'
                style={{width:'140px'}}
                className='earth-gif'
                src={require('@/assets/images/earth-rotate.gif')}
              />
              </div>
            </div>
          </div>
        </div>

        <div className='right_center_box' style={{marginTop:'100px',marginBottom:'20px',marginBottom:'50px'}}>
          <ModuleTitle>
            <i className='iconfont'>&#xe7fd;</i>
            <span >环境影响因素</span>
          </ModuleTitle>
          <UserIdentityCategory
            userIdentityCategory={userIdentityCategory}></UserIdentityCategory>
        </div>
     
        <div className='right_bottom_box'>
          <BorderBox13
            style={{height:'400px'}}
            className='right-bottom-borderBox13'>
            <div className='right-bottom' style={{marginTop:'20px',marginBottom:'20px'}}>
              <ModuleTitle >
                <i className='iconfont'>&#xe790;</i>
                <span style={{marginTop:'20px'}}>今日环境指数</span>
              </ModuleTitle>
              {/* 反馈 */}
              <div className='feedback-box' style={{
                display: 'flex', justifyContent: 'space-around',
              alignItems:'center'}}>
                {offline
                  ? offline.feedback.map((item, index) => {
                      return (
                        <div
                          className='feedback-box-item' key={index}>
                          <Feedback FeedbackData={item}></Feedback>
                          <span className='dis-text' style={{
                               fontWeight: 'bold',
                              //  marginTop: '10px',
                            color: '#272663',
                            fontSize: '16px',
                               background:'linear-gradient(to bottom, #fff,#6176F4)',
                               backgroundClip:'text'
                          }}>{item.title}</span>
                        </div>
                      )
                    })
                  : ''}
              </div>
              {/* 门店 */}
              <div className='offline-portal-box' style={{marginTop:'40px'}}>
                {offline ? (
                  <OfflinePortal
                    offlinePortalData={offline.offlinePortalData}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </BorderBox13>
        </div>
     
      </div>
    )
  }
}


// browseCategories: state.rightPage.browseCategories,
// userIdentityCategory: state.rightPage.userIdentityCategory,
// offline: state.rightPage.offline,


//  <BrowseCategories
//                 browseCategories={browseCategories}></BrowseCategories>
//               <div className='right-top-svg'>
//                               <img
//                 alt='地球'
//                 style={{width:'100px'}}
//                 className='earth-gif'
//                 src={require('@/assets/images/earth-rotate.gif')}
//               />
//               </div>

export default (index);
