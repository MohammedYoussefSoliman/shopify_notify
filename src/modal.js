import "./styles.scss";

export default class Modal {
  constructor(titleContent = null, titleColor = null) {
    this.titleContent = titleContent;
    this.titleColor = titleColor;
  }

  generateModalOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "modal_overlay";
    return overlay;
  }

  generateModal() {
    const modal = document.createElement("form");
    modal.className = "modal";
    modal.id = "modalForm";
    return modal;
  }

  generateModalTitle(titleContent) {
    const title = document.createElement("h3");
    if (titleContent) {
      title.innerText = titleContent;
    } else {
      title.innerText = "Notify me when it is socked";
    }
    title.className = "modal--title";
    if (this.titleColor) {
      title.style.color = this.titleColor;
    }
    return title;
  }

  generateModalTabsHeader() {
    const tabsWrapper = document.createElement("div");
    tabsWrapper.className = "modal--tabs";
    return tabsWrapper;
  }

  generateModalTabsButtons(array) {
    let tabsButtons = [];
    array.map((content, index) => {
      const tabButton = document.createElement("button");
      tabButton.className = "modal--tabs__button";
      tabButton.setAttribute("data-tabButton", `${index + 1}`);
      tabButton.setAttribute("type", "button");
      tabButton.innerText = content;
      if (index === 0) {
        tabButton.classList.add("active");
      }
      tabsButtons.push(tabButton);
    });
    return tabsButtons;
  }

  generateModalTabs(array) {
    let tabs = [];
    Array.from({ length: array.length }, (_, index) => {
      const tab = document.createElement("div");
      tab.className = "modal--tab";
      tab.setAttribute("data-tab", `${index + 1}`);
      if (index > 0) {
        tab.style.display = "none";
      } else {
        tab.style.display = "block";
      }
      tabs.push(tab);
    });
    return tabs;
  }

  generateTabInput(name, type, placeholder) {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    input.setAttribute("placeholder", placeholder);
    input.className = "modal--tab__input";
    return input;
  }

  generateButton() {
    const button = document.createElement("button");
    button.className = "notify--button";
    button.id = "notify_utton";
    button.innerText = "notify me";
    return button;
  }

  render() {
    const Modal = this.generateModal();
    // generate tabs
    const Tabs = this.generateModalTabs(["Email", "SMS"]);
    Tabs[0].appendChild(
      this.generateTabInput("email", "email", "Email address")
    );
    Tabs[0].querySelector(".modal--tab__input").classList.add("active--input");
    Tabs[1].appendChild(this.generateTabInput("sms", "text", "phone number"));
    // generate tab header
    const tabsHeader = this.generateModalTabsHeader();
    const tabButtons = this.generateModalTabsButtons(["Email", "SMS"]);
    tabButtons.forEach((tabButton) => {
      tabsHeader.appendChild(tabButton);
    });
    // title
    const Overlay = this.generateModalOverlay();
    const Title = this.generateModalTitle(this.titleContent);
    const SubmitButton = this.generateButton();
    Modal.appendChild(Title);
    Modal.appendChild(tabsHeader);
    Tabs.forEach((Tab) => {
      Modal.appendChild(Tab);
    });
    Modal.appendChild(SubmitButton);
    Overlay.appendChild(Modal);
    return Overlay;
  }
}
