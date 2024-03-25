document.addEventListener('mousemove' , (e)=>{
    Object.assign(document.documentElement, {
                style: `
        --moveX: ${e.clientX - window.innerWight / 2}deg; 
         --moveY: ${e.clientX - window.innerHeight / 2}deg;
        `
    })
})