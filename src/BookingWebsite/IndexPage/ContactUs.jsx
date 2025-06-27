import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Styles.css';


export default function ContactUs() {
  return (
    <section id="Contact" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-2xl animate__animated animate__fadeInDown">Get in Touch</h1>
          <p className="text-muted animate__animated animate__fadeInUp">We'd love to hear from you</p>
        </div>

        <div className="row g-4">
        
          <div className="col-lg-7 animate__animated animate__fadeInLeft">
            <div className="p-4 rounded shadow-sm glass-card">
              <h4 className="mb-4">Contact Form</h4>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Full Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                  </div>
                  <div className="col-12 text-end">
                    <button className="btn btn-dark px-4 py-2">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        
          <div className="col-lg-5 animate__animated animate__fadeInRight">
            <div className="row g-3">
              <div className="col-12">
                <div className="info-box d-flex align-items-center p-3 rounded shadow-sm glass-card">
                  <i className="bi bi-geo-alt-fill fs-3 text-primary me-3"></i>
                  <div>
                    <h6 className="mb-0 fw-semibold">Address</h6>
                    <small>Chennai</small>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="info-box d-flex align-items-center p-3 rounded shadow-sm glass-card">
                  <i className="bi bi-telephone-fill fs-3 text-success me-3"></i>
                  <div>
                    <h6 className="mb-0 fw-semibold">Phone</h6>
                    <small>+91 1234567890</small>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="info-box d-flex align-items-center p-3 rounded shadow-sm glass-card">
                  <i className="bi bi-envelope-fill fs-3 text-danger me-3"></i>
                  <div>
                    <h6 className="mb-0 fw-semibold">Email</h6>
                    <small>karthikeyanvr17.gmail.com</small>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="info-box d-flex align-items-center p-3 rounded shadow-sm glass-card">
                  <i className="bi bi-globe2 fs-3 text-info me-3"></i>
                  <div>
                    <h6 className="mb-0 fw-semibold">Website</h6>
                    <small>www.TripBolt.com</small>
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
