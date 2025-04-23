
const loginUser = (email,password) =>{
    return new Promise((resolve,reject)=>{
        const error = false
        if(error){
            reject (new Error("error"))
        }
        console.log("user logged")
        resolve({email})
    })
}   

const getUserVideos = (email)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getUserVideo")
            resolve(['video1','video2','video3'])
        }, 2000); 
    })

}
const getVideoDetails = (videos)=>{
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getvideeoDetail")
            resolve({title : 'video title'})
        }, 2500);
    });
}


loginUser("felipe@gmail", "1234")
    .then((user) => {
        return getUserVideos(user.email); 
    })
    .then((videos) => {
        return getVideoDetails(videos[0]); 
    })
    .then((details) => {
        console.log(details); 
    })
    .catch((err) => {
        console.error(err.message); 
    });