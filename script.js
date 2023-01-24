const formElement = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const submitButton = document.querySelector('.popup__button');

editButton.addEventListener('click', function() {
    formElement.style.visibility = 'visible';
    jobInput.value = jobProfile.textContent;
    nameInput.value = nameProfile.textContent;
})

closeButton.addEventListener('click', function() {
    formElement.style.visibility = 'hidden';
})

        
const nameInput = document.querySelector('#popupProfileHeading');
const jobInput = document.querySelector('#popupProfileDescription');
let nameProfile = document.querySelector('.profile__heading');
let jobProfile = document.querySelector('.profile__description');

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    formElement.style.visibility = 'hidden';
}

formElement.addEventListener('submit', handleFormSubmit);

        
// 2. Шесть карточек из коробки

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

function addCards(name, link) {
    const elements = document.querySelector('.elements');
    const template = document.querySelector('#element-template').content;
    const element = template.querySelector('.element').cloneNode(true);
    const image = element.querySelector('.element__image');
    const caption = element.querySelector('.element__caption');
    const like = element.querySelector('.element__like')
    const popupImg = document.querySelector('.popup-image').cloneNode(true);
    const popupImgContainer = popupImg.querySelector('.popup-image__container');
    const popupImgImage = popupImgContainer.querySelector('.popup-image__image');
    const popupImgDescription = popupImgContainer.querySelector('.popup-image__description');
    const popupImgButton = popupImgContainer.querySelector('.popup-image__close-button');

      
    caption.textContent = name;
    image.setAttribute('src', link);

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


    like.addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like_active')
    })

    function openPopupImg(evt) {
        const imageTarget = evt.target;
        popupImg.style.display = 'flex';
        console.log(imageTarget)
    }
    
    image.addEventListener('click', openPopupImg)
}


for (let i = 0; i < initialCards.length; i++) {
    addCards(initialCards[i]['name'], initialCards[i]['link'])



}

// 3. Форма добавления карточки

const newForm = document.querySelector('.new-form');
const addCardButton = newForm.querySelector('.new-form__button');
const closeFormButton = newForm.querySelector('.new-form__close-button');
const openFormButton = document.querySelector('.profile__add-button');
        
openFormButton.addEventListener('click', function(){
    newForm.style.display = 'flex';
})

closeFormButton.addEventListener('click', function(){
    newForm.style.display = 'none';
})

// 4. Добавление карточки

addCardButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    const inputName = document.querySelector('#new-form__input-name');
    const inputLink = document.querySelector('#new-form__input-image');
                                  
    addCards(inputName.value, inputLink.value);

    newForm.style.display = 'none';
})







// 8. Плавное открытие и закрытие попапов