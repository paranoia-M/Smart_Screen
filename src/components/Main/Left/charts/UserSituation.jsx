import React, { PureComponent } from 'react';
import { userOptions } from './options';
import { ScrollBoard } from '@jiaminghi/data-view-react';
import { div } from 'zrender/lib/core/vector';
import Roll from '@/components/Scroll'

class UserSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 表头背景色
        headerBGC: '#443dc5',
        // 奇数行背景色
        oddRowBGC: '#09184F',
        // 偶数行背景色
        evenRowBGC: '#070C34',
        // 行号
        index: true,
        // 行号表头
        indexHeader: '序号',
        // 宽度
        columnWidth: [50, 100, 200],
        // 对其方式
        align: ['center'],
        // 表行数
        rowNum: 10,
      },
    };
  }

  render() {
    const { userSitua } = this.props;
    const config = {
      ...this.state.config,
      ...userOptions(userSitua),
    };

    console.log(93902,userSitua);

    const renderList = () => {
      if (userSitua) {
        userSitua.data.map((item) => {
          return (
            <div>
              <span>388388383</span>
             
            </div>
          )
        })
       }
    }
    return (
      <div>
        {userSitua ? (
          // <ScrollBoard
          //   config={config}
          //   style={{
          //     width: '100%',
          //     height: '100%',
          //   }}></ScrollBoard>
          <Roll data={ userSitua} />
          // userSitua.data.map((item, index) => {
          //   console.log(83,item);
          //   return (
          //     <div>
          //       <ul>
          //         <li>
          //           <span>{item[0]}</span>
          //           <span>{item[1]}</span>
          //           <span>{item[2]}</span>
          //         </li>
          //       </ul>

          //     </div>
          //   )
          // })
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default UserSituation;
