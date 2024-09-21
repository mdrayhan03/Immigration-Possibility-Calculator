// clb level
function getCLBLevel(test, listening, reading, writing, speaking) {
    const clbMapping = {
        "CELPIP-G": {
            listening: {"0-3.9": 0, "4-4.9": 4, "5-5.9": 5, "6-6.9": 6, "7-7.9": 7, "8-8.9": 8, "9-9.9": 9, "10-10.9": 10 },
            reading: {"0-3.9": 0, "4-4.9": 4, "5-5.9": 5, "6-6.9": 6,  "7-7.9": 7, "8-8.9": 8, "9-9.9": 9, "10-10.9": 10 },
            writing: {"0-3.9": 0, "4-4.9": 4, "5-5.9": 5, "6-6.9": 6,  "7-7.9": 7, "8-8.9": 8, "9-9.9": 9, "10-10.9": 10 },
            speaking: {"0-3.9": 0, "4-4.9": 4, "5-5.9": 5, "6-6.9": 6,  "7-7.9": 7, "8-8.9": 8, "9-9.9": 9, "10-10.9": 10 }
        },
        "IELTS": {
            listening: {"0-4.4": 0, "4.5-4.9": 4, "5.0-5.4": 5, "5.5-5.9": 6,  "6.0-7.4": 7, "7.5-7.9": 8, "8.0-8.4": 9, "8.5-9.0": 10 },
            reading: {"0-3.4": 0, "3.5-3.9": 4, "4.0-4.9": 5, "5.0-5.9": 6,  "6.0-6.4": 7, "6.5-6.9": 8, "7.0-7.9": 9, "8.0-9.0": 10 },
            writing: {"0-3.9": 0, "4-4.9": 4, "5.0-5.4": 5, "5.5-5.9": 6,  "6.0-6.4": 7, "6.5-6.9": 8, "7.0-7.4": 9, "7.5-9.0": 10 },
            speaking: {"0-3.9": 0, "4-4.9": 4, "5.0-5.4": 5, "5.5-5.9": 6,  "6.0-6.4": 7, "6.5-6.9": 8, "7.0-7.4": 9, "7.5-9.0": 10 }
        },
        "PTE": {
            listening: {'0-27': 0,'28-38': 4,'39-49': 5,'50-59': 6, '60-70': 7, '71-81': 8, '82-88': 9, '89-90': 10 },
            reading: {'0-32': 0,'33-41': 4,'42-50': 5,'51-59': 6, '60-68': 7, '69-77': 8, '78-87': 9, '88-90': 10 },
            writing: {'0-40': 0,'41-50': 4,'51-59': 5,'60-68': 6, '69-78': 7, '79-87': 8, '88-89': 9, '90': 10 },
            speaking: {'0-41': 0,'42-50': 4,'51-58': 5,'59-67': 6, '68-75': 7, '76-83': 8, '84-88': 9, '89-90': 10 }
        },
        "TEF Canada": {
            listening: {'0-144': 0, '145-180': 4, '181-216': 5, '217-248': 6, '249-279': 7, '280-297': 8, '298-360': 9 },
            reading: {'0-120': 0, '121-150': 4, '151-180': 5, '181-206': 6, '207-232': 7, '233-247': 8, '248-300': 9 },
            writing: {'0-180': 0, '181-225': 4, '226-270': 5, '271-309': 6, '310-348': 7, '349-370': 8, '371-450': 9 },
            speaking: {'0-180': 0, '181-225': 4, '226-270': 5, '271-309': 6, '310-348': 7, '349-370': 8, '371-450': 9 }
        },
        "TCF Canada": {
            listening: {'0-330': 0, '331-368': 4, '369-397': 5, '398-457': 6, '458-502': 7, '503-522': 8, '523-699': 9 },
            reading: {'0-342': 0, '342-374': 4, '375-405': 5, '406-452': 6, '453-498': 7, '499-523': 8, '524-699': 9 },
            writing: {'4-5': 0, '6.0-6.9': 4, '7-9': 5, '10-11': 6, '10-11': 7, '12-13': 8, '14-20': 9 },
            speaking: {'4-5': 0, '6.0-6.9': 4, '7-9': 5, '10-11': 6, '10-11': 7, '12-13': 8, '14-20': 9 }
        }
    };

    function getRangeScore(score, rangeMapping) {
        for (let key in rangeMapping) {
            if (key.includes('-')) {
                let [min, max] = key.split('-').map(Number);
                if (score >= min && score <= max) {
                    return rangeMapping[key];
                }
            } else if (score >= Number(key)) {
                return rangeMapping[key];
            }
        }
        return null;
    }

    const result = {
        listening: getRangeScore(listening, clbMapping[test].listening),
        reading: getRangeScore(reading, clbMapping[test].reading),
        writing: getRangeScore(writing, clbMapping[test].writing),
        speaking: getRangeScore(speaking, clbMapping[test].speaking)
    };

    return result;
}

