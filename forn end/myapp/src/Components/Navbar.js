import React from 'react';


const Navbar =()=>{
    return (
        <div>
  {/* endinject */}
    <section className="intro-wrapper bgimage overlay overlay--dark">
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
                    <div className="search-wrapper">
                    </div>{/* ends: .search-wrapper */}
                    {/* start .author-area */}
                    <div className="menu-right order-lg-2 order-sm-2">
                      <div className="author-area">
                        <div className="author__access_area">
                          <ul className="d-flex list-unstyled align-items-center">
                            <li>
                              <a href="/login" className="btn btn-xs btn-gradient btn-gradient-two" >เข้าสู่ระบบ</a>
                              &nbsp; 
                              <a href="/signup" className="btn btn-xs btn-gradient btn-gradient-two" >สมัครสมาชิก</a>
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
             
                      </div>{/* ends: .author-info */}
                    </div>{/* ends: .offcanvas-menu */}
                    {/* ends: .menu-right */}
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
      <div className="directory_content_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="search_title_area">
                <h2 className="title">ค้นหา "ประกาศขาย ประกาศเช่า"</h2>
                <p className="sub_title">บ้าน คอนโด ที่ดิน  และอสังหาริมทรัพย์ที่มีมูลค่า</p>
              </div>{/* ends: .search_title_area */}
              <form action="/" className="search_form">
                <div className="atbd_seach_fields_wrapper">
                  <div className="single_search_field search_query">
                    <input className="form-control search_fields locator " type="text" placeholder="ค้นหาทุกสถานที่ พิมพ์จังหวัด" />
                
                  </div>
                  <div className="single_search_field search_category">
                    <select className="search_fields" id="at_biz_dir-category">
                      <option value="category">เลือกประเภท</option>
                      <option value="automobile">คอนโด</option>
                      <option value="education">บ้าน</option>
                      <option value="event">ทาวน์เฮ้าท์</option>
                      <option value="building">อาคารพาณิชย์</option>
                    </select>
                  </div>
                  <div className="single_search_field search_location">
                    <select className="search_fields" id="at_biz_dir-location">
                      <option value="type">เลือกประกาศ</option>
                      <option value="ab">ประกาศขาย</option>
                      <option value="australia">ประกาศเช่า</option>
                    </select>
                  </div>
                  <div className="atbd_submit_btn">
                    <button type="submit" className="btn btn-block btn-gradient btn-gradient-one btn-md btn_search">ค้นหา</button>
                  </div>
                </div>
              </form>{/* ends: .search_form */}
              <div className="directory_home_category_area">
                <ul className="categories">
                  <li>
                    <a href="/listcondo">
                      <span className="color-primary"><i className="la la-reorder" /></span>
                      คอนโด
                    </a>
                  </li>
                  <li>
                    <a href="/listhome">
                      <span className="color-success"><i className="la la-map-marker" /></span>
                      บ้าน
                    </a>
                  </li>
                  <li>
                    <a href="/townhouse">
                      <span className="color-warning"><i className="la la-shopping-cart" /></span>
                      ทาวน์เฮ้าท์
                    </a>
                  </li>
                  <li>
                    <a href="/building">
                      <span className="color-danger"><i className="la la-bed" /></span>
                      อาคารพาณิชย์
                    </a>
                  </li>
                </ul>
              </div>{/* ends: .directory_home_category_area */}
            </div>{/* ends: .col-lg-10 */}
          </div>
        </div>
      </div>{/* ends: .directory_search_area */}
    </div></section>

        </div>
    );
}
export default Navbar;