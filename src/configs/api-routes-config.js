// AUTH TOKEN STORAGE KEY NAME
export const AUTH_TOKEN_STORAGE_KEY = 'Pet4YouAuthToken'

// API ROUTES
const API_ORIGIN = import.meta.env.VITE_APP_API_ORIGIN

// MIDDLEWARES
const API_MIDDLEWARE = '/api'


// ------------ USER -------------
export const SESSION_RECOVER = `${API_ORIGIN}${API_MIDDLEWARE}/recoverSession`
export const USER_REGISTER = `${API_ORIGIN}${API_MIDDLEWARE}/register`
export const WORKER_REGISTER = `${API_ORIGIN}${API_MIDDLEWARE}/createWorker`
export const USER_LOGIN = `${API_ORIGIN}${API_MIDDLEWARE}/login`
export const USER_LOGOUT = `${API_ORIGIN}${API_MIDDLEWARE}/logout`
export const GET_USER = `${API_ORIGIN}${API_MIDDLEWARE}/getUser`
export const USER = `${API_ORIGIN}${API_MIDDLEWARE}/user`
export const CHANGE_PASSWORD = `${API_ORIGIN}${API_MIDDLEWARE}/changePassword`
export const CHANGE_EMAIL = `${API_ORIGIN}${API_MIDDLEWARE}/changeEmail`

// ------------ ADOPTIONS -------------
export const ALL_ADOPTIONS = `${API_ORIGIN}${API_MIDDLEWARE}/allAdoptions`
export const YOUR_ADOPTIONS = `${API_ORIGIN}${API_MIDDLEWARE}/yourAdoptions`
export const REQUEST_ADOPTION = `${API_ORIGIN}${API_MIDDLEWARE}/requestAdoption`
export const ADOPTION_BY_USER = `${API_ORIGIN}${API_MIDDLEWARE}/adoptionsByUser`
export const ADOPTION_BY_PET = `${API_ORIGIN}${API_MIDDLEWARE}/adoptionsByPet`
export const ACCEPT_ADOPTION = `${API_ORIGIN}${API_MIDDLEWARE}/acceptAdoption`
export const CONFIRM_ADOPTION = `${API_ORIGIN}${API_MIDDLEWARE}/confirmAdoption`
export const CANCEL_ADOPTION = `${API_ORIGIN}${API_MIDDLEWARE}/cancelAdoption`

// ------------ PETS -------------
export const ALL_PETS = `${API_ORIGIN}${API_MIDDLEWARE}/pets`
export const ALL_PETS_WITH_DELETED = `${API_ORIGIN}${API_MIDDLEWARE}/petsWithDeleted`
export const PET_BY_ID = `${API_ORIGIN}${API_MIDDLEWARE}/pet`
export const ADD_PET = `${API_ORIGIN}${API_MIDDLEWARE}/pet`
export const UPDATE_PET = `${API_ORIGIN}${API_MIDDLEWARE}/pet`
export const DELETE_PET = `${API_ORIGIN}${API_MIDDLEWARE}/pet`
export const DOGS = `${API_ORIGIN}${API_MIDDLEWARE}/dogs`
export const CATS = `${API_ORIGIN}${API_MIDDLEWARE}/cats`

// ------------ EXTERNAL PETS -------------
export const YOUR_PETS = `${API_ORIGIN}${API_MIDDLEWARE}/yourPets`
export const YOUR_PETS_WITH_DELETED = `${API_ORIGIN}${API_MIDDLEWARE}/yourPetsWithDeleted`
export const YOUR_CATS = `${API_ORIGIN}${API_MIDDLEWARE}/yourCats`
export const YOUR_DOGS = `${API_ORIGIN}${API_MIDDLEWARE}/yourDogs`
export const ADD_YOUR_PET = `${API_ORIGIN}${API_MIDDLEWARE}/addPet`
export const UPDATE_YOUR_PET = `${API_ORIGIN}${API_MIDDLEWARE}/updatePet`
export const DELETE_YOUR_PET = `${API_ORIGIN}${API_MIDDLEWARE}/deletePet`


// ------------ SPECIES -------------
export const ALL_SPECIES = `${API_ORIGIN}${API_MIDDLEWARE}/species`
export const ADD_SPECIE = `${API_ORIGIN}${API_MIDDLEWARE}/specie`
export const DELETE_SPECIE = `${API_ORIGIN}${API_MIDDLEWARE}/specie`

// ------------ BREEDS -------------
export const BREEDS = `${API_ORIGIN}${API_MIDDLEWARE}/breeds`

// ------------ CARE SERVICES -------------
export const ALL_CARE_SERVICES = `${API_ORIGIN}${API_MIDDLEWARE}/allBookings`
export const YOUR_CARE_SERVICES = `${API_ORIGIN}${API_MIDDLEWARE}/yourBookings`
export const ADD_CARE_SERVICE = `${API_ORIGIN}${API_MIDDLEWARE}/makeBooking`
export const DELETE_CARE_SERVICE = `${API_ORIGIN}${API_MIDDLEWARE}/deleteBooking`
export const UNAVAILABLE_DATES = `${API_ORIGIN}${API_MIDDLEWARE}/unavailableDates`
export const BOOKINGS_PANEL = `${API_ORIGIN}${API_MIDDLEWARE}/bookingsPanel`


// ------------ TRAINING SERVICES -------------
export const FULL_DATES = `${API_ORIGIN}${API_MIDDLEWARE}/fullDates`
export const AVAILABLE_HOURS = `${API_ORIGIN}${API_MIDDLEWARE}/availableHours`
export const SCHEDULE_TRAINING = `${API_ORIGIN}${API_MIDDLEWARE}/scheduleTraining`
export const DELETE_TRAINING = `${API_ORIGIN}${API_MIDDLEWARE}/deleteTraining`
export const YOUR_TRAINING = `${API_ORIGIN}${API_MIDDLEWARE}/yourTrainingBookings`
export const TRAINING_PANEL = `${API_ORIGIN}${API_MIDDLEWARE}/trainingPanel`