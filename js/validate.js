var $ = function (id) {
    return document.getElementById(id);
}

var check_valid = function () {
    var is_ok = true;
    var fname = $("fname").value;
    var lname = $("lname").value;
    var email = $("email").value;
    var re_enter = $("re_enter").value;
    var pass = $("pass").value;
    var nam = $("nam").checked;
    var nu = $("nu").checked;
    //check name
    if (fname === "") {
        is_ok = false;
        $("name_error").innerHTML = "this field is required";
    } else {
        $("name_error").innerHTML = "";
    }

    if (lname === "") {
        is_ok = false;
        $("name_error").innerHTML = "this field is required";
    } else {
        $("name_error").innerHTML = "";
    }


    //check mail
    if (email === "") {
        is_ok = false;
        $("email_error").innerHTML = "this field is required";
    } else {
        $("email_error").innerHTML = "";
    }

    if (email != re_enter) {
        is_ok = false;
        $("re_enter_error").innerHTML = "this entry must equal first ontry";
    } else {
        $("re_enter_error").innerHTML = "";
    }

    //check pass
    if (pass === "") {
        is_ok = false;
        $("pass_error").innerHTML = "this field is required";
    } else {
        $("pass_error").innerHTML = "";
    }

    //check gender
    if (nam == false && nu == false) {
        is_ok = false;
        $("gender_error").innerHTML = "this field is required";
    } else {
        $("gender_error").innerHTML = "";
    }

    //everything is ok
    if (is_ok) {
        alert("Dang ky thanh cong");
        $("register").submit();
    }
}

window.onload = function () {
    $("join").onclick = check_valid;
}