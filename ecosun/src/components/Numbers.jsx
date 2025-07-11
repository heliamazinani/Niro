import React from "react";

const Numbers = () => {
  return (
    <>
      <section className="numbers section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="item md-mb50">
                <h2 className="fw-800 stroke">16</h2>
                <h6>سال تجربه موفق</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-around">
              <div className="item md-mb50">
                <h2 className="fw-800">
                  4<span className="fz-80 fw-600">k</span>
                </h2>
                <h6>پروژه تکمیل شده</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-around">
              <div className="item sm-mb50">
                <h2 className="fw-800 stroke">
                  9<span className="fz-80 fw-600">k</span>
                </h2>
                <h6>مشتری خوش حال</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="item ml-auto">
                <h2 className="fw-800">12</h2>
                <h6>جوایز کسب شده</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Numbers;
