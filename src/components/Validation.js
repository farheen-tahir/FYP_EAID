export const isEmpty=value=>{
    if(!value) return true
    return false
}
export const isEmail=email=>{
    const re=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
}
export const isLength=password=>{
    if(password.length<6) return true
    return false
}
export const isMatch=(password,cf_password)=>{
    if(password===cf_password) return true
    return false
}