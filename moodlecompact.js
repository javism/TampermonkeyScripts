// ==UserScript==
// @name         Moodle CSS compact
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Increases the number of items you can display in modern moodle
// @author       You
// @match        https://moodle.uco.es/m2324/*
// @icon         https://moodle.uco.es/m2324/pluginfile.php/1/theme_loove/favicon/1687370320/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('@media (min-width: 768px) {  .activity-item:not(.activityinline) {    padding: 0.5rem;  }}.activityiconcontainer {	width: 30px;	height: 30px;	border-radius: 4px;	padding: .7rem;} body {	line-height: 1.1;} .activity-item:not(.activityinline) {	padding: .3rem;}');

console.log('ran');
