/**
    Project Requirements: 
    -Change the background color by generating random RGB color by clicking a button.
    -Also display the HEX Code to a disabled input field.
**/

// Step-1: Create onload handle.
window.onload = () => {
    main();
}

// Step-3: Collect all Necessary References.
function main(){
    const root = document.getElementById("root");
    const changeBtn = document.getElementById("change-btn");
    const output = document.getElementById("output");

    // Step-4: Handle the click event.
    changeBtn.addEventListener("click", function() {
        const bgColor = generateHEXColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
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


