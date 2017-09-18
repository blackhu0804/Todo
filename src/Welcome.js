import React from 'react';

class Welcome extends React.Component {
  constructor(props){
    super(props); //必须将它放在其他表达式之前，否则this.props在构造函数中将是未定义
    this.state = {
      date: new Date(),
      test: '1'
    }

    this.setState({
      date: new Date(), //更新date
      test: 'constructor'
    })

    console.log("我已经在 constructor 里将 props 和state 初始化好了");
  }
  componentWillMount(){
    this.setState({
      date: new Date(),
      test: 'componentWillMount'
    })
    console.log("运行到这里的话，说明马上要运行 render 了");
  }
  render(){
    this.setState({
      date: new Date(),
      test: 'render'
    })

    console.log("恩，这里是render");

    return (
      <div>
        <h1>hello ,{this.props.name}</h1>
        <h2>{this.state.date.toString()}</h2>
        <p>{this.state.test}</p>
      </div>
    )
  }
  componentDidMount(){
    this.setState({
      date: new Date(),
      test: 'componentDidMount'
    })
    //和浏览器发生交互
    console.log('已经挂载到页面了')
  }

  componentWillReceiveProps(){
    this.setState({
      date: new Date(),
      test: 'componentWillReceiveProps'
    })
  }

  shouldComponentUpdate(){
    this.setState({
      date: new Date(),
      test: 'shouldComponentUpdate'
    })
  }

  componentWillUpdate(){
    this.setState({
      date: new Date(),
      test: 'componentWillUpdate'
    })
  }

  componentDidUpdate(){
    this.setState({
      date: new Date(),
      test: 'componentDidUpdate'
    })
  }

  componentWillUnmount(){
    console.log('要死了')
  }
}


export default Welcome