var body = {
    setColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
var Link = {
    setColor: function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css('color', color);
    }
}
function DarkLightHandler(self) {
    var target = document.querySelector('body')
    if (self.value === 'Darkmode') {
        body.setBackgroundColor('black');
        body.setColor('white');
        self.value = 'Lightmode';

        Link.setColor('powderblue');
    }
    else {
        body.setBackgroundColor('white');
        body.setColor('black');
        self.value = 'Darkmode';

        Link.setColor('blue');
    }
}