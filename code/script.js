
function fnMove(sectionName) {
    const target = document.querySelector("#" + sectionName);
    if (target) {
        const navHeight = document.querySelector(".nav").offsetHeight; 
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset; 
        const offsetPosition = targetPosition - navHeight-10; 

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth", // Smooth scrolling
        });

        history.pushState(null, null, "#" + sectionName); // Update the URL hash
    }
}


function clipboard_copy() {
    const copyText = "qkrghdqls1@korea.ac.kr"; // Text to copy
    navigator.clipboard.writeText(copyText)
        .then(() => {
            Swal.fire({
                icon: 'success',
                text: 'My email address has been copied to your clipboard!',
                customClass: { 
                    popup: "swal2-border-radius",
                    confirmButton: "swal2-custom-button"
                 }
            });
        })
        .catch(err => {
            console.error(copyText);
        });
}
