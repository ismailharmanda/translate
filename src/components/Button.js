import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === "english" ? "Submit" : "Gönder";
    return <button className="ui primary">{text}</button>;
  }
}
export default Button;
