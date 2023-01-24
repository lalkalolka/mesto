// Открытие и закрытие попапа popup
const editPopup = document.querySelector('.popup');
const editProfileButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.popup__close-button');

const profile = document.querySelector('.profile');
const profileInfo = profile.querySelector('.profile__info');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileName = profileTitle.querySelector('.profile__heading');
const profileDescription = profileInfo.querySelector('.profile__description');
const nameInputProfile = document.querySelector('#popupProfileHeading');
const descriptionInputProfile = document.querySelector('#popupProfileDescription');
const saveProfileButton = document.querySelector('.popup__button');

editProfileButton.addEventListener('click', function() {
    editPopup.style.display = 'flex'
})

closeProfileButton.addEventListener('click', function() {
    editPopup.style.display = 'none'
})

// Открытие и закрытие попапа new-form

const newForm = document.querySelector('.new-form');
const openNewFormButton = document.querySelector('.profile__add-button');
const saveNewFormButton = document.querySelector('.new-form__button');
const closeNewFormButton = document.querySelector('.new-form__close-button');

openNewFormButton.addEventListener('click', function() {
    nameInputProfile.value = profileName.textContent;
    descriptionInputProfile.value = profileDescription.textContent;
    newForm.style.display = 'flex'
})

closeNewFormButton.addEventListener('click', function() {
    newForm.style.display = 'none'
})

// Редактирование профиля

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInputProfile.value;
    profileDescription.textContent = descriptionInputProfile.value;
    editPopup.style.display = 'none'
}

editPopup.addEventListener('submit', handleFormSubmit);


