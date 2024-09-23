// Asynchronous in js
console.log('hiii');
setTimeout(function(){
    console.log("start");
},3000);
console.log('end');

// CallBack function..
console.log("start..");
function userlog(cb)
{
    console.log("user hai yeah toh");
    cb();
}
function displaylog()
{
    console.log('yeah toh display hai');
}
userlog(displaylog);
