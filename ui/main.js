//submit username and password

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
  request.send(JSON.stringify({username:sankalp139,password:wolverine}));
};