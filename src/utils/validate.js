export const checkValidData = (email,password) =>{
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!validEmail) return "Email ID is not valid";
    if(!validPass) return "Password is not valid";

    return null;
}