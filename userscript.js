// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://floattheturn.com/wp_hc/ftt_ranges.php
// @grant        none
// ==/UserScript==

// Actual URL is https://floattheturn.com/wp/tools/range-analyzer/, but must match the ftt_ranges subdocument, otherwise can't find the grid

(function() {
    'use strict';

    //console.log(document.querySelector('#grid'));
    console.log(document.getElementById('grid'));

})();
