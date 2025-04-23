const loginUser = (email,password,onSucess,onError) =>{
    setTimeout(() => {
        const error = false;
        if(error){
            onError(new Error('error in login'))
        }
        console.log("user loged")
       onSucess({email});
    }, 1500);
}

//callback hell
const getUserVideos = (email,callback)=>{
    setTimeout(() => {
        callback(['video1','video2','video3'])
    }, 2000);
}
const getVideoDetails = (video,callback)=>{
    setTimeout(() => {
        callback({title : 'video title'})
    }, 2500);
}

const user = loginUser('felipe@gmail.com','1233456' ,(user)=>{
    getUserVideos(user.email,(videos)=>{
       getVideoDetails(videos[1], (videosDetails)=>{
        console.log({videosDetails})
       })
    })
}, (error)=>{
    console.log({error})
}) 

console.log({user})


