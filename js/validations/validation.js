
function checkEmptyValue(value, span) {
    if (value) {
        span.innerHTML = "";
        return true;
    } else {
        // xử lý khi dữ liệu là chuỗi rỗng
        span.innerHTML = "Vui lòng không bỏ trống trường này";
        return false;
    }
}


function checkMinMaxValue(value, span, min, max) {
    let doDaiKyTu = value.length;
    if (doDaiKyTu >= min && doDaiKyTu <= max) {
        span.innerHTML = "";
        return true;
    }
    else {
        span.innerHTML = `Vui lòng nhập tối thiểu ${min} ký tự và tối đa ${max} ký tự`
        return false;
    }
}



function checkEmailValue(value, span) {
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Phương thức test ==> value ==> true | false
    let isValid = regexEmail.test(value);
    if (isValid) {
        // Đây là trường hợp khi dữ liệu người dùng là email và qua được phương thức test
        span.innerHTML = "";
        return true;
    }
    else {
        // Đây là trường hợp khi dữ liệu người dùng  không phải email
        span.innerHTML = "Vui lòng nhập đúng định dạng email";
        return false;
    }

}


function checkHoTen(value, span) {
    let regexHoTen = /^[^\d]*$/;
    //   let regexHoTen =  /^[a-zA-ZÀ-ỹ\s]+$/
    let isValid = regexHoTen.test(value);
    if (isValid) {
        span.innerHTML = "";
        return true;
    }
    else {
        span.innerHTML = "Họ Tên phải là chữ, không bao gồm số, symbol :(("
        return false;
    }
}


function checkPassWord(value, span) {
    let regexPass = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    let isValid = regexPass.test(value);
    if (isValid) {
        span.innerHTML = "";
        return true;
    }
    else {
        span.innerHTML = "Mật khẩu tối thiểu 6-10 ký tự, chứa ít nhất 1 chữ số, 1 chữ in hoa và 1 ký tự đặc biệt"
        return false;
    }
}
