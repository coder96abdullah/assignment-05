// const btns=document.querySelectorAll('.kbd'); 
let count = 0;
for (const btn of document.querySelectorAll('.kbd')) {
    btn.addEventListener('click', function () {
        count++;
        if (count <= 4) {
            btn.classList.add('bg-green-700', 'text-white');
            document.getElementById('seat-booked').innerText = count;
            const num = document.createElement('p');
            num.innerText = btn.innerText + ' --------------------Economy--------------- ' + '550';
            document.getElementById('seat-details').appendChild(num);
            const total=count*550;
            document.getElementById('total-price').innerText=total.toFixed(2);
            if(count==4)
               {
                document.getElementById('copun').removeAttribute('disabled');
                document.getElementById('apply-btn').addEventListener('click',function(){
                    if(document.getElementById('copun').value==='NEW15')

                     { 
    
                        document.getElementById('vanish').classList.add('hidden');
                        const tem=document.createElement('p');
                        const discount=document.getElementById('total-price').innerText*0.15;
                        tem.innerText='discount : '+discount.toFixed(2);
                      
                        document.getElementById('replace').appendChild(tem);
                        document.getElementById('grand-total').innerText=(total-discount).toFixed(2);
                     
                         
                }  
                else if(document.getElementById('copun').value==='Couple 20') 
                {
                    document.getElementById('vanish').classList.add('hidden');
                        const tems=document.createElement('p');
                        const discounts=document.getElementById('total-price').innerText*0.2;
                        
                 
                        document.getElementById('replace').appendChild(tems);
                        document.getElementById('grand-total').innerText=(total-discounts).toFixed(2);
                } 
                else
                   alert('coupon is not correct'); 
                })
                 
               }

        }
        else
            alert('One person can not purchase more than 4 ticket');


    })
}