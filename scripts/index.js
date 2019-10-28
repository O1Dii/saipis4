window.onload = () => {
    const handler = e => {
        for(const image of document.images) {
            image.className = "hidden";
        }

        const targetImage = document.images[e.target.selectedIndex];

        if (targetImage) {
            targetImage.className = "";
        } else {
            document.getElementById('default-image').className = "";
        }

        sessionStorage.setItem('image', e.target.selectedIndex);


        const image = [].filter.call(document.images, item => item.className === '')[0];

        let mouseDown = false;

        image.addEventListener('mousedown', e => {
            e.preventDefault();
            console.log(e);
            mouseDown = true;
        })
        window.addEventListener('mouseup', () => {mouseDown = false;})

        window.addEventListener("mousemove", e => {
            if(mouseDown) {
                image.height = e.clientY - image.offsetTop;
                image.innerWidth = e.clientX;
            }
        })
    }

    const select =  document.getElementsByTagName('select')[0];
    const newWindowButton = document.getElementById('new-window');
    const addItemButton = document.getElementById('add-item');

    select.addEventListener("change", handler);
    newWindowButton.addEventListener('click', e => {
        window.open('http://127.0.0.1:5500/templates/second.html');
    });

    addItemButton.addEventListener('click', e => {
        const value = document.getElementById('option-input').value;

        const alreadyExists = select.innerText.split('\n').includes(value);

        if (value && !alreadyExists) {
            const newOption = document.createElement('option');
            newOption.innerText = document.getElementById('option-input').value;
            select.appendChild(newOption);
        }
    });
}