import React from 'react'
import Navbars from './Navbars';

const Signup =()=> {
    return (
        
<div>
<Navbars/>
<div id="signup_modal" tabIndex={-1} role="dialog" aria-labelledby="signup_modal_label" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="signup_modal_label"><i className="la la-lock" />สมัครสมาชิก</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form action="/" id="signup-form">
            <input type="name" className="form-control" placeholder="ชื่อ สกุล" required />
            <input type="username" className="form-control" placeholder="ชื่อผู้ใช้" required />
            <input type="email" className="form-control" placeholder="อีเมล์" required />
            <input type="password" className="form-control" placeholder="รหัสผ่าน" required />
            <input type="confirmpassword" className="form-control" placeholder="ยืนยันรหัสผ่าน" required />
            <button type="submit" className="btn btn-block btn-lg btn-gradient btn-gradient-two">ลงชื่อ</button>
          </form>
          <div className="form-excerpts">
            <ul className="list-unstyled">
              <li>เป็นสมาชิกแล้ว? <a href="/login">เข้าสู่ระบบ</a></li>
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
export default Signup;