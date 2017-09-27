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
    document.getElementById('login_area').innerHTML = loginHtml;
var submit= document.getElementById('submit_btn'); 
submit.onclick = function()
{
    //make a request to the server  and accept name
     var request= new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status == 200){
       console.log('user has logged in');
       alert('logged in successfully');
            }else if(request.status == 403)
            {
                alert('username/password is incorrect');
            }
            else if(request.status==500)
            
            {
            alert('something went wrong on the server');    
            }
        }
    };
     var username =document.getElementById('username').value;
     var password =document.getElementById('password').value;
    console.log(username);
    console.log(password);
   request.open('POST','http://sankalp139.imad.hasura-app.io/login'+ name,true);
    //http://sankalp139.imad.hasura-app.io/counter
    request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username:username,password:password}));
};
    var register=document.getElementById('register_btn');
    register.onclick =function()
    {
       var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  } 
                  else {
                  alert('Could not register the user');
                       }
               }
        };
    
    
    
    var username =document.getElementById('username').value;
     var password =document.getElementById('password').value;
    console.log(username);
    console.log(password);
   request.open('POST','http://sankalp139.imad.hasura-app.io/create-user'+ name,true);
    //http://sankalp139.imad.hasura-app.io/counter
    request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username:username,password:password}));
};