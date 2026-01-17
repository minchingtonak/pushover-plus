// ==UserScript==
// @name         Pushover Plus
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A userscript to enhance the UX of the Pushover desktop web client
// @author       You
// @match        https://client.pushover.net/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pushover.net
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function applyBottomUpStyling() {
    const style = document.createElement('style');
    style.textContent = `
            /* Reverse the message order so newest appears at bottom */
            #messages {
                display: flex !important;
                flex-direction: column-reverse !important;
            }

            /* Ensure messages container fills available space and scrolls to bottom */
            #messages {
                overflow-y: auto !important;
            }

            /* Sentinel element styling */
            #bottom-sentinel {
                height: 0 !important;
                width: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
                border: 0 !important;
            }
        `;
    document.head.appendChild(style);
    console.log('Pushover bottom-up styling applied');
  }

  function init() {
    // Wait for the page to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    applyBottomUpStyling();
    console.log('Pushover bottom-up messages initialized');
  }

  init();
})();
