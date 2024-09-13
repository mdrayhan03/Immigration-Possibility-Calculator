// ---------------------------transition function start------------------------------ //

// make max height
function max_height(element) {    
    element.style.maxHeight = element.scrollHeight + 'px';
}

// question no condition
function commonfunction(element, one) {
    var value = parseInt(element.value) ;
    one.style.maxHeight = "0px";

    if (value !== -1) {
        max_height(one) ;
    }    
}

// q1
function q1function(element){    
    var one = document.getElementsByClassName('q2_1')[0];
    var two = document.getElementsByClassName('q3')[0];

    var value = parseInt(element.value) ;
    one.style.maxHeight = "0px";
    two.style.maxHeight = "0px";

    if (value === 2 || value === 5) {        
        one.style.maxHeight = one.scrollHeight + 'px';
    }
    else if (value === -1) {
        // 
    }
    else {
        two.style.maxHeight = two.scrollHeight + 'px';
    }    
}

// q2_2
function q2_1function(element) {
    var one = document.getElementsByClassName('q3')[0];
    var two = document.getElementsByClassName('q2_2')[0];

    var value = parseInt(element.value) ;
    one.style.maxHeight = "0px";
    two.style.maxHeight = "0px";

    if (value === 1) {        
        max_height(one) ;
    }
    else if (value === 2) {
        max_height(two) ;
    }
}

// q4_2
function q4_2function(element) {
    var one = document.getElementsByClassName('q4_3')[0];
    var two = document.getElementsByClassName('q5')[0];

    var value = parseInt(element.value) ;
    one.style.maxHeight = "0px";
    two.style.maxHeight = "0px";

    if (value === 1) {        
        max_height(one) ;
    }
    else if (value === 2) {
        max_height(two) ;
    }
}

// q5
function q5function(element) {
    var one = document.getElementsByClassName('q5_2')[0];
    var error = document.getElementsByClassName('error')[0];

    var value = parseInt(element.value) ;
    one.style.maxHeight = "0px";
    error.style.maxHeight = "0px";

    if (value === 1) {        
        max_height(one) ;        
    }
    else if (value === 2) {
        max_height(error) ;
        element.value = "-1" ;
    }
}

// q5_2
function q5_2function(element) {
    var celpip = document.getElementsByClassName('q5_CELPIP')[0];
    var ielts = document.getElementsByClassName('q5_IELTS')[0];
    var ptecore = document.getElementsByClassName('q5_PTECORE')[0];
    var tfe = document.getElementsByClassName('q5_TEF')[0];
    var tfc = document.getElementsByClassName('q5_TCF')[0];

    var value = parseInt(element.value) ;
    celpip.style.maxHeight = "0px";
    ielts.style.maxHeight = "0px";
    ptecore.style.maxHeight = "0px";
    tfe.style.maxHeight = "0px";
    tfc.style.maxHeight = "0px";

    if (value === 1) {
        max_height(celpip) ;
    }
    else if (value === 2) {
        max_height(ielts) ;
    }
    else if (value === 3) {
        max_height(ptecore) ;
    }
    else if (value === 4) {
        max_height(tfe) ;
    }
    else if (value === 5) {
        max_height(tfc) ;
    }
}

// q5 primary language
function q5_2_extend(speak, listen, read, write) {
    var element = document.getElementsByClassName("q5_3")[0]
    element.style.maxHeight = "0px";

    if (speak.value !== "-1" && listen.value !== "-1" && read.value !== "-1" && write.value !== "-1") {
        max_height(element) ;
    }
}

// q5_3
function q5_3function(element) {
    var one = document.getElementsByClassName('q5_3_TEF')[0];
    var two = document.getElementsByClassName('q5_3_TCF')[0];
    var three = document.getElementsByClassName('q6')[0];

    var value = parseInt(element.value) ;
    one.style.maxHeight = "0px";
    two.style.maxHeight = "0px";
    three.style.maxHeight = "0px";

    if (value === 4) {        
        max_height(one) ;
    }
    else if (value === 5) {
        max_height(two) ;
    }
    else if (value === 0) {
        max_height(three) ;
    }
}

// q5_3 secondary language
function q5_3function_extend(speak, listen, read, write) {
    var element = document.getElementsByClassName("q6")[0]
    element.style.maxHeight = "0px";

    if (speak.value !== "-1" && listen.value !== "-1" && read.value !== "-1" && write.value !== "-1") {
        max_height(element) ;
    }
}

// q8
function q8function(element) {
    var one = document.getElementsByClassName('q9')[0];
    var two = document.getElementsByClassName('q8_1')[0];

    var value = parseInt(element.value) ;
    one.style.maxHeight = "0px";
    two.style.maxHeight = "0px";

    if (value === 1) {        
        max_height(one) ;
    }
    else if (value === 2) {
        max_height(two) ;
    }
}

// q10
function q10function(element) {
    var value = parseInt(document.getElementById("will_spouse_come").value) ;    
    var one = document.getElementsByClassName("q11")[0]
    one.style.maxHeight = "0px" ;
    document.getElementsByClassName("button")[0].disabled = true;
    if (parseInt(element.value) != -1) {
        if (value === 2) {        
            max_height(one)
        }
        else {
            document.getElementsByClassName("button")[0].disabled = false;
        }
    }
}

function q11_1function(element) {
    var value = parseInt(element.value)
    var one = document.getElementsByClassName("q11-2")[0] ;
    var two = document.getElementsByClassName("q12")[0] ;
    one.style.maxHeight = "0px" ;
    two.style.maxHeight = "0px" ;    

    if (value === 1) {
        max_height(one) ;
    }
    else if (value === 2) {
        max_height(two) ;
    }
}

// q13
function q13function(element) {
    var celpip = document.getElementsByClassName('q13_CELPIP')[0];
    var ielts = document.getElementsByClassName('q13_IELTS')[0];
    var ptecore = document.getElementsByClassName('q13_PTECORE')[0];
    var tfe = document.getElementsByClassName('q13_TEF')[0];
    var tfc = document.getElementsByClassName('q13_TCF')[0];

    var value = parseInt(element.value) ;
    celpip.style.maxHeight = "0px";
    ielts.style.maxHeight = "0px";
    ptecore.style.maxHeight = "0px";
    tfe.style.maxHeight = "0px";
    tfc.style.maxHeight = "0px";

    if (value === 1) {
        max_height(celpip) ;
    }
    else if (value === 2) {
        max_height(ielts) ;
    }
    else if (value === 3) {
        max_height(ptecore) ;
    }
    else if (value === 4) {
        max_height(tfe) ;
    }
    else if (value === 5) {
        max_height(tfc) ;
    }
}

// q13 primary language
function q13_extend(speak, listen, read, write) {
    var element = document.getElementsByClassName("button")[0]
    element.disabled = true ;
    if (parseInt(document.getElementById("will_spouse_come").value) == 2)
        if (speak.value !== "-1" && listen.value !== "-1" && read.value !== "-1" && write.value !== "-1") {
            element.disabled = false ;
        }
}

// final calculation
function finalcalculation() {
    var output = document.getElementsByClassName("output")[0] ;
    var federal_skill_output = document.getElementsByClassName("federal_skill_output")[0] ;
    var suggestion = document.getElementsByClassName("suggestion")[0] ;
    output.style.maxHeight = "0px" ;
    federal_skill_output.style.maxHeight = "0px" ;    
    max_height(output) ;
    max_height(federal_skill_output) ;
    suggestion.style.display = "block" ;
}

// suggestion page
function suggestionFunction(element) {
    window.location.href='infotaker.html';
}

// ---------------------------transition function end------------------------------ //
