const input = document.querySelector('input')
const btn = document.querySelector('button')



async function getData(username){
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    return data;   
}

btn.addEventListener('click', async () =>{
    let response = getData(input.value);
    let user = await response;
    console.log(user);
    // document.write(user.bio,"\n", user.email, "<img href='${user.avatar_url}'>"); 
    document.querySelector('boutputlockquote').innerHTML

})