import React from 'react'
import { IndexPageStyle, IndexPageContent } from './chart/style'
import TopPage from './chart/TopPage'
import LeftPage from './leftPage/index.jsx'
import RightPage from './rightPage'
import CenterPage from './centerPage'
import { connect } from 'react-redux'
import styles from './index.module.css'
import Left from './Left'
import Right from './Right'
import Center from './Center'


 function index() {
  return (
    // <IndexPageStyle>
    // {/* <TopPage /> */}
    // <IndexPageContent>
    //   {/* 左侧内容 */}
    //   <LeftPage />
    //   {/* 中间内容 */}
    //   <CenterPage className='center-page' />
    //   {/* 右侧内容 */}
    //   <RightPage />
    // </IndexPageContent>
    // </IndexPageStyle>
    <div className={styles.main}>
        <Left></Left>
        <Center className={styles.center_page}></Center>
        <Right></Right>
      {/* kkkk */}
    </div>
  )
 }
const mapStateToProps = (state) => {
  console.log(832,state);
  return {

  }
}

export default connect(mapStateToProps)(index)