// clb level converter for first language
function firstclblevel(element) {
    var value = parseInt(element.value) ;
    var clbdict ;   

    if (value === 1) {
        var listening = parseFloat(document.getElementById("celplp-g_listening").value) ;
        var reading = parseFloat(document.getElementById("celplp-g_reading").value) ;
        var writing = parseFloat(document.getElementById("celplp-g_writing").value) ;
        var speaking = parseFloat(document.getElementById("celplp-g_speaking").value) ;       

        clbdict = getCLBLevel("CELPIP-G", listening, reading, writing, speaking) ;        
    }

    else if (value === 2) {
        var listening = parseFloat(document.getElementById("ielts_listening").value) ;
        var reading = parseFloat(document.getElementById("ielts_reading").value) ;
        var writing = parseFloat(document.getElementById("ielts_writing").value) ;
        var speaking = parseFloat(document.getElementById("ielts_speaking").value) ;

        clbdict = getCLBLevel("IELTS", listening, reading, writing, speaking) ;        
    }

    else if (value === 3) {
        var listening = parseFloat(document.getElementById("ptecore_listening").value) ;
        var reading = parseFloat(document.getElementById("ptecore_reading").value) ;
        var writing = parseFloat(document.getElementById("ptecore_writing").value) ;
        var speaking = parseFloat(document.getElementById("ptecore_speaking").value) ;        

        clbdict = getCLBLevel("PTE", listening, reading, writing, speaking) ;        
    }

    else if (value === 4) {
        console.log("here") ;
        var listening = parseFloat(document.getElementById("tef_listening").value) ;
        var reading = parseFloat(document.getElementById("tef_reading").value) ;
        var writing = parseFloat(document.getElementById("tef_writing").value) ;
        var speaking = parseFloat(document.getElementById("tef_speaking").value) ;

        console.log(listening +" "+reading+" "+writing+" "+speaking) ;

        clbdict = getCLBLevel("TEF Canada", listening, reading, writing, speaking) ;        
    }

    else if (value === 5) {
        var listening = parseFloat(document.getElementById("tcf_listening").value) ;
        var reading = parseFloat(document.getElementById("tcf_reading").value) ;
        var writing = parseFloat(document.getElementById("tcf_writing").value) ;
        var speaking = parseFloat(document.getElementById("tcf_speaking").value) ;

        clbdict = getCLBLevel("TCF Canada", listening, reading, writing, speaking) ;        
    }
    console.log(clbdict) ;
    return clbdict ;
}

// clb level conversation for second language
function secondclblevel(element) {
    var value = parseInt(element.value) ;
    console.log("Value: "+value) ;
    var clbdict ;

    if (value === 0) {
        clbdict = {
            listening: 0,
            reading: 0,
            writing: 0,
            speaking: 0
        }
    }
    else if (value === 4) {
        console.log("here") ;
        var listening = parseFloat(document.getElementById("tef2_listening").value) ;
        var reading = parseFloat(document.getElementById("tef2_reading").value) ;
        var writing = parseFloat(document.getElementById("tef2_writing").value) ;
        var speaking = parseFloat(document.getElementById("tef2_speaking").value) ;

        console.log(listening +" "+reading+" "+writing+" "+speaking) ;

        clbdict = getCLBLevel("TEF Canada", listening, reading, writing, speaking) ;        
    }

    else if (value === 5) {
        var listening = parseFloat(document.getElementById("tcf2_listening").value) ;
        var reading = parseFloat(document.getElementById("tcf2_reading").value) ;
        var writing = parseFloat(document.getElementById("tcf2_writing").value) ;
        var speaking = parseFloat(document.getElementById("tcf2_speaking").value) ;

        clbdict = getCLBLevel("TCF Canada", listening, reading, writing, speaking) ;        
    }
        
    return clbdict ;
}

// spouse clb level converter
function spouseclblevel(element) {
    var value = parseInt(element.value) ;
    var clbdict ;   

    if (value === -1) {
        clbdict = {
            listening: 0,
            reading: 0,
            writing: 0,
            speaking: 0
        }
    }

    if (value === 1) {
        var listening = parseFloat(document.getElementById("spousecelplp-g_listening").value) ;
        var reading = parseFloat(document.getElementById("spousecelplp-g_reading").value) ;
        var writing = parseFloat(document.getElementById("spousecelplp-g_writing").value) ;
        var speaking = parseFloat(document.getElementById("spousecelplp-g_speaking").value) ;       

        clbdict = getCLBLevel("CELPIP-G", listening, reading, writing, speaking) ;        
    }

    else if (value === 2) {
        var listening = parseFloat(document.getElementById("spouseielts_listening").value) ;
        var reading = parseFloat(document.getElementById("spouseielts_reading").value) ;
        var writing = parseFloat(document.getElementById("spouseielts_writing").value) ;
        var speaking = parseFloat(document.getElementById("spouseielts_speaking").value) ;

        clbdict = getCLBLevel("IELTS", listening, reading, writing, speaking) ;        
    }

    else if (value === 3) {
        var listening = parseFloat(document.getElementById("spouseptecore_listening").value) ;
        var reading = parseFloat(document.getElementById("spouseptecore_reading").value) ;
        var writing = parseFloat(document.getElementById("spouseptecore_writing").value) ;
        var speaking = parseFloat(document.getElementById("spouseptecore_speaking").value) ;        

        clbdict = getCLBLevel("PTE", listening, reading, writing, speaking) ;        
    }

    else if (value === 4) {
        console.log("here") ;
        var listening = parseFloat(document.getElementById("spousetef_listening").value) ;
        var reading = parseFloat(document.getElementById("spousetef_reading").value) ;
        var writing = parseFloat(document.getElementById("spousetef_writing").value) ;
        var speaking = parseFloat(document.getElementById("spousetef_speaking").value) ;

        console.log(listening +" "+reading+" "+writing+" "+speaking) ;

        clbdict = getCLBLevel("TEF Canada", listening, reading, writing, speaking) ;        
    }

    else if (value === 5) {
        var listening = parseFloat(document.getElementById("spousetcf_listening").value) ;
        var reading = parseFloat(document.getElementById("spousetcf_reading").value) ;
        var writing = parseFloat(document.getElementById("spousetcf_writing").value) ;
        var speaking = parseFloat(document.getElementById("spousetcf_speaking").value) ;

        clbdict = getCLBLevel("TCF Canada", listening, reading, writing, speaking) ;        
    }
    console.log(clbdict) ;
    return clbdict ;
}

