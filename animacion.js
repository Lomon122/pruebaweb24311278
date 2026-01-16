document.addEventListener("DOMContentLoaded",() =>
{
    const imagen =document.getElementById("imagenEldenring");
    const videoSection = document.getElementById("ERTrailer");
    imagen.addEventListener("click",()=>
    {
        videoSection.style.display = "block";

        videoSection.scrollIntoView({
            behavior: "smooth"

        });
    });
});