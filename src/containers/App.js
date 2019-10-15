import React from 'react';
import './App.less';
import { Link} from 'react-router-dom';

export default function App({ children }) {
  return (
    <div className="App">
      <Link to="/home">去首页</Link>
      <Link to="/login">去登录</Link>
      <div>{children}</div>
    </div>
  );
}