// Federal Skilled Worker Calculation
let clblevel = [0, 4, 5, 6]
let age = [2,3,4,5,6,7,8,9,10,11,12,12,12,12,12,12,12,12,12,0]
let work = [0,9,11,11,13,13,15]
let education = [0,5,15,19,21,22,23,25]

var totalPoint = 0 ;

function federal_skilled_workerCalculation() {
    let firstLanguagePoint = 0, secondLanguagePoint = 0, spouseLanguagePoint = 0, canadianstudyPoint = 0, spousecanadianstudyPoint = 0, canadianworkPoint = 0, spousecanadianworkPoint = 0, adaptablearrangePoint = 0, relativePoint = 0 ;
    let languagePoint = 0, educationPoint = 0, work_expPoint = 0, agePoint = 0, arrangeworkPoint = 0, adaptabilityPoint = 0 ;

    // first language 
    var d = firstclblevel(document.getElementById("language_test_type")) ;
    for (let key in d) {
        if (d[key] <= 6) {
            firstLanguagePoint += clblevel[0] ;
        }
        else if (d[key] === 7) {
            firstLanguagePoint += clblevel[1] ;
        }
        else if (d[key] === 8) {
            firstLanguagePoint += clblevel[2] ;
        }
        else if (d[key] >=9) {
            firstLanguagePoint += clblevel[3] ;
        }
    }

    // second language
    var d = secondclblevel(document.getElementById("other_lang_test")) ;
    if (d["listening"] >= 5 && d["reading"] >= 5 && d["writing"] >= 5 && d["speaking"] >= 5) {
        secondLanguagePoint = 4 ;
    }

    // age
    var ageValue = parseInt(document.getElementById("age").value) ;
    agePoint = age[ageValue] ;

    // education
    var educationValue = parseInt(document.getElementById("education").value) ;
    educationPoint = education[educationValue] ;

    // job offer
    var jobValue = parseInt(document.getElementById("NOC_TEER").value) ;
    if (jobValue === 2 || jobValue === 3) {
        arrangeworkPoint = 10 ;
        adaptablearrangePoint = 5 ;
    }

    // canadian work experience
    var workValue = parseInt(document.getElementById("work_exp").value) ;
    work_expPoint = work[workValue] ;

    // spouse language
    var spousedict = spouseclblevel(document.getElementById("spouselanguage_test_type")) ;
    if (spousedict["listening"] >= 4 && spousedict["reading"] >= 4 && spousedict["writing"] >= 4 && spousedict["speaking"] >= 4) {
        spouseLanguagePoint = 5 ;
    }

    // canadian degree
    var degreeValue = parseInt(document.getElementById("canadian_degree_level").value) ;
    if (degreeValue >= 1) {
        canadianstudyPoint = 5 ;
    }

    // spouse canadian degree
    var spousedegreevalue = parseInt(document.getElementById("spouse_canadian_degree_level").value) ;
    if (spousedegreevalue === 2) {
        spousecanadianstudyPoint = 5 ;
    }

    // canadian work experience
    var workValue = parseInt(document.getElementById("work_exp").value) ;
    if (workValue >= 1) {
        canadianworkPoint = 10 ;
    }

    // spouse canadian work experience
    var spouseworkValue = parseInt(document.getElementById("spousework_exp").value) ;
    if (spouseworkValue >= 1) {
        spousecanadianworkPoint = 5 ;        
    }

    // relative
    var resident = parseInt(document.getElementById("living_canada").value) ;
    if (resident === 2) {relativePoint = 5;}
    
    // final calculation
    languagePoint = firstLanguagePoint + secondLanguagePoint ;
    adaptabilityPoint = spouseLanguagePoint + canadianstudyPoint + canadianworkPoint + spousecanadianworkPoint + adaptablearrangePoint + relativePoint ;
    if (adaptabilityPoint >= 10) {adaptabilityPoint = 10}
    totalPoint = languagePoint + educationPoint + work_expPoint + agePoint + arrangeworkPoint + adaptabilityPoint ;
    console.log("Adaptable: "+spouseLanguagePoint +"+"+ canadianstudyPoint +"+"+ canadianworkPoint +"+"+ spousecanadianworkPoint +"+"+ adaptablearrangePoint +"+"+ relativePoint +"="+ adaptabilityPoint) ;
    console.log("Total: "+languagePoint +"+"+ educationPoint +"+" + work_expPoint +"+" + agePoint +"+" + arrangeworkPoint +"+" + adaptabilityPoint +"="+totalPoint) ;

    var feredal_skill_output = document.getElementsByClassName("federal_skill_output")[0] ;
    var text = "<h1>Federal Skill Worker Point: " + totalPoint + "</h1>" +
               "<h2>Language skills points: " + languagePoint + "</h2>" +
               "<h2>Education points: " + educationPoint + "</h2>" +
               "<h2>Work experience points: " + work_expPoint + "</h2>" +
               "<h2>Age points: " + agePoint + "</h2>" +
               "<h2>Arranged employment in Canada points: " + arrangeworkPoint + "</h2>" +
               "<h2>Adaptability points: " + adaptabilityPoint + "</h2><br>" 
            ;
    if (totalPoint >= 67) {
        text += "<h2>You score 67 points or higher, you may qualify for the Federal Skilled Worker Program. You can then submit a profile to the Express Entry pool.</h2>" ;
    }
    else {
        text += "<h2>You score lower than 67 points, you won’t qualify for the program.</h2>"
    }
    
    feredal_skill_output.innerHTML = text ;
}


