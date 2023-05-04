
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productmodel = document.getElementById("productmodel");
var productdesc = document.getElementById("productdes");
var productlist=[]
var addproductbtn = document.getElementById("addproductbtn")
var updateproductbtn = document.getElementById("updateproductbtn")
var productlistname = "productlist"

if(localStorage.getItem(productlistname)== null){
var productlist= []
}else{
    productlist= JSON.parse(localStorage.getItem(productlistname))
    dispalyproduct(productlist );
}
function addproduct() {
    // if(validproductname()==true){
        if(validproductprice()==true){
            if (validmodel()== true) {
                // if(validdesc()==true){
                       
    var product = {
        name:productName.value ,
        price:productPrice.value ,
        model:productmodel.value ,
        desc:productdesc.value 
    }
    productlist.push(product);
    dispalyproduct(productlist );
    localStorage.setItem(productlistname, JSON.stringify(productlist) )
    // updateformvalue();
// }
}
}}
function dispalyproduct(list) {
    var cartona =``;
    for(let i=0 ;i<list.length; i++ ){
        cartona +=`
        <tr>
        <td>${i+1}</td>
        <td>${list[i].newname?list[i].newname :list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].model}</td>
        <td>${list[i].desc}</td>
        <td><button onclick="getupdateprodect(${i})" class="btn btn-warning btn-sm">update</button></td>
        <td><button onclick="deleteproduct(${i})" class="btn btn-danger btn-sm">delete</button></td>
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML= cartona ;
}
function deleteproduct(index){
productlist.splice( index,1)
localStorage.setItem(productlistname, JSON.stringify(productlist) )
dispalyproduct(productlist)
}
function getupdateprodect(place){
    console.log(place ,'update') ;
    addproductbtn.classList.add('d-none') 
     updateproductbtn.classList.replace('d-none' , 'd-block')
    updateformvalue(productlist[place])
    index =place
}
function updateformvalue(flag){
    productName.value =flag ? flag.name :""
    productPrice.value =flag ? flag.price :""
    productmodel.value =flag ? flag.model :""
    productdesc.value =flag ? flag.desc :""
}
function setupdateproduct() {
    addproductbtn.classList.replace('d-none' , 'd-block')
    updateproductbtn.classList.replace('d-block' , 'd-none')
    // console.log(place ,'uuuuupdate') ;
    console.log(index ,'uuuuupdate') ;
       productlist[index].name =productName.value
       productlist[index].price =productPrice.value
       productlist[index].model =productmodel.value
       productlist[index].desc =productdesc.value

dispalyproduct(productlist)
localStorage.setItem(productlistname, JSON.stringify(productlist) )
updateformvalue();
}
function searchByName(term){
    var foundeditems=[]
    for(var i=0 ;i<productlist.length ; i++){
        if(productlist[i].name.toLowerCase().includes(term.toLowerCase())==true){
            productlist[i].newname = productlist[i].name.toLowerCase().replace(term.toLowerCase() ,`<span class="text-danger">${term}</span>`)
            foundeditems.push(productlist[i]) 
        }
    }
    dispalyproduct(foundeditems)
}
// validation 
// function validproductname() {
//     var regex = /^[A-Z][a-z]{3,8}$/
//     if(regex.test(productName.value)==true){
//         productName.style.border="none"
//         document.getElementById("wrongname").classList.add("d-none")

//         return true
//     }else{
//         productName.style.border="3px solid red"
//         document.getElementById("wrongname").classList.remove("d-none")
//         return false
//     }
    
// }
function validproductprice() {
    var regex = /^([1-9][0-9]{3}|10000)$/
    if(regex.test(productPrice.value)==true){
        productPrice.style.border="none"
        document.getElementById("wrongprice").classList.add("d-none")
        return true
    }else{
        productPrice.style.border="3px solid red"
        document.getElementById("wrongprice").classList.remove("d-none")
        return false
    }
}
function validmodel(){
    var regex = /^(tv|mobile|laPtop)$/i
    if(regex.test(productmodel.value)==true){
        productmodel.style.border="none"
        document.getElementById("wrongmodel").classList.add("d-none")

        return true
    }else{
        productmodel.style.border="3px solid red"
        document.getElementById("wrongmodel").classList.remove("d-none")
        return false
       

    }
}
function validdesc() {
    var regex = /^.{250,}$/m
    if (regex.test(productdesc.value)==true){
        productdesc.style.border="none"
        document.getElementById("wrongdesc").classList.add("d-none")
        return true
    }else{
        productdesc.style.border="3px solid red"
        document.getElementById("wrongdesc").classList.remove("d-none")
        return false  
    }
    
}

// function validname() {
//     var regex =/^[A-Z][a-z]{3,8}$/
//     if (regex.test(productName.value)==true) {
//         productName.style.border="none"
//         document.getElementById("wrongname").classList.add("d-none")
//         return true
        
//     } else {
//         productName.style.border="3px solid red"
//         document.getElementById("wrongname").classList.remove("d-none")
//         return false
//     }
    
// }