import React from 'react';

class Welcome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
    setInterval(()=>{
      this.setState({
        date: new Date()
      })
    })

    console.log("我已经在 constructor 里将 props 和state 初始化好了");
  }
  componentWillMount(){
    console.log("运行到这里的话，说明马上要运行 render 了");
  }
  render(){
    console.log("恩，这里是render");

    return (
      <div>
        <h1>hello ,{this.props.name}</h1>
        <h2>{this.state.date.toString()}</h2>
      </div>
    )
  }
  componentDidMount(){
    console.log('已经挂载到页面了')
  }
}


export default Welcome