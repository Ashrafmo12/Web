var users=[{username:"ashraf",password:"123"}];
function signin()
{
    var username1=document.getElementById("uname").value;
    var password1=document.getElementById("password").value;
    for(let i=0;i<users.length;i++)
    {
        if(users[i].username==username1 &&users[i].password==password1)
        {
            alert("login successfull");
            window.location.href="q.html";
            return true;
        }
    }
    alert("invalid username or password");

}
function check()
{
       var yes=0;
     for (let i=0;i<3;i++)
     {
        if(document.getElementById("q"+i).checked==true)
        {
            yes++;
         
   
        }
        
     }
     alert("yes"+yes);
    
     
       
}
function signup()
{
    var username3=document.getElementById("uname2").value;
    var password3=document.getElementById("password2").value;
    var age=document.getElementById("age").value;
    var gender=document.getElementById("gender").value;
    var phone=document.getElementById("phone").value;
    var rex=/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])$/
    if(username3=="" ||password3==""||age==""||gender==""||phone=="")
    {
        alert("faill your data firstly");
        return false;
    }
     else if(username3.length<5 || username3.length>15)
     {
        alert("your name must be from 5 to 15 letters");
        return false;

     }
     
     else if(username3==users)
     {
        alert("your are already goined before");
        return false;

     }
     else if(phone.length<11)
     {
        alert("your must be 11");
        return false;

     }
     /*
     else if(!rex.test(password3))
     {
        
        alert("Enter strong password");
        return false;
    }
    */
    users.push({username:username3,password:password3});
    alert("sign up siccessfull");
    return true;




}
function c()
{
    window.location.href="cart.html";
}
function c2()
{
    window.location.href="home.html";
}
function forget()
{
    var username4=document.getElementById("name4").value;
    var password4=document.getElementById("password4").value;
    for(let i=0;i<users.length;i++)
    {
        if(users[i].username==username4)
        {
            var password4=document.getElementById("password4").value;
            users[i].password=password4;
            console.log(users[i].password);0
            alert("update success");
            return true;

        }
        alert("user not found")
    }


}
function page()
{
    window.location.href="login.html";

}