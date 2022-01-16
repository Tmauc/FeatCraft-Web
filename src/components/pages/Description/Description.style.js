import React from 'react';

function Description() {
  return (
    <div className="homeDiv">
      <section className="main-wrapper-home">
        <div className="PDiv proDiv">
          <div className="container">
            <div className="row rotate5">
              <div className="col-lg-6 col-xs-12 colBtnHomePro paddingL250">
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12 imgDiv">
                <div className="img-wrap-home paddingR50">
                  <div className="colImgHome">
                    <img src={pro} className="imgHome" alt="about images" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="PDiv persoDiv">
          <div className="container">
            <div className="row rotate5">
              <div className="col-lg-6 col-xs-12 colBtnHome2 paddingR250">
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12 imgDiv">
                <div className="img-wrap-home paddingL20">
                  <div className="colImgHome">
                    <img src={perso} className="imgHome" alt="about images" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xs-12 colBtnHome paddingR250">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
