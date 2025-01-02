      // Adding hover animations to the hero section
      document.querySelector('.hero').addEventListener('mousemove', function(e) {
        const { offsetX, offsetY } = e;
        const { clientWidth, clientHeight } = this;
        const xPercent = (offsetX / clientWidth) - 0.5;
        const yPercent = (offsetY / clientHeight) - 0.5;

        this.style.transform = `rotateX(${yPercent * 10}deg) rotateY(${xPercent * 10}deg)`;
    });

    document.querySelector('.hero').addEventListener('mouseleave', function() {
        this.style.transform = 'rotateX(0) rotateY(0)';
    });

    // Adding dynamic cart functionality
    const buttons = document.querySelectorAll('.product button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });