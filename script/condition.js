const mySeat = document.getElementsByClassName('kbd')
let count = 0;
let countLoss = 40;
let total = 0;
for ( const set of mySeat  ){        
set.addEventListener('click', function(){
    console.log(set)
    
    count = count + 1;
   
  
    if( count > 4){
      alert('no seat')
      count.removeEventListener('click',function(){
        
       
      })
        
    }
    document.getElementById('seat-count').innerText = count
    set.classList.add('bg-green-400')
    countLoss = countLoss - 1;
    document.getElementById('seat-loss').innerText = countLoss;
    
    const btnName = set.innerText
      
        const titleContainer = document.getElementById('container')
        const prices = parseFloat( document.getElementById('Price').innerText)
        const div = document.createElement('div')
       div.classList.add('flex')
       div.classList.add('gap-[220px]')
      


        const p = document.createElement('p')
        p.innerText = btnName

        const p1 = document.createElement('p')
        p1.innerText = 'employee'

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
       
    }
   
   else if(coupon === 'COUPLE20'){
        
      const grandTotal=  document.getElementById('grand-total')
        const offer = total - (total*20/100);
        grandTotal.innerText = offer;
       
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
