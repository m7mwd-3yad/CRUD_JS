let title = document.querySelector('#title');
let price = document.querySelector('#price');
let tax = document.querySelector('#tax');
let dicount = document.querySelector('#dicount');
let ads = document.querySelector('#ads');
let total = document.querySelector('#total');
let count = document.querySelector('#count');
let category = document.querySelector('#Category');
let submit = document.querySelector('#submit');
let search = document.querySelector('#search');
let searchTitle = document.querySelector('#searchTitle');
let searchCategory = document.querySelector('#searchCategory');
let tbody = document.querySelector('#tbody');
let deleteAll = document.querySelector('#deleteAll');
let btnupdate = document.querySelector('#Update');
let update = document.querySelector('.Update');
let body = document.querySelector('body');
let spanTitle = document.querySelector('.spanTitle');
let spanPrice = document.querySelector('.spanPrice');
let spanTax = document.querySelector('.spanTax');
let spanDiscount = document.querySelector('.spanDiscount');
let spanCount = document.querySelector('.spanCount');
let spanCategory = document.querySelector('.spanCategory');
let span = document.querySelectorAll('span');
let inputs = document.querySelectorAll('input');
let inputPrices = document.querySelectorAll('.price input');
//
let mood = 'Create';
let tmp;
let Products = [];
if (localStorage.Products != null) {
    Products = JSON.parse(localStorage.Products);
} else {
    Products = [];
}

//



let getTotal = () => {

    if (price.value != '') {
        let netTax = +price.value * (+tax.value / 100);
        let totall = +price.value - +dicount.value - +ads.value - +netTax;
        total.innerHTML = Math.ceil(totall);
        total.style.background = 'green';
    } else {
        total.innerHTML = '';
        total.style.background = 'rgb(113, 8, 8)';
    }
}





//


let creatObject = () => {
    let newPruduct = {
        title: title.value,
        price: price.value,
        tax: tax.value,
        dicount: dicount.value,
        ads: ads.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }


    ///////////////////////////////////////////////////

    if (newPruduct.title.trim() == '') {
        spanTitle.style.display = 'block';
        title.classList.add('inputss')
    } else {
        title.classList.remove('inputss')
        spanTitle.style.display = 'none';
        if (mood === 'Create') {
            count.style.display = 'block';
            if (count.value == 1) {
                Products.push(newPruduct);
            } else {

                for (let i = 1; i <= count.value; i++) {
                    Products.push(newPruduct);
                }
            }
        } else {
            Products[tmp] = newPruduct;
            mood = 'Create';
            submit.innerHTML = 'Create'
            count.style.display = 'block';
            submit.style.background = '  #470053';
        }
        for (let i = 1; i < span.length; i++) {
            span[i].style.display = 'none';
        }
        renderData();
        localStorage.setItem('Products', JSON.stringify(Products))
        clearInput();
    }

    //////////////////////////////////////////////////////////




    if (newPruduct.price.trim() == '') {
        spanPrice.style.display = 'block';
        price.classList.add('inputss')
    } else {
        price.classList.remove('inputss')
        spanPrice.style.display = 'none';
        if (mood === 'Create') {
            count.style.display = 'block';
            if (count.value == 1) {
                Products.push(newPruduct);
            } else {

                for (let i = 1; i <= count.value; i++) {
                    Products.push(newPruduct);
                }
            }
        } else {
            Products[tmp] = newPruduct;
            mood = 'Create';
            submit.innerHTML = 'Create'
            count.style.display = 'block';
            submit.style.background = '  #470053';
        }
        for (let i = 1; i < span.length; i++) {
            span[i].style.display = 'none';
        }
        renderData();
        localStorage.setItem('Products', JSON.stringify(Products))
        clearInput();
    }

    ///////////////////////////////////////////

    if (newPruduct.tax.trim() == '') {
        spanTax.style.display = 'block';
        tax.classList.add('inputss')
    } else {
        tax.classList.remove('inputss')
        spanTax.style.display = 'none';
        if (mood === 'Create') {
            count.style.display = 'block';
            if (count.value == 1) {
                Products.push(newPruduct);
            } else {

                for (let i = 1; i <= count.value; i++) {
                    Products.push(newPruduct);
                }
            }
        } else {
            Products[tmp] = newPruduct;
            mood = 'Create';
            submit.innerHTML = 'Create'
            count.style.display = 'block';
            submit.style.background = '  #470053';
        }
        for (let i = 1; i < span.length; i++) {
            span[i].style.display = 'none';
        }
        renderData();
        localStorage.setItem('Products', JSON.stringify(Products))
        clearInput();
    }


    ///////////////////////////////////////////

    if (newPruduct.dicount.trim() == '') {
        spanDiscount.style.display = 'block';
        dicount.classList.add('inputss')
    } else {
        dicount.classList.remove('inputss')
        spanDiscount.style.display = 'none';
        if (mood === 'Create') {
            count.style.display = 'block';
            if (count.value == 1) {
                Products.push(newPruduct);
            } else {

                for (let i = 1; i <= count.value; i++) {
                    Products.push(newPruduct);
                }
            }
        } else {
            Products[tmp] = newPruduct;
            mood = 'Create';
            submit.innerHTML = 'Create'
            count.style.display = 'block';
            submit.style.background = '  #470053';
        }
        for (let i = 1; i < span.length; i++) {
            span[i].style.display = 'none';
        }
        renderData();
        localStorage.setItem('Products', JSON.stringify(Products))
        clearInput();
    }

    //////////////////////////////////////////////////////////

    if (newPruduct.count.trim() == '') {
        spanCount.style.display = 'block';
        count.classList.add('inputss')
    } else {
        count.classList.remove('inputss')
        spanCount.style.display = 'none';
        if (mood === 'Create') {
            count.style.display = 'block';
            if (count.value == 1) {
                Products.push(newPruduct);
            } else {

                for (let i = 1; i <= count.value; i++) {
                    Products.push(newPruduct);
                }
            }
        } else {
            Products[tmp] = newPruduct;
            mood = 'Create';
            submit.innerHTML = 'Create'
            count.style.display = 'block';
            submit.style.background = '  #470053';
        }
        for (let i = 1; i < span.length; i++) {
            span[i].style.display = 'none';
        }
        renderData();
        localStorage.setItem('Products', JSON.stringify(Products))
        clearInput();
    }

    //////////////////////////////////////////////////////////

    if (newPruduct.count.trim() == '') {
        spanCategory.style.display = 'block';
        category.classList.add('inputss')
    } else {
        category.classList.remove('inputss')
        spanCategory.style.display = 'none';
        if (mood === 'Create') {
            count.style.display = 'block';
            if (count.value == 1) {
                Products.push(newPruduct);
            } else {

                for (let i = 1; i <= count.value; i++) {
                    Products.push(newPruduct);
                }
            }
        } else {
            Products[tmp] = newPruduct;
            mood = 'Create';
            submit.innerHTML = 'Create'
            count.style.display = 'block';
            submit.style.background = '  #470053';
        }
        for (let i = 1; i < span.length; i++) {
            span[i].style.display = 'none';
        }
        renderData();
        localStorage.setItem('Products', JSON.stringify(Products))
        clearInput();
    }

    //////////////////////////////////////////////////////////

    // renderData();
    // localStorage.setItem('Products', JSON.stringify(Products))
}

