export const BACKEND_URL
    = window.location.hostname === "localhost"
    || window.location.hostname === "127.0.01"
    || window.location.hostname === ""
    ? "http://localhost:5000"
    : "https://api.terkaberedavida.cz";
export const API_URL = BACKEND_URL + "/api";
export const PUBLIC_URL = API_URL + "/public"
export const GUEST_URL = PUBLIC_URL + "/guests";
export const DYNAMIC_RSVP_URL = "/rsvp";
