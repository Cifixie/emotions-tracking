import React, { PureComponent } from "react";
import netlifyIdentity from "netlify-identity-widget";

const settings = {
  container: "#netlify-modal"
};
/*
localStorage.setItem(
  "netlifySiteURL",
  "https://emotions-tracking.netlify.com/"
);
*/

class Identity extends PureComponent {
  constructor(props) {
    super(props);
    netlifyIdentity.on("init", this.onInit);
    netlifyIdentity.on("login", this.onLogin);
    netlifyIdentity.on("logout", this.onLogout);
    netlifyIdentity.on("error", this.onError);
    netlifyIdentity.on("open", this.onOpen);
    netlifyIdentity.on("close", this.onClose);

    this.state = {
      user: undefined,
      err: undefined
    };
  }

  componentDidMount() {
    netlifyIdentity.init(settings);
  }

  setUser = user =>
    this.setState(() => ({
      user
    }));

  setErr = err =>
    this.setState(() => ({
      err
    }));

  onInit = user => {
    console.log("init", user);
    this.setUser(user);
  };
  onLogin = user => {
    console.log("login", user);
    this.setUser(user);
  };
  onLogout = () => {
    console.log("Logged out");
  };
  onError = err => {
    console.error("Error", err);
    this.setErr(err);
  };
  onOpen = () => console.log("Widget opened");
  onClose = () => console.log("Widget closed");

  // "login" || "signup" ||
  openModal = tab => netlifyIdentity.open(tab);
  closeModal = () => netlifyIdentity.close();
  logout = () => netlifyIdentity.logout();

  render() {
    const { user, err } = this.state;
    return (
      <div>
        <div id="netlify-modal" />
        <div>
          {user ? (
            <button type="button" onClick={() => this.logout()}>
              Logout
            </button>
          ) : (
            <button type="button" onClick={() => this.openModal()}>
              Login
            </button>
          )}
          {err && <pre>{err}</pre>}
        </div>
      </div>
    );
  }
}

export default Identity;
