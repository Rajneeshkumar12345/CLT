import React from "react";

function Company() {
  return (
    <>
      <div className="Company" style={{ backgroundColor: "#6df7d2" }}>
        <section>
          <div className="container">
            <div className="heading">
              <h2 className="tag1 text-center">
                CodeLover Technology Pvt. Ltd.
              </h2>
            </div>
            <div className="col-md-12 col-sm-12">
              <img
                src="/Profile.jpg"
                className="text-center img-fluid mt-5"
                style={{ width: "100%" }}
              ></img>
            </div>
            <div className="about_company col-md-12">
              <div className="form-group py-3">
                <textarea
                  className="form-control mt-2"
                  id="exampleFormControlTextarea1"
                  placeholder="Messege"
                  rows="4"
                  required
                  style={{ backgroundColor: "#f7abf0" }}
                ></textarea>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="heading">
              <h2 className="tag2 text-center mt-5">Culture Of The Company</h2>
            </div>
            <div className="about-company col-md-12">
              <div className="form-group py-3">
                <textarea
                  className="form-control mt-2"
                  id="exampleFormControlTextarea1"
                  placeholder="Messege"
                  rows="3"
                  required
                  style={{ backgroundColor: "#f7abf0" }}
                ></textarea>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-5" style={{marginTop:"5rem"}}>
            <div className="py-3">
              <div className="row">
                {/* First container of about */}
                <div className="col-md-6 col-sm-12 mb-3 mb-lg-0 mt-4">
                  <div className="hover hover-4 text-white rounded ">
                    <img src="Mission.jpg" alt="mission" />
                    <div className="hover-overlay"></div>
                    <div className="hover-4-content">
                      <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                        Our{" "}
                        <span
                          className="font-weight-light"
                          style={{ color: "#c41073" }}
                        >
                          Mission{" "}
                        </span>
                      </h3>
                      <p className="hover-4-description text-uppercase mb-0 small">
                        CodeLover Tecchnology Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white"
                  style={{ marginTop: "60px" }}
                >
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Messege"
                      rows="10"
                      required
                      style={{ backgroundColor: "#aeacfc" }}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Ssecond container of about */}
              <div className="row" style={{marginTop:"5rem"}}>
                <div
                  className="col-md-6 col-sm-12 mb-3 mb-lg-0 text-white"
                  style={{ marginTop: "40px" }}
                >
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Messege"
                      rows="10"
                      required
                      style={{ backgroundColor: "#aeacfc" }}
                    ></textarea>
                  </div>
                </div>
                {/* About Item */}
                <div className="col-md-6 col-sm-12 mb-3 mb-lg-0">
                  <div className="hover hover-4 text-white rounded">
                    <img src="Vision.jpg" height="350" alt="vision" />
                    <div className="hover-overlay"></div>
                    <div className="hover-4-content">
                      <h3 className="hover-4-title text-uppercase font-weight-bold mb-0">
                        Our{" "}
                        <span
                          className="font-weight-light"
                          style={{ color: "#1fc410" }}
                        >
                          Vision{" "}
                        </span>
                      </h3>
                      <p className="hover-4-description text-uppercase mb-0 small">
                        CodeLover Tecchnology Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
            <div className="container" style={{marginTop:"5rem"}}>
            <div className="heading">
                <h2 className="tag3 text-center">
                    Company Policy and Benifits
                </h2>
            </div>
            <div className="text">
            <div className="about_company col-md-12">
              <div className="form-group py-3">
                <textarea
                  className="form-control mt-2"
                  id="exampleFormControlTextarea1"
                  placeholder="Messege"
                  rows="5"
                  required
                  style={{ backgroundColor: "#f7abf0" }}
                ></textarea>
              </div>
            </div>
            </div>
            </div>
           
        </section>

        <section>
            <div className="container" style={{marginTop:"5rem"}}>
            <div className="heading">
                <h2 className="tag4 text-center">
                    <span style={{color:"#1fc410"}}>Conclusion</span>
                </h2>
            </div>
            <div className="text">
            <div className="about_company col-md-12">
              <div className="form-group py-3">
                <textarea
                  className="form-control mt-2"
                  id="exampleFormControlTextarea1"
                  placeholder="Messege"
                  rows="4"
                  required
                  style={{ backgroundColor: "#f7abf0" }}
                ></textarea>
              </div>
            </div>
            </div>
            </div>
           
        </section>
      </div>
    </>
  );
}

export default Company;
