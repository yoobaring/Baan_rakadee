import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Keephome =()=> {
    let url = 'https://newhome.sixgeat1997.now.sh/api/home'   
    const [myhome, setMyhome] = useState({})
   
    useEffect(()=>{
        getMyhome()
    },[])

    const getMyhome = async () => {
        const result = await axios.get(url)
        setMyhome(result.data)
        console.log(result.data)
    }

    const printKeephome = () => {
        if ( myhome && myhome.length )
            return myhome.map((keephome,index) => {
                return (

 
                <div  key={index} className="col-lg-12 ">
                        <div className="atbd_single_listing atbd_listing_list col-lg-12">
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
                            <div className="atbd_listing_info col-lg-12">
                              <div className="atbd_content_upper">
                                <h4 className="atbd_listing_title">
                                  <a href>{keephome.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                                </h4>
                                <div className="atbd_listing_meta">
                                &nbsp;
                                  <span className="atbd_meta atbd_listing_rating"> &nbsp; {keephome.area} ตารางวา&nbsp; <i /></span>
                                  &nbsp;
                                  <span className="atbd_meta atbd_listing_price"> &nbsp; {keephome.price} บาท &nbsp; </span>
                                  &nbsp;
                                  <span className="atbd_meta atbd_badge_open">&nbsp;{keephome.type}&nbsp;</span>
                                </div>{/* End atbd listing meta */}
                                <div className="atbd_listing_data_list">
                                  <ul>
                                    <li>
                                      <p><span className="la la-map-marker" />&nbsp;{keephome.category}&nbsp;</p>
                                    </li>
                                    <li>
                                      <p><span className="la la-phone" />{keephome.tel}</p>
                                    </li>
                                    <li>
                                      <p><span className="la la-calendar-check-o" />Posted 2 months ago</p>
                                    </li>
                                  </ul>
                                </div>{/* End atbd listing meta */}
                              </div>{/* end .atbd_content_upper */}
                              <div className="atbd_listing_bottom_content" >
                                <div className="atbd_content_left">
                                  <div className="atbd_listing_category">
                                    <a href><span className="la la-glass" />{keephome.province}</a>
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
                                        <img src="img/icon.png" alt="Author Image" />
                                        <span className="custom-tooltip">Jeffery A, Owner</span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>{/* end .atbd_listing_bottom_content */}
                            </div>{/* ends: .atbd_listing_info */}
                          </article>{/* atbd_single_listing_wrapper */}
                        </div>
                      </div>
                )
             
            })
        else {
            return (<h2>ไม่มีข้อมูล </h2>)
        }

    }

    return (
        <div >
           
                {printKeephome()}
          <br/>
        
        </div>
    )
  
 }

 export default Keephome;
 
 
