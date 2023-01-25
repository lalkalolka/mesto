    // Открытие и закрытие модальных окон (модального окна с картинкой пока нет)

// Переменные для формы с редактированием информации
const popupEdit = document.querySelector('#popupEdit');
const buttonOpenEditForm = document.querySelector('.profile__edit-button');
const buttonCloseEditForm = document.querySelector('#button-close-edit-form');
const submitButton = document.querySelector('.popup__button');
const nameInput = document.querySelector('#popupProfileHeading');
const jobInput = document.querySelector('#popupProfileDescription');
const nameProfile = document.querySelector('.profile__heading');
const jobProfile = document.querySelector('.profile__description');
const buttonSubmitEditForm = document.querySelector('.popup__container');

// Переменные для формы с добавлением карточек
const popupAdd = document.querySelector('#popupAdd');
const popubAddInputName = document.querySelector('#popubAddInputName');
const popupAddInputImage = document.querySelector('#popupAddInputImage');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const buttonClosePopupAdd = document.querySelector('#buttonClosePopupAdd');


    // Функции открытия и закрытия модальных окон
// Редактирование профиля
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

buttonOpenEditForm.addEventListener('click', function() {
    openPopup(popupEdit);
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
})

buttonCloseEditForm.addEventListener('click', function() {
    closePopup(popupEdit)
})


// Добавление карточек
buttonOpenPopupAdd.addEventListener('click', function() {
    openPopup(popupAdd)
})

buttonClosePopupAdd.addEventListener('click', function() {
    closePopup(popupAdd)
})


    // Функция редактирования профиля

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup(popupEdit)
}

buttonSubmitEditForm.addEventListener('submit', handleFormSubmit);

        
    // Массив с начальными карточками

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 


    // Добавление карточек
// Переменные для функции с добавлением карточек
const elements = document.querySelector('.elements');
const template = document.querySelector('#element-template').content;
const image = template.querySelector('.element__image');
const caption = template.querySelector('.element__caption');
const like = template.querySelector('.element__like');
const buttonCreateCard = document.querySelector('#buttonCreatePopubAdd')

// Функция добавления карточек
buttonCreateCard.addEventListener('click', function(evt) {
    evt.preventDefault();
                                  
    addCards(popubAddInputName.value, popupAddInputImage.value);

    closePopup(popupAdd)
})

function addCards(name, link) {
      
    caption.textContent = name;
    image.setAttribute('src', link);

    // Если убрать из функции prepend, то не срабатывает цикл добавления первых шести карточек
    const element = template.querySelector('.element').cloneNode(true);
    elements.prepend(element);

    
    const removeButton = document.querySelectorAll('.element__delete-button');

    function removeCard (event) {
    const clickTarget = event.target;
    const removedCard = clickTarget.closest('.element');
    removedCard.remove();
    }

    removeButton.forEach(function(button) {
        button.addEventListener('click', removeCard)
    })

    // Перестали работать лайки
    like.addEventListener('click', function(event) {
        event.target.classList.toggle('element__like_active')
    })
}


    // Добавление первых шести карточек на страницу

initialCards.forEach(obj => {
    addCards(obj.name, obj.link)
})