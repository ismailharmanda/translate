import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Gönder";
  }
  render() {
    return (
      <button className="ui primary">
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
export default Button;
