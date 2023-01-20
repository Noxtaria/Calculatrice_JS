const DisplayCalc = document.querySelector("#calculation");

// console.log(DisplayCalc)

const result = document.querySelector("#result");

// console.log(result);

let btns = document.querySelectorAll("#button-calc");

// console.log(btns);

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn.dataset.action);
        console.log(btn.textContent);

        let user = btn.dataset.action;
        // result.textContent = user;
        
        
        
        if(result.textContent == 0) {
            result.textContent = user;  
        } else {
            result.textContent += user;
            // result.textContent = result.textContent + user;
        }


        // console.log(btnValue);
    })
})