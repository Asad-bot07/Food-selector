let menuItems=document.querySelectorAll("#items");
const arr=Array.from(menuItems);
arr.forEach(li => {
    // li.addEventListener('mouseover',function(){
    //     Input.value=this.textContent;
    // })
    li.addEventListener('click',function(){
        Input.value=this.textContent;
    })
});
const like=document.querySelector("#wishlist");
const buy=document.querySelector("#cart");
like.addEventListener('click',function(){
    if(Input.value==="")
    {
        alert('Select items to add')
    }
    else{
        alert('Added to wishlist Successfully')
    }
    Input.value=null;
});
buy.addEventListener('click',function(){
    if(Input.value==="")
    {
        alert('Select items to add')
    }
    else{
        alert('Added to cart Successfully')
    }
    Input.value=null;
});
