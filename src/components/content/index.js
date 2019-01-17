import React from 'react'

export const LRContent = ({ subtitle, title, content }) => (
  <section className="section">
    <div className="container">
      <div className="row gap-y align-items-center">
        <div className="col-md-6 text-center text-md-right">
          <p className="small-2 text-uppercase text-lightest fw-500 ls-1">
            {subtitle}
          </p>
          <h3 className="fw-500">{title}</h3>
          <br />
          <p>
            Instrument cultivated alteration any favourable expression law far
            nor. Both new like tore but year. An from mean on with when sing
            pain. Oh to as principles devonshire companions unsatiable an
            delightful. The ourselves suffering the sincerity. Inhabit her
            manners adapted age certain. Debating offended at branched striking
            be subjects.
          </p>
        </div>

        <div className="col-md-6">
          <img
            className="rounded-md ml-md-4"
            src="../assets/img/thumb/15.jpg"
            alt="..."
          />
        </div>
      </div>
    </div>
  </section>
)

export const Content2 = props => (
  <section
    className="section text-white p-0"
    style="background-color: #33323a;"
  >
    <div className="container-wide">
      <div className="row no-gutters">
        <div className="col-md-4 bg-img" style={{ minHeight: '300px' }} />

        <div className="col-md-8 p-6 p-md-8">
          <h4>From The Founder</h4>
          <p className="lead">
            Instrument cultivated alteration any favourable expression law far
            nor. Both new like tore but year. An from mean on with when sing
            pain.
          </p>
          <p>
            Passage its ten led hearted removal cordial. Preference any
            astonished unreserved mrs. Prosperous understood middletons in
            conviction an uncommonly do. Supposing so be resolving breakfast am
            or perfectly. Is drew am hill from mr. Picture for attempt joy
            excited ten carried manners talking how. Suspicion neglected he
            resolving agreement perceived at an.
          </p>
          <p>
            Written enquire painful ye to offices forming it. Then so does over
            sent dull on. Likewise offended humoured mrs fat trifling answered.
            On ye position greatest so desirous. So wound stood guest weeks no
            terms up ought. By so these am so rapid blush songs begin.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export const FeatureText = props => (
  <section className="section">
    <div className="container">
      <header className="section-header">
        <small>We Provide</small>
        <h2>Franchise Support</h2>
        <hr />
        <p className="lead">
          We are committed to your success. You can count on us to provide the
          following services below.
        </p>
      </header>

      <div className="row gap-y">
        {props.data.map(item => (
          <div className="col-md-6">
            <div className="media">
              <div className="mr-5 w-50px">
                <i className="icon-mobile lead-6" />
              </div>

              <div className="media-body">
                <h6>{item.title}</h6>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export const WordsFeature = props => (
  <section
    className="section text-white p-0"
    style={{ 'background-color': '#33323a' }}
  >
    <div className="container-wide">
      <div className="row no-gutters">
        <div
          className="col-md-4 bg-img"
          style={{
            backgroundImage: '',
            minHeight: '300px',
          }}
        />

        <div className="col-md-8 p-6 p-md-8">
          <h4>Words From the Team</h4>
          <p className="lead">
            At The Lost Bread, we do things differently. Our unique brand
            identity is what makes us an exceptional company. The Dedication of
            every member of the team, from crafting an experience to providing
            personal customer service, is natural because we simply love what we
            do
          </p>
          <p>
            If you are the type of person who believes in the unconventional and
            is ready for a challenge, then we are excited to have you on board.
            We hope that you find your own load bread and we look forward to
            doing business with you.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export const FeatureRightSlide = () => (
  <section className="section bg-gray pb-0 overflow-hidden">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5 pb-8">
          <h2>Reasons to Franchise</h2>
          <p className="lead" />

          <br />

          <div className="media">
            <div className="lead-5 text-warning lh-2 mr-5">
              <i className="icon-video" />
            </div>
            <div className="media-body">
              <h6>Established Brand</h6>
              <p>Strong & continuosly growing social media presence</p>
              <p>
                Within the first 2 years, over 150k Milkshakes & 25k soft-serve
                sold!
              </p>
            </div>
          </div>
          <div className="media">
            <div className="lead-5 text-danger lh-2 mr-5">
              <i className="icon-heart" />
            </div>
            <div className="media-body">
              <h6> Leader in Dessert Development & Innovation </h6>
              <p> First to launch unique dessert creations namely: </p>
              <ul>
                <li> SUB-ZERO SOFTSERVE </li>
                <li> OVERSHAKES </li>
                <li> SORBE-TOASTS </li>
                <li> FRENCHTOAST CUBES </li>
              </ul>
            </div>
          </div>

          <br />
        </div>

        <div className="col-md-5 text-center mx-auto">
          <img
            src="../assets/img/preview/phone-1.png"
            alt="..."
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>
      </div>
    </div>
  </section>
)
