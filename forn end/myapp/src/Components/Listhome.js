import React from 'react'

const Listhome =()=> {
return(
    <div>
<section className="all-listing-wrapper section-bg">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="atbd_generic_header">
          <div className="atbd_generic_header_title">
            <h4>All Items</h4>
            <p>Total Listing Found: 15</p>
          </div>{/* ends: .atbd_generic_header_title */}
          <div className="atbd_listing_action_btn btn-toolbar align-items-center" role="toolbar">
            {/* Views dropdown */}
            <div className="view-mode">
              <a className="action-btn" href="all-listings-grid.html"><span className="la la-th-large" /></a><a className="action-btn active" href="all-listings-list.html"><span className="la la-list" /></a>
            </div>
            {/* Orderby dropdown */}
            <div className="dropdown">
              <a className="action-btn dropdown-toggle" href role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by <span className="caret" /></a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                <a className="dropdown-item" href>A to Z ( title )</a>
                <a className="dropdown-item" href>Z to A ( title )</a>
                <a className="dropdown-item active" href>Latest listings</a>
                <a className="dropdown-item" href>Oldest listings</a>
                <a className="dropdown-item" href>Popular listings</a>
                <a className="dropdown-item" href>Price ( low to high )</a>
                <a className="dropdown-item" href>Price ( high to low )</a>
                <a className="dropdown-item" href>Random listings</a>
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
                    <input type="text" placeholder="What are you looking for?" className="form-control" />
                  </div>{/* ends: .form-group */}
                  <div className="form-group">
                    <div className="select-basic">
                      <select className="form-control ad_search_category">
                        <option>Select Category</option>
                        <option>Restaurant</option>
                        <option>&nbsp;&nbsp; Food</option>
                        <option>&nbsp;&nbsp; Lunch Pack</option>
                        <option>Places</option>
                        <option>&nbsp;&nbsp; Travel</option>
                        <option>&nbsp;&nbsp; Booking</option>
                        <option>&nbsp;&nbsp; Hotel</option>
                        <option>&nbsp;&nbsp; Location</option>
                        <option>Shopping</option>
                        <option>&nbsp;&nbsp; Accessories</option>
                        <option>&nbsp;&nbsp; Clothing</option>
                        <option>&nbsp;&nbsp; Gadgets</option>
                      </select>
                    </div>
                  </div>{/* ends: .form-group */}
                  <div className="form-group">
                    <div className="position-relative">
                      <input type="text" placeholder="City, state or zip code" className="form-control location-name" />
                      <button type="submit" className="locator"><span className="la la-crosshairs" /></button>
                    </div>
                  </div>{/* ends: .form-group */}
                  <div className="form-group p-bottom-10">
                    <div className="price-range rs-primary">
                      <p className="d-flex justify-content-between">
                        <span>Price Range: </span>
                        <span className="amount" />
                      </p>
                      <div className="slider-range" />
                    </div>{/* ends: .price-range */}
                  </div>{/* ends: .form-group */}
                  <div className="check-btn">
                    <div className="btn-checkbox active-color-secondary">
                      <label>
                        <input type="checkbox" defaultValue={1} /><span className="color-success"><i className="la la-clock-o" /> Open Now</span>
                      </label>
                    </div>
                    <div className="btn-checkbox active-color-secondary">
                      <label>
                        <input type="checkbox" defaultValue={1} /><span className="color-primary"><i className="la la-tags" /> Offering Deal</span>
                      </label>
                    </div>
                  </div>
                  <div className="filter-checklist">
                    <h5>Filter by Features</h5>
                    <div className="checklist-items feature-checklist hideContent">
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag9" defaultChecked />
                        <label className="custom-control-label" htmlFor="tag9">Accepts Cards</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag10" />
                        <label className="custom-control-label" htmlFor="tag10">Electronics</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag11" />
                        <label className="custom-control-label" htmlFor="tag11">Bike Parking</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag12" />
                        <label className="custom-control-label" htmlFor="tag12">Wheelchair</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag13" />
                        <label className="custom-control-label" htmlFor="tag13">Accessories</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag14" />
                        <label className="custom-control-label" htmlFor="tag14">WiFi Internet</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag15" />
                        <label className="custom-control-label" htmlFor="tag15">Parking Street</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag16" />
                        <label className="custom-control-label" htmlFor="tag16">Clothing</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag17" />
                        <label className="custom-control-label" htmlFor="tag17">Travel Booking</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag18" />
                        <label className="custom-control-label" htmlFor="tag18">Fast Support</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag19" />
                        <label className="custom-control-label" htmlFor="tag19">Parking Street</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag20" />
                        <label className="custom-control-label" htmlFor="tag20">Shopping</label>
                      </div>
                    </div>
                    <a href className="show-link">Show More</a>
                  </div>{/* ends: .filter-checklist */}
                  <div className="filter-checklist">
                    <h5>Filter by Tags</h5>
                    <div className="checklist-items tags-checklist">
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag1" defaultChecked />
                        <label className="custom-control-label" htmlFor="tag1">Restaurant</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag2" />
                        <label className="custom-control-label" htmlFor="tag2">Food</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag3" />
                        <label className="custom-control-label" htmlFor="tag3">Launch</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag4" />
                        <label className="custom-control-label" htmlFor="tag4">Breakfast</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag5" />
                        <label className="custom-control-label" htmlFor="tag5">Lifestyle</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag6" />
                        <label className="custom-control-label" htmlFor="tag6">Travel</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag7" />
                        <label className="custom-control-label" htmlFor="tag7">Drink</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag8_1" />
                        <label className="custom-control-label" htmlFor="tag8_1">Services</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag6_2" />
                        <label className="custom-control-label" htmlFor="tag6_2">Booking</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag7_3" />
                        <label className="custom-control-label" htmlFor="tag7_3">Rent</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="tag8_2" />
                        <label className="custom-control-label" htmlFor="tag8_2">Shopping</label>
                      </div>
                    </div>
                  </div>{/* ends: .filter-checklist */}
                  <div className="filter-checklist">
                    <h5>Filter by Ratings</h5>
                    <div className="sort-rating">
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="customCheck7" defaultChecked />
                        <label className="custom-control-label" htmlFor="customCheck7">
                          <span className="active"><i className="la la-star" /></span>
                          <span className="active"><i className="la la-star" /></span>
                          <span className="active"><i className="la la-star" /></span>
                          <span className="active"><i className="la la-star" /></span>
                          <span className="active"><i className="la la-star" /></span>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="customCheck8" />
                        <label className="custom-control-label" htmlFor="customCheck8">
                          <span className="active"><i className="la la-star" /></span>
                          <span className="active"><i className="la la-star" /></span>
                          <span className="active"><i className="la la-star" /></span>
                          <span className="active"><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="customCheck9" />
                        <label className="custom-control-label" htmlFor="customCheck9">
                          <span className="active"><i className="la la-star" /></span>
                          <span className="active"><i className="la la-star" /></span>
                          <span className="active"><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="customCheck10" />
                        <label className="custom-control-label" htmlFor="customCheck10">
                          <span className="active"><i className="la la-star" /></span>
                          <span className="active"><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="customCheck11" />
                        <label className="custom-control-label" htmlFor="customCheck11">
                          <span className="active"><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                        <input type="checkbox" className="custom-control-input" id="customCheck12" />
                        <label className="custom-control-label" htmlFor="customCheck12">
                          <span><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                          <span><i className="la la-star" /></span>
                        </label>
                      </div>
                    </div>
                  </div>{/* ends: .filter-checklist */}
                  <a href className="btn btn-gradient btn-gradient-two btn-block btn-icon icon-right m-top-40">Search Filter <span className="la la-long-arrow-right" /></a>
                </form>{/* ends: form */}
              </div>{/* ends: .default-ad-search */}
            </div>
          </div>{/* ends: .col-lg-4 */}
          <div className="col-lg-8 order-0 order-lg-1">
            <div className="row">
              <div className="col-lg-12">
                <div className="atbd_single_listing atbd_listing_list">
                  <article className="atbd_single_listing_wrapper">
                    <figure className="atbd_listing_thumbnail_area">
                      <div className="atbd_listing_image">
                        <a href>
                          <img src="img/p1.jpg" alt="listing image" />
                        </a>
                      </div>{/* ends: .atbd_listing_image */}
                      <div className="atbd_thumbnail_overlay_content">
                        <ul className="atbd_upper_badge">
                          <li><span className="atbd_badge atbd_badge_featured">Featured</span></li>
                        </ul>{/* ends .atbd_upper_badge */}
                      </div>{/* ends: .atbd_thumbnail_overlay_content */}
                    </figure>{/* ends: .atbd_listing_thumbnail_area */}
                    <div className="atbd_listing_info">
                      <div className="atbd_content_upper">
                        <h4 className="atbd_listing_title">
                          <a href>Flanders Heat &amp; Air Systems</a>
                        </h4>
                        <div className="atbd_listing_meta">
                          <span className="atbd_meta atbd_listing_rating">4.5<i className="la la-star" /></span>
                          <span className="atbd_meta atbd_listing_price">$55.00</span>
                          <span className="atbd_meta atbd_badge_open">Open Now</span>
                        </div>{/* End atbd listing meta */}
                        <div className="atbd_listing_data_list">
                          <ul>
                            <li>
                              <p><span className="la la-map-marker" />Los Angeles, United States</p>
                            </li>
                            <li>
                              <p><span className="la la-phone" />(415) 796-3633</p>
                            </li>
                            <li>
                              <p><span className="la la-calendar-check-o" />Posted 2 months ago</p>
                            </li>
                          </ul>
                        </div>{/* End atbd listing meta */}
                      </div>{/* end .atbd_content_upper */}
                      <div className="atbd_listing_bottom_content">
                        <div className="atbd_content_left">
                          <div className="atbd_listing_category">
                            <a href><span className="la la-glass" />Restaurant</a>
                          </div>
                        </div>
                        <ul className="atbd_content_right">
                          <li className="atbd_count"><span className="la la-eye" />900+</li>
                          <li className="atbd_save">
                            <span className="la la-heart-o" />
                          </li>
                          <li>
                            <div className="atbd_author atbd_author--thumb">
                              <a href>
                                <img src="img/author-thumb2.jpg" alt="Author Image" />
                                <span className="custom-tooltip">Jeffery A, Owner</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>{/* end .atbd_listing_bottom_content */}
                    </div>{/* ends: .atbd_listing_info */}
                  </article>{/* atbd_single_listing_wrapper */}
                </div>
              </div>{/* ends: .col-lg-12 */}
              <div className="col-lg-12">
                <div className="atbd_single_listing atbd_listing_list">
                  <article className="atbd_single_listing_wrapper">
                    <figure className="atbd_listing_thumbnail_area">
                      <div className="atbd_listing_image">
                        <a href>
                          <img src="img/p2.jpg" alt="listing image" />
                        </a>
                      </div>{/* ends: .atbd_listing_image */}
                      <div className="atbd_thumbnail_overlay_content">
                        <ul className="atbd_upper_badge">
                          <li><span className="atbd_badge atbd_badge_popular">Popular</span></li>
                        </ul>{/* ends .atbd_upper_badge */}
                      </div>{/* ends: .atbd_thumbnail_overlay_content */}
                    </figure>{/* ends: .atbd_listing_thumbnail_area */}
                    <div className="atbd_listing_info">
                      <div className="atbd_content_upper">
                        <h4 className="atbd_listing_title">
                          <a href>Sydney Restaurant Towers</a>
                        </h4>
                        <div className="atbd_listing_meta">
                          <span className="atbd_meta atbd_listing_rating">4.5<i className="la la-star" /></span>
                          <span className="atbd_meta atbd_listing_average_pricing" data-toggle="tooltip" data-placement="top" title data-original-title="Average">
                            <span className="atbd_active"><img src="img/svg/dollar.svg" className="svg" alt /></span>
                            <span className="atbd_active"><img src="img/svg/dollar.svg" className="svg" alt /></span>
                            <span><img src="img/svg/dollar.svg" className="svg" alt /></span>
                            <span><img src="img/svg/dollar.svg" className="svg" alt /></span>
                          </span>
                          <span className="atbd_meta atbd_badge_close">Closed</span>
                        </div>{/* End atbd listing meta */}
                        <div className="atbd_listing_data_list">
                          <ul>
                            <li>
                              <p><span className="la la-map-marker" />Los Angeles, United States</p>
                            </li>
                            <li>
                              <p><span className="la la-phone" />(415) 796-3633</p>
                            </li>
                            <li>
                              <p><span className="la la-calendar-check-o" />Posted 2 months ago</p>
                            </li>
                          </ul>
                        </div>{/* End atbd listing meta */}
                      </div>{/* end .atbd_content_upper */}
                      <div className="atbd_listing_bottom_content">
                        <div className="atbd_content_left">
                          <div className="atbd_listing_category">
                            <a href><span className="la la-map-marker" />Places</a>
                            <div className="atbd_cat_popup">
                              <span>+2</span>
                              <div className="atbd_cat_popup_wrapper">
                                <span><a href>Event</a></span>
                                <span><a href>Food</a></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="atbd_content_right">
                          <li className="atbd_count"><span className="la la-eye" />900+</li>
                          <li className="atbd_save">
                            <span className="la la-heart-o" />
                          </li>
                          <li>
                            <div className="atbd_author atbd_author--thumb">
                              <a href>
                                <img src="img/author-thumb2.jpg" alt="Author Image" />
                                <span className="custom-tooltip">Jeffery A, Owner</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>{/* end .atbd_listing_bottom_content */}
                    </div>{/* ends: .atbd_listing_info */}
                  </article>{/* atbd_single_listing_wrapper */}
                </div>
              </div>{/* ends: .col-lg-12 */}
              <div className="col-lg-12">
                <div className="atbd_single_listing atbd_listing_list">
                  <article className="atbd_single_listing_wrapper">
                    <figure className="atbd_listing_thumbnail_area">
                      <div className="atbd_listing_image">
                        <a href>
                          <img src="img/p3.jpg" alt="listing image" />
                        </a>
                      </div>{/* ends: .atbd_listing_image */}
                      <div className="atbd_thumbnail_overlay_content">
                        <ul className="atbd_upper_badge">
                          <li><span className="atbd_badge atbd_badge_new">New</span></li>
                        </ul>{/* ends .atbd_upper_badge */}
                      </div>{/* ends: .atbd_thumbnail_overlay_content */}
                    </figure>{/* ends: .atbd_listing_thumbnail_area */}
                    <div className="atbd_listing_info">
                      <div className="atbd_content_upper">
                        <h4 className="atbd_listing_title">
                          <a href>Kung Food &amp; Drinks</a>
                        </h4>
                        <div className="atbd_listing_meta">
                          <span className="atbd_meta atbd_listing_rating">4.5<i className="la la-star" /></span>
                          <span className="atbd_meta atbd_listing_average_pricing" data-toggle="tooltip" data-placement="top" title data-original-title="Average">
                            <span className="atbd_active"><img src="img/svg/dollar.svg" className="svg" alt /></span>
                            <span className="atbd_active"><img src="img/svg/dollar.svg" className="svg" alt /></span>
                            <span><img src="img/svg/dollar.svg" className="svg" alt /></span>
                            <span><img src="img/svg/dollar.svg" className="svg" alt /></span>
                          </span>
                          <span className="atbd_meta atbd_badge_close">Closed</span>
                        </div>{/* End atbd listing meta */}
                        <div className="atbd_listing_data_list">
                          <ul>
                            <li>
                              <p><span className="la la-map-marker" />Los Angeles, United States</p>
                            </li>
                            <li>
                              <p><span className="la la-phone" />(415) 796-3633</p>
                            </li>
                            <li>
                              <p><span className="la la-calendar-check-o" />Posted 2 months ago</p>
                            </li>
                          </ul>
                        </div>{/* End atbd listing meta */}
                      </div>{/* end .atbd_content_upper */}
                      <div className="atbd_listing_bottom_content">
                        <div className="atbd_content_left">
                          <div className="atbd_listing_category">
                            <a href><span className="la la-shopping-cart" />Shopping</a>
                          </div>
                        </div>
                        <ul className="atbd_content_right">
                          <li className="atbd_count"><span className="la la-eye" />900+</li>
                          <li className="atbd_save">
                            <span className="la la-heart-o" />
                          </li>
                          <li>
                            <div className="atbd_author atbd_author--thumb">
                              <a href>
                                <img src="img/author-thumb2.jpg" alt="Author Image" />
                                <span className="custom-tooltip">Jeffery A, Owner</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>{/* end .atbd_listing_bottom_content */}
                    </div>{/* ends: .atbd_listing_info */}
                  </article>{/* atbd_single_listing_wrapper */}
                </div>
              </div>{/* ends: .col-lg-12 */}
              <div className="col-lg-12">
                <div className="atbd_single_listing atbd_listing_list">
                  <article className="atbd_single_listing_wrapper">
                    <figure className="atbd_listing_thumbnail_area">
                      <div className="atbd_listing_image">
                        <a href>
                          <img src="img/p4.jpg" alt="listing image" />
                        </a>
                      </div>{/* ends: .atbd_listing_image */}
                      <div className="atbd_thumbnail_overlay_content">
                        <ul className="atbd_upper_badge">
                          <li><span className="atbd_badge atbd_badge_featured">Featured</span></li>
                        </ul>{/* ends .atbd_upper_badge */}
                      </div>{/* ends: .atbd_thumbnail_overlay_content */}
                    </figure>{/* ends: .atbd_listing_thumbnail_area */}
                    <div className="atbd_listing_info">
                      <div className="atbd_content_upper">
                        <h4 className="atbd_listing_title">
                          <a href>Flanders Heat &amp; Air Systems</a>
                        </h4>
                        <div className="atbd_listing_meta">
                          <span className="atbd_meta atbd_listing_rating">4.5<i className="la la-star" /></span>
                          <span className="atbd_meta atbd_listing_price">$55.00</span>
                          <span className="atbd_meta atbd_badge_open">Open Now</span>
                        </div>{/* End atbd listing meta */}
                        <div className="atbd_listing_data_list">
                          <ul>
                            <li>
                              <p><span className="la la-map-marker" />Los Angeles, United States</p>
                            </li>
                            <li>
                              <p><span className="la la-phone" />(415) 796-3633</p>
                            </li>
                            <li>
                              <p><span className="la la-calendar-check-o" />Posted 2 months ago</p>
                            </li>
                          </ul>
                        </div>{/* End atbd listing meta */}
                      </div>{/* end .atbd_content_upper */}
                      <div className="atbd_listing_bottom_content">
                        <div className="atbd_content_left">
                          <div className="atbd_listing_category">
                            <a href><span className="la la-glass" />Restaurant</a>
                          </div>
                        </div>
                        <ul className="atbd_content_right">
                          <li className="atbd_count"><span className="la la-eye" />900+</li>
                          <li className="atbd_save">
                            <span className="la la-heart-o" />
                          </li>
                          <li>
                            <div className="atbd_author atbd_author--thumb">
                              <a href>
                                <img src="img/author-thumb2.jpg" alt="Author Image" />
                                <span className="custom-tooltip">Jeffery A, Owner</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>{/* end .atbd_listing_bottom_content */}
                    </div>{/* ends: .atbd_listing_info */}
                  </article>{/* atbd_single_listing_wrapper */}
                </div>
              </div>{/* ends: .col-lg-12 */}
              <div className="col-lg-12">
                <div className="atbd_single_listing atbd_listing_list">
                  <article className="atbd_single_listing_wrapper">
                    <figure className="atbd_listing_thumbnail_area">
                      <div className="atbd_listing_image">
                        <a href>
                          <img src="img/p5.jpg" alt="listing image" />
                        </a>
                      </div>{/* ends: .atbd_listing_image */}
                      <div className="atbd_thumbnail_overlay_content">
                        <ul className="atbd_upper_badge">
                          <li><span className="atbd_badge atbd_badge_popular">Popular</span></li>
                        </ul>{/* ends .atbd_upper_badge */}
                      </div>{/* ends: .atbd_thumbnail_overlay_content */}
                    </figure>{/* ends: .atbd_listing_thumbnail_area */}
                    <div className="atbd_listing_info">
                      <div className="atbd_content_upper">
                        <h4 className="atbd_listing_title">
                          <a href>Sydney Restaurant Towers</a>
                        </h4>
                        <div className="atbd_listing_meta">
                          <span className="atbd_meta atbd_listing_rating">4.5<i className="la la-star" /></span>
                          <span className="atbd_meta atbd_listing_average_pricing" data-toggle="tooltip" data-placement="top" title data-original-title="Average">
                            <span className="atbd_active"><img src="img/svg/dollar.svg" className="svg" alt /></span>
                            <span className="atbd_active"><img src="img/svg/dollar.svg" className="svg" alt /></span>
                            <span><img src="img/svg/dollar.svg" className="svg" alt /></span>
                            <span><img src="img/svg/dollar.svg" className="svg" alt /></span>
                          </span>
                          <span className="atbd_meta atbd_badge_close">Closed</span>
                        </div>{/* End atbd listing meta */}
                        <div className="atbd_listing_data_list">
                          <ul>
                            <li>
                              <p><span className="la la-map-marker" />Los Angeles, United States</p>
                            </li>
                            <li>
                              <p><span className="la la-phone" />(415) 796-3633</p>
                            </li>
                            <li>
                              <p><span className="la la-calendar-check-o" />Posted 2 months ago</p>
                            </li>
                          </ul>
                        </div>{/* End atbd listing meta */}
                      </div>{/* end .atbd_content_upper */}
                      <div className="atbd_listing_bottom_content">
                        <div className="atbd_content_left">
                          <div className="atbd_listing_category">
                            <a href><span className="la la-map-marker" />Places</a>
                            <div className="atbd_cat_popup">
                              <span>+2</span>
                              <div className="atbd_cat_popup_wrapper">
                                <span><a href>Event</a></span>
                                <span><a href>Food</a></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="atbd_content_right">
                          <li className="atbd_count"><span className="la la-eye" />900+</li>
                          <li className="atbd_save">
                            <span className="la la-heart-o" />
                          </li>
                          <li>
                            <div className="atbd_author atbd_author--thumb">
                              <a href>
                                <img src="img/author-thumb2.jpg" alt="Author Image" />
                                <span className="custom-tooltip">Jeffery A, Owner</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>{/* end .atbd_listing_bottom_content */}
                    </div>{/* ends: .atbd_listing_info */}
                  </article>{/* atbd_single_listing_wrapper */}
                </div>
              </div>{/* ends: .col-lg-12 */}
              <div className="col-lg-12">
                <div className="atbd_single_listing atbd_listing_list">
                  <article className="atbd_single_listing_wrapper">
                    <figure className="atbd_listing_thumbnail_area">
                      <div className="atbd_listing_image">
                        <a href>
                          <img src="img/p6.jpg" alt="listing image" />
                        </a>
                      </div>{/* ends: .atbd_listing_image */}
                      <div className="atbd_thumbnail_overlay_content">
                        <ul className="atbd_upper_badge">
                          <li><span className="atbd_badge atbd_badge_new">New</span></li>
                        </ul>{/* ends .atbd_upper_badge */}
                      </div>{/* ends: .atbd_thumbnail_overlay_content */}
                    </figure>{/* ends: .atbd_listing_thumbnail_area */}
                    <div className="atbd_listing_info">
                      <div className="atbd_content_upper">
                        <h4 className="atbd_listing_title">
                          <a href>Kung Food &amp; Drinks</a>
                        </h4>
                        <div className="atbd_listing_meta">
                          <span className="atbd_meta atbd_listing_rating">4.5<i className="la la-star" /></span>
                          <span className="atbd_meta atbd_listing_average_pricing" data-toggle="tooltip" data-placement="top" title data-original-title="Average">
                            <span className="atbd_active"><img src="img/svg/dollar.svg" className="svg" alt /></span>
                            <span className="atbd_active"><img src="img/svg/dollar.svg" className="svg" alt /></span>
                            <span><img src="img/svg/dollar.svg" className="svg" alt /></span>
                            <span><img src="img/svg/dollar.svg" className="svg" alt /></span>
                          </span>
                          <span className="atbd_meta atbd_badge_close">Closed</span>
                        </div>{/* End atbd listing meta */}
                        <div className="atbd_listing_data_list">
                          <ul>
                            <li>
                              <p><span className="la la-map-marker" />Los Angeles, United States</p>
                            </li>
                            <li>
                              <p><span className="la la-phone" />(415) 796-3633</p>
                            </li>
                            <li>
                              <p><span className="la la-calendar-check-o" />Posted 2 months ago</p>
                            </li>
                          </ul>
                        </div>{/* End atbd listing meta */}
                      </div>{/* end .atbd_content_upper */}
                      <div className="atbd_listing_bottom_content">
                        <div className="atbd_content_left">
                          <div className="atbd_listing_category">
                            <a href><span className="la la-shopping-cart" />Shopping</a>
                          </div>
                        </div>
                        <ul className="atbd_content_right">
                          <li className="atbd_count"><span className="la la-eye" />900+</li>
                          <li className="atbd_save">
                            <span className="la la-heart-o" />
                          </li>
                          <li>
                            <div className="atbd_author atbd_author--thumb">
                              <a href>
                                <img src="img/author-thumb2.jpg" alt="Author Image" />
                                <span className="custom-tooltip">Jeffery A, Owner</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>{/* end .atbd_listing_bottom_content */}
                    </div>{/* ends: .atbd_listing_info */}
                  </article>{/* atbd_single_listing_wrapper */}
                </div>
              </div>{/* ends: .col-lg-12 */}
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
