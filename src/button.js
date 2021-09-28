import "./styles.scss";

export default class Button {
  constructor(buttonContent = null, buttonColor = null) {
    this.buttonContent = buttonContent;
    this.buttonColor = buttonColor;
  }

  generateButton() {
    const button = document.createElement("button");
    button.className = "modal--button";
    button.id = "modalButton";
    if (this.buttonContent) {
      button.innerText = this.buttonContent;
    }
    if (this.buttonColor) {
      button.style.backgroundColor = this.buttonColor;
    }
    return button;
  }
  render() {
    const Button = this.generateButton();
    return Button;
  }
}
