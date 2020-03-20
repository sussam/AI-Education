function liked1() {
    document.getElementById("1").innerHTML = "1 Like";
}

function liked2() {
    document.getElementById("2").innerHTML = "1 Like";
}

function liked3() {
    document.getElementById("3").innerHTML = "1 Like";
}

function liked4() {
    document.getElementById("4").innerHTML = "1 Like";
}

function post_now() {
    var button = document.getElementById('post_button');
    var txt = document.getElementById('post_txt');

    button.addEventListener('click', function () {
        var post_text = txt.value;
        targetField_post = post_text;
        document.getElementById('input_post').innerHTML =
            "<div class='row well' id='post_well'>" +
            "<div class='col-sm-3'>" +
            "<img src='friend_photo.png'> <p><b>John</b> <br>1 sec ago</p> </div>" +
            "<div class='col-sm-9'>"
            + post_text +
            "<br><br><br><hr class='line_post'><p id='0' class='text-left'></p>" +
            "<div class='block-buttons'> <div class='btn-group'>" +
            "<button type='button' class='btn btn-default btn-sm' onclick='liked0()'>" +
            "<span class='glyphicon glyphicon-thumbs-up'></span> Like </button>" +
            "<button type='button' class='btn btn-default btn-sm'>" +
            "<span class='glyphicon glyphicon-comment'></span> Comment </button>" +
            "</div></div></div>";

    });
}