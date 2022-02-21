/**
    Project Requirements: 
    - Change the background color by generating random HEX color by clicking a button.
    - Also display the HEX Code to a disabled input field.
    - Add a button to copy the color code.
    - Add a Toast Message when Copied.
**/


// Global Variable
let div = null;

// Step-1: Create onload handle.
window.onload = () => {
    main();
}

// Step-3: Collect all Necessary References.
function main(){
    const root = document.getElementById("root");
    const output = document.getElementById("output");
    const changeBtn = document.getElementById("change-btn");
    const copyBtn = document.getElementById("copy-btn");


    // Step-4: Handle the change button click event.
    changeBtn.addEventListener("click", function() {
        const bgColor = generateHEXColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

    // Step-5: handle the copy button click event.
    copyBtn.addEventListener("click", function() {
        navigator.clipboard.writeText(output.value);

        if(div != null){
            div.remove();
            div = null;
        }
        generateToastMessage(`${output.value} copied`);
    });
}

// Step-2: Random Color Generator Function.
function generateHEXColor(){
    // #000000
    // #ffffff
    const h = Math.floor(Math.random() * 255);
    const e = Math.floor(Math.random() * 255);
    const x = Math.floor(Math.random() * 255);

    return `#${h.toString(16)}${e.toString(16)}${x.toString(16)}`;
}

function generateToastMessage(msg){
    div = document.createElement("div");
    div.innerText = msg;
    div.className = "toast-message toast-message-slide-in"

    div.addEventListener("click", function() {
        div.classList.remove("toast-message-slide-in");
        div.classList.add("toast-message-slide-out");

        div.addEventListener("animationend", function() {
            div.remove();
            div = null;
        });
    });

    document.body.appendChild(div);
}

// Step-6: Activate toast message.

// Step-7: Create a dynamic toast message.

// Step-8: clear toast message.







