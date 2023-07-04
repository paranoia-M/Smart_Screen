import React, { PureComponent } from 'react';
import { BorderBox13 } from '@jiaminghi/data-view-react';
import BrowseCategories from './charts/BrowseCategories';
import UserIdentityCategory from './charts/UserIdentityCategory';
import OfflinePortal from './charts/OfflinePortal';
import Feedback from './charts/Feedback';
import { ModuleTitle } from '@/style/globalStyledSet';
import {
  RightPage,
  RightTopBox,
  RightCenterBox,
  RightBottomBox,
} from './style';

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
            title: '运动',
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
      <RightPage>
        <RightTopBox>
          <div className='right-top'>
            <ModuleTitle>
              <i className='iconfont'>&#xe7f7;</i>
              <span>生态分布</span>
            </ModuleTitle>
            <div className='right-top-content'>
              <BrowseCategories
                browseCategories={browseCategories}></BrowseCategories>
              <img
                alt='地球'
                className='earth-gif'
                src={require('@/assets/images/earth-rotate.gif')}
              />
            </div>
          </div>
        </RightTopBox>

        <RightCenterBox>
          <ModuleTitle>
            <i className='iconfont'>&#xe7fd;</i>
            <span>环境影响因素</span>
          </ModuleTitle>
          <UserIdentityCategory
            userIdentityCategory={userIdentityCategory}></UserIdentityCategory>
        </RightCenterBox>

        <RightBottomBox>
          <BorderBox13 className='right-bottom-borderBox13'>
            <div className='right-bottom'>
              <ModuleTitle>
                <i className='iconfont'>&#xe790;</i>
                <span>今日环境指数</span>
              </ModuleTitle>
              {/* 反馈 */}
              <div className='feedback-box'>
                {offline
                  ? offline.feedback.map((item, index) => {
                      return (
                        <div className='feedback-box-item' key={index}>
                          <Feedback FeedbackData={item}></Feedback>
                          <span className='dis-text'>{item.title}</span>
                        </div>
                      );
                    })
                  : ''}
              </div>
              {/* 门店 */}
              <div className='offline-portal-box'>
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
        </RightBottomBox>
      </RightPage>
    );
  }
}


// browseCategories: state.rightPage.browseCategories,
// userIdentityCategory: state.rightPage.userIdentityCategory,
// offline: state.rightPage.offline,

export default (index);
