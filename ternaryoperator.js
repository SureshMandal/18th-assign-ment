function getGreeting(isMorning) {
    return isMorning ? "Good morning" : "Good evening";
}
console.log(getGreeting(true)); 
console.log(getGreeting(false)); 


let message;
if (status?.toLowerCase() === "loading") {
    message = "Loading...";
} else {
    message = "Loaded!";
}



const user = {
    profile: {
      email: "john.doe@example.com",
    },
   };
   console.log(user.profile?.email); // "john.doe@example.com"
   console.log(user.account?.email); // undefined


   const user = { name: "Alice" }; // No address property
 const getUserCity = (user) => {
  // Your code here
 };
 console.log(getUserCity(user)); // "Unknown"