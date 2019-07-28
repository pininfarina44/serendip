import React from "react";
import Form from "./form.js"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      tel: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      name: event.target.name,
      email: event.target.email,
      telephone: event.target.tel,
      message: event.target.message
    });
  }
  handleSubmit(event) {}

  render() {
    return (
      <div className="contact">

        <div className="upper-contact">
          <Form />
        </div>
        <div className="lower-contact">
          <h2>Serendip Herbals</h2>
          <h5>Sri Lanka:</h5>
          <address>
            35/6 Chapel Lane
            <br />
            Colombo, Sri Lanka
          </address>
          <h5>US Branch:</h5>
          <address>
            PO Box 7961
            <br />
            Redlands, CA 92375
          </address>
          <a href="tel:18003534600">Phone: 1-800-353-4600</a>
          <br />
          <a href="mailto:berkaysurmeli@hotmail.com">sue@serendipherbals.com</a>
        </div>
      </div>
    );
  }
}

export default Contact;
