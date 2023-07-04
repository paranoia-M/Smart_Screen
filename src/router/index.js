import React, { Fragment } from 'react';
import Login from '@/components/Login'
import Main from '@/components/Main'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import ReduxPractice from '@/pages/ReduxPractice';
import SmartScreen from '@/components/SmartScreen'
import Internet from '@/components/Internet';
import Party from '@/components/Party';
import News from '@/components/News';
import Law from '@/components/Law';
import Environment from '@/components/Environment';
import Admin from '@/components/Admin';
import { Routes, Route } from 'react-router';

const mineRoutes = () => {
  return (

    <Fragment>
    
    <Routes>
      <Route index path="/" element={<Main />} />
      <Route path="smart/" element={<SmartScreen />} />
      <Route path="internet/" element={<Internet />} />
      <Route path="party/" element={<Party />} />
      <Route path="news/" element={<News />} />
      <Route path="law/" element={<Law />} />
      <Route path="environment/" element={<Environment />} />
      <Route path="admin/" element={<Admin />} />
        {/* <Route path="/detail"  element={<Detail/>} />
        <Route path="/home"  element={<Home/>} />
        <Route path="/redux"  element={<ReduxPractice/>} /> */}
    </Routes>
   </Fragment>
  );
}

export default mineRoutes