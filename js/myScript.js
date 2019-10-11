$(document).ready(function () {

    getObjectWithSettings(1, 'Отжимание', 'pushUps.jpg', 'https://player.vimeo.com/video/259411563?autoplay=0&muted=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0', '30 раз', 20, pushUps, pushUpTechnique, true, {
        index: 1,
        title: 'Сет 1/3',
        duration: 30
    }, 'name2', 'idVideo2', true);

    getObjectWithSettings(1, 'Приседание', 'pushUps.jpg', 'https://player.vimeo.com/video/259411563?autoplay=0&muted=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0', '35 раз', 20, pushUps, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, rem!', true, {
        index: 1,
        title: '',
        duration: 30
    }, 'name2', 'idVideo2', false);

    getObjectWithSettings(1, 'Подтягивание', 'pushUps.jpg', 'https://player.vimeo.com/video/259411563?autoplay=0&muted=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0', '40 раз', 20, pushUps, 'Lorem ipsum dolor sit amet, consectetur adipisicing', true, {
        index: 1,
        title: '',
        duration: 30
    }, 'name2', 'idVideo2', true);


    getObjectWithSettings(3, 'Отжимание', 'pushUps.jpg', 'https://player.vimeo.com/video/259411563?autoplay=0&muted=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0', '30 секунд', 30, pushUps, pushUpTechnique, false, '', 'name2', 'idVideo2', false);

    getObjectWithSettings(5, 'Отдых', 'repose.jpg', 'https://player.vimeo.com/video/259411563?autoplay=0&muted=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0', '', 20, 'Отдых Отдых Отдых', '', true, '', 'name2', 'idVideo2', false);

    getObjectWithSettings(3, 'Отжимание', 'pushUps.jpg', 'https://player.vimeo.com/video/259411563?autoplay=0&muted=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0', '30 раз', 30, pushUps, pushUpTechnique, true, '', 'name2', 'idVideo2', false);


    getObjectWithSettings(2, 'Отдых', 'repose.jpg', 'https://player.vimeo.com/video/259411563?autoplay=0&muted=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0', '', 20, 'Отдых Отдых Отдых', '', true, '', 'name2', 'idVideo2', false);

    getObjectWithSettings(1, 'Отжимание', 'pushUps.jpg', 'https://player.vimeo.com/video/259411563?autoplay=0&muted=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0', '30 секунд', 20, pushUps, pushUpTechnique, true, {
        index: 2,
        title: 'Сет 1/2',
        duration: 30
    }, 'name2', 'idVideo2', true);

    getObjectWithSettings(1, 'Приседание', 'pushUps.jpg', 'https://player.vimeo.com/video/259411563?autoplay=0&muted=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0', '20 секунд', 20, pushUps, pushUpTechnique, true, {
        index: 2,
        title: '',
        duration: 30
    }, 'name2', 'idVideo2', false);


    var saveData = $('#save-data');

    function saveDataLink(elem) {

        saveData.attr('data-title', elem.name)
            .attr('data-link', elem.idVideo)
            .attr('data-info', elem.descTechnology1)
            .attr('data-title2', elem.name2)
            .attr('data-link2', elem.idVideo2)
            .attr('data-info2', elem.descTechnology2);

    }

    var trainingTime = $('.training-time');

    var num = 10,
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
            updateDisplay();
        }
    }

    function updateDisplay() {
        showElement();
        updateExercise();
        totalTime();
    }

    var ex_outer = $('.ex_outer'),
        doneline = $('.doneline'),
        btn_next = $('.arr_next'),
        btn_prev = $('.arr_prev');

    function showElement() {
        $('.nextxt').removeClass('hidden_elem');
        btn_next.removeClass('disabled');
        btn_prev.removeClass('disabled');
        updateExerciseList();
    }

    function updateExerciseList() {

        arraySettings.forEach(function (obj, i) {

            var title = obj.setSetting != '' ? obj.setSetting.title : '';

            var block = `<div class="block-exercise"><h5 class="set">` + title + `</h5><div class="setline"><div class="img">
            <img src="img/` + obj.image + `" alt="image"></div>
            <div class="cont d-flex"><div class="cont_inner">
            <p class="name">` + obj.name + `</p><p class="infotxt">` + obj.repeat + `</p></div></div></div></div>`;


            var elem = obj.indexObj == 2 || obj.indexObj == 5 ? '<div class="rest"></div>' : '<div></div>';
            ex_outer.append(block);
            doneline.append(elem);

        });

    }

    var exerciseDuration = $('.inn'),
        exname = $('.exname'),
        repeat = $('.repeat'),
        helptxt = $('.helptxt'),
        index = 0,
        restIndex = 0,
        restTimeStop = 0,
        arraySettingsLength = arraySettings.length;

    function updateExercise() {

        if (index < arraySettingsLength) {
            if (arraySettings[index].indexObj == 1) {
                getSetSetting(); //круг
            } else {
                getActiveExercise(); //индивид.
            }
        }

    }

    var arraySetSetting = [],
        arrLength = 0;

    function getSetSetting() {
        clearArbitraryRest();
        arraySetSetting = arrayLength(index);
        var duration = arraySetSetting[0].setSetting.duration;
        arrLength = arraySetSetting.length;
        runSet(duration);
        updateExercisesFromSet();
    }


    var mySetTimeout = 0,
        currentIndex = 0;

    function runSet(duration) {

        if (duration > 0) {
            mySetTimeout = setTimeout(function () {
                duration--;
                exerciseDuration.text(getTime(duration));
                runSet(duration);
            }, 1000);
        } else {
            clearTimeout(mySetTimeout);
            exerciseDuration.text('');
            index += arrLength;
            updateExercise();
            updateClass();
            currentIndex = 0;
            if (index >= arraySettingsLength) showModalPopap();
        }

    }

    var timeRelax = $('.time-relax');

    function updateExercisesFromSet() {

        trainingTime.removeClass('hidden_elem');
        timeRelax.text('');

        if (currentIndex < 0) currentIndex = 0;
        else if (currentIndex >= arrLength - 1) currentIndex = arrLength - 1;

        var elem = arraySetSetting[currentIndex];
        updateActiveExercise(elem);
    }

    function getActiveExercise() {

        var elem = arraySettings[index],
            duration = elem.duration;
        clearArbitraryRest();
        trainingTime.removeClass('hidden_elem');
        timeRelax.text('');

        if (elem.indexObj == 2) { //Ограниченный отдых 
            showRest(duration, 2);
            //addAudio(2)
        } else if (elem.indexObj == 3) { // Упражнение на время
            timeExercises(duration, 3);
        } else if (elem.indexObj == 4) { //Упражнение на количество раз
            exerciseDuration.text('');
        } else if (elem.indexObj == 5) { //Неограниченный отдых 
            arbitraryRest();
        }
        updateActiveExercise(elem);

    }

    function arbitraryRestTime() {
        restTimeStop = setTimeout(function () {
            restIndex++;
            arbitraryRest();
        }, 1000);
    }

    function arbitraryRest() {
        trainingTime.addClass('hidden_elem');
        timeRelax.text(getTime(restIndex));
        exerciseDuration.text('');
        arbitraryRestTime()
    }

    function clearArbitraryRest() {
        restIndex = 0;
        clearTimeout(restTimeStop);
    }

    function showRest(duration, num) {
        exerciseDuration.text('');
        timeRelax.text(getTime(duration));
        trainingTime.addClass('hidden_elem');
        updateExerciseTime(duration, num);
    }

    function timeExercises(duration, num) {
        exerciseDuration.text(getTime(duration));
        updateExerciseTime(duration, 3);
    }

    var numb = $('.numb');
    var timeOrRep = $('.time-or-rep');

    function updateActiveExercise(elem) {
        var text = elem.repeat.split(" ");
        if (elem.repeat != '') {
            numb.removeClass('hidden_elem');
        } else {
            numb.addClass('hidden_elem');
        }

        if (elem.audio) {
            addAudio(2);
        }

        addVideo(elem);
        saveDataLink(elem);
        exname.text(elem.name);
        repeat.text(text[0]);
        timeOrRep.text(text[1]);
        helptxt.text(elem.description);
        //отключить / включить клик по кнопке next
        if (elem.btnNext) {
            btn_next.removeClass('disabled');
        } else {
            btn_next.addClass('disabled');
        }
    }

    function updateTime() {
        trainingTime.removeClass('hidden_elem');
        exerciseDuration.text('');
        timeRelax.text('');
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

    var modalPopap = $('#lastModal'),
        updateuser = $('#updateuser'),
        utmDuration = $('input[name="utm_duration"]');

    updateuser.on('click', function () {
        utmDuration.val(getTime(total));
    })

    function showModalPopap() {
        modalPopap.modal('show');
    }

    var myUpdateExerciseTime = 0;

    function updateExerciseTime(duration, num) {
        if (duration > 0) {
            myUpdateExerciseTime = setTimeout(function () {
                duration--;
                if (num == 2) showRest(duration, 2);
                else if (num == 3) timeExercises(duration, 3);

            }, 1000);
        } else {
            clearTimeout(myUpdateExerciseTime);
            index++;
            updateClass();
            updateExercise();
            if (index >= arraySettingsLength) showModalPopap();
        }
    }

    btn_next.on('click', function () {

        if (index < arraySettingsLength) {

            clearTimeout(myUpdateExerciseTime);

            if (arraySettings[index].indexObj == 1) {
                var arr = arrayLength(index);
                currentIndex++;
                if (currentIndex == arr.length) currentIndex = 0;
                updateExercisesFromSet();
            } else {
                index++;
                updateClass();
                updateExercise();
            }

        } else {
            showModalPopap();
        }

    });

    btn_prev.on('click', function () {

        if (arraySettings[index].indexObj == 1) {
            var arr = arrayLength(index);
            if (currentIndex == 0) currentIndex = arr.length;
            currentIndex--;
            updateExercisesFromSet();

        } else if (arraySettings[index - 1].indexObj == 1) {

            var arr = arrayLength(index - 1);
            index -= arr.length;
            currentIndex = 0;
            clearTimeout(myUpdateExerciseTime);
            updateExercise();
            updateClass();

        } else {

            if (index > 0) {

                clearTimeout(myUpdateExerciseTime);
                index = index < arraySettings.length ? index : index = arraySettings.length - 1;

                index--;
                updateClass();
                updateExercise();

            }
        }
    });

    function arrayLength(index) {
        return arraySettings.filter(obj => obj.setSetting.index == arraySettings[index].setSetting.index);
    }

    function updateClass() {

        doneline.children().removeClass('done');
        $('.block-exercise').removeClass('hidden_elem');
        for (var i = 0; i < index; i++) {
            doneline.children().eq(i).addClass('done');
            $('.block-exercise').eq(i).addClass('hidden_elem');
        }

    }

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
