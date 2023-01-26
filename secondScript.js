    // Открытие и закрытие модальных окон (модального окна с картинкой пока нет)

// Переменные для формы с редактированием информации
const popupEdit = document.querySelector('#popupEdit');
const buttonOpenEditForm = document.querySelector('.profile__edit-button');
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

// Переменные для добавления попапа с картинкой
const popupImage = document.querySelector('#popup-image');
const bigImage = popupImage.querySelector('.popup-image__image');
const bigImageDescription = popupImage.querySelector('.popup-image__description');
const buttonCloseBigImage = popupImage.querySelector('.popup-image__close-button');


// Функции открытия и закрытия модальных окон
// Редактирование профиля
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

buttonOpenEditForm.addEventListener('click', function() {
    addNameInput()
    openPopup(popupEdit);

})


   function addNameInput() {
        nameInput.value = nameProfile.innerText;
        jobInput.value = jobProfile.innerText;
    }
    

// Добавление карточек
buttonOpenPopupAdd.addEventListener('click', function() {
    openPopup(popupAdd)
})
    
    const buttonsClose = document.querySelectorAll('.popup__close-button');
    buttonsClose.forEach(btn => {
        btn.addEventListener('click', (evt) => {
            closePopup(evt.target.closest('.popup'))
        });
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
    const template = document.querySelector('#element-template').content;
    const elements = document.querySelector('.elements');
    const image = template.querySelector('.element__image');
    const caption = template.querySelector('.element__caption');

function addCards(name, link) {
    const element = template.querySelector('.element').cloneNode(true);
    const cloneImg = element.querySelector('.element__image');
    
    cloneImg.alt = name;
    cloneImg.src = link;

    element.querySelector('.element__caption').textContent = name;

    element.querySelector('.element__delete-button').addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
    });
    
    element.querySelector('.element__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__like_active');
    })
    
    // Открытие попапа с картинкой
    function getImage (event) {
        const smallImage = event.target;
        openPopup(popupImage)
    }

    cloneImg.addEventListener('click', getImage)
    
    // Из данной функции мы возвращаем просто одну созданую карточку.
    return element

}

    function renderCard() {
        initialCards.forEach(card => {
            elements.prepend(addCards(card.name, card.link))
        })
    }
    renderCard()

    function renderCard2(name, link) {
        elements.prepend(addCards(name, link));
    }
    // А здесь мы вызываем renderCard2 и передаем в нее аргументы.
    const buttonCreateCard = document.querySelector('#buttonCreatePopubAdd')
    buttonCreateCard.addEventListener('click', function(evt) {
        evt.preventDefault();
        renderCard2(popubAddInputName.value, popupAddInputImage.value);
        closePopup(popupAdd)
        formCreateCard.reset()
    })

    const formCreateCard = document.querySelector('form[name="add-card"]')