let http = axios.create({
    baseURL: "https://shop.cyberlearn.vn/api/", //endpoint
    timeout: 30000,
    headers: {
        tokenCyberSoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMiIsIkhldEhhblN0cmluZyI6IjA4LzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNjI5NDQwMDAwMCIsIm5iZiI6MTcxMjk0MTIwMCwiZXhwIjoxNzM2NDQyMDAwfQ.dTEJFBH9VnWoG3lE6KU86OTAeY78oRLVFwIiQgbKkCM"
    }
});


async function signUp(event) {
    event.preventDefault();
    try {
        let user = getValueForm();
        let arrUser = [];
        let result = await http.post("Users/signup", user);
        console.log(result);
        arrUser.push(result.data.content);
        renderArrUser(arrUser);
    }
    catch (err) {
        console.log(err);
    }

}

function renderArrUser(arrUser) {
    let content = "";
    for (let u of arrUser) {
        // console.log(arrUser);
        let { email, name, phone, gender } = u
        content += `
            <div class="bg-white text-center text-warning p-2">
            <h4>Thông tin bạn vừa đăng ký</h3>
              <p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Phone: ${phone}</p>
              <p>Gender: ${gender ? "Male" : "Female"}</p>
              </div>
        `
    }
    document.getElementById("kq").innerHTML = content;
}


function getValueForm() {
    let isValid = true;
    let isValidpPass = true;
    let passValue = "";
    let cfPassValue = "";
    let arrField = document.querySelectorAll("#frmSignIn input");
    let user = new User();
    // console.log(user);
    for (let item of arrField) {
        let { id, value, type } = item
        let dataValidation = item.getAttribute("data-validation");
        if (type === 'radio' && item.checked) {
            user["gender"] = value;
        }
        // else if (id == 'password' || id == 'cfPassword') {
        //     if (pass === cfPass) {
        //         user["password"] = cfPass;
        //     }
        //     else {

        //     }
        // }
        else if (type !== 'radio' && id != 'password' && id != 'cfPassword') {
            user[id] = value;
        }
        let theCha = item.parentElement;
        // console.log(theCha);
        let theSpanThongBao = theCha.querySelector("span");
        // console.log(theSpanThongBao);
        let isEmpty = checkEmptyValue(value, theSpanThongBao);
        isValid &= isEmpty;
        if (!isEmpty) {
            continue;
        }
        if (dataValidation == "ktHoTen") {
            isValid &= checkMinMaxValue(value, theSpanThongBao, 4, 6);
        } else if (dataValidation == "ktEmail") {
            isValid &= checkEmailValue(value, theSpanThongBao);
        } else if (dataValidation == "ktPass") {
            passValue = value;
            isValid &= checkPassWord(value, theSpanThongBao);

        } else if (dataValidation == "ktCfPass") {
            cfPassValue = value;
            isValid &= checkPassWord(value, theSpanThongBao);
        }
    }

    if (!isValid) {
        return;
    } else if (passValue !== cfPassValue) {
        isValid = false;
    }
    return user;
}


document.getElementById("frmSignIn").onsubmit = signUp;