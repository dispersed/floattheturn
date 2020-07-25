// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://floattheturn.com/wp_hc/ftt_ranges.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var pocket = '3';
    var suiter = '2';
    var offsuiter = '6';

    document.getElementById('cell_AA').setAttribute('colspan',suiter);
    // Vaikka taskupareja 6 komboja, suitedeja 4 ja offsuitteja 12
    // Pocket pairs
    document.getElementById('cell_AA').setAttribute('colspan',pocket);
    document.getElementById('cell_KK').setAttribute('colspan',pocket);
    document.getElementById('cell_QQ').setAttribute('colspan',pocket);
    document.getElementById('cell_JJ').setAttribute('colspan',pocket);
    document.getElementById('cell_TT').setAttribute('colspan',pocket);
    document.getElementById('cell_99').setAttribute('colspan',pocket);
    document.getElementById('cell_88').setAttribute('colspan',pocket);
    document.getElementById('cell_77').setAttribute('colspan',pocket);
    document.getElementById('cell_66').setAttribute('colspan',pocket);
    document.getElementById('cell_55').setAttribute('colspan',pocket);
    document.getElementById('cell_44').setAttribute('colspan',pocket);
    document.getElementById('cell_33').setAttribute('colspan',pocket);
    document.getElementById('cell_22').setAttribute('colspan',pocket);

    // Suiters
    document.getElementById('cell_AK').setAttribute('colspan',suiter);
    document.getElementById('cell_AQ').setAttribute('colspan',suiter);
    document.getElementById('cell_AJ').setAttribute('colspan',suiter);
    document.getElementById('cell_AT').setAttribute('colspan',suiter);
    document.getElementById('cell_A9').setAttribute('colspan',suiter);
    document.getElementById('cell_A8').setAttribute('colspan',suiter);
    document.getElementById('cell_A7').setAttribute('colspan',suiter);
    document.getElementById('cell_A6').setAttribute('colspan',suiter);
    document.getElementById('cell_A5').setAttribute('colspan',suiter);
    document.getElementById('cell_A4').setAttribute('colspan',suiter);
    document.getElementById('cell_A3').setAttribute('colspan',suiter);
    document.getElementById('cell_A2').setAttribute('colspan',suiter);
    document.getElementById('cell_KQ').setAttribute('colspan',suiter);
    document.getElementById('cell_KJ').setAttribute('colspan',suiter);
    document.getElementById('cell_KT').setAttribute('colspan',suiter);
    document.getElementById('cell_K9').setAttribute('colspan',suiter);
    document.getElementById('cell_K8').setAttribute('colspan',suiter);
    document.getElementById('cell_K7').setAttribute('colspan',suiter);
    document.getElementById('cell_K6').setAttribute('colspan',suiter);
    document.getElementById('cell_K5').setAttribute('colspan',suiter);
    document.getElementById('cell_K4').setAttribute('colspan',suiter);
    document.getElementById('cell_K3').setAttribute('colspan',suiter);
    document.getElementById('cell_K2').setAttribute('colspan',suiter);
    document.getElementById('cell_QJ').setAttribute('colspan',suiter);
    document.getElementById('cell_QT').setAttribute('colspan',suiter);
    document.getElementById('cell_Q9').setAttribute('colspan',suiter);
    document.getElementById('cell_Q8').setAttribute('colspan',suiter);
    document.getElementById('cell_Q7').setAttribute('colspan',suiter);
    document.getElementById('cell_Q6').setAttribute('colspan',suiter);
    document.getElementById('cell_Q5').setAttribute('colspan',suiter);
    document.getElementById('cell_Q4').setAttribute('colspan',suiter);
    document.getElementById('cell_Q3').setAttribute('colspan',suiter);
    document.getElementById('cell_Q2').setAttribute('colspan',suiter);
    document.getElementById('cell_JT').setAttribute('colspan',suiter);
    document.getElementById('cell_J9').setAttribute('colspan',suiter);
    document.getElementById('cell_J8').setAttribute('colspan',suiter);
    document.getElementById('cell_J7').setAttribute('colspan',suiter);
    document.getElementById('cell_J6').setAttribute('colspan',suiter);
    document.getElementById('cell_J5').setAttribute('colspan',suiter);
    document.getElementById('cell_J4').setAttribute('colspan',suiter);
    document.getElementById('cell_J3').setAttribute('colspan',suiter);
    document.getElementById('cell_J2').setAttribute('colspan',suiter);
    document.getElementById('cell_T9').setAttribute('colspan',suiter);
    document.getElementById('cell_T8').setAttribute('colspan',suiter);
    document.getElementById('cell_T7').setAttribute('colspan',suiter);
    document.getElementById('cell_T6').setAttribute('colspan',suiter);
    document.getElementById('cell_T5').setAttribute('colspan',suiter);
    document.getElementById('cell_T4').setAttribute('colspan',suiter);
    document.getElementById('cell_T3').setAttribute('colspan',suiter);
    document.getElementById('cell_T2').setAttribute('colspan',suiter);

    // Offsuiters
    document.getElementById('cell_KA').setAttribute('colspan',offsuiter);
    document.getElementById('cell_QA').setAttribute('colspan',offsuiter);
    document.getElementById('cell_QK').setAttribute('colspan',offsuiter);
    document.getElementById('cell_JA').setAttribute('colspan',offsuiter);
    document.getElementById('cell_JK').setAttribute('colspan',offsuiter);
    document.getElementById('cell_JQ').setAttribute('colspan',offsuiter);
    document.getElementById('cell_TA').setAttribute('colspan',offsuiter);
    document.getElementById('cell_TK').setAttribute('colspan',offsuiter);
    document.getElementById('cell_TQ').setAttribute('colspan',offsuiter);
    document.getElementById('cell_TJ').setAttribute('colspan',offsuiter);
    document.getElementById('cell_9A').setAttribute('colspan',offsuiter);
    document.getElementById('cell_9K').setAttribute('colspan',offsuiter);
    document.getElementById('cell_9Q').setAttribute('colspan',offsuiter);
    document.getElementById('cell_9J').setAttribute('colspan',offsuiter);
    document.getElementById('cell_9T').setAttribute('colspan',offsuiter);
    document.getElementById('cell_98').setAttribute('colspan',suiter);
    document.getElementById('cell_97').setAttribute('colspan',suiter);
    document.getElementById('cell_96').setAttribute('colspan',suiter);
    document.getElementById('cell_95').setAttribute('colspan',suiter);
    document.getElementById('cell_94').setAttribute('colspan',suiter);
    document.getElementById('cell_93').setAttribute('colspan',suiter);
    document.getElementById('cell_92').setAttribute('colspan',suiter);
    document.getElementById('cell_8A').setAttribute('colspan',offsuiter);
    document.getElementById('cell_8K').setAttribute('colspan',offsuiter);
    document.getElementById('cell_8Q').setAttribute('colspan',offsuiter);
    document.getElementById('cell_8J').setAttribute('colspan',offsuiter);
    document.getElementById('cell_8T').setAttribute('colspan',offsuiter);
    document.getElementById('cell_89').setAttribute('colspan',offsuiter);
    document.getElementById('cell_87').setAttribute('colspan',suiter);
    document.getElementById('cell_86').setAttribute('colspan',suiter);
    document.getElementById('cell_85').setAttribute('colspan',suiter);
    document.getElementById('cell_84').setAttribute('colspan',suiter);
    document.getElementById('cell_83').setAttribute('colspan',suiter);
    document.getElementById('cell_82').setAttribute('colspan',suiter);
    document.getElementById('cell_7A').setAttribute('colspan',offsuiter);
    document.getElementById('cell_7K').setAttribute('colspan',offsuiter);
    document.getElementById('cell_7Q').setAttribute('colspan',offsuiter);
    document.getElementById('cell_7J').setAttribute('colspan',offsuiter);
    document.getElementById('cell_7T').setAttribute('colspan',offsuiter);
    document.getElementById('cell_79').setAttribute('colspan',offsuiter);
    document.getElementById('cell_78').setAttribute('colspan',offsuiter);
    document.getElementById('cell_76').setAttribute('colspan',suiter);
    document.getElementById('cell_75').setAttribute('colspan',suiter);
    document.getElementById('cell_74').setAttribute('colspan',suiter);
    document.getElementById('cell_73').setAttribute('colspan',suiter);
    document.getElementById('cell_72').setAttribute('colspan',suiter);
    document.getElementById('cell_6A').setAttribute('colspan',offsuiter);
    document.getElementById('cell_6K').setAttribute('colspan',offsuiter);
    document.getElementById('cell_6Q').setAttribute('colspan',offsuiter);
    document.getElementById('cell_6J').setAttribute('colspan',offsuiter);
    document.getElementById('cell_6T').setAttribute('colspan',offsuiter);
    document.getElementById('cell_69').setAttribute('colspan',offsuiter);
    document.getElementById('cell_68').setAttribute('colspan',offsuiter);
    document.getElementById('cell_67').setAttribute('colspan',offsuiter);
    document.getElementById('cell_65').setAttribute('colspan',suiter);
    document.getElementById('cell_64').setAttribute('colspan',suiter);
    document.getElementById('cell_63').setAttribute('colspan',suiter);
    document.getElementById('cell_62').setAttribute('colspan',suiter);
    document.getElementById('cell_5A').setAttribute('colspan',offsuiter);
    document.getElementById('cell_5K').setAttribute('colspan',offsuiter);
    document.getElementById('cell_5Q').setAttribute('colspan',offsuiter);
    document.getElementById('cell_5J').setAttribute('colspan',offsuiter);
    document.getElementById('cell_5T').setAttribute('colspan',offsuiter);
    document.getElementById('cell_59').setAttribute('colspan',offsuiter);
    document.getElementById('cell_58').setAttribute('colspan',offsuiter);
    document.getElementById('cell_57').setAttribute('colspan',offsuiter);
    document.getElementById('cell_56').setAttribute('colspan',offsuiter);
    document.getElementById('cell_54').setAttribute('colspan',suiter);
    document.getElementById('cell_53').setAttribute('colspan',suiter);
    document.getElementById('cell_52').setAttribute('colspan',suiter);
    document.getElementById('cell_4A').setAttribute('colspan',offsuiter);
    document.getElementById('cell_4K').setAttribute('colspan',offsuiter);
    document.getElementById('cell_4Q').setAttribute('colspan',offsuiter);
    document.getElementById('cell_4J').setAttribute('colspan',offsuiter);
    document.getElementById('cell_4T').setAttribute('colspan',offsuiter);
    document.getElementById('cell_49').setAttribute('colspan',offsuiter);
    document.getElementById('cell_48').setAttribute('colspan',offsuiter);
    document.getElementById('cell_47').setAttribute('colspan',offsuiter);
    document.getElementById('cell_46').setAttribute('colspan',offsuiter);
    document.getElementById('cell_45').setAttribute('colspan',offsuiter);
    document.getElementById('cell_43').setAttribute('colspan',suiter);
    document.getElementById('cell_42').setAttribute('colspan',suiter);
    document.getElementById('cell_3A').setAttribute('colspan',offsuiter);
    document.getElementById('cell_3K').setAttribute('colspan',offsuiter);
    document.getElementById('cell_3Q').setAttribute('colspan',offsuiter);
    document.getElementById('cell_3J').setAttribute('colspan',offsuiter);
    document.getElementById('cell_3T').setAttribute('colspan',offsuiter);
    document.getElementById('cell_39').setAttribute('colspan',offsuiter);
    document.getElementById('cell_38').setAttribute('colspan',offsuiter);
    document.getElementById('cell_37').setAttribute('colspan',offsuiter);
    document.getElementById('cell_36').setAttribute('colspan',offsuiter);
    document.getElementById('cell_35').setAttribute('colspan',offsuiter);
    document.getElementById('cell_34').setAttribute('colspan',offsuiter);
    document.getElementById('cell_32').setAttribute('colspan',suiter);
    document.getElementById('cell_2A').setAttribute('colspan',offsuiter);
    document.getElementById('cell_2K').setAttribute('colspan',offsuiter);
    document.getElementById('cell_2Q').setAttribute('colspan',offsuiter);
    document.getElementById('cell_2J').setAttribute('colspan',offsuiter);
    document.getElementById('cell_2T').setAttribute('colspan',offsuiter);
    document.getElementById('cell_29').setAttribute('colspan',offsuiter);
    document.getElementById('cell_28').setAttribute('colspan',offsuiter);
    document.getElementById('cell_27').setAttribute('colspan',offsuiter);
    document.getElementById('cell_26').setAttribute('colspan',offsuiter);
    document.getElementById('cell_25').setAttribute('colspan',offsuiter);
    document.getElementById('cell_24').setAttribute('colspan',offsuiter);
    document.getElementById('cell_23').setAttribute('colspan',offsuiter);
})();
