const tagel=document.getElementById("tags")
const tx=document.getElementById("tex")
tx.focus()
tx.addEventListener('keyup',(e)=>{
    createtags(e.target.value)
    if(e.key==='Enter'){
        setTimeout(()=>{
            e.target.value=''
        },10)
        randomselctor()
    }
    
})
function createtags(input){
    const tags=input.split(',').filter(tag=>tag.trim() 
    !=='').map(tag=> tag.trim())
tagel.innerHTML=''
tags.forEach(tag=> {
    const tagse1=document.createElement('span')
    tagse1.classList.add('tag')
    tagse1.innerText = tag
    tagel.appendChild(tagse1)
    
})
}
function randomselctor(){
    const times=30
    const interval =setInterval(()=>{
        const randomtag=pickrt()
        highlight(randomtag)
        setTimeout(()=>{
            unhighlight(randomtag)
        },100)
    },100)
    setTimeout(()=>{
        clearInterval(interval)
            setTimeout(()=>{
                const randomtag=pickrt()
                highlight(randomtag)
            },100)
        
    },times*100)
}
function pickrt(){
    const tags=document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}
function highlight(tag){
    tag.classList.add('highlight')
}
function unhighlight(tag){
    tag.classList.remove('highlight')
}
console.log("zdxfcgnvhbnm");