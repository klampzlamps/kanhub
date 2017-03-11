/* globals model elements icons gitHubInjection detectPage*/

// basically our view
import React from 'react';
import ReactDOM from 'react-dom';
import SettingsApp from './SettingsApp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';
import * as detectPage from './detectPage';
import * as elements from './elements';
import * as icons from './icons';

import './settings.css';

/*ReactDOM.render(
  <MuiThemeProvider>
    <SettingsApp />
  </MuiThemeProvider>,
  document.getElementById
);*/

// 'use strict';

function addStandupTab() {
    const standupTab = elements.createRepoTab("Standup", icons.organization, "#Standup", "reponav-standup");

    elements.getRepoNavBar().append(standupTab);

    standupTab.click(function(e) {

        // change selected tab to this tab
        elements.getRepoNavBar().find('.selected').removeClass('selected');
        $(this).addClass('selected');

        // TODO: fetch stuff from model then addStandupContainer with info
        addStandupContainer();
    });
}

function addStandupContainer() {

    const repoContainer = elements.getRepoContainer();

    // remove repo contents
    repoContainer.empty();

    const repoContent = elements.createRepoContent();
    const subNav = elements.createSubNav();

    // TODO: fetch groups and append tabs to sub nav
    // test groups
    const testSubNavTab = elements.createSubNavTab("Frontend", "#wow", "subnav-test selected");
    subNav.append(testSubNavTab);
    subNav.append(elements.createSubNavTab("Backend", "#wow", "subnav-test"));

    repoContent.append(subNav);

    repoContainer.append(repoContent);

}

document.addEventListener('DOMContentLoaded', () => {
    if (detectPage.isRepo()) {
      addStandupTab();
    }
});
