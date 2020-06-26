import React from 'react'
import Navbars from './Navbars';
import Footer from './Footer';
import Admin from './Admin';
// import { connect } from 'react-redux';
import axios from 'axios';


class Login extends React.Component {
  constructor(props) {
    super(props); 
    this.login=this.login.bind(this);
    this.state={
      username:"",
      password:""
    }
  }
  login=()=>{
    alert('กำลัง Login');
    axios.post("https://apiminiyoo.herokuapp.com/api/Users/login/",{email: this.state.email,password: this.state.password})
    .catch((error)=>{
    alert('ป้อนอีเมล์หรือรหัสผ่านผิด โปรดพยายามลองใหม่อีกครั้ง');
    this.props.history.push("/login");
    })
    .then((response)=>{
      console.log(response);
      this.props.history.push("/");
      sessionStorage.setItem("username",this.state.username);
      sessionStorage.setItem("login_access_token",response.data.id);
      sessionStorage.setItem("login_created",response.data.created);
      sessionStorage.setItem("login_userId",response.data.userId);
      this.props.dispatch({
        type:"login",
        login_email: this.state.email
      })
    })
  }
  
  handleChange=(event)=>{
    console.log(event.target.name)
    this.setState({[event.target.name]:event.target.value});
    }


render () {
    return (
        
<div>
<Navbars/>
  <div id="login_modal" tabIndex={-1} role="dialog" aria-labelledby="login_modal_label" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="login_modal_label"><i className="la la-lock" /> เข้าสู่ระบบ </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form action="/" id="login-form">
            <input type="text" className="form-control" placeholder="ชื่อผู้ใช้ หรือ อีเมล์" required />
            <input type="password" className="form-control" placeholder="รหัสผ่าน" required />
            <div className="keep_signed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
              <input type="checkbox" className="custom-control-input" name="keep_signed_in" defaultValue={1} id="keep_signed_in" />
              <label htmlFor="keep_signed_in" className="not_empty custom-control-label">ให้ฉันอยู่ในระบบต่อไป</label>
            </div>
            <button type="submit" className="btn btn-block btn-lg btn-gradient btn-gradient-two">เข้าสู่ระบบ</button>
          </form>
          <div className="form-excerpts">
            <ul className="list-unstyled">
              <li>ไม่ใช่สมาชิก <a href>ลงชื่อ</a></li>
              <li><a href>กู้คืนรหัสผ่าน</a></li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
    )
}
}
export default Login;


