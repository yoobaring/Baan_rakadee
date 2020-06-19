import React from 'react'
import Keephome from './Keephome'

const Listhome =()=> {
return(
    <div>
<section className="all-listing-wrapper section-bg">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="atbd_generic_header">
          <div className="atbd_generic_header_title">
            <h4>รายการทั้งหมด</h4>
            <p>รายการทั้งหมดที่พบ: 15</p>
          </div>{/* ends: .atbd_generic_header_title */}
          <div className="atbd_listing_action_btn btn-toolbar align-items-center" role="toolbar">
            {/* Views dropdown */}
            <div className="view-mode">
              <a className="action-btn" href="all-listings-grid.html"><span className="la la-th-large" /></a><a className="action-btn active" href="all-listings-list.html"><span className="la la-list" /></a>
            </div>
            {/* Orderby dropdown */}
            <div className="dropdown">
              <a className="action-btn dropdown-toggle" href role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">จัดเรียงตาม <span className="caret" /></a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                <a className="dropdown-item" href>A ถึง Z ( ชื่อ )</a>
                <a className="dropdown-item" href>Z ถึง A ( ชื่อ )</a>
                <a className="dropdown-item active" href>รายการล่าสุด</a>
                <a className="dropdown-item" href>รายการเก่าที่สุด</a>
                <a className="dropdown-item" href>รายการยอดนิยม</a>
                <a className="dropdown-item" href>ราคา ( น้อยไปมาก )</a>
                <a className="dropdown-item" href>ราคา ( มากไปน้อย )</a>
                <a className="dropdown-item" href>รายการสุ่ม</a>
              </div>
            </div>
          </div>{/* ends: .atbd_listing_action_btn */}
        </div>{/* ends: .atbd_generic_header */}
      </div>{/* ends: .col-lg-12 */}
      <div className="col-lg-12 listing-items">
        <div className="row">
          <div className="col-lg-4 order-1 order-lg-0 mt-5 mt-lg-0">
            <div className="listings-sidebar">
              <div className="search-area default-ad-search">
                <form action="#">
                  <div className="form-group">
                    <input type="text" placeholder="ค้นหาทุกสถานที่ พิมพ์จังหวัด" className="form-control" />
                    <button type="submit" class="locator"><span class="la la-crosshairs"></span></button>
                  </div>{/* ends: .form-group */}
                  <div className="form-group">
                    <div className="select-basic">
                      <select className="form-control ad_search_category">
                      <option value="category">เลือกประเภท</option>
                      <option value="automobile">คอนโด</option>
                      <option value="education">บ้าน</option>
                      <option value="event">ทาวน์เฮ้าท์</option>
                      <option value="building">อาคารพาณิชย์</option>
                      </select>
                    </div>
                  </div>{/* ends: .form-group */}
                  <div className="form-group">
                    <div className="select-basic">
                    <select className="search_fields" id="at_biz_dir-location">
                      <option value="type">เลือกประกาศ</option>
                      <option value="ab">ประกาศขาย</option>
                      <option value="australia">ประกาศเช่า</option>
                    </select>
                    </div>
                  </div>{/* ends: .form-group */}
                  <div className="form-group p-bottom-10">
                    <div className="price-range rs-primary">
                      <p className="d-flex justify-content-between">
                        <span>ช่วงราคา : </span>
                        <span className="amount" />
                      </p>
                      <div className="slider-range" />
                    </div>{/* ends: .price-range */}
                  </div>{/* ends: .form-group */}
                  <div className="filter-checklist">
                    <h5>ทรัพย์ทั้งหมด</h5>
                    <div className="checklist-items feature-checklist hideContent">
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag9" defaultChecked />
                        <label className="custom-control-label" htmlFor="tag9">คอนโด</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag10" />
                        <label className="custom-control-label" htmlFor="tag10">บ้าน</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag11" />
                        <label className="custom-control-label" htmlFor="tag11">ทาวน์เฮ้าท์</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag12" />
                        <label className="custom-control-label" htmlFor="tag12">อาคารพาณิชย์</label>
                      </div>
                  </div>
                  <div className="form-group">
                    <input  placeholder="ห้องนอน" className="form-control" />
                  </div>{/* ends: .form-group */}
                  <div className="form-group">
                    <input  placeholder="ห้องน้ำ" className="form-control" />
                  </div>{/* ends: .form-group */}
                  <div className="form-group">
                    <input  placeholder="ที่จอดรถ" className="form-control" />
                  </div>{/* ends: .form-group */}
                  </div>{/* ends: .filter-checklist */}
                  <div className="filter-checklist">                   
                  </div>{/* ends: .filter-checklist */}
                  <a href className="btn btn-gradient btn-gradient-two btn-block btn-icon icon-right m-top-40">ค้นหา <span className="la la-long-arrow-right" /></a>
                </form>{/* ends: form */}
              </div>{/* ends: .default-ad-search */}
            </div>
          </div>{/* ends: .col-lg-4 */}

          <div className="col-lg-8 order-0 order-lg-1 ">
            <div className="row">
            <Keephome/>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <nav className="navigation pagination d-flex justify-content-end" role="navigation">
                  <div className="nav-links">
                    <a className="prev page-numbers" href><span className="la la-long-arrow-left" /></a>
                    
                    <span aria-current="page" className="page-numbers current">1</span>
                    <a className="page-numbers" href>2</a>
                    <a className="page-numbers" href>3</a>
                    <a className="next page-numbers" href><span className="la la-long-arrow-right" /></a>
                  </div>
                </nav>
              </div>
            </div>
          </div>{/* ends: .col-lg-8 */}
        </div>
      </div>{/* ends: .listing-items */}
    </div>
  </div>
</section>{/* ends: .all-listing-wrapper */}

    </div>
      )
}
export default Listhome;
