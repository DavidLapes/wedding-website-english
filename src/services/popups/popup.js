import Swal from "sweetalert2";

export function showErrorPopup(message) {
    Swal.fire({
        title: "Chyba!",
        text: message,
        icon: "error",
        confirmButtonText: "Cool"
    });
}

export function showSuccessPopup(message) {
    Swal.fire({
        title: "Úspěch!",
        text: message,
        icon: "success",
        confirmButtonText: "Cool"
    })
}
