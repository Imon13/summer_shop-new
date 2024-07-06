var total = 0;
function handleOnClickKasso(){
   const ki = document.getElementById('k')
   const s = document.getElementById('s')
   const li = document.createElement('li')
   li.innerText = ki.innerText
   s.appendChild(li)
   console.log(li)
   const priceString  = document.getElementById('price-1').innerText
   // console.log(  typeof price)
   const price = parseFloat(priceString)
   total = parseFloat(total)+price
   console.log(total)
   document.getElementById('total').innerText = total
    
}
function handleOnClick2ponds(){
    const ki = document.getElementById('ponds')
    const s = document.getElementById('s')
    const li = document.createElement('li')
    li.innerText = ki.innerText
    s.appendChild(li)
    console.log(li)
    const priceString  = document.getElementById('price-2').innerText
   // console.log(  typeof price)
   const price = parseFloat(priceString)
   total = parseFloat(total)+price
   console.log(total)
   document.getElementById('total').innerText = total
     
 }
 function handleOnClick3bottole(){
    const ki = document.getElementById('bottole')
    const s = document.getElementById('s')
    const li = document.createElement('li')
    li.innerText = ki.innerText
    s.appendChild(li)
    console.log(li)
    const priceString  = document.getElementById('price-3').innerText
   // console.log(  typeof price)
   const price = parseFloat(priceString)
   total = parseFloat(total)+price
   console.log(total)
   document.getElementById('total').innerText = total
     
 }