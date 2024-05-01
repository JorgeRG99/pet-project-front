// AUTH TOKEN STORAGE KEY NAME
export const AUTH_TOKEN_STORAGE_KEY = 'Pet4YouAuthToken'

// API ROUTES
const API_ORIGIN = import.meta.env.VITE_APP_API_ORIGIN

// MIDDLEWARES
const API_MIDDLEWARE = '/api'


// ------------ USER -------------
export const SESSION_RECOVER = `${API_ORIGIN}${API_MIDDLEWARE}/recoverSession`
export const USER_REGISTER = `${API_ORIGIN}${API_MIDDLEWARE}/register`
export const USER_LOGIN = `${API_ORIGIN}${API_MIDDLEWARE}/login`
export const USER_LOGOUT = `${API_ORIGIN}${API_MIDDLEWARE}/logout`
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
export const PET_BY_ID = `${API_ORIGIN}${API_MIDDLEWARE}/pet`
export const ADD_PET = `${API_ORIGIN}${API_MIDDLEWARE}/pet`
export const UPDATE_PET = `${API_ORIGIN}${API_MIDDLEWARE}/pet`
export const DELETE_PET = `${API_ORIGIN}${API_MIDDLEWARE}/pet`
export const DOGS = `${API_ORIGIN}${API_MIDDLEWARE}/dogs`
export const CATS = `${API_ORIGIN}${API_MIDDLEWARE}/cats`

// ------------ SPECIES -------------
export const ALL_SPECIES = `${API_ORIGIN}${API_MIDDLEWARE}/species`
export const ADD_SPECIE = `${API_ORIGIN}${API_MIDDLEWARE}/specie`
export const DELETE_SPECIE = `${API_ORIGIN}${API_MIDDLEWARE}/specie`

// ------------ BREEDS -------------
export const BREEDS = `${API_ORIGIN}${API_MIDDLEWARE}/breeds`

// ------------ CARE SERVICES -------------
export const CARE_SERVICE_BY_ID = `${API_ORIGIN}${API_MIDDLEWARE}/service`
export const ALL_CARE_SERVICES = `${API_ORIGIN}${API_MIDDLEWARE}/services`
export const ADD_CARE_SERVICE = `${API_ORIGIN}${API_MIDDLEWARE}/service`
export const UPDATE_CARE_SERVICE = `${API_ORIGIN}${API_MIDDLEWARE}/service`
export const DELETE_CARE_SERVICE = `${API_ORIGIN}${API_MIDDLEWARE}/service`