submit.addEventListener('click', creatObject);

//

let clearInput = () => {
    title.value = '';
    price.value = '';
    tax.value = '';
    dicount.value = '';
    ads.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
    total.innerHTML = '';
    total.style.background = 'rgb(113, 8, 8)';
}

//

let renderData = () => {

    let table = '';
    for (let i = 0; i < Products.length; i++) {
        table +=
            `
         <tr>
            <td> ${i+1}</td>
            <td>  ${Products[i].title}</td>
            <td>${Products[i].price}</td>
            <td>${Products[i].tax} %</td>
            <td>${Products[i].dicount}</td>
            <td>${Products[i].ads}</td>
            <td>${Products[i].total}</td>
            <td>${Products[i].category}</td>
            <td><button onclick='updateData(${i}) ' id="Update">Update</button></td>
            <td><button onclick='deleteData(${i})' id="Delete">Delete</button></td>
         </tr>
         `
    }

    tbody.innerHTML = table;

    if (Products.length == 0) {
        deleteAll.style.display = 'none';
    } else {
        deleteAll.style.display = 'block';
        deleteAll.innerHTML = "Delete All " + Products.length;
    }

}

function deleteData(i) {
    Products.splice(i, 1);
    localStorage.Products = JSON.stringify(Products);
    renderData();
}


let deleteAllData = () => {

    deleteAll.style.display = 'block';
    localStorage.clear();
    Products.splice(0);
    renderData();
}

deleteAll.addEventListener('click', deleteAllData)

function updateData(i) {
    title.value = Products[i].title;
    price.value = Products[i].price;
    tax.value = Products[i].tax;
    ads.value = Products[i].ads;
    dicount.value = Products[i].dicount;
    category.value = Products[i].category;

    count.style.display = 'none';
    getTotal();
    submit.innerHTML = `Update Data : ${i+1}`
    submit.style.background = 'green';
    mood = "Update"
    tmp = i;
    scroll({
        top: 0,
        behavior: "smooth"

    });

}

renderData();