const mySeat = document.getElementsByClassName('kbd')
let number = 0;
let setLoss = 40;
let total = 0;
for ( const set of mySeat  ){        
set.addEventListener('click', function(){
    console.log(set)
    
    number = number + 1;
   
  
    if( number > 4){
      alert('no seat')
      number.removeEventListener('click',function(){
        
       
      })
        
    }
    document.getElementById('seat-count').innerText = number
    set.classList.add('bg-green-400')
    setLoss = setLoss - 1;
    document.getElementById('seat-loss').innerText = setLoss;
    
    const btnName = set.innerText
      
        const titleContainer = document.getElementById('container')
        const prices = parseFloat( document.getElementById('Price').innerText)
        const div = document.createElement('div')
       div.classList.add('flex')
       div.classList.add('gap-[220px]')
      


        const p = document.createElement('p')
        p.innerText = btnName

        const p1 = document.createElement('p')
        p1.innerText = 'Economoy'

        const p2 = document.createElement('p')
        p2.innerText = prices


        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(p2);

        titleContainer.appendChild(div);
         total = total + prices;
        document.getElementById('total-price').innerText = total;
       
        const grandTotal=  document.getElementById('grand-total')
        const offer = total;
        grandTotal.innerText = offer;
       
       
});
}
const apply = document.getElementById('apply');

apply.addEventListener('click',function(){

    const typeCoupon = document.getElementById('type-coupon').value;
    const coupon = typeCoupon.split(' ').join('').toUpperCase();
    if(coupon === 'NEW15'){
        
      const grandTotal=  document.getElementById('grand-total')
        const offer = total - (total*15/100);
        grandTotal.innerText = offer;
        hideElementById('apply-hide')
       
    }
   
   else if(coupon === 'COUPLE20'){
        
      const grandTotal=  document.getElementById('grand-total')
        const offer = total - (total*20/100);
        grandTotal.innerText = offer;
        hideElementById('apply-hide')
    }
    else {
      alert('please give coupon code ')
    }
   
    

})
function next(){
  hideElementById('header');
  hideElementById('main');
  hideElementById('footer')
  showElementById('success')
}
function buy(){
  hideElementById('header')
}
