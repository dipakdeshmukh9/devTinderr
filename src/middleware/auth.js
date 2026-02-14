const adminAuth = (req , res , next) => {
    console.log("Admin Middleware Executed");
    const token = "xyz";
    const isAdminAuthenticated = token==="xyz";
    if(!isAdminAuthenticated){
    res.status(401).send("Unauthorized request");
    }else{
        next();
    }
};
const userAuth = (req , res , next) => {
    console.log("User Middleware Executed");
    const token = "xyz";
    const isUserAuthenticated = token==="xyz";
    if(!isUserAuthenticated){
    res.status(401).send("Unauthorized request");
    }else{
        next();
    }
};
module.exports = {
    adminAuth, userAuth
};