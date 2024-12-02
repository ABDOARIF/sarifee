function convertCurrency() {
    const madAmount = parseFloat(document.getElementById("madAmount").value);
    const usdToMadRate = 10.63;
    const rubToUsd = 114;
    const profitMargin = 3;

    if (isNaN(madAmount)) {
        document.getElementById("result").innerText = "يرجى إدخال مبلغ صحيح.";
        return;
    }

    const rubAmount = (madAmount / (usdToMadRate + profitMargin)) * rubToUsd;
    document.getElementById("result").innerText = `المبلغ بالروبل الروسي: ${rubAmount.toFixed(2)} RUB`;
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("تم إرسال الرسالة بنجاح!");
});

document.getElementById("bankInfoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("تم تسجيل المعلومات البنكية بنجاح!");
});

