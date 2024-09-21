const selects = document.querySelectorAll('.selection');            
selects.forEach(select => {
    select.disabled = true;
});
  selects[0].disabled = false ;

async function select_email() {
  const response = await base.from("tb_calculation").select("id, email") ;

  var select = document.getElementById("user_email_select") ;

  response.data.forEach(element => {
    const option = document.createElement("option") ;
    option.value = element["id"] ;
    option.text = element["email"] ;
    select.add(option) ;
  });  
}

select_email() ;

function first_language (value, speak, listen, read, write) {
  if (value === 1) {
    document.getElementById("celplp-g_listening").value = listen ;
    document.getElementById("celplp-g_reading").value = read ;
    document.getElementById("celplp-g_writing").value = write ;
    document.getElementById("celplp-g_speaking").value = speak ;

    document.getElementsByClassName("q5_CELPIP")[0].style.maxHeight = document.getElementsByClassName("q5_CELPIP")[0].scrollHeight + 'px';
  }

  else if (value === 2) {
      document.getElementById("ielts_listening").value = listen ;
      document.getElementById("ielts_reading").value = read ;
      document.getElementById("ielts_writing").value = write ;
      document.getElementById("ielts_speaking").value = speak ;

      document.getElementsByClassName("q5_IELTS")[0].style.maxHeight = document.getElementsByClassName("q5_IELTS")[0].scrollHeight + 'px';
  }

  else if (value === 3) {
      document.getElementById("ptecore_listening").value = listen ;
      document.getElementById("ptecore_reading").value = read ;
      document.getElementById("ptecore_writing").value = write ;
      document.getElementById("ptecore_speaking").value = speak ;
      
      document.getElementsByClassName("q5_PTECORE")[0].style.maxHeight = document.getElementsByClassName("q5_PTECORE")[0].scrollHeight + 'px';
  }

  else if (value === 4) {
      console.log("here") ;
      document.getElementById("tef_listening").value = listen ;
      document.getElementById("tef_reading").value = read ;
      document.getElementById("tef_writing").value = write ;
      document.getElementById("tef_speaking").value = speak ;

      document.getElementsByClassName("q5_TEF")[0].style.maxHeight = document.getElementsByClassName("q5_TEF")[0].scrollHeight + 'px';
  }

  else if (value === 5) {
      document.getElementById("tcf_listening").value = listen ;
      document.getElementById("tcf_reading").value = read ;
      document.getElementById("tcf_writing").value = write ;
      document.getElementById("tcf_speaking").value = speak ;

      document.getElementsByClassName("q5_TCF")[0].style.maxHeight = document.getElementsByClassName("q5_TCF")[0].scrollHeight + 'px';
  }
}

function second_language (value, speak, listen, read, write) {
  if (value === 4) {
      console.log("here") ;
      document.getElementById("tef2_listening").value = listen ;
      document.getElementById("tef2_reading").value = read ;
      document.getElementById("tef2_writing").value = write ;
      document.getElementById("tef2_speaking").value = speak ;

      document.getElementsByClassName("q5_3_TEF")[0].style.maxHeight = document.getElementsByClassName("q5_3_TEF")[0].scrollHeight + 'px';
  }

  else if (value === 5) {
      document.getElementById("tcf2_listening").value = listen ;
      document.getElementById("tcf2_reading").value = read ;
      document.getElementById("tcf2_writing").value = write ;
      document.getElementById("tcf2_speaking").value = speak ;

      document.getElementsByClassName("q5_3_TCF")[0].style.maxHeight = document.getElementsByClassName("q5_3_TCF")[0].scrollHeight + 'px';
  }
}

async function select_user(id) {
  console.log("ID: "+id) ;
  const response = await base.from("tb_calculation").select("*").eq("id", id) ;

  const array = Object.values(response.data[0]) ;
  console.log("here") ;
  console.log(array) ;

  document.getElementById("name").value = array[1] ;
  document.getElementById("email").value = array[2] ;
  document.getElementById("country").value = array[4] ;
  document.getElementById("pN").value = array[3] ;
  document.getElementById("martial-status").value = array[5] ;
  document.getElementById("spouse_canada").value = array[6] ;
  document.getElementById("will_spouse_come").value = array[7] ;
  document.getElementById("age").value = array[8] ;
  document.getElementById("education").value = array[9] ;
  document.getElementById("canadian_degree").value = array[10] ;
  document.getElementById("canadian_degree_level").value = array[11] ;
  // document.getElementById("language_test").value = array[12] ;
  document.getElementById("language_test_type").value = array[13] ;
  first_language(array[13],array[14], array[15], array[16], array[17]) ;
  document.getElementById("other_lang_test").value = array[18] ;
  second_language(array[18],array[19], array[20], array[21], array[22]) ;
  document.getElementById("work_exp").value = array[23] ;
  document.getElementById("skilled_work").value = array[24] ;
  document.getElementById("certificate_canada").value = array[25] ;
  document.getElementById("labour_impact").value = array[26] ;
  document.getElementById("NOC_TEER").value = array[27] ;
  document.getElementById("nomination").value = array[28] ;
  document.getElementById("living_canada").value = array[29] ;
  document.getElementById("spouseeducation").value = array[30] ;
  document.getElementById("spouse_canadian_degree").value = array[31] ;
  document.getElementById("spouse_canadian_degree_level").value = array[32] ;
  document.getElementById("spousework_exp").value = array[33] ;
  document.getElementById("spouselanguage_test_type").value = array[34] ;
}

function user_info() {
  select_user(parseInt(document.getElementById("user_email_select").value)) ;
}