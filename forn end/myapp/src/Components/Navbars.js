import React from 'react'

const Navbars =()=> {
    return (
<div>
 
<section className="header-breadcrumb bgimage overlay overlay--dark">
  <div className="bg_image_holder"><img src="img/breadcrumb2.jpg" alt=""/></div>
  <div className="mainmenu-wrapper">
    <div className="menu-area menu1 menu--light">
      <div className="top-menu-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="menu-fullwidth">
                <div className="logo-wrapper order-lg-0 order-sm-1">
                  <div className="logo logo-top">
                    <a href="/"><img src="img/logoHome.png" alt="logo image" className="img-fluid" /></a>
                  </div>
                </div>{/* ends: .logo-wrapper */}
                <div className="menu-container order-lg-1 order-sm-0">
                  <div className="d_menu">
                    <nav className="navbar navbar-expand-lg mainmenu__menu">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#direo-navbar-collapse" aria-controls="direo-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon icon-menu"><i className="la la-reorder" /></span>
                      </button>
                      {/* Collect the nav links, forms, and other content for toggling */}
                      <div className="collapse navbar-collapse" id="direo-navbar-collapse">
                        <ul className="navbar-nav">
                          <li>
                            <a href="/">หน้าหลัก</a>
                          </li>
                          <li>
                            <a href="/addlist">ลงประกาศขาย ฟรี!ค่าโฆษณา</a>
                          </li>
                          <li>
                            <a href="/listhome">ประกาศขายบ้าน</a>
                          </li>
                          <li>
                            <a href="/listcondo">ประกาศเช่า</a>
                          </li>
                        </ul>
                      </div>
                      {/* /.navbar-collapse */}
                    </nav>
                  </div>
                </div>
                <div className="menu-right order-lg-2 order-sm-2">
                  {/* start .author-area */}
                  <div className="menu-right order-lg-2 order-sm-2">
                    <div className="author-area">
                      <div className="author__access_area">
                        <ul className="d-flex list-unstyled align-items-center">
                          <li>
                            <a href="/login" className="btn btn-xs btn-gradient btn-gradient-two">เข้าสู่ระบบ</a>
                            &nbsp; 
                            <a href="/signup" className="btn btn-xs btn-gradient btn-gradient-two">สมัครสมาชิก</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* end .author-area */}
                  <div className="offcanvas-menu d-none">
                    <a href className="offcanvas-menu__user"><i className="la la-user" /></a>
                    <div className="offcanvas-menu__contents">
                      <a href className="offcanvas-menu__close"><i className="la la-times-circle" /></a>
                      <div className="author-avatar">
                        <img src="img/author-avatar.png" alt className="rounded-circle" />
                      </div>
                      <ul className="list-unstyled">
                        <li><a href="dashboard-listings.html">My Profile</a></li>
                        <li><a href="dashboard-listings.html">My Listing</a></li>
                        <li><a href="dashboard-listings.html">Favorite Listing</a></li>
                        <li><a href="add-listing.html">Add Listing</a></li>
                        <li><a href>Logout</a></li>
                      </ul>
                      <div className="search_area">
                        <form action="/">
                          <div className="input-group input-group-light">
                            <input type="text" className="form-control search_field" placeholder="Search here..." autoComplete="off" />
                          </div>
                          <button type="submit" className="btn btn-sm btn-secondary">Search</button>
                        </form>
                      </div>{/* ends: .search_area */}
                    </div>{/* ends: .author-info */}
                  </div>{/* ends: .offcanvas-menu */}
                </div>{/* ends: .menu-right */}
              </div>
            </div>
          </div>
          {/* end /.row */}
        </div>
        {/* end /.container */}
      </div>
      {/* end  */}
    </div>
  </div>{/* ends: .mainmenu-wrapper */}
  
</section>
</div>
    )
}
export default Navbars;