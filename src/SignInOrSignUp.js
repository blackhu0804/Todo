import React, {Component} from 'react';
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

export default class signInOrSignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'signUp'
    }
  }

  switch(e) {
    this.setState({
      selected: e.target.value
    })
  }

render() {
  return (
    <div className="signInOrSignUp">
      <nav>
        
        <input id="signIn" type="radio" value="signUp" 
            checked={this.state.selected === 'signUp'}
            onChange={this.switch.bind(this)} />
        <label htmlFor="signIn" >{/*注意jsx中html的for要写成htmlFor*/}
          注册
        </label>
        <input id="signUp" type="radio" value="signIn" 
            checked={this.state.selected === 'signIn'}
            onChange={this.switch.bind(this)} /> 
        <label htmlFor="signUp">
          登录
        </label>
      </nav>

      <div className="panes">
        {this.state.selected === 'signUp' ? 
          <SignUpForm formData={this.props.formData}
            onSubmit={this.props.onSignUp}
            onChange={this.props.onChange} />
          : null
        }
        {this.state.selected === 'signIn' ? 
          <SignInForm formData={this.props.formData} 
          onSubmit={this.props.onSignIn}
          onChange={this.props.onChange}
          onForgotPassword={this.props.onForgotPassword} />
          : null
        }
      </div>
    </div>
  )
  }
}
