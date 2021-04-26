import React from "react";

const Contact = () => {
  return (
    <div id="kontakt" className="contact">
      <div className="text-center">
        <h1>Kontaktirajte nas</h1>
        <p>Pisite nam i odgovoricemo Vam u roku od 24 casa.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <input
              type="text"
              className="form-control"
              placeholder="Ime"
              name="name"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Telefon"
              phone="phone"
            />
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              email="email"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Tema"
              subject="subject"
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <textarea
              type="text"
              className="form-control"
              placeholder="Poruka"
              description="description"
            ></textarea>
            <button type="submit" className="btn-main-offer contact-btn">Posalji</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
