var plusBtn = document.querySelector(".plus");

var crossBtn = document.querySelector(".cross")

plusBtn.addEventListener("click", plusBtnClick)
crossBtn.addEventListener("click", closeDialog)

// Functions 

let displaykaflex = document.querySelector(".dialog")
function plusBtnClick() {
    displaykaflex.style.display = "flex"
    alert("welcome to my todo page")

}

let displaykanone = document.querySelector(".dialog")

function closeDialog() {
    displaykanone.style.display = "none"
}

// add ticket function
// ${boxContent.value}
// ${title.value}

function addTicket() {
    closeDialog()
    var boxes = document.querySelector(".wrapper main");
    var boxContent = document.getElementById("box-content");
    var title = document.getElementById("title");
    var puranaHTML = boxes.innerHTML;
    boxes.innerHTML = puranaHTML + `  
    <div class="box">
        <header>
            <div class="box-heading">${title.value}</div>
            <div class="icon color-1">-</div>
            <div class="icon color-2">E</div>
            <div class="icon color-3">x</div>
        </header>
        <main>
            <textarea rows="15">${boxContent.value}</textarea>
        </main>
    </div>`;
    // title.value = "";
    // boxContent.value = "";
     crossandMinimize();
}

// Cross and minimize function

function crossandMinimize() {
    let crossbtnarr = document.querySelectorAll('.icon.color-3');
    let minimizearr = document.querySelectorAll('.icon.color-1');

    for (let i = 0; i < crossbtnarr.length; i++) {
        crossbtnarr[i].addEventListener('click', closeticket);
    }
    for (let i = 0; i < minimizearr.length; i++) {
        minimizearr[i].addEventListener('click', minimize);
    }
    function closeticket(e) {
        let box = e.target.closest('.box')
        box.style.display = 'none'
    }
    function minimize(e) {
        let box = e.target.closest('.box')
        // console.log(box);
        let mainkatextarea = box.querySelector('main');
        console.log(mainkatextarea);
        if (mainkatextarea.style.display !== "none") {
            mainkatextarea.style.display = "none";
        }
        else {
            mainkatextarea.style.display = "flex";
        }
    }
}



