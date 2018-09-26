let imgId;
let imgUrl;
let label;

function get_image() {
    $.post('get-image', data => {
        imgId = data.id;
        imgUrl = data.url;
        $('#img').attr('src', imgUrl);
    });
}

function setup() {
    get_image();

    createButton('Plastic Bottle').parent('#container').id('plastic-bottle');
    createButton('Metal').parent('#container').id('metal');
    createButton('Paper').parent('#container').id('paper');
    createButton('Other Plastic').parent('#container').id('plastic');
    createButton('Cloth').parent('#container').id('cloth');
    createButton('Glass').parent('#container').id('glass');
    createButton('Harmful Waste').parent('#container').id('harmful-waste');
    createButton('Kitchen Waste').parent('#container').id('kitchen-waste');
    createButton('Other').parent('#container').id('others');

    $('#plastic-bottle').attr('label', 1);
    $('#metal').attr('label', 2);
    $('#paper').attr('label', 3);
    $('#plastic').attr('label', 4);
    $('#cloth').attr('label', 5);
    $('#glass').attr('label', 6);
    $('#harmful-waste').attr('label', 7);
    $('#kitchen-waste').attr('label', 8);
    $('#other').attr('label', 9);

    $('button').click(e => {
        label = e.target.getAttribute('label');
        $.ajax({
            type: 'POST',
            url: 'submit',
            data: {'id': imgId, 'label': label},
            success: resp => {
                console.log(resp.msg);
                get_image();
            }
        });

    })
}

function login() {
    window.location.href = "login.html";
}