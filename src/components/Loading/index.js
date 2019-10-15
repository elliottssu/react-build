/**
 * 按照路由动态加载的Loading组件
 */
import React from 'react';
import './index.less';

export default function Loading(props) {
  if (props.error) {
    return <div>Error! <button onClick={props.retry}>retry</button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div />;
  }

  return null;
}
