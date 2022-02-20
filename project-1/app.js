/**
    Project Requirements: -Change the background color by generating random RGB color by clicking a button.
**/

// Step-1: Create onload handle.
window.onload = () => {
    main();
}
// Step-3: Collect all Necessary References.
function main(){
    const root = document.getElementById("root");
    const changebtn = document.getElementById("change-btn");

    // Step-4: Handle the click event.
    changebtn.addEventListener("click", function() {
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    })
}

// Step-2: Random Color Generator Function.
function generateRGBColor(){
    // rgb(0, 0, 0)
    // rgb(255, 255, 255)
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}


