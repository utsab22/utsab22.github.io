$(function () {
    let timer; //Using this as a global variable to hold time
    const circleSize = $('#width').val();
    const colorArr = [
        "aqua",
        "purple",
        "red",
        "fuchsia",
        "gray",
        "green",
        "lime",
        "maroon",
        "navy",
        "black",
        "blue",
        "olive",
        "white",
        "yellow",
        "orange",
        "silver",
        "teal"
    ];
    function drawCircle(idx) {
        const color = colorArr[Math.round(Math.random(0, 1) * 10)];
        console.log(window.innerWidth)
        const newEl = $('<div>', {
            "id": "circle", "class": "circle", "css": {
              'width': circleSize + "px",
              'height': circleSize + "px",
              'background-color': color,
              'top': "50%",
              'left': idx === 0 ? "50%" : getRandomCirclePosition(window.innerWidth) + "px"
            }
        })
            .on("click", clickHandler)
            .on('mousemove', mouseMoveHandler)
            .on('mouseout', mouseOutHandler);

        return newEl;

    }

    function startAnim() {
        if (timer) {
            clearInterval(timer)
        }
        const noOfCircles = parseInt($('#number_circles').val());
        let el = [];
        for (let i = 0; i < noOfCircles; i++) {
            el.push(drawCircle(i));
        }
        $('#container').append(el);

        let growth_amount = parseInt($('#growth_amount').val());
        let growth_rate = parseInt($('#growth_rate').val());
        timer = setInterval(function () {
            let circleSize = parseInt($('div').find('.circle').css('height'));
            $('div').find('.circle')
                .css({
                    'height': circleSize + growth_amount + 'px',
                    'width': circleSize + growth_amount + 'px',
                });
        }, growth_rate);
    }
    startAnim();

    function mouseOutHandler() {
        $(this).css('opacity', 1);
    }
    function mouseMoveHandler(e) {
        $(this).css('opacity', 0.5);
    }
    function clickHandler() {
        $(this).remove();
    }

    function getRandomCirclePosition(limit) {
        let randomInt = Math.floor(Math.random() * limit);
        let finalAdjustedInt = randomInt;
        if (finalAdjustedInt > limit - circleSize) {
            finalAdjustedInt = limit - circleSize;
        }
        return finalAdjustedInt;
    }

    $("#startBtn").click(function () {
        $('div').find('.circle').remove();
        startAnim();
    });
})
