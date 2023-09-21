let first=document.querySelector('#first')
let span1=document.querySelector('#span1')

let last=document.querySelector('#last')
let span2=document.querySelector('#span2')

let add=document.querySelector('#add')
let span3=document.querySelector('#span3')

let pin=document.querySelector('#pin')
let span4=document.querySelector('#span4')

let gen=document.querySelector('#gen')
let span5=document.querySelector('#span5')

let food=document.querySelector('#choise-food')
let span6=document.querySelector('#span6')

let state=document.querySelector('#state')
let span7=document.querySelector('#span7')

let country=document.querySelector('#country')
let span8=document.querySelector('#span8')

let button=document.querySelector('#button')

button.addEventListener('click',()=>{
span1.innerHTML=first.value
})

button.addEventListener('click',()=>{
    span2.innerHTML=last.value
    })
    
    button.addEventListener('click',()=>{
        span3.innerHTML=add.value
        })
        
        button.addEventListener('click',()=>{
            span4.innerHTML=pin.value
            })
            
            button.addEventListener('click',()=>{
                span5.innerHTML=gen.value
                })
                
                button.addEventListener('click',()=>{
                    span6.innerHTML=food.value
                    })
                    
                    button.addEventListener('click',()=>{
                        span7.innerHTML=state.value
                        })

                        button.addEventListener('click',()=>{
                            span8.innerHTML=country.value
                            })
                        