let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

tabs.forEach(item => {
    item.addEventListener('click', () => {
        tabs.forEach(items => {
            items.classList.remove('tabheader__item-active')
        })
        item.classList.add('tabheader__item-active')
    })
})

function hideTabContent() {

    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

}

function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', function(event) {
const target = event.target;
    if(target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

const modalTrigger = document.querySelectorAll('.show-modal'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('.hide-modal');

modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
});

function closeModal() {
    if(document.querySelector('.burger__overflow').classList.contains('hide')) {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    } else {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = 'hidden';
    }
}

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) { 
        closeModal();
    }
});

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}
window.addEventListener('scroll', showModalByScroll);

// =====================

let nextBtn = document.querySelector('.next__img'),
    prevBtn = document.querySelector('.prev__img'),
    slideContent = document.querySelectorAll('.bottom-two__img'),
    imgs = document.querySelectorAll('.bottom-two__img'),
    totalSlide = document.querySelector('.total'),
    currenSlide = document.querySelector('.current');

var slideNum = 0;


if(imgs.length < 9) {
    totalSlide.innerHTML = '0' + imgs.length;
}

function hideSlides() {
    slideContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });
}

function showSlides(slideNum) {
    slideContent[slideNum].classList.add('show');
    slideContent[slideNum].classList.remove('hide');
}

nextBtn.addEventListener('click', () => {
    if(prevBtn.classList.contains('arrowHide')) {
        prevBtn.classList.remove('arrowHide')
    }
    slideNum = slideNum + 1;
    hideSlides();
    showSlides(slideNum);
    let c = slideNum + 1;
    currenSlide.innerHTML = '0' + c;
    if(c == imgs.length) {
        nextBtn.classList.add('arrowHide')
    }
});

prevBtn.addEventListener('click', () => {
    if(nextBtn.classList.contains('arrowHide')) {
        nextBtn.classList.remove('arrowHide')
    }
    slideNum = slideNum - 1;
    hideSlides();
    showSlides(slideNum);
    let c = slideNum + 1;
    currenSlide.innerHTML = '0' + c;
    if(slideNum == 0) {
        prevBtn.classList.add('arrowHide')
    }
})
// =========
let input = document.querySelectorAll('.select');
function setMiniLabel() {

	this.parentElement.querySelector('label').classList.add('active')

}
function labelCheckFocus() {

	if(this.value != '') {
		this.select();
	}

	setMiniLabel.call(this)
}
function labelCheckBlur() {

	if (this.value === '' && this.value.trim() === '') {
		this.parentElement.querySelector('label').classList.remove('active')

		return;
	}
}
input.forEach(item => {
    item.addEventListener('focus', labelCheckFocus)
})
input.forEach(item => {
    item.addEventListener('blur', labelCheckBlur)
})

let gender = document.querySelectorAll('.gender'),
    activity = document.querySelectorAll('.activity');

var genderData = document.querySelector('.gender__active'),
    activityData = document.querySelector('.activity__active'),
    height = document.querySelector('.height'),
    weight = document.querySelector('.weight'),
    age = document.querySelector('.age'),
    label = document.querySelectorAll('label'),
    outPrice = document.querySelector('.caloria-namber');

gender.forEach(item => {
    item.addEventListener('click', () => {
        gender.forEach(items => {
            items.classList.remove('gender__active')
        })
        item.classList.add('gender__active')

        genderData = document.querySelector('.gender__active')

        let sum = Math.round((height.value * (weight.value + age.value) * genderData.dataset.value * activityData.dataset.value) / 1000)
        outPrice.innerHTML = sum;
    })
})

activity.forEach(item => {
    item.addEventListener('click', () => {
        activity.forEach(items => {
            items.classList.remove('activity__active')
        })
        item.classList.add('activity__active')

        activityData = document.querySelector('.activity__active')

        let sum = Math.round((height.value * (weight.value + age.value) * genderData.dataset.value * activityData.dataset.value) / 1000)
        outPrice.innerHTML = sum;
    })
})

function valueDefault() {
    if(height.value == '') {
        height.value = 170
    }
    if(weight.value == '') {
        weight.value = 55
    }
    if(age.value == '') {
        age.value = 18
    }
}

height.addEventListener('change', () => {
    if(height.value == '' || weight.value == '' || age.value == '') {
        valueDefault()
    }

    if(height.value != '' || weight.value != '' || age.value != '') {
        label.forEach(item => {
            item.classList.add('active')
        });        
    }

    let sum = Math.round((height.value * (weight.value + age.value) * genderData.dataset.value * activityData.dataset.value) / 1000)
    outPrice.innerHTML = sum;
})

weight.addEventListener('change', () => {
    if(height.value == '' || weight.value == '' || age.value == '') {
        valueDefault()
    }

    if(height.value != '' || weight.value != '' || age.value != '') {
        label.forEach(item => {
            item.classList.add('active')
        });        
    }

    let sum = Math.round((height.value * (weight.value + age.value) * genderData.dataset.value * activityData.dataset.value) / 1000)
    outPrice.innerHTML = sum;
})

age.addEventListener('change', () => {
    if(height.value == '' || weight.value == '' || age.value == '') {
        valueDefault()
    }

    if(height.value != '' || weight.value != '' || age.value != '') {
        label.forEach(item => {
            item.classList.add('active')
        });        
    }

    let sum = Math.round((height.value * (weight.value + age.value) * genderData.dataset.value * activityData.dataset.value) / 1000)
    outPrice.innerHTML = sum;
})


let burgerOverflow = document.querySelector('.burger__overflow'),
    middleLine = document.querySelector('.middle-line'),
    burgerLists = document.querySelector('.burger__lists');


function BcloseModal() {
    burgerOverflow.classList.add('hide')
    middleLine.classList.remove('middle-line__active')
    document.body.style.overflow = '';
}

function BopenModal() {
    burgerOverflow.classList.remove('hide')
    middleLine.classList.add('middle-line__active')
    document.body.style.overflow = 'hidden';
}

function burgerModalShow() {
    if(middleLine.classList.contains('middle-line__active')) {
        BcloseModal()
    } else {
        BopenModal()
    }
}

document.querySelector('.burger__menu').addEventListener('click', () => {
    burgerModalShow()
})

burgerLists.addEventListener('click', (e) => {
    if (e.target === burgerLists) {
        burgerOverflow.classList.add('hide')
        middleLine.classList.remove('middle-line__active')
        document.body.style.overflow = '';
    }
});

let comingdate = new Date('aug 31, 2021 19:00:00')

let d = document.getElementById('day')
let h = document.getElementById('hour')
let m = document.getElementById('minutes')
let s = document.getElementById('seconds')
getTimes()
let x = setInterval(getTimes, 1000)


function getTimes() {
    
    let now = new Date();
    var des = comingdate.getTime() - now.getTime();
    let days = Math.floor(des/(1000*60*60*24))
    let hours = Math.floor(des%(1000*60*60*24) / (1000 * 60 * 60))
    let mins = Math.floor(des%(1000*60*60) / (1000 * 60));
    let secs = Math.floor(des%(1000*60) / 1000)
    var sum = days + hours + mins + secs;

    if(sum == 0) {
        clearInterval(x)
    }
    d.innerHTML = getNumber(days);
    h.innerHTML = getNumber(hours);
    m.innerHTML = getNumber(mins);
    s.innerHTML = getNumber(secs);
}

function getNumber(x) {
    if (x < 10) return '0' + x;
    else return x;
}

