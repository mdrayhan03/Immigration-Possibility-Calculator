// --------------------------- theme start ------------------------------------------ //

var click = true ;

function theme_control() {
    var circle = document.getElementsByClassName("theme-button-circle")[0] ;
    if (click === true) {
        circle.style.transform = "translate(0%)" ;
        click = false ;

        img = document.getElementById("banner-img") ;
        img.src = "assets/media/banner.png"
        
        document.documentElement.style.setProperty("--bg-color", "#FFFFFF") ;
        document.documentElement.style.setProperty("--heading-color" , "#243761") ;
        document.documentElement.style.setProperty("--text-color" , "#000000") ;
        document.documentElement.style.setProperty("--button-color" , "#243761") ;
        document.documentElement.style.setProperty("--button-color-hover" , "#243761") ;
        document.documentElement.style.setProperty("--button-text-color" , "#FFFFFF") ;
        document.documentElement.style.setProperty("--circle-color" , "gray") ;
        document.documentElement.style.setProperty("--shadow1-color" , "rgba(0,0,0,0.3)") ;
        document.documentElement.style.setProperty("--shadow2-color" , "rgba(0,0,0,0.5)") ;

    }
    else if (click === false) {
        circle.style.transform = "translate(100%)" ;
        click = true ;

        img = document.getElementById("banner-img") ;
        img.src = "assets/media/bannerdark.png"

        document.documentElement.style.setProperty("--bg-color", "#171925") ;
        document.documentElement.style.setProperty("--heading-color" , "#FFFFFF") ;
        document.documentElement.style.setProperty("--text-color" , "#FFFFFF") ;
        document.documentElement.style.setProperty("--button-color" , "#243761") ;
        document.documentElement.style.setProperty("--button-color-hover" , "#243761") ;
        document.documentElement.style.setProperty("--button-text-color" , "#FFFFFF") ;
        document.documentElement.style.setProperty("--circle-color" , "white") ;
        document.documentElement.style.setProperty("--shadow1-color" , "rgba(255,255,255,0.8)") ;
        document.documentElement.style.setProperty("--shadow2-color" , "rgba(255,255,255,1)") ;

    }
}

theme_control() ;

// --------------------------- theme end -------------------------------------------- //
// ---------------------------transition function start------------------------------ //

var logo = document.getElementsByClassName("logo")[0]
document.getElementsByClassName("all")[0].style.marginTop = logo.offsetHeight + 10 + "px" ;

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
    var two = document.getElementsByClassName('q5_2')[0];

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
    document.getElementsByClassName("button")[0].style.display = "none" ;
    if (parseInt(element.value) != -1) {
        if (value === 2) {        
            max_height(one)
        }
        else {
            document.getElementsByClassName("button")[0].style.display = "block" ;
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
    var button = document.getElementsByClassName("button")[0]

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
    else if (value === 0) {
        button.style.display = "block" ;
    }
}

// q13 primary language
function q13_extend(speak, listen, read, write) {
    var element = document.getElementsByClassName("button")[0]
    element.style.display = "none" ;
    if (parseInt(document.getElementById("will_spouse_come").value) == 2)
        if (speak.value !== "-1" && listen.value !== "-1" && read.value !== "-1" && write.value !== "-1") {
            element.style.display = "block" ;
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
function info_popup_Function(element) {
    // window.location.href='infotaker.html';
    var one = document.getElementsByClassName("main-body")[0] ;
    one.style.width = "100%" ;
    one.style.height = "100%" ;
}


function info_popup_cross_Function() {
    var element = document.getElementsByClassName("main-body")[0] ;
    element.style.width = "0px" ;
    element.style.height = "0px" ;
}


function check_Function() {
    console.log("check");
    var button = document.getElementsByClassName("popup")[0] ;

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;

    // Check if the checkbox is selected
    var isChecked = document.getElementById("check").checked;


    // Enable the button only if all fields are filled and the checkbox is checked
    if (name && email && country && isChecked) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function suggestion_show_Function() {
    var one = document.getElementsByClassName("main-body")[0] ;
    var two = document.getElementsByClassName("suggestion-main")[0]

    one.style.width = "0px" ;
    one.style.height = "0px" ;
    two.style.maxHeight = "0px" ;
    max_height(two) ;
}

function booking_Function() {
    window.open(' https://tidycal.com/sajid/discounted-crs-assessment', '_blank');
}

var q_cnt = 0
// 15=6.66 11=9.09
var progress_bar = 0 ;
function progress_Function(element) {
    var value = parseInt(document.getElementById("will_spouse_come").value) ;
    var progress = document.getElementsByClassName("progressbar")[0]
        
    if (parseInt(element.value) != -1) {
        if (value === 2) {            
            q_cnt += 1 ;
            progress_bar = q_cnt * 6.66 ;
        }
        else {
            q_cnt += 1 ;
            progress_bar = q_cnt * 9.09 ;
        }
        progress.style.width = progress_bar + "%" ;
    }
    
    else {
        if (value === 2) {            
            q_cnt -= 1 ;
            progress_bar = q_cnt * 6.66 ;
        }
        else {
            q_cnt -= 1 ;
            progress_bar = q_cnt * 9.09 ;
        }
        progress.style.width = progress_bar + "%" ;
    }
    console.log("Width: "+progress_bar+"%");
}

// ---------------------------transition function end------------------------------ //
