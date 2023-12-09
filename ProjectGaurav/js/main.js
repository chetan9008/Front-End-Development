let phone = document.querySelector('.phone-number');


phone.addEventListener('click', () => {
    // var copyText = document.getElementById("myInput");

    // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    let copyText = "7017457784";
    navigator.clipboard.writeText(copyText);
    // Clipboard.writeText(copyText);

    // Alert the copied text
    alert("Copied the text: " + copyText);
})