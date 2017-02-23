// ==UserScript==
// @name         Protect Eye
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Set Background Color to protect eys.
// @author       You
// @match        http://*/*
// @match        https://*/*
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('*').css({
        'background-color': '#C7EDCC',
        'color': 'black'
    });
})();