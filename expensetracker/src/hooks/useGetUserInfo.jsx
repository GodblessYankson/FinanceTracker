export const useGetUserInfo = () => {
    const auth = JSON.parse(localStorage.getItem("auth")) || {}
    const { 
        firstName, 
        lastName, 
        email,
        phone,
        age, 
        role,
        income,
        hometown,
        nextOfKin,
        nextOfKinPhone
     } = auth

     return {
        firstName, 
        lastName, 
        email,
        phone,
        age, 
        role,
        income,
        hometown,
        nextOfKin,
        nextOfKinPhone
     }
}