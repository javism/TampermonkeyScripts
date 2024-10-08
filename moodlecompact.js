// ==UserScript==
// @name         Moodle CSS compact
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Increases the number of items you can display in modern moodle
// @author       You
// @match        https://moodle.uco.es/*
// @icon         https://moodle.uco.es/m2324/pluginfile.php/1/theme_loove/favicon/1687370320/favicon.ico
// @homepage     https://github.com/javism/TampermonkeyScripts
// @updateURL    https://raw.githubusercontent.com/javism/TampermonkeyScripts/main/moodlecompact.js
// @downloadURL  https://raw.githubusercontent.com/javism/TampermonkeyScripts/main/moodlecompact.js
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('@media (min-width: 768px) {  .activity-item:not(.activityinline) {    padding: 0.5rem;  }}')
GM_addStyle('.activityiconcontainer {	width: 30px;	height: 30px;	border-radius: 4px;	padding: .7rem;}')
GM_addStyle('body {	line-height: 1.1; font-size: 0.85rem;} .activity-item:not(.activityinline) {	padding: .3rem;}');
GM_addStyle('.section .activity { list-style: none;	padding: .10rem 0;}');
GM_addStyle('.activity-item:not(.activityinline) { padding: .2rem; }');

console.log('ran');
