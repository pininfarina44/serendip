import React from "react";
//import Form from "./form.js"

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

        </div>
        <div className="lower-contact">
          <h2>Serendip Herbals</h2>
          {/*<h5>Sri Lanka:</h5>
          <address>
            35/6 Chapel Lane
            <br />
            Colombo, Sri Lanka
          </address>*/}
          <h5>US Branch:</h5>
          <address>
            11572 Nelson Street
            <br />
            Loma Linda, CA 92354
          </address>
          <a href="tel:19096548812">Phone: 1-909-654-8812</a>
          <br />
          <a href="mailto:inquiry@serendipherbals.com">inquiry@serendipherbals.com</a>
        </div>
      </div>
    );
  }
}

export default Contact;
