document.querySelectorAll('.dropzone-input').forEach(input => {

    const dropzone = input.closest('.dropzone');

    dropzone.addEventListener('click', () => {
        input.click();
    })

    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dropzone-dragover');
    });

    ['dragleave', 'dragend'].forEach(type => {
        dropzone.addEventListener(type, (e) => {
            dropzone.classList.remove('dropzone-dragover');
        });
    });

    dropzone.addEventListener('drop', (e) => {

        e.preventDefault();

        if(e.dataTransfer.files.length) {
            let addMore = document.getElementById('add-more');
            if(addMore) {
                dropzone.removeChild(addMore);
            }
            input.files = e.dataTransfer.files;
            createThumbnail(dropzone, e.dataTransfer.files[0]);
            if(dropzone.querySelector('.dropzone-prompt')) {
                dropzone.querySelector('.dropzone-prompt').remove();    
            }
            let newAddMore = document.createElement('div');
            newAddMore.innerText = 'Add More';
            newAddMore.classList.add('add-more');
            newAddMore.id = 'add-more';
            dropzone.appendChild(newAddMore);
            dropzone.classList.remove('dropzone-flex');
            dropzone.classList.add('dropzone-grid');
        }

    });

});

createThumbnail = (dropzone, file) => {
    let thumbnail = document.createElement('div');
    thumbnail.classList.add('dropzone-thumbnail');
    dropzone.appendChild(thumbnail);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        thumbnail.style.backgroundImage = `url('${reader.result}')`;
    }
}

updateThumbnail = () => {

}