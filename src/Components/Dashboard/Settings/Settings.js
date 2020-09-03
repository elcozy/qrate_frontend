import { ToggleSlider } from "../Shared/CustomToggleSlider/ToggleSlider";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MainWrapper from "../Shared/MainWrapper";
import { RightRadioButton } from "../Shared/Button/RadioButton";

import "./Settings.scss";
import { Switch, Route } from "react-router-dom";

// IMPORTING CSS

const Account = () => (
  <div className="settings--account col py-4">
    <div className="sub-setting-head mb-3">Account</div>
    <NavLink
      className="subSettingsLink mb-2"
      activeClassName="active-link"
      to="/home/settings/account/username"
      exact
    >
      <div className="settings-account-item">
        <div className="d-flex flex-column">
          <span className="account-sub-name">Username</span>
          <span className="account-username">artistgod</span>
        </div>

        <i className="fas fa-chevron-right arrow-settings"></i>
      </div>
    </NavLink>
    <NavLink
      className="subSettingsLink mb-2"
      activeClassName="active-link"
      to="/home/settings/account/username"
      exact
    >
      <div className="settings-account-item">
        <div className="d-flex flex-column">
          <span className="account-sub-name">Email Address</span>
          <span className="account-username">feranm15@gmail.com</span>
        </div>

        <i className="fas fa-chevron-right arrow-settings"></i>
      </div>
    </NavLink>
    <NavLink
      className="subSettingsLink mb-2"
      activeClassName="active-link"
      to="/home/settings/account/username"
      exact
    >
      <div className="settings-account-item">
        <div className="d-flex flex-column">
          <span className="account-sub-name">Password</span>
          <span className="account-password">artistgod</span>
        </div>

        <i className="fas fa-chevron-right arrow-settings"></i>
      </div>
    </NavLink>
  </div>
);
const Notifications = () => (
  <div className="settings--notification col py-4">
    <div className="sub-setting-head mb-3">Notifications</div>
    <div className="subSettingsLink mb-2">
      <div className="settings-notification-item">
        <div className="d-flex flex-column">
          <span className="notification-sub-name">
            Turn On/Off All Notifications
          </span>
        </div>
        <ToggleSlider id="off-notification" />
      </div>
      <div className="settings-notification-item">
        <div className="d-flex flex-column">
          <span className="notification-sub-name">
            Notify me about latest posts
          </span>
        </div>
        <ToggleSlider id="notify-new-posts" />
      </div>
      <div className="settings-notification-item">
        <a href="#" className="notification-sub-name">
          Troubleshoot Notifications
        </a>
      </div>
    </div>
  </div>
);
const Theme = () => (
  <div className="settings--theme col py-4">
    <div className="sub-setting-head mb-3">Theme</div>
    <div className="settings-theme-item">
      <div className="d-flex flex-column my-auto">
        {/* <span className="notification-sub-name">Light</span> */}
        <RightRadioButton buttonLabel={"Light"} />
      </div>
    </div>
    <div className="settings-theme-item">
      <div className="d-flex flex-column">
        {/* <span className="notification-sub-name">Dark</span> */}
        <RightRadioButton buttonLabel={"Dark"} />
      </div>
    </div>
  </div>
);
const Privacy = () => (
  <div className="settings--theme col py-4">
    <div className="sub-setting-head mb-3">Privacy and Security</div>
  </div>
);
const Help = () => (
  <div className="settings--theme col py-4">
    <div className="sub-setting-head mb-3">Help</div>
  </div>
);
const About = () => (
  <div className="settings--theme col py-4">
    <div className="sub-setting-head mb-3">About</div>
  </div>
);

export default class Settings extends Component {
  componentDidMount() {}

  render() {
    return (
      <MainWrapper className="settings d-flex flex-row h-100">
        <div className="settings--links col px-0 py-4">
          <div className="settings-head mb-3">Settings</div>
          <NavLink
            className="settingsLink mb-2"
            activeClassName="active-link"
            to="/home/settings"
            exact
          >
            <div className="settings-item pl-4">
              <span>Account</span>
              <i className="fas fa-chevron-right arrow-settings"></i>
            </div>
          </NavLink>
          <NavLink
            className="settingsLink mb-3"
            activeClassName="active-link"
            to="/home/settings/notifications"
          >
            <div className="settings-item pl-4">
              <span>Notifications</span>
              <i className="fas fa-chevron-right arrow-settings"></i>
            </div>
          </NavLink>
          <NavLink
            className="settingsLink mb-3"
            activeClassName="active-link"
            to="/home/settings/privacy"
          >
            <div className="settings-item pl-4">
              <span>Privacy and Security</span>
              <i className="fas fa-chevron-right arrow-settings"></i>
            </div>
          </NavLink>
          <NavLink
            className="settingsLink mb-2"
            activeClassName="active-link"
            to="/home/settings/theme"
          >
            <div className="settings-item pl-4">
              <span>Theme</span>
              <i className="fas fa-chevron-right arrow-settings"></i>
            </div>
          </NavLink>
          <NavLink
            className="settingsLink mb-3"
            activeClassName="active-link"
            to="/home/settings/help"
          >
            <div className="settings-item pl-4">
              <span>Help</span>
              <i className="fas fa-chevron-right arrow-settings"></i>
            </div>
          </NavLink>
          <NavLink
            to="/home/settings/about"
            className="settingsLink"
            activeClassName="active-link"
          >
            <div className="settings-item pl-4 out">
              <i className="fas fa-chevron-right arrow-settings"></i>
              <span>About Qrate</span>
            </div>
          </NavLink>
        </div>

        <Switch>
          <Route exact path="/home/settings" component={Account}></Route>
          <Route
            exact
            path="/home/settings/notifications"
            component={Notifications}
          ></Route>
          <Route path="/home/settings/privacy" component={Privacy}></Route>
          <Route path="/home/settings/theme" component={Theme}></Route>
          <Route path="/home/settings/help" component={Help}></Route>
          <Route path="/home/settings/about" component={About}></Route>
        </Switch>
      </MainWrapper>
    );
  }
}
