jQuery(document).ready(function($) {
   
    let name = 'tracking';    
    let days = 1;
    let post_id = my_script_vars.postID;
    let post_ids = JSON.parse(readCookie(name));
    if( post_ids ) {
        if (post_ids.includes(post_id)){
            //pass
        }
        else {
            post_ids.push(post_id)
        }
    } else {
    post_ids = [post_id]; 
    }

    createCookie(name, JSON.stringify(post_ids), days)

     if(post_ids.length % 3 == 0){

        show_secret(post_ids.length);
       // eraseCookie(name)
    }   
    
});

function show_secret(length){
    let counter = length / 3;
    let elem = document.getElementsByClassName("secret_"+length)[0];
   
    elem.style.display = 'block';
}

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