// points array
let status = false ;
let ageM = [0, 5, 15, 25, 35, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 95, 90, 0] ;
let ageU = [0, 6, 17, 28, 39, 50, 55, 61, 66, 72, 77, 83, 88, 94, 99, 105, 110, 105, 99, 0] ;
let educationM = [0, 28, 84, 91, 112, 119, 126, 140] ;
let educationU = [0, 30, 90, 98, 120, 128, 135, 150] ;
let canadianworkM = [0, 35, 46, 56, 63, 70, 70] ;
let canadianworkU = [0, 40, 53, 64, 72, 80, 80] ;
let canadianworkdegreeone = [0, 13, 25] ;
let canadianworkdegreetwo = [0, 25, 50] ;
let firstclbM = [0, 6, 8, 16, 22, 29, 32] ;
let firstclbU = [0, 6, 9, 17, 23, 31, 34] ;
let secondclb = [0, 1, 3, 6] ;
let spousedegree = [0, 2, 6, 7, 8, 9, 10] ;
let spousecanadianwork = [0, 5, 7, 8, 9, 10] ;
let spouseclb = [0, 1, 3, 5]

var total ;

function crsCalculation() {
    let agePoint = 0, educationPoint = 0, canadianworkPoint = 0, canadianworkdegreePoint = 0, firstLanguageCLB, firstLanguagePoint = 0, secondLanguageCLB, secondLanguagePoint = 0, degreeclbPoint = 0, foreignworkclbPoint = 0, canadianforeignworkPoint = 0, certificatePoint = 0, residentPoint = 0, canadiandegreePoint = 0, jobofferPoint = 0, nominationPoint = 0, spousedegreePoint = 0, spousecanadianworkPoint = 0, spouseclbPoint = 0, spouseCLB, nclcPoint = 0, educationskillPoint = 0, foreignworkskillPoint = 0 ;

    let humancore , spouse, skillfactors, additional ;
    // marital status
    var value = parseInt(document.getElementById("martial-status").value) ;

    if (value === 2) {
        status = true ;
    }
    else if (value === 1) {
        status = false ;
    }

    // age 
    var age = parseInt(document.getElementById("age").value) ;
    var spouse_come = parseInt(document.getElementById("will_spouse_come").value) ;

    if (status === true && spouse_come === 2) {
        agePoint = ageM[age] ;
    }
    else if (status === false) {
        agePoint = ageU[age] ;
    }
    console.log(agePoint) ;

    // education
    var degree = parseInt(document.getElementById("education").value) ;

    if (status === true) {
        educationPoint = educationM[degree] ;
    }
    else if (status === false) {
        educationPoint = educationU[degree] ;
    }

    // first language clb
    var d = firstclblevel(document.getElementById("language_test_type"))
    var firstdict = {
        listening: 0,
        reading: 0,
        writing: 0,
        speaking: 0
    }
    for (let key in d) {
        if (status === true) {
            if (d[key] >= 10) {
                firstLanguagePoint += firstclbM[6] ;
                firstdict[key] =  firstclbM[6] ;
            }
            else if (d[key] === 9) {
                firstLanguagePoint += firstclbM[5] ;
                firstdict[key] =  firstclbM[5] ;
            }
            else if (d[key] === 8) {
                firstLanguagePoint += firstclbM[4] ;
                firstdict[key] =  firstclbM[4] ;
            }
            else if (d[key] === 7) {
                firstLanguagePoint += firstclbM[3] ;
                firstdict[key] =  firstclbM[3] ;
            }
            else if (d[key] === 6) {
                firstLanguagePoint += firstclbM[2] ;
                firstdict[key] =  firstclbM[2] ;
            }
            else if (d[key] === 4 || d[key] === 5) {
                firstLanguagePoint += firstclbM[1] ;
                firstdict[key] =  firstclbM[1] ;
            }
            else if (d[key] < 4) {
                firstLanguagePoint += firstclbM[0] ;
                firstdict[key] =  firstclbM[6] ;
            }
        }
        else if (status === false) {
            if (d[key] >= 10) {
                firstLanguagePoint += firstclbU[6] ;
                firstdict[key] =  firstclbM[6] ;
            }
            else if (d[key] === 9) {
                firstLanguagePoint += firstclbU[5] ;
                firstdict[key] =  firstclbM[5] ;
            }
            else if (d[key] === 8) {
                firstLanguagePoint += firstclbU[4] ;
                firstdict[key] =  firstclbM[4] ;
            }
            else if (d[key] === 7) {
                firstLanguagePoint += firstclbU[3] ;
                firstdict[key] =  firstclbM[3] ;
            }
            else if (d[key] === 6) {
                firstLanguagePoint += firstclbU[2] ;
                firstdict[key] =  firstclbM[2] ;
            }
            else if (d[key] === 4 || d[key] === 5) {
                firstLanguagePoint += firstclbU[1] ;
                firstdict[key] =  firstclbM[1] ;
            }
            else if (d[key] < 4) {
                firstLanguagePoint += firstclbU[0] ;
                firstdict[key] =  firstclbM[0] ;
            }
        }
    }
    firstLanguageCLB = [d.listening ,d.reading ,d.writing ,d.speaking] ;
    
    // second language clb
    var dc = secondclblevel(document.getElementById("other_lang_test")) ;
    for (let key in dc) {
        if (dc[key] >= 9) {
            secondLanguagePoint += secondclb[3] ;
        }
        else if (dc[key] === 7 || dc[key] === 8) {
            secondLanguagePoint += secondclb[2] ;
        }
        else if (dc[key] === 5 || dc[key] === 6) {
            secondLanguagePoint += secondclb[1] ;
        }
        else if (dc[key] <= 4) {
            secondLanguagePoint += secondclb[0] ;
        }
    }

    if (status === true && secondLanguagePoint >= 24) {
        secondLanguagePoint = 22 ;
    }
    secondLanguageCLB = [dc.listening ,dc.reading ,dc.writing ,dc.speaking] ;

    // canadian work experience
    var canadianwork = parseInt(document.getElementById("work_exp").value) ;
    if (status === true) {
        canadianworkPoint = canadianworkM[canadianwork] ;
    }
    else if (status === false) {
        canadianworkPoint = canadianworkU[canadianwork] ;
    }
    console.log(canadianworkPoint) ;

    // degree with clb level
    if (firstLanguageCLB[0] >= 7 && firstLanguageCLB[1] >= 7 && firstLanguageCLB[2] >= 7 && firstLanguageCLB[3] >= 7) {
        console.log("All Greater than 7") ;
        if (firstLanguageCLB[0] >= 9 && firstLanguageCLB[1] >= 9 && firstLanguageCLB[2] >= 9 && firstLanguageCLB[3] >= 9) {
            console.log("All Greater than 9") ;
            if (degree === 0 || degree === 1) {degreeclbPoint = canadianworkdegreetwo[0]}
            else if (degree === 2 || degree === 3 || degree === 4) {degreeclbPoint = canadianworkdegreetwo[1]}
            else if (degree >= 5) {degreeclbPoint = canadianworkdegreetwo[2]}
        }
        else {
            console.log("All not Greater than 9") ;
            if (degree === 0 || degree === 1) {degreeclbPoint = canadianworkdegreeone[0]}
            else if (degree === 2 || degree === 3 || degree === 4) {degreeclbPoint = canadianworkdegreeone[1]}
            else if (degree >= 5) {degreeclbPoint = canadianworkdegreeone[2]}
        }
    }

    // canadian work experience with degree     
    if (degree === 0 || degree === 1) {
        if (canadianwork === 1) {
            canadianworkdegreePoint = canadianworkdegreeone[0] ;
        }
        else if (canadianwork >= 2) {
            canadianworkdegreePoint = canadianworkdegreetwo[0] ;
        }
    }
    else if (degree === 2 || degree === 3 || degree === 4) {
        if (canadianwork === 1) {
            canadianworkdegreePoint = canadianworkdegreeone[1] ;
        }
        else if (canadianwork >= 2) {
            canadianworkdegreePoint = canadianworkdegreetwo[1] ;
        }
    }
    else if (degree >= 4) {
        if (canadianwork === 1) {
            canadianworkdegreePoint = canadianworkdegreeone[2] ;
        }
        else if (canadianwork >= 2) {
            canadianworkdegreePoint = canadianworkdegreetwo[2] ;
        }
    }

    // foreign work experience with clb
    var foreignwork = parseInt(document.getElementById("skilled_work").value) ;
    if (firstLanguageCLB[0] >= 7 && firstLanguageCLB[1] >= 7 && firstLanguageCLB[2] >= 7 && firstLanguageCLB[3] >= 7) {
        console.log("All Greater than 7") ;
        if (firstLanguageCLB[0] >= 9 && firstLanguageCLB[1] >= 9 && firstLanguageCLB[2] >= 9 && firstLanguageCLB[3] >= 9) {
            console.log("All Greater than 9") ;
            foreignworkclbPoint = canadianworkdegreetwo[foreignwork];
        }
        else {
            console.log("All not Greater than 9") ;
            foreignworkclbPoint = canadianworkdegreeone[foreignwork];
        }
    }

    // canadian work experience with foreign work experience
    if (canadianwork === 1) {
        canadianforeignworkPoint = canadianworkdegreeone[foreignwork] ;
    }
    else if (canadianwork >= 2) {
        canadianforeignworkPoint = canadianworkdegreetwo[foreignwork] ;
    }

    // certificate with clb
    var certificate = parseInt(document.getElementById("certificate_canada").value) ;
    if (certificate === 2) {
        if (firstLanguageCLB[0] >= 5 && firstLanguageCLB[1] >= 5 && firstLanguageCLB[2] >= 5 && firstLanguageCLB[3] >= 5) {
            if (firstLanguageCLB[0] >= 7 && firstLanguageCLB[1] >= 7 && firstLanguageCLB[2] >= 7 && firstLanguageCLB[3] >= 7) {
                certificatePoint = 50;
            }
            else {
                certificatePoint = 25;
            }
        }
    }  

    // brother or sister resident of Canada
    var resident = parseInt(document.getElementById("living_canada").value) ;
    if (resident === 2) {residentPoint = 15}

    // canadian degree
    var canadiandegree = parseInt(document.getElementById("canadian_degree_level").value) ;
    if (canadiandegree === 1) {canadiandegreePoint = 15}
    else if (canadiandegree === 2) {canadiandegreePoint = 30}

    // job offer in canada
    var joboffer = parseInt(document.getElementById("NOC_TEER").value) ;
    if (joboffer === 1) {jobofferPoint = 200}
    else if (joboffer === 2) {jobofferPoint = 50}

    // province or territory certificate
    var nomination = parseInt(document.getElementById("nomination").value) ;
    if (nomination === 2) {nominationPoint = 600}

    // NCLC score
    var value = parseInt(document.getElementById("language_test_type").value) ;
    console.log("Value : "+value);
    if (secondLanguageCLB[0] >= 7 && secondLanguageCLB[1] >= 7 && secondLanguageCLB[2] >= 7 && secondLanguageCLB[3] >= 7) {
        console.log("Second Language : "+secondLanguageCLB[0]+" "+secondLanguageCLB[1]+" "+secondLanguageCLB[2]+" "+secondLanguageCLB[3]) ;
        
        console.log("First Language : "+firstLanguageCLB[0]+" "+firstLanguageCLB[1]+" "+firstLanguageCLB[2]+" "+firstLanguageCLB[3]) ;

        if ((value >= 4) || (firstLanguageCLB[0] <= 4 && firstLanguageCLB[1] <= 4 && firstLanguageCLB[2] <= 4 && firstLanguageCLB[3] <= 4)) {
            console.log("Point : 25") ;
            nclcPoint = 25 ;
        }
        else if (0 < value < 4 && firstLanguageCLB[0] > 4 && firstLanguageCLB[1] > 4 && firstLanguageCLB[2] > 4 && firstLanguageCLB[3] > 4) {
            console.log("Point : 50") ;
            nclcPoint = 50 ;
        }
    }

    if (parseInt(document.getElementById("will_spouse_come").value) == 2) {
        // spouse degree
        var sd = parseInt(document.getElementById("spouseeducation").value) ;
        spousedegreePoint = spousedegree[sd] ;

        // spouse canadian work experience
        var scwe = parseInt(document.getElementById("spousework_exp").value) ;
        spousecanadianworkPoint = spousecanadianwork[scwe] ;

        // spouse clb level
        var spousedict = spouseclblevel(document.getElementById("spouselanguage_test_type"))
        for (let key in spousedict) {
            console.log(spousedict[key]) ;
            if (spousedict[key] >= 9) {
                spouseclbPoint += spouseclb[3] ;
            }
            else if (spousedict[key] === 7 || spousedict[key] === 8) {
                spouseclbPoint += spouseclb[2] ;
            }
            else if (spousedict[key] === 5 || spousedict[key] === 6) {
                spouseclbPoint += spouseclb[1] ;
            }
            else if (spousedict[key] <= 4) {
                spouseclbPoint += spouseclb[0] ;
            }
        }
        spouseCLB = [spousedict.listening ,spousedict.reading ,spousedict.writing ,spousedict.speaking] ;
        console.log(spouseCLB) ;
    }

    educationskillPoint = degreeclbPoint+canadianworkdegreePoint ;
    if (educationskillPoint >= 50) {educationskillPoint = 50 ;}
    foreignworkskillPoint = foreignworkclbPoint+canadianforeignworkPoint+certificatePoint ;
    if (foreignworkskillPoint >= 50) {foreignworkskillPoint = 50 ;}

    humancore = agePoint+educationPoint+firstLanguagePoint+secondLanguagePoint+canadianworkPoint;
    if (humancore >= 500) {humancore = 500}
    spouse = spousedegreePoint+spousecanadianworkPoint+spouseclbPoint ;
    if (spouse >= 40) {spouse = 40}
    skillfactors = educationskillPoint+foreignworkskillPoint ;
    if (skillfactors >= 100) {skillfactors = 100}
    additional = residentPoint+canadiandegreePoint+jobofferPoint+nominationPoint+nclcPoint ;
    if (additional >= 600) {additional = 600}

    console.log("Human Core : " + humancore+"\nSpouse : "+spouse+"\nSkill Factor : "+skillfactors+"\nAdditional : "+additional) ;
    console.log("A: "+agePoint+" "+educationPoint+" "+firstLanguagePoint+" "+secondLanguagePoint+" "+canadianworkPoint) ;
    console.log("B: "+spousedegreePoint+" "+spousecanadianworkPoint+" "+spouseclbPoint) ;
    console.log("C: "+degreeclbPoint+" "+canadianworkdegreePoint+" "+foreignworkclbPoint+" "+canadianforeignworkPoint+" "+certificatePoint) ;
    console.log("D: "+residentPoint+" "+canadiandegreePoint+" "+jobofferPoint+" "+nominationPoint+" "+nclcPoint) ;

    total = humancore+spouse+skillfactors+additional ;

    var output = document.getElementsByClassName("output")[0] ;
    var text = "All Express Entry candidates get a score out of 1,200, based on the four parts of the Comprehensive Ranking System formula.</br></br><b>Your score is "+total+" points.</b></br></br>Having a higher score increases the chances of getting the invitation to apply for PR (Permanent Residency)</br>" ;
            //    "<h2>A.Human Core : "+humancore+"</br>"+
            //    "<h3>Age : "+agePoint+"</br>"+
            //    "<h3>Education : "+educationPoint+"</br>"+
            //    "<h3>First Language CLB : "+firstLanguagePoint+"</br>"+
            //    "<h3>Second Language CLB : "+secondLanguagePoint+"</br>"+
            //    "<h3>Canadian Work Experience : "+canadianworkPoint+"</br>"+
            //    "<h2>B.Spouse : "+spouse+"</br>"+
            //    "<h3>Spouse Education : "+spousedegreePoint+"</br>"+
            //    "<h3>Spouse Canadian Work Experience : "+spousecanadianworkPoint+"</br>"+
            //    "<h3>Spouce CLB : "+spouseclbPoint+"</br>"+
            //    "<h2>C.Skill Factor : "+skillfactors+"</br>"+
            //    "<h3>Degree with CLB : "+degreeclbPoint+"</br>"+
            //    "<h3>Canadian Work Experience with Degree : "+canadianworkdegreePoint+"</br>"+
            //    "<h3>Foreign Work Experience with CLB : "+foreignworkclbPoint+"</br>"+
            //    "<h3>Canadian Work Experience with Foreign Work Experience : "+canadianforeignworkPoint+"</br>"+
            //    "<h3>Certificate : "+certificatePoint+"</br>"+
            //    "<h2>D.Additional : "+additional+"</br>"+
            //    "<h3>Brother/Sister Resident : "+residentPoint+"</br>"+
            //    "<h3>NCLC Point : "+nclcPoint+"</br>"+
            //    "<h3>Canadian Degree : "+canadiandegreePoint+"</br>"+
            //    "<h3>Job Offer : "+jobofferPoint+"</br>"+
            //    "<h3>Province/Territory certificate : "+nominationPoint+"</br>"
            //    ;
    output.innerHTML = text ;
    suggestionFunction(total, firstLanguageCLB, firstdict) ;
}

