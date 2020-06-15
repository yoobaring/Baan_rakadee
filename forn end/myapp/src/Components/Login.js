import React from 'react'

const Login =()=> {
    return (
        
<div>
  <div className="modal fade" id="login_modal" tabIndex={-1} role="dialog" aria-labelledby="login_modal_label" aria-hidden="true">
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
            <div className="social-login">
              <span>หรือ เชื่อมต่อกับ</span>
              <p><a href className="btn btn-outline-secondary"><i className="fab fa-facebook-f" /> Facebook</a><a href className="btn btn-outline-danger"><i className="fab fa-google-plus-g" /> Google</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default Login ;


const Logout =()=> {
    return (

<div className="modal fade" id="signup_modal" tabIndex={-1} role="dialog" aria-labelledby="signup_modal_label" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="signup_modal_label"><i className="la la-lock" /> ลงชื่อ</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form action="/" id="signup-form">
            <input type="email" className="form-control" placeholder="อีเมล์" required />
            <input type="password" className="form-control" placeholder="รหัสผ่าน" required />
            <button type="submit" className="btn btn-block btn-lg btn-gradient btn-gradient-two">ลงชื่อ</button>
          </form>
          <div className="form-excerpts">
            <ul className="list-unstyled">
              <li>เป็นสมาชิกแล้ว? <a href>เข้าสู่ระบบ</a></li>
              <li><a href>กู้คืนรหัสผ่าน</a></li>
            </ul>
            <div className="social-login">
              <span>หรือ ลงชื่อกับ</span>
              <p><a href className="btn btn-outline-secondary"><i className="fab fa-facebook-f" /> Facebook</a><a href className="btn btn-outline-danger"><i className="fab fa-google-plus-g" /> Google</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    )
}

export default Logout;