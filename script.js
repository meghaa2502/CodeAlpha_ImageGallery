const images = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

function openLightbox(index)
{
    currentIndex = index;

    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].src;
}

function closeLightbox()
{
    lightbox.style.display = "none";
}

function changeImage(step)
{
    currentIndex += step;

    if(currentIndex < 0)
    {
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length)
    {
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;
}

function filterImages(category)
{
    images.forEach(image =>
    {
        if(category === "all" || image.classList.contains(category))
        {
            image.style.display = "block";
        }
        else
        {
            image.style.display = "none";
        }
    });

    if(category === "all")
    {
        shuffleGallery();
    }
}

function shuffleGallery()
{
    const gallery = document.querySelector(".gallery");

    for(let i = gallery.children.length; i >= 0; i--)
    {
        gallery.appendChild(
            gallery.children[Math.random() * i | 0]
        );
    }
}


lightbox.addEventListener("click", function(event)
{
    if(event.target === lightbox)
    {
        closeLightbox();
    }
});


document.addEventListener("keydown", function(event)
{
    if(lightbox.style.display === "flex")
    {
        if(event.key === "ArrowRight")
        {
            changeImage(1);
        }

        if(event.key === "ArrowLeft")
        {
            changeImage(-1);
        }

        if(event.key === "Escape")
        {
            closeLightbox();
        }
    }
});