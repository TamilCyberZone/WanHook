function runHook() {
    let userCode = document.getElementById("codeInput").value;
    try {
        eval(userCode); // பயனர் JS code இயக்கம்
    } catch (err) {
        alert("பிழை: " + err);
    }
}
