window.onload = function () {
    function doAjaxCall(the_request) {
        var request = null;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (request) {
            request.open("GET", the_request, true);
            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status == 200 || request.status == 0) {
                       // document.getElementById("vv").innerHTML = request.responseText;
                        dict = JSON.parse(request.responseText)
                        alert(dict:"total_num")
                    }
                }
            }
            request.send(null);
        } else {
            alert("error");
        }
    }
}