import React from 'react'

const Addsellrent =()=> {
    return (
        <div>
<section className="add-listing-wrapper border-bottom section-bg section-padding-strict">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="atbd_content_module">
          <div className="atbd_content_module__tittle_area">
            <div className="atbd_area_title">
              <h4><span className="la la-user" />รายละเอียดประกาศ</h4>
            </div>
          </div>
          <div className="atbdb_content_module_contents">
            <form action="/">
              <div className="form-group">
                <div className="select-basic">
                  <label htmlFor="title" className="form-label">เลือกประเภท</label>
                  <select className="select-basic" id="at_biz_dir-category">
                    <option value="automobile">คอนโด</option>
                    <option value="education">บ้าน</option>
                    <option value="event">ทาวน์เฮ้าท์</option>
                    <option value="building">อาคารพาณิชย์</option>
                  </select>
                </div> 
              </div>
              <div className="form-group">
                <div className="select-basic"> 
                  <label htmlFor="title" className="form-label">เลือกประกาศ</label>
                  <select className="search_fields" id="at_biz_dir-location">
                    <option value="ab">ประกาศขาย</option>
                    <option value="australia">ประกาศเช่า</option>
                  </select>
                </div> 
              </div>
              <div className="form-group">
                <label htmlFor="title" className="form-label">ชื่อโครงการ</label>
                <input type="text" className="form-control" id="title" placeholder="ชื่อโครงการ" required />
              </div>
              <div className="form-group">
                <label htmlFor="desc" className="form-label">รายละเอียด</label>
                <textarea id="desc" rows={8} className="form-control" placeholder="อธิบายรายละเอียดเพิ่มเติม" defaultValue={""} />
              </div>
              <div className="form-group">
                <label htmlFor="tagline" className="form-label">ราคา</label>
                <input type="text" className="form-control" id="tagline" placeholder="100,000 บาท" required />
              </div>
              <div className="form-group">
                <label htmlFor="cf1" className="form-label">พื้นที่</label>
                <input type="text" className="form-control" id="cf1" placeholder="พื้นที่ 321 ตารางเมตร" required />
              </div>
              <div className="form-group">
                <label htmlFor="cdate" className="form-label">วันที่ลงประกาศ</label>
                <input type="date" className="form-control" id="cdate" required />
              </div>
            </form>
          </div>{/* ends: .atbdb_content_module_contents */}
        </div>{/* ends: .atbd_content_module */}
      </div>{/* ends: .col-lg-10 */}
      <div className="col-lg-10 offset-lg-1">
        <div className="atbd_content_module">
          <div className="atbd_content_module__tittle_area">
            <div className="atbd_area_title">
              <h4><span className="la la-user" />ข้อมูลติดต่อ</h4>
            </div>
          </div>
          <div className="atbdb_content_module_contents">
            <form action="/">
              <div className="form-group">
                <label htmlFor="address" className="form-label">ชื่อ สกุล</label>
                <input type="text" placeholder="นิดา วงคณา" id="address" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone_number" className="form-label">เบอร์ติดต่อ</label>
                <input type="text" placeholder="08-8800-9988" id="phone_number" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="form-label">ที่อยู่</label>
                <input type="text" placeholder="25/2 ม.2 ต.กะทู้ อ.กะทู้ จ.ภูเก็ต" id="address" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact_email" className="form-label">อีเมล์</label>
                <input type="email" id="contact_email" className="form-control" placeholder="ที่อยู่อีเมล์" required />
              </div>
            </form>
          </div>{/* ends: .atbdb_content_module_contents */}
        </div>{/* ends: .atbd_content_module */}
      </div>{/* ends: .col-lg-10 */}
      <div className="col-lg-10 offset-lg-1">
        <div className="atbd_content_module">
          <div className="atbd_content_module__tittle_area">
            <div className="atbd_area_title">
              <h4><span className="la la-calendar-check-o" /> Location (Map)</h4>
            </div>
          </div>
          <div className="atbdb_content_module_contents">
            <label className="not_empty form-label">ตั้งเครื่องหมายโดยคลิกที่ใดก็ได้บนแผนที่
            </label>
            <div className="map" id="map-one" />
            <div className="cor-wrap form-group">
              <div className="atbd_mark_as_closed custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                <input type="checkbox" className="custom-control-input" name="manual_coordinate" defaultValue={1} id="manual_coordinate" />
                <label htmlFor="manual_coordinate" className="not_empty custom-control-label">ป้อนพิกัด (ละติจูดและลองจิจูด) ด้วยตนเอง</label>
              </div>
            </div>
            <div className="cor-form">
              <div id="hide_if_no_manual_cor" className="clearfix row m-bottom-30">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="manual_lat" className="not_empty"> ละติจูด </label>
                    <input type="text" name="manual_lat" id="manual_lat" className="form-control directory_field" placeholder="ป้อน ละติจูด เช่น 24.89904" />
                  </div>
                </div>
                <div className="col-sm-6 mt-3 mt-sm-0">
                  <div className="form-group">
                    <label htmlFor="manual_lng" className="not_empty"> ลองจิจูด </label>
                    <input type="text" name="manual_lng" id="manual_lng" className="form-control directory_field" placeholder="ป้อน ลองจิจูด เช่น 91.87198" />
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="form-group lat_btn_wrap m-top-15">
                    <button className="btn btn-primary" id="generate_admin_map">สร้างบนแผนที่
                    </button>
                  </div>
                </div> {/* ends #hide_if_no_manual_cor*/}
              </div>
            </div>
          </div>{/* ends: .atbdb_content_module_contents */}
        </div>{/* ends: .atbd_content_module */}
      </div>{/* ends: .col-lg-10 */}
      <div className="col-lg-10 offset-lg-1">
        <div className="atbd_content_module">
          <div className="atbd_content_module__tittle_area">
            <div className="atbd_area_title">
              <h4><span className="la la-calendar-check-o" /> รูปภาพ</h4>
            </div>
          </div>
          <div className="atbdb_content_module_contents">
            <div id="_listing_gallery">
              <div className="add_listing_form_wrapper" id="gallery_upload">
                <div className="form-group text-center">
                  {/*  add & remove image links */}
                  <p className="hide-if-no-js">
                    <a href="#" className="upload-header btn btn-outline-secondary">อัพโหลดภาพตัวอย่าง</a>
                  </p>
                </div>
                <div className="form-group text-center">
                  {/* image container, which can be manipulated with js */}
                  <div className="listing-img-container">
                    <img src="img/picture.png" alt="No Image Found" />
                    <p>ไม่มีรูปภาพ</p>
                  </div>
                  {/*  add & remove image links */}
                  <p className="hide-if-no-js">
                    <a href="#" id="listing_image_btn" className="btn btn-outline-primary m-right-10">
                      <span className="dashicons dashicons-format-image" /> อัพโหลดภาพ
                    </a><a id="delete-custom-img" className="btn btn-outline-danger hidden" href="#"> ลบรูปภาพ</a><br />
                  </p>
                </div>
              </div>
              {/*ends add_listing_form_wrapper*/}
            </div>
          </div>{/* ends: .atbdb_content_module_contents */}
        </div>{/* ends: .atbd_content_module */}
      </div>{/* ends: .col-lg-10 */}
      <div className="col-lg-10 offset-lg-1 text-center">
        <div className="btn_wrap list_submit m-top-25">
          <button type="submit" className="btn btn-primary btn-lg listing_submit_btn">บันทึกข้อมูล</button>
        </div>
      </div>{/* ends: .col-lg-10 */}
    </div>
  </div>
</section>{/* ends: .add-listing-wrapper */}

        </div>
    )
}
export default Addsellrent;