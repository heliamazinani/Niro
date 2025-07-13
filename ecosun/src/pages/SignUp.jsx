import Navbar from "../components/Navbar";
import Slider from "../components/Slider.jsx";
import AAbout from "../components/AAbout.jsx";
import Loader from "../components/Loader.jsx";
import Spin from "../components/Spin.jsx";
import Services from "../components/Services.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Numbers from "../components/Numbers.jsx";
import Process from "../components/Process.jsx";
import Block from "../components/Block.jsx";
import Why from "../components/Why.jsx";
import TeamS from "../components/TeamS.jsx";
import Footer from "../components/Footer.jsx";
import ASlider from "../components/ASlider.jsx";
import Team from "../components/Team.jsx";

function SignUp() {
  return (
    <>
      <Navbar></Navbar>
      <div id="smooth-content">
        <main className="main-bg">
          <section className="contact-crev section-padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-9">
                  <div className="sec-head text-center">
                    <h6>ثبت نام</h6>

                    <div className="full-width">
                      <form id="contact-form" method="post" action="#">
                        <div className="messages"></div>

                        <div className="controls row">
                          <div className="col-12">
                            <div className="form-group mb-30">
                              <input
                                id="form_email"
                                type="email"
                                name="email"
                                placeholder="ایمیل"
                                required="required"
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group mb-30">
                              <input
                                id="form_name"
                                type="password"
                                name="name"
                                placeholder="رمز عبور"
                                required="required"
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <button
                              type="submit"
                              className="butn butn-md butn-bg main-colorbg3 text-dark "
                            >
                              <span className="text">صحبت کردن</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default SignUp;
