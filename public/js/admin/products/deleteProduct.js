document.querySelectorAll('.deleteBtn').forEach(deleteBtn => {

    deleteBtn.addEventListener('click', async () => {

        const productId = deleteBtn.dataset.product;
        const deleteProduct = await axios({
            method: 'POST',
            url: '/api/deleteProduct',
            data: { productId }
        });

    });

});