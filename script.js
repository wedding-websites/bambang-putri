document.addEventListener("DOMContentLoaded", function () {
    // Menangkap elemen h1, h2, h3, h4, h5, p, dan span
    var headings = document.querySelectorAll("h1, h2, h3, h4, h5, p, span, tamu, groom, bride, timeline-image");

    // Fungsi untuk memeriksa apakah elemen berada dalam viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Fungsi untuk menangani scroll dan menerapkan animasi
    function handleScroll() {
        headings.forEach(function (heading) {
            if (isElementInViewport(heading)) {
                heading.classList.add("show");
            }
        });
    }

    // Menangani scroll dan memanggil fungsi handleScroll
    window.addEventListener("scroll", handleScroll);

    // Memastikan untuk memicu handleScroll saat halaman dimuat untuk menangani elemen yang sudah terlihat
    handleScroll();
});

// Example using Intersection Observer API (naruto and hinata class)
const narutoElement = document.querySelector('.naruto');
const hinataElement = document.querySelector('.hinata');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust as needed
};

const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
};

const narutoObserver = new IntersectionObserver(observerCallback, observerOptions);
narutoObserver.observe(narutoElement);

const hinataObserver = new IntersectionObserver(observerCallback, observerOptions);
hinataObserver.observe(hinataElement);





