import React from 'react'

export const CTAGradient = () => (
  <section
    className="section text-white py-8"
    style={{
      backgroundImage: 'linear-gradient(120deg, #40E0D0 0%, #DB9F8E 100%)',
    }}
  >
    <div className="container">
      <header className="section-header">
        <small>
          <strong>Own it</strong>
        </small>
        <h2 className="display-3 fw-400">
          Be a part of our growing brand. Click the link below and apply to be
          our future partner.
        </h2>
        <hr />
        <p className="lead-2">
          For inquiries email us at franchise@thelostbread.com
        </p>
      </header>

      <p className="text-center">
        <a
          className="btn btn-xl btn-round btn-light w-250"
          href="https://goo.gl/forms/cAFqjex0kAAGQFX82"
        >
          {' '}
          I'm Interested!{' '}
        </a>
        <br />
      </p>
    </div>
  </section>
)
