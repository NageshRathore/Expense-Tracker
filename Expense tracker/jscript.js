const form=document.getElementById('form');
const elist=document.getElementById('elist');
let totalAmount = 0;
form.addEventListener("submit",function(event){
    event.preventDefault();
    const descr  =document.getElementById('descr').value;
    const category=document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if(document && category && !isNaN(amount)){
        const newr=document.createElement('tr');
        newr.innerHTML=`<td>${descr}</td><td>${category}</td><td>${amount}</td>`;
        elist.appendChild(newr); 
        totalAmount += amount;
        updateTotal();
    
    document.getElementById('descr').value='';
    document.getElementById('category').value='';
    document.getElementById('amount').value='';
    }
    else{
        alert('please fill out all details');
    }


})
function updateTotal() {
    let totalRow = document.getElementById('totalRow');
    if (!totalRow) {
        totalRow = document.createElement('tr');
        totalRow.id = 'totalRow';
        totalRow.innerHTML = `<td colspan="2"><strong>Total</strong></td><td id="totalAmount">0.00</td>`;
        elist.appendChild(totalRow);
    }
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}