// export const logger =(store) => (next) => (action) => {
    
//         console.group(action.type)
//             console.log("The action is ", action)
//             const returnValue = next(action)
//             console.log("the updated state is ", store.getState())
//         console.groupEnd()
//         return returnValue
// }