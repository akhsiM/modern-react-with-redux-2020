import React from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

// class Button extends React.Component {
//   static contextType = LanguageContext;

//   render() {
//     const text = this.context === "english" ? "Submit" : "Voorleggen";
//     return <button className="ui button primary">{text}</button>;
//   }
// }

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {(value) => this.renderSubmit(value)}
      </LanguageContext.Consumer>
    </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
