import Swal from "sweetalert2";

export function showErrorPopup(message) {
    Swal.fire({
        title: "Error!",
        text: message,
        icon: "error",
        confirmButtonText: "Cool"
    });
}

export function showSuccessPopup(message) {
    Swal.fire({
        title: "Success!",
        text: message,
        icon: "success",
        confirmButtonText: "Cool"
    })
}
