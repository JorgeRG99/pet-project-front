// API ROUTES
const API_ORIGIN = import.meta.env.VITE_APP_API_ORIGIN

// MIDDLEWARES
const API_MIDDLEWARE = '/api'


// ------------ USER -------------
export const USER_REGISTER = `${API_ORIGIN}${API_MIDDLEWARE}/register`
export const USER_LOGIN = `${API_ORIGIN}${API_MIDDLEWARE}/login`
export const USER = `${API_ORIGIN}${API_MIDDLEWARE}/user`

// ------------ ADOPTIONS -------------
export const YOUR_ADOPTIONS = `${API_ORIGIN}${API_MIDDLEWARE}/yourAdoptions`
export const REQUEST_ADOPTION = `${API_ORIGIN}${API_MIDDLEWARE}/requestAdoption`
export const ADOPTION_BY_USER = `${API_ORIGIN}${API_MIDDLEWARE}/adoptionsByUser`
export const ADOPTION_BY_PET = `${API_ORIGIN}${API_MIDDLEWARE}/adoptionsByPet`
export const ACCEPT_ADOPTION = `${API_ORIGIN}${API_MIDDLEWARE}/acceptAdoption`
export const CONFIRM_ADOPTIONS = `${API_ORIGIN}${API_MIDDLEWARE}/confirmAdoption`
export const CANCEL_ADOPTION = `${API_ORIGIN}${API_MIDDLEWARE}/cancelAdoption`

// ------------ PETS -------------
export const ALL_PETS = `${API_ORIGIN}/pets`
export const PET_BY_ID = `${API_ORIGIN}/pet`
export const ADD_PET = `${API_ORIGIN}/pet`
export const UPDATE_PET = `${API_ORIGIN}/pet`
export const DELETE_PET = `${API_ORIGIN}/pet`

// ------------ SPECIES -------------
export const ALL_SPECIES = `${API_ORIGIN}/species`
export const ADD_SPECIE = `${API_ORIGIN}/specie`
export const DELETE_SPECIE = `${API_ORIGIN}/specie`

// ------------ CARE SERVICES -------------
export const CARE_SERVICE_BY_ID = `${API_ORIGIN}/service`
export const ALL_CARE_SERVICES = `${API_ORIGIN}/services`
export const ADD_CARE_SERVICE = `${API_ORIGIN}/service`
export const UPDATE_CARE_SERVICE = `${API_ORIGIN}/service`
export const DELETE_CARE_SERVICE = `${API_ORIGIN}/service`