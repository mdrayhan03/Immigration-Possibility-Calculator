async function login_function() {

    var id = document.getElementById("id").value ;
    var password = document.getElementById("password").value ;

    const response = await base.from("tb_admin").select("id").eq('admin_id',id).eq('password',password) ;

    if(response.data.length != 0) {
        alert("Login Successful") ;
        window.location.assign("userinfo.html") ;
    }
    else {
        alert("Wrong Credients.") ;
    }
}

document.addEventListener('keydown', function(event) {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
      // Perform your desired action      
      login_function() ;
    }
  });