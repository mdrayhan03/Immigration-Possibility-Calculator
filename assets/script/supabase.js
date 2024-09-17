const supabaseUrl = 'https://aidjhvfvbyudzrzduwag.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZGpodmZ2Ynl1ZHpyemR1d2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NTQ4NDAsImV4cCI6MjAzOTEzMDg0MH0.A7otTKYyjRPA7bVxgcFotw7UswxmWJytnzddYcZyLk4';
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

async function is_connected(email, pN) {
    const response = await base.from("tb_calculation").select("*").or(`email.eq.${email},phone_No.eq.${pN}`) ;

    console.log(response.data);

    if (response.error) {
        console.error("Error", response.error) ;
        return 0 ;
    }
    else if (response.data.length === 0) {
        return 1 ;
    }
    else {
        return 0 ;
    }
}

async function insert_data(name, email, pN, country) {
    const resp = await is_connected(email, pN) ;
    console.log(resp) ;
    if (resp) {
        base.from('tb_calculation')
        .insert([
        { name: name, email: email, phone_No: pN, country: country }
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
    var name = document.getElementById("name").value ;
    var email = document.getElementById("email").value ;
    var pN = document.getElementById("pN").value ;
    var country = document.getElementById("country").value ;
    console.log(name+" "+email+" "+pN+" "+country) ;
    insert_data(name, email, pN, country) ;
}