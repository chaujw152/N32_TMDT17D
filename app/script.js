function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = "Vui lòng nhập số đo của bạn";
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    var bmiText = "BMI của bạn là " + bmi.toFixed(2) + ". ";

    if (bmi < 18.5) {
        bmiText += "Bạn quá gầy";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiText += "Bạn có cân nặng bình thường";
    } else if (bmi >= 25 && bmi < 30) {
        bmiText += "Bạn đang béo phì.";
    } else {
        bmiText += "Không nhận được số liệu, thử lại";
    }

    document.getElementById('result').innerHTML = bmiText;
}
