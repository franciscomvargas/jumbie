$('form').submit(function (e) {
    var _name = $("#nameField").val();
    var _email = $("#emailField").val();
    var _service = $("#serviceField option:selected").text();
    var _budget = $("#budgetField").val();
    var _msg = $("#messageField").val();
    
    // if(field1 == ""){
    //     alert('Please Fill Your Name');
    //     document.getElementById("nameField").focus();
    //     return false;
    // }
    // if(field2 == ""){
    //     alert('Please Fill Your Email');
    //     document.getElementById("emailField").focus();
    //     return false;
    // }
    // if(field3 == "" || field3.length > 10 || field3.length < 10){
    //     alert('Please Fill Your Mobile Number');
    //     document.getElementById("mobField").focus();
    //     return false;
    // }


    //    Name : entry.1604566445
    //  E-mail : entry.1210519929
    // Service : entry.1196420835
    //  Budget : entry.1779864861
    // Message : entry.277011542

    console.log('TEST'+ 123);
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSd_Ys-Xczvvd4JiKtLZ18-PpOdWzoIhnqZ5PY3ezL8KI7288A/formResponse?",
        data: {"entry.1604566445": _name, "entry.1210519929": _email, "entry.1196420835": _service, "entry.1779864861": _budget, "entry.277011542": _msg},
        type: "POST",
        dataType: "xml",
        success: function(d){},
        error: function(x, y, z){
            show('.contact-popup');
            readonly(['#nameField', '#emailField', '#budgetField', '#messageField']);
            hide('#contact-submit')
        }
    });
    return false;
})

/* ================= CONTACT POPUP ================ */
var show = function(id) {
	$(id).css('display', 'block');
}
var hide = function(id) {
	$(id).css('display', 'none');
}
var readonly = function(ids) {
    ids.forEach(id => {
        $(id).attr('readonly', true);
    });
}