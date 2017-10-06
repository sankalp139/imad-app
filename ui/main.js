//submit username and password
function loadLoginForm () {
    var loginHtml = `
        <h3>Login/Register to unlock awesome features</h3>
        <input type="text" id="username" placeholder="username" />
        <input type="password" id="password" />
        <br/><br/>
        <input type="submit" id="login_btn" value="Login" />
        <input type="submit" id="register_btn" value="Register" />
        `}
    //document.getElementById('login_area').innerHTML = loginHtml;
var submit= document.getElementById('login_btn'); 
submit.onclick = function()
{
    //make a request to the server  and accept name
     var request= new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === 4){
            if(request.status === 200){
      console.log('user has logged in');
           submit.value = 'Sucess!';
          // window.location.href = "http://imad.hasura.io/";
       alert('logged in successfully');
            }else if(request.status === 403)
            {
                alert('username/password is incorrect');
                submit.value = 'Invalid credentials. Try again?';
            }
            else if(request.status===500)
            
            {
            alert('something went wrong on the server'); 
           submit.value = 'Login';
            }
        
            loadLogin();
        }
    };
     var username =document.getElementById('username').value;
     var password =document.getElementById('password').value;
    console.log(username);
    console.log(password);
   request.open('POST','/login',true);
    //http://sankalp139.imad.hasura-app.io/counter
    request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username:username,password:password}));
    submit.value = 'Logging in...';
};
    var register=document.getElementById('register_btn');
    register.onclick =function()
    {
       var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === 4) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
                  } 
                  else if(request.status===500) {
                  alert('Could not register the user');
                  register.value = 'Register';
                       }
               }
        };
    
    
    
    var username =document.getElementById('username').value;
     var password =document.getElementById('password').value;
    console.log(username);
    console.log(password);
   request.open('POST','/create-user',true);
    //http://sankalp139.imad.hasura-app.io/counter
    request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username:username,password:password}));
   register.value = 'Registering...';
};