function mainCalculation() {
    crsCalculation() ;
    // federal_skilled_workerCalculation() ;
    window.data = {
        "crs_total" : total ,
        "federal_total" : 0 ,
    }
}

// function getLanguageScoreIncrease(testType, listening, reading, writing, speaking) {
//     let improvements = [];
//     let additionalPoints = 0;

//     switch (testType) {
//         case "IELTS":
//             if (listening < 9) {
//                 additionalPoints += (9 - listening) * 3; // Adjust the points calculation as per your logic
//                 improvements.push("Improving your IELTS Listening Band to 9 will increase your score.");
//             }
//             if (reading < 9) {
//                 additionalPoints += (9 - reading) * 2;
//                 improvements.push("Improving your IELTS Reading Band to 9 will increase your score.");
//             }
//             if (writing < 9) {
//                 additionalPoints += (9 - writing) * 2;
//                 improvements.push("Improving your IELTS Writing Band to 9 will increase your score.");
//             }
//             if (speaking < 9) {
//                 additionalPoints += (9 - speaking) * 2;
//                 improvements.push("Improving your IELTS Speaking Band to 9 will increase your score.");
//             }
//             break;

//         case "CELPIP-G":
//             if (listening < 10) {
//                 additionalPoints += (10 - listening) * 3;
//                 improvements.push("Improving your CELPIP Listening Band to 10 will increase your score.");
//             }
//             if (reading < 10) {
//                 additionalPoints += (10 - reading) * 2;
//                 improvements.push("Improving your CELPIP Reading Band to 10 will increase your score.");
//             }
//             if (writing < 10) {
//                 additionalPoints += (10 - writing) * 2;
//                 improvements.push("Improving your CELPIP Writing Band to 10 will increase your score.");
//             }
//             if (speaking < 10) {
//                 additionalPoints += (10 - speaking) * 2;
//                 improvements.push("Improving your CELPIP Speaking Band to 10 will increase your score.");
//             }
//             break;

