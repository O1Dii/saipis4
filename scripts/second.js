window.onload = () => {
    const imageId = sessionStorage.getItem('image');

    if (imageId) {
        const image = document.images.length > imageId 
            ? document.images[imageId] 
            : document.images[document.images.length - 1];

        image.parentNode.insertBefore(image, image.parentNode.firstChild);
    }
}