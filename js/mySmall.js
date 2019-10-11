$(document).ready(function () {

    getObjectWithSettings(3, 'Отжимание', 'pushUps.jpg', 'https://player.vimeo.com/video/259411563?autoplay=0&muted=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0', '30 секунд', 30, pushUps, pushUpTechnique, true, '', 'name2', 'idVideo2', false);

    var saveData = $('#save-data');

    function saveDataLink(elem) {

        saveData.attr('data-title', elem.name)
            .attr('data-link', elem.idVideo)
            .attr('data-info', elem.descTechnology1)
            .attr('data-title2', elem.name2)
            .attr('data-link2', elem.idVideo2)
            .attr('data-info2', elem.descTechnology2);

    }

    var trainingTime = $('.training-time'),
        num = 10,
        myStart;

    function start() {
        if (num > 0) {
            if (num == 5) addAudio(1);
            trainingTime.text(num == 10 ? '00:' + num : '00:0' + num);
            myStart = setTimeout(function () {
                num--
                start();
            }, 1000);
        } else {
            clearTimeout(myStart);
            trainingTime.text('00:00');
            $('.nextxt').removeClass('hidden_elem');
            updateActiveExercise(arraySettings[0]);
            totalTime();
        }
    }


    var arraySetSetting = [],
        exname = $('.exname'),
        repeat = $('.repeat'),
        helptxt = $('.helptxt'),
        timeOrRep = $('.time-or-rep'),
        mySetTimeout = 0,
        currentIndex = 0;


    function updateActiveExercise(elem) {
        var text = elem.repeat.split(" ");

        if (elem.audio) {
            addAudio(2);
        }

        addVideo(elem);
        saveDataLink(elem);
        exname.text(elem.name);
        repeat.text(text[0]);
        timeOrRep.text(text[1]);
        helptxt.text(elem.descTechnology1);

    }

    function getTime(duration) {

        var hours = Math.floor(duration / 3600),
            minutes = Math.floor((duration %= 3600) / 60),
            seconds = duration % 60;

        hours = hours > 9 ? hours : '0' + hours;
        minutes = minutes > 9 ? minutes : '0' + minutes;
        seconds = seconds > 9 ? seconds : '0' + seconds;

        return hours > 0 ? hours + ':' + minutes + ':' + seconds : minutes + ':' + seconds;

    }

    var total = 0,
        mytotalTime = 0;

    function totalTime() {

        mytotalTime = setTimeout(function () {
            total++;
            trainingTime.text(getTime(total));
            totalTime();
        }, 1000);

    }


    var updateuser = $('#updateuser'),
        utmDuration = $('input[name="utm_duration"]');

    updateuser.on('click', function () {
        utmDuration.val(getTime(total));
    });


    var iframe = $("#iframe");

    function addVideo(elem) {
        iframe.attr('src', elem.idVideo);
    }

    var audioExercise = $("#audio-exercise")[0];
    var audioSet = $("#audio-set")[0];

    function addAudio(num) {
        if (Number(num) == 1) audioSet.play();
        else audioExercise.play();
    }

    start();
    addVideo(arraySettings[0]);

});