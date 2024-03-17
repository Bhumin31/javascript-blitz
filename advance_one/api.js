const button = document.querySelector('.getDetails')


let p = document.querySelector('.details')

button.addEventListener('click',function(e){
    e.preventDefault();
    const idGH  = String(document.querySelector('#id').value);
    const url = `https://api.github.com/users/${idGH}`
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onreadystatechange = function(){
    if(xhr.readyState === 4)
    {
        const data = JSON.parse(this.responseText)
        console.log(data.followers);
        p.innerHTML = `
        <img src="${data.avatar_url}"></img><br>
        Name : ${data.login}<br>
        Followers : ${data.followers}<br>
        Following : ${data.following}<br>
        `
    }
}
xhr.send()
})


