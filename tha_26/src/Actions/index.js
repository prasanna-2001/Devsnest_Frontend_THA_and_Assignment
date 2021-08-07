// const increaseNumber = () =>{
//     return{
//         type: "INC_NUMBER",
//     };
// };
// const decreaseNumber = () =>{
//     return{
//         type: "DEC_NUMBER",
//     };
// };

// export {increaseNumber, decreaseNumber};

const userName = (data)=>{
    return {
        type: "userName",
        data: data,
    }
}

const userEmail = (data)=>{
    return {
        type: "userEmail",
        data: data,
    }
}
export {userName, userEmail};