//         case "PTE":
//             if (listening < 90) {
//                 additionalPoints += (90 - listening) * 2; // Customize the points logic based on PTE scoring
//                 improvements.push("Improving your PTE Listening score to 90 will increase your score.");
//             }
//             if (reading < 90) {
//                 additionalPoints += (90 - reading) * 2;
//                 improvements.push("Improving your PTE Reading score to 90 will increase your score.");
//             }
//             if (writing < 90) {
//                 additionalPoints += (90 - writing) * 2;
//                 improvements.push("Improving your PTE Writing score to 90 will increase your score.");
//             }
//             if (speaking < 90) {
//                 additionalPoints += (90 - speaking) * 2;
//                 improvements.push("Improving your PTE Speaking score to 90 will increase your score.");
//             }
//             break;

//         case "TEF Canada":
//             if (listening < 360) {
//                 additionalPoints += (360 - listening) * 0.1; // Adjust to reflect TEF scoring system
//                 improvements.push("Improving your TEF Listening score to 360 will increase your score.");
//             }
//             if (reading < 300) {
//                 additionalPoints += (300 - reading) * 0.1;
//                 improvements.push("Improving your TEF Reading score to 300 will increase your score.");
//             }
//             if (writing < 450) {
//                 additionalPoints += (450 - writing) * 0.1;
//                 improvements.push("Improving your TEF Writing score to 450 will increase your score.");
//             }
//             if (speaking < 450) {
//                 additionalPoints += (450 - speaking) * 0.1;
//                 improvements.push("Improving your TEF Speaking score to 450 will increase your score.");
//             }
//             break;

//         case "TCF Canada":
//             if (listening < 699) {
//                 additionalPoints += (699 - listening) * 0.1; // Adjust to reflect TCF scoring system
//                 improvements.push("Improving your TCF Listening score to 699 will increase your score.");
//             }
//             if (reading < 699) {
//                 additionalPoints += (699 - reading) * 0.1;
//                 improvements.push("Improving your TCF Reading score to 699 will increase your score.");
//             }
//             if (writing < 20) {
//                 additionalPoints += (20 - writing) * 0.1;
//                 improvements.push("Improving your TCF Writing score to 20 will increase your score.");
//             }
//             if (speaking < 20) {
//                 additionalPoints += (20 - speaking) * 0.1;
//                 improvements.push("Improving your TCF Speaking score to 20 will increase your score.");
//             }
//             break;
//     }

//     return { improvements, additionalPoints };
// }

// function suggestionFunction(total) {
//     let testType = document.getElementById("language_test_type").value;
//     let listening = parseFloat(document.getElementById('${testType.toLowerCase()}_listening').value);
//     let reading = parseFloat(document.getElementById("${testType.toLowerCase()}_reading").value);
//     let writing = parseFloat(document.getElementById("${testType.toLowerCase()}_writing").value);
//     let speaking = parseFloat(document.getElementById("${testType.toLowerCase()}_speaking").value);

