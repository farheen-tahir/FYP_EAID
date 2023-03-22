
import "./MissionStyles.css";

function Mission() {
  
  return (
   
    <section className="section section-xl">
    <div className="container outer-box">
      <div className="row row-50 justify-content-lg-between align-items-lg-center ">
        <div className="col-lg-6">
          <div className="box-img-animate">
            <div
              className="box-img-animate-item"
              data-parallax-scroll='{"y": 0, "x": 140,  "smoothness": 50 }'
            >
              <img
                id="img-1"
                src={require("../assets/img/img-1.jpg")}
                alt="img1"
              />
            </div>
            <div
              className="box-img-animate-item"
              data-parallax-scroll='{"y": 150, "x": 0,  "smoothness": 50 }'
            >
              <img
                id="img-2"
                src={require("../assets/img/img-2.jpg")}
                alt="img2"
              />
            </div>
            <div
              className="box-img-animate-item"
              data-parallax-scroll='{"y":70, "x": -250,  "smoothness": 50 }'
            >
              <img
                id="img-3"
                src={require("../assets/img/img-3.jpg")}
                alt="img3"
              />
            </div>
            <div
              className="box-img-animate-item"
              data-parallax-scroll='{"y":20, "x": 20,  "smoothness": 50 }'
            >
              <img
                id="img-4"
                src={require("../assets/img/img-4.jpg")}
                alt="img4"
              />
            </div>
            <div
              className="box-img-animate-item"
              data-parallax-scroll='{"y":60, "x": 70,  "smoothness": 50 }'
            >
              <img
                id="img-5"
                src={require("../assets/img/img-5.jpg")}
                alt="img5"
              />
            </div>
            <div
              className="box-img-animate-item"
              data-parallax-scroll='{"y":0, "x": 140,  "smoothness": 50 }'
            >
              <img
                id="img-6"
                src={require("../assets/img/img-6.jpg")}
                alt="img6"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-5 box-2">
          <div className="innset-xl-left-70">
            <h1>Our Mission</h1>
            <p className="text-opacity-80">
              Our organization pursues several goals that can be identified as
              our mission. Learn more about them below.
            </p>
            <div className="row row-50">
              <div className="col-md-6 col-lg-12">
                <div className="box-icon-modern">
                  <div className="box-icon-inner decorate-triangle">
                    <span className="icon-xl linearicons-baby2 icon-primary"></span>
                  </div>
                  <div className="box-icon-caption">
                    <h4>
                     Saving Children
                    </h4>
                    <p>
                      Our main mission is to save and rescue permanently
                      displaced children.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="box-icon-modern">
                  <div className="box-icon-inner decorate-circle">
                    <span className="icon-xl linearicons-sun icon-primary"></span>
                  </div>
                  <div className="box-icon-caption">
                    <h4>Peace On The Planet
                    </h4>
                    <p>
                      By working with our partners, we aim to establish
                      peaceful relationships.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="box-icon-modern">
                  <div className="box-icon-inner decorate-rectangle">
                    <span className="icon-xl linearicons-umbrella2 icon-primary"></span>
                  </div>
                  <div className="box-icon-caption">
                    <h4>Care Protection
                    </h4>
                    <p>
                      We provide global care and protection to support
                      children all over the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
  );
}
export default Mission;
