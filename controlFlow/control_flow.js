let userRole = "Admin";
let isLoggedIn = true;
let userType = "Admin";
let isAuth = true;
let userMessage;
let accessLevel;
let userCategory;


if (userRole === "Admin") {
  accessLevel = "Full access granted";
} else if (userRole === "Manager") {
  accessLevel = "Limited access granted";
} else {
  accessLevel = "No access granted";
}

if (isLoggedIn) {
  if (userRole === "Admin") {
    userMessage = "Welcome, admin!";
  } else {
    userMessage = "Welcome, user!";
  }
} else {
  userMessage = "Please log in.";
}

switch (userType) {
  case "Admin":
    userCategory = "Adminstrator";
    break;
  case "Manager":
    userCategory = "Manager";
    break;
  case "Subscriber":
    userCategory = "Subscriber";
    break;
    default:
      userCategory = "Unknown";
}

let authStatus = isAuth ? "Authenticated" : "Not authenticated";

console.log("Access level:", accessLevel);
console.log("User message:", userMessage);
console.log("User category:", userCategory);
console.log("Authenticated status:", authStatus);