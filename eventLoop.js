//1st scenerio

// let second = () => console.log("I'm second");
// let third = () => console.log("I'm third");
// let first = () => {
//   console.log("I'm first");
//   second();
//   third();
// };
// first();

//Description : When first() is called, global execution starts. So main() comes in callStack which is the part of browser. therefore, first() is kept in callStack and prints the console of it. In the same way,second() and third() are invoked  Consequently, we see the result written in connsole 

// second scenerio

// let second = () => console.log("I'm second");
// let third = () => console.log("I'm third");
// let first = () => {
//   console.log("I'm first");
//   setTimeout(second, 2000);
//   third();
// };
// first();


//Description : When first() is called, global execution starts. So main() comes in callStack which is the part of browser. therefore, first() is kept in callStack and prints the console of it.    when it becomes  time of setTimeout (),the v8 engine of google crome knows it as a  function containing callback. Then it is thrown into web api and skipped as well as  kept in the callback queue after finishing the time set by programmers in late  So third() is called and we see the result of third function   finally first() and third() leave callStack and eventLoop observes the process when eventLoop sees the callStack as empty, it orders the callback queue to pass the second() in callStack at the end, The callStack executes the second() as usual and all functions are vanished from callStack and Execution context ends





// 3rd scenerio

// const process = (num) =>{
  
//   console.log(num);
  
// };

// [1,2,3,4].forEach((i)=>{
//   process(i*5);
// });


// 4th scenerio


 let second = () => console.log("I'm second");
 let third = () => console.log("I'm third");
 let first = () => {
   console.log("I'm first");
   setTimeout(second, 2000); // setTimeout is thrown into web api and finally kept in callback queue after finishing time set by programmers
   
   new Promise ((resolve,reject)=>{
     resolve("I am right after third before second");
   }).then((res)=>console.log(res)); // Promise is thrown into microTask queue
   
   third();
   
   
 };
 first();