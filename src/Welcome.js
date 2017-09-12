import React from 'react';

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello {this.props.name}</h1>;
//   }
// }

//function Welcome（函数形式的组件）
function Welcome(props) {
  return <h1>Hello,{props.name}</h1>
}
export default Welcome