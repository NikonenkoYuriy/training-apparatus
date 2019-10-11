var pushUps = 'Отжима́ния — базовое физическое упражнение, выполняемое в планке и представляющее собой опускание-поднятие тела с помощью рук от пола.';

var pushUpTechnique = 'Для выполнения упражнения необходимо принять положение упора лёжа на полу. После этого согнуть руки в локтях, опустив при этом тело до параллели с полом, после чего, напрягая тело, медленно разогнуть руки, вернувшись в исходное положение.';


var pullingUp = 'Подтя́гивания — базовое физическое упражнение, развивающее группы мышц верхней части тела: широчайшие, бицепсы, брахиалис, грудные, верхняя часть спины, мышцы брюшной стенки, предплечья.';

var pullingUpTechnique = 'Упражнения могут выполняться на тренажёре с подвижной перекладиной, как показано на анимации справа, который имитирует подтягивания на перекладине и удобен для постепенного наращивания нагрузки.';


    //indexObj = 1 Круг
    //indexObj = 2 Отдых
    //indexObj = 3 Упражнение на время
    //indexObj = 4 Упражнение на количество раз
    //indexObj = 5 Отдых без временного ограничения 

    var arraySettings = [];

    function getObjectWithSettings(indexObj, name, image, idVideo, repeat, duration, descTechnology1, descTechnology2, btnNext, setSetting, name2, idVideo2, audio) {
        var obj = {
            name: name, // название упражнения 
            audio: audio, //включить / отключить звук
            image: image, // путь к картинке 
            repeat: repeat, // количество повторений 
            idVideo: idVideo, // id видео
            btnNext: btnNext, // включить / отключить кнопку arr_next 
            indexObj: indexObj, // id контента(круг, отдых, по времени, по количеству повторений)
            setSetting: setSetting, //настройки круга
            duration: duration, //продолжительность
            descTechnology1: descTechnology1, //описание упражнения
            //exerciseTime: exerciseTime, //время на упражнение
            descTechnology2: descTechnology2, //описание техники
            name2: name2,
            idVideo2: idVideo2
        }
        arraySettings.push(obj);
    }
