$(function () {
    $('#test').click(1111, function (e) {
        console.log(e.data); // 1111
    });

    $('button:eq(0)').on('click', function () {
        console.log(this);
        console.log(this.tagName);
        console.log(this.textContent);
    });

    $('p').on('click', function (e) {
        alert(e.target.textContent);
    });

    $('button:eq(1)').on('click', function (e) {
        $('p').click();
    });

    $('button:eq(2)').click('some data', function (e) {
        alert(e.data);
    });
});













