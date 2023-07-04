import styled from 'styled-components';
import pageBg from '@/assets/pageBg.png';

export const IndexPageStyle = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0px;
  background-size: cover;
  width:100vw;
  height:100vh;
`;
export const IndexPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  background: url(${pageBg}) center center no-repeat;
  height:100%;
  flex-wrap: nowrap;
  .center-page {
    flex: 1;
  }
`;