//     let result = getLanguageScoreIncrease(testType, listening, reading, writing, speaking);

//     let element = document.getElementsByClassName("suggestion-output")[0];
//     let text = '<p><b>Current CRS Score:</b> ${total} points</p>';
//     text += '<p><b>Potential Improvements:</b></p>';
//     result.improvements.forEach(improvement => {
//         text += '<p>${improvement}</p>';
//     });
//     text += '<p><b>Total CRS Score After Improvements:</b> ${newTotal} points</p>';

//     element.innerHTML = text;
// }

languageL = ["","CELPIP-G", "IELTS", "PTE CORE", "TEF Canada", "TCF Canada"] ;
function suggestionFunction (total, fclb, fclbpoint) {
    // , education, sclb, employment, canadianedu
    var element = document.getElementsByClassName("suggestion-output")[0] ;
    var text = "" ;
    var s = false,l = false ;
    var firstLanguage = [] ;
    var firstLanguagePoint = [] ;

    // language
    var educationValue = parseInt(document.getElementById("education").value) ;
    var ftotal = total ;
    if (educationValue < 6) {
        var p = 0 ;
        if (status === false) {p = 135 - educationU[educationValue];}
        else if (status === true) {p = 126 - educationU[educationValue];}
        ftotal += p ;
        text += "<p><b>A Summary of the Improvement Suggestion:</b> Getting another post-graduate diploma or a Master’s with an improved language score can improve your CRS score.</p></br>" ;
    }

    text += "<table><tr><td><b>Current CRS Score<b></td><td>"+total+" points</td></tr>";

    // short term    
    stext = "<tr><td><b><u>Short Term</u></b></td><td></td></tr>";

    // language 
    if (fclb[0] < 9) {
        firstLanguage.push("Listening") ;
        firstLanguagePoint.push(29-fclbpoint["listening"])
    }
    if (fclb[1] < 9) {
        firstLanguage.push("Reading") ;
        firstLanguagePoint.push(29-fclbpoint["reading"])
    }
    if (fclb[2] < 9) {
        firstLanguage.push("Writing") ;
        firstLanguagePoint.push(29-fclbpoint["writing"])
    }
    if (fclb[3] < 9) {
        firstLanguage.push("Speaking") ;
        firstLanguagePoint.push(29-fclbpoint["speaking"])        
    }

    stext += "<tr><td><b>Language Improvement:</b> Improving your " ;
    
    if (parseInt(document.getElementById("language_test_type").value) === 1) {
        stext += "CELPIP-G " ;
    }
    else if (parseInt(document.getElementById("language_test_type").value) === 2) {
        stext += "IELTS " ;
    }
    else if (parseInt(document.getElementById("language_test_type").value) === 3) {
        stext += "PTE Core " ;
    }
    else if (parseInt(document.getElementById("language_test_type").value) === 4) {
        stext += "TEF Canada " ;
    }
    else if (parseInt(document.getElementById("language_test_type").value) === 5) {
        stext += "TCF Canada " ;
    }

    if (firstLanguage.length > 1) {
        s = true ;
        for (let i = 0; i < firstLanguage.length-1 ; i++) {
            stext += firstLanguage[i] + " & " ;
        }
        stext += firstLanguage[firstLanguage.length-1]
    }
    else if (firstLanguage.length === 1) {
        s = true ;
        stext += firstLanguage[0];
    }
    stext += " Band to highest score will add additional points.</td>" ;
    var ftotal = 0 ;
    for (let i=0; i<firstLanguagePoint.length;i++) {
        ftotal += firstLanguagePoint[i] ;
    }

    stext += "<td>"+ftotal+" Additional points</td></tr>" ;

    // long term
    var ltotal = 0 ;
    var ltext = "<tr><td><b><u>Long-term:</u></b></td><td></td></tr>"
    var canadianDegreeValue = parseInt(document.getElementById("canadian_degree").value) ;
    if (canadianDegreeValue === 2) {
        l = true ;
        ltext += "<tr><td><b>Canadian Degree:</b> Doing a post graduate diploma or a Masters degree can add additional points</td><td>25 Additional points.</td></tr>" ;
        ltotal += 25 ;
    }

    var jobOfferValue = parseInt(document.getElementById("labour_impact").value) ;
    if (jobOfferValue === 1) {
        l = true ;
        ltext += "<tr><td><b>Arranged Job Offer:</b> An LMIA-based job offer can offer additional points.</td><td>50 Additional points</td></tr>"
        ltotal += 50
    }   

    if (s === true) {text += stext ;}    
    if (l === true) {text += ltext ;}
    var t = total+ftotal+ltotal ;
    text += "<tr><td><b>Total score after improvements<b></td><td>"+t+" points</td></tr></table><h2>Congratulations! You have unlocked a 75% discounted full assessment session with one of our licensed Canadian immigration consultants (RCIC) to get further advice</h2>" ;

    console.log(text) ;
    element.innerHTML = text ;

}
