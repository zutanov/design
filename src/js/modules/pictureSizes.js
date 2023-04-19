const pictureSizes = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg(block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + "-1.png"
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        })
        
    };
    
    function hideImg(block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + ".png"
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        })
    }

    blocks.forEach(el => {
        el.addEventListener('mouseout', () => {
            hideImg(el);
        });
        el.addEventListener('mouseover', () => {
            showImg(el);
        });
    })
};

export default pictureSizes;

