async function getPosts() {
    const response=await fetch('https://dummyjson.com/products');
    const product=await response.json();
    const data=product.products;

    const result= data.map(function(ele){
return `

<div class='product'>
<h2>${ele.title}</h2>
<img src=${ele.thumbnail}>
<p>${ele.price}$</p>


</div>

`
    }).join('');
    document.querySelector('.elements').innerHTML=result;
}



getPosts();
