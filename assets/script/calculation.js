// clb level
function getCLBLevel(test, listening, reading, writing, speaking) {
    const clbMapping = {
        "CELPIP-G": {
            listening: { "7-7.9": 7, "8-8.9": 8, "9-9.9": 9, "10-10.9": 10 },
            reading: { "7-7.9": 7, "8-8.9": 8, "9-9.9": 9, "10-10.9": 10 },
            writing: { "7-7.9": 7, "8-8.9": 8, "9-9.9": 9, "10-10.9": 10 },
            speaking: { "7-7.9": 7, "8-8.9": 8, "9-9.9": 9, "10-10.9": 10 }
        },
        "IELTS": {
            listening: { "6.0-6.4": 7, "7.5-7.9": 8, "8.0-8.4": 9, "8.5-9.0": 10 },
            reading: { "6.0-6.4": 7, "6.5-6.9": 8, "7.0-7.4": 9, "8.0-9.0": 10 },
            writing: { "6.0-6.4": 7, "6.5-6.9": 8, "7.0-7.4": 9, "7.5-8.0": 10 },
            speaking: { "6.0-6.4": 7, "6.5-6.9": 8, "7.0-7.4": 9, "7.5-8.0": 10 }
        },
        "PTE": {
            listening: { '60-70': 7, '71-81': 8, '82-88': 9, '89-90': 10 },
            reading: { '60-68': 7, '69-77': 8, '78-87': 9, '88-90': 10 },
            writing: { '69-78': 7, '79-87': 8, '88-89': 9, '90': 10 },
            speaking: { '68-75': 7, '76-83': 8, '84-88': 9, '89-90': 10 }
        },
        "TEF Canada": {
            listening: { '249-279': 7, '280-297': 8, '298-360': 9 },
            reading: { '207-232': 7, '233-247': 8, '248-300': 9 },
            writing: { '310-348': 7, '349-370': 8, '371-450': 9 },
            speaking: { '310-348': 7, '349-370': 8, '371-450': 9 }
        },
        "TCF Canada": {
            listening: { '458-502': 7, '503-522': 8, '523-699': 9 },
            reading: { '453-498': 7, '499-523': 8, '524-699': 9 },
            writing: { '10-11': 7, '12-13': 8, '14-20': 9 },
            speaking: { '10-11': 7, '12-13': 8, '14-20': 9 }
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


// points array
let status = false ;
let ageM = [0, 5, 15, 25, 35, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100] ;
let ageU = [0, 6, 17, 28, 39, 50, 55, 61, 66, 72, 77, 83, 88, 94, 99, 105, 110] ;
let educationM = [0, 28, 84, 91, 112, 119, 126, 140] ;
let educationU = [0, 30, 90, 98, 120, 128, 135, 150] ;
let canadianworkM = [0, 35, 46, 56, 63, 70] ;
let canadianworkU = [0, 40, 53, 64, 72, 80] ;
let canadianworkdegreeone = [0, 13, 25] ;
let canadianworkdegreetwo = [0, 25, 50] ;
let firstclbM = [0, 6, 8, 16, 22, 29, 32] ;
let firstclbU = [0, 6, 9, 17, 23, 31, 34] ;
let secondclb = [0, 1, 3, 6] ;
let spousedegree = [0, 2, 6, 7, 8, 9, 10] ;
let spousecanadianwork = [0, 5, 7, 8, 9, 10] ;
let spouseclb = [0, 1, 3, 5]

function mainCalculation() {
    let agePoint = 0, educationPoint = 0, canadianworkPoint = 0, canadianworkdegreePoint = 0, firstLanguageCLB, firstLanguagePoint = 0, secondLanguageCLB, secondLanguagePoint = 0, degreeclbPoint = 0, foreignworkclbPoint = 0, canadianforeignworkPoint = 0, certificatePoint = 0, residentPoint = 0, canadiandegreePoint = 0, jobofferPoint = 0, nominationPoint = 0, spousedegreePoint = 0, spousecanadianworkPoint = 0, spouseclbPoint = 0, spouseCLB;

    let humancore , spouse, skillfactors, additional, total;
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

    if (status === true) {
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
    console.log() ;educationPoint

    // first language clb
    var d = firstclblevel(document.getElementById("language_test_type"))    
    for (let key in d) {
        if (status === true) {
            if (d[key] >= 10) {
                firstLanguagePoint += firstclbM[6] ;
            }
            else if (d[key] === 9) {
                firstLanguagePoint += firstclbM[5] ;
            }
            else if (d[key] === 8) {
                firstLanguagePoint += firstclbM[4] ;
            }
            else if (d[key] === 7) {
                firstLanguagePoint += firstclbM[3] ;
            }
            else if (d[key] === 6) {
                firstLanguagePoint += firstclbM[2] ;
            }
            else if (d[key] === 4 || d[key] === 5) {
                firstLanguagePoint += firstclbM[1] ;
            }
            else if (d[key] < 4) {
                firstLanguagePoint += firstclbM[0] ;
            }
        }
        else if (status === false) {
            if (d[key] >= 10) {
                firstLanguagePoint += firstclbU[6] ;
            }
            else if (d[key] === 9) {
                firstLanguagePoint += firstclbU[5] ;
            }
            else if (d[key] === 8) {
                firstLanguagePoint += firstclbU[4] ;
            }
            else if (d[key] === 7) {
                firstLanguagePoint += firstclbU[3] ;
            }
            else if (d[key] === 6) {
                firstLanguagePoint += firstclbU[2] ;
            }
            else if (d[key] === 4 || d[key] === 5) {
                firstLanguagePoint += firstclbU[1] ;
            }
            else if (d[key] < 4) {
                firstLanguagePoint += firstclbU[0] ;
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
    secondLanguageCLB = [d.listening ,d.reading ,d.writing ,d.speaking] ;

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
    console.log("degree: "+degree+" clb: "+firstLanguageCLB[0]+", "+firstLanguageCLB[1]+", "+firstLanguageCLB[2]+", "+firstLanguageCLB[3])
    if (firstLanguageCLB[0] >= 7 && firstLanguageCLB[1] >= 7 && firstLanguageCLB[2] >= 7 && firstLanguageCLB[3] >= 7) {
        console.log("All Greater than 7") ;
        if (firstLanguageCLB[0] >= 9 && firstLanguageCLB[1] >= 9 && firstLanguageCLB[2] >= 9 && firstLanguageCLB[3] >= 9) {
            console.log("All Greater than 9") ;
            if (degree === 0 || degree === 1) {degreeclbPoint = canadianworkdegreetwo[0]}
            else if (degree === 2 || degree === 3) {degreeclbPoint = canadianworkdegreetwo[1]}
            else if (degree >= 4) {degreeclbPoint = canadianworkdegreetwo[2]}
        }
        else {
            console.log("All not Greater than 9") ;
            if (degree === 0 || degree === 1) {degreeclbPoint = canadianworkdegreeone[0]}
            else if (degree === 2 || degree === 3) {degreeclbPoint = canadianworkdegreeone[1]}
            else if (degree >= 4) {degreeclbPoint = canadianworkdegreeone[2]}
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
    else if (degree === 2 || degree === 3) {
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
            if (dc[key] >= 9) {
                spouseclbPoint += spouseclb[3] ;
            }
            else if (dc[key] === 7 || dc[key] === 8) {
                spouseclbPoint += spouseclb[2] ;
            }
            else if (dc[key] === 5 || dc[key] === 6) {
                spouseclbPoint += spouseclb[1] ;
            }
            else if (dc[key] <= 4) {
                spouseclbPoint += spouseclb[0] ;
            }
        }
        spouseCLB = [spousedict.listening ,spousedict.reading ,spousedict.writing ,spousedict.speaking] ;
    }    

    humancore = agePoint+educationPoint+firstLanguagePoint+secondLanguagePoint+canadianworkPoint;
    if (humancore >= 500) {humancore = 500}
    spouse = spousedegreePoint+spousecanadianworkPoint+spouseclbPoint ;
    if (spouse >= 40) {spouse = 40}
    skillfactors = degreeclbPoint+canadianworkdegreePoint+foreignworkclbPoint+canadianforeignworkPoint+certificatePoint;
    if (skillfactors >= 100) {skillfactors = 100}
    additional = residentPoint+canadiandegreePoint+jobofferPoint+nominationPoint ;
    if (additional >= 600) {additional = 600}

    console.log("Human Core : " + humancore+"\nSpouse : "+spouse+"\nSkill Factor : "+skillfactors+"\nAdditional : "+additional) ;
    console.log("A: "+agePoint+" "+educationPoint+" "+firstLanguagePoint+" "+secondLanguagePoint+" "+canadianworkPoint) ;
    console.log("B: "+spousedegreePoint+" "+spousecanadianworkPoint+" "+spouseclbPoint) ;
    console.log("C: "+degreeclbPoint+" "+canadianworkdegreePoint+" "+foreignworkclbPoint+" "+canadianforeignworkPoint+" "+certificatePoint) ;
    console.log("D: "+residentPoint+" "+canadiandegreePoint+" "+jobofferPoint+" "+nominationPoint) ;

    total = humancore+spouse+skillfactors+additional ;

    var output = document.getElementsByClassName("output")[0] ;
    var text = "<h1>Total Point : "+total+"</br>"+
               "<h2>A.Human Core : "+humancore+"</br>"+
               "<h3>Age : "+agePoint+"</br>"+
               "<h3>Education : "+educationPoint+"</br>"+
               "<h3>First Language CLB : "+firstLanguagePoint+"</br>"+
               "<h3>Second Language CLB : "+secondLanguagePoint+"</br>"+
               "<h3>Canadian Work Experience : "+canadianworkPoint+"</br>"+
               "<h2>B.Spouse : "+spouse+"</br>"+
               "<h3>Spouse Education : "+spousedegreePoint+"</br>"+
               "<h3>Spouse Canadian Work Experience : "+spousecanadianworkPoint+"</br>"+
               "<h3>Spouce CLB : "+spouseclbPoint+"</br>"+
               "<h2>C.Skill Factor : "+skillfactors+"</br>"+
               "<h3>Degree with CLB : "+degreeclbPoint+"</br>"+
               "<h3>Canadian Work Experience with Degree : "+canadianworkdegreePoint+"</br>"+
               "<h3>Foreign Work Experience with CLB : "+foreignworkclbPoint+"</br>"+
               "<h3>Canadian Work Experience with Foreign Work Experience : "+canadianforeignworkPoint+"</br>"+
               "<h3>Certificate : "+certificatePoint+"</br>"+
               "<h2>D.Additional : "+additional+"</br>"+
               "<h3>Brother/Sister Resident : "+residentPoint+"</br>"+
               "<h3>Canadian Degree : "+canadiandegreePoint+"</br>"+
               "<h3>Job Offer : "+jobofferPoint+"</br>"+
               "<h3>Province/Territory certificate : "+nominationPoint+"</br>"
               ;
    output.innerHTML = text ;
}

