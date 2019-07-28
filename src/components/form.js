import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="form-div">
        <form>
            <label for="name">Name</label>
            <input type="text" name="name" required="required" />
            <label for="email">E-mail</label>
            <input type="email" name="email" required="required" />
            <label for="tel">Telephone</label>
            <input type="text" name="tel" />
            <label for="subject">Subject</label>
            <input type="text" name="subject" />
            <label for="message">Message</label>
            <textarea name="message" />
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
