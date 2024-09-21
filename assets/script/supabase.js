const supabaseUrl = 'https://jwyeljttuypuwqpcguib.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3eWVsanR0dXlwdXdxcGNndWliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NDg1NDMsImV4cCI6MjA0MjMyNDU0M30.W4McGtOiT0CRuzdQXd16xfp1PRA0uceNvhQSNfSUVY8';
const base = supabase.createClient(supabaseUrl, supabaseKey);

async function authenticate() {
    const { user, error } = await supabase.auth.signInWithOtp({
        provider: 'anonymous',
    });
    
    if (error) {
    console.error('Error signing in anonymously:', error);
    } else {
    console.log('Anonymous user signed in:', user);
    }          
}

// authenticate() ;

async function is_connected(email) {
    const response = await base.from("tb_calculation").select("*").or(`email.eq.${email}`) ;

    if (response.error) {
        console.error("Error", response.error) ;
        return false ;
    }
    else if (response.data.length === 0) {
        return true ;
    }
    else {
        return false ;
    }
}

async function insert_data(array) {
    const resp = await is_connected(array[1]) ;
    console.log(resp) ;
    if (resp) {
        base.from('tb_calculation')
        .insert([
        { 
            name: array[0],
            email: array[1],
            // pN: array[2],
            country: array[3],
            status: array[4],
            permanent_resident: array[5],
            spouse_come: array[6],
            age: array[7],
            education_level: array[8],
            canadian_degree: array[9],
            canadian_degree_level: array[10],
            official_language: array[11],
            first_language: array[12],
            f_speak: array[13],
            f_listen: array[14],
            f_read: array[15],
            f_write: array[16],
            second_language: array[17],
            s_speak: array[18],
            s_listen: array[19],
            s_read: array[20],
            s_write: array[21],
            work_experience: array[22],
            foreign_work: array[23],
            qualification: array[24],
            labour_market: array[25],
            job_offer: array[26],
            province: array[27],
            citizen: array[28],
            spouse_education_level: array[29],
            spouse_canadian_degree: array[30],
            spouse_canadian_degree_level: array[31],
            spouse_work_experience: array[32],
            spouse_language: array[33],
            crs_total: array[34],
            federal_total: array[35],
        }
        ])
        .then(response => {
            console.log(response);
            if (response.error) {
                console.error('Error:', response.error);
                alert('Error:', response.error);
            }
        })
        .catch(error => console.error('Error:', error));
    }    
}

function take_info_function() {
    var firstl = parseInt(document.getElementById("language_test_type").value) ;
    var speak, listen, read, write;
    if (firstl === 1) {
        speak = parseInt(document.getElementById("celplp-g_speaking").value) ;
        listen = parseInt(document.getElementById("celplp-g_listening").value) ;
        read = parseInt(document.getElementById("celplp-g_reading").value) ;
        write = parseInt(document.getElementById("celplp-g_writing").value) ;
    }
    else if (firstl === 2) {
        speak = parseInt(document.getElementById("ielts_speaking").value) ;
        listen = parseInt(document.getElementById("ielts_listening").value) ;
        read = parseInt(document.getElementById("ielts_reading").value) ;
        write = parseInt(document.getElementById("ielts_writing").value) ;
    }
    else if (firstl === 3) {
        speak = parseInt(document.getElementById("ptecore_speaking").value) ;
        listen = parseInt(document.getElementById("ptecore_listening").value) ;
        read = parseInt(document.getElementById("ptecore_reading").value) ;
        write = parseInt(document.getElementById("ptecore_writing").value) ;
    }
    else if (firstl === 4) {
        speak = parseInt(document.getElementById("tef_speaking").value) ;
        listen = parseInt(document.getElementById("tef_listening").value) ;
        read = parseInt(document.getElementById("tef_reading").value) ;
        write = parseInt(document.getElementById("tef_writing").value) ;
    }
    else if (firstl === 5) {
        speak = parseInt(document.getElementById("tcf_speaking").value) ;
        listen = parseInt(document.getElementById("tcf_listening").value) ;
        read = parseInt(document.getElementById("tcf_reading").value) ;
        write = parseInt(document.getElementById("tcf_writing").value) ;
    }

    var secondl = parseInt(document.getElementById("other_lang_test").value) ;
    var sspeak, slisten, sread, swrite;
    if (secondl === 4) {
        sspeak = parseInt(document.getElementById("tef2_speaking").value) ;
        slisten = parseInt(document.getElementById("tef2_listening").value) ;
        sread = parseInt(document.getElementById("tef2_reading").value) ;
        swrite = parseInt(document.getElementById("tef2_writing").value) ;
    }
    else if (secondl === 5) {
        sspeak = parseInt(document.getElementById("tcf2_speaking").value) ;
        slisten = parseInt(document.getElementById("tcf2_listening").value) ;
        sread = parseInt(document.getElementById("tcf2_reading").value) ;
        swrite = parseInt(document.getElementById("tcf2_writing").value) ;
    }
    else if (secondl === 0) {
        sspeak = -1 ;
        slisten = -1 ;
        sread = -1 ;
        swrite = -1 ;
    }
    
    var array = [document.getElementById("name").value,document.getElementById("email").value,"None",document.getElementById("country").value, parseInt(document.getElementById("martial-status").value), parseInt(document.getElementById("spouse_canada").value), parseInt(document.getElementById("will_spouse_come").value), parseInt(document.getElementById("age").value), parseInt(document.getElementById("education").value), parseInt(document.getElementById("canadian_degree").value), parseInt(document.getElementById("canadian_degree_level").value), parseInt(document.getElementById("language_test").value), parseInt(document.getElementById("language_test_type").value),speak,listen,read,write,parseInt(document.getElementById("other_lang_test").value),sspeak,slisten,sread,swrite, parseInt(document.getElementById("work_exp").value), parseInt(document.getElementById("skilled_work").value), parseInt(document.getElementById("certificate_canada").value), parseInt(document.getElementById("labour_impact").value), parseInt(document.getElementById("NOC_TEER").value), parseInt(document.getElementById("nomination").value), parseInt(document.getElementById("living_canada").value), parseInt(document.getElementById("spouseeducation").value), parseInt(document.getElementById("spouse_canadian_degree").value), parseInt(document.getElementById("spouse_canadian_degree_level").value), parseInt(document.getElementById("spousework_exp").value), parseInt(document.getElementById("spouselanguage_test_type").value),window.data["crs_total"], window.data["federal_total"]] ;
    console.log(array.length) ;
    console.log(array) ;
    insert_data(array) ;
}