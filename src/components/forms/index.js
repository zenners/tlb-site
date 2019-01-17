import React from 'react'

export const EventForm = props => (
  <section className="section bg-gray">
    <div className="container">
      <h2 className="text-center">Let's Get In Touch</h2>

      <div className="row mt-8">
        <form
          className="col-11 col-lg-6 mx-auto p-6 bg-gray rounded"
          action="../assets/php/sendmail.php"
          method="POST"
          data-form="mailer"
        >
          <div className="alert alert-success d-on-success">
            We received your message and will contact you back soon.
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                className="form-control form-control-lg"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>

            <div className="form-group col-md-6">
              <input
                className="form-control form-control-lg"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                className="form-control form-control-lg"
                type="text"
                name="name"
                placeholder="Phone"
              />
            </div>

            <div className="form-group col-md-6">
              <input
                className="form-control form-control-lg"
                type="email"
                name="email"
                placeholder="Event Address"
              />
            </div>

            <div className="form-group col-md-6">
              <input
                className="form-control form-control-lg"
                type="text"
                name="name"
                placeholder="Number of guests"
              />
            </div>

            <div className="form-group col-md-6">
              <input
                className="form-control form-control-lg"
                type="email"
                name="email"
                placeholder="Budget"
              />
            </div>
          </div>

          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows="4"
              placeholder="Describe your event"
              name="message"
            />
          </div>

          <div className="text-center">
            <button className="btn btn-lg btn-primary" type="submit">
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
)
