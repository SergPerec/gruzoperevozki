document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
    const display = wrapper.querySelector('.custom-select-display');
    const arrow = wrapper.querySelector('.calc_arrow_box');
    const options = wrapper.querySelector('.custom-select-options');
    const hiddenInput = wrapper.querySelector('input[type="hidden"]');

    display.addEventListener('click', () => {
        wrapper.classList.toggle('open');
        arrow.classList.toggle('open');
    });

    options.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            const value = option.dataset.value;
            const label = option.textContent;

            display.textContent = label;
            hiddenInput.value = value;
            wrapper.classList.remove('open');
        });
    });

    document.addEventListener('click', e => {
        if (!wrapper.contains(e.target)) {
            wrapper.classList.remove('open');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {


    document.getElementById('calcBtn').addEventListener('click', function (e) {
        e.preventDefault(); // отменяем отправку формы

        const form = document.getElementById('calc_form');
        const formData = new FormData(form);

        const values = {};
        for (let [key, value] of formData.entries()) {
            values[key] = value;
        }

        console.log('Значения всех полей:');
        console.table(values);
    });
});



// ======transport_swiper

document.addEventListener('DOMContentLoaded', () => {
    const swiperTransport = new Swiper('.transport_inner', {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 2,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3.3,
            },
            768: {
                slidesPerView: 2.3,
            },
            0: {
                slidesPerView: 1.3,
            },
        },
        navigation: {
            nextEl: '.transport_inner_btnNext',
            prevEl: '.transport_inner_btnPrev',
        }
    });
});


// ======trast_swiper

document.addEventListener('DOMContentLoaded', () => {
    const swiperTrust = new Swiper('.swiper.trust_slider', {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: true,
         breakpoints: {
            // 1200: {
            //     slidesPerView: 4,
            // },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3.3,
            },
            500: {
                slidesPerView: 2.3,
            },
            0: {
                slidesPerView: 1.5,
                spaceBetween: 0,
            },
        },
        navigation: {
            nextEl: '.trust_slider_btnNext',
            prevEl: '.trust_slider_btnPrew',
        }
    });
});


// =============Burger

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const overlay = document.getElementById('overlay');
    const sideMenu = document.getElementById('sideMenu');

    function toggleMenu() {
        burger.classList.toggle('active');
        overlay.classList.toggle('active');
        sideMenu.classList.toggle('active');
    }

    burger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

});


// COMPANY_accordion===============

document.querySelectorAll('.companyTop_bottom_item_head').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const wrapper = item.querySelector('.companyTop_bottom_item_wrapper');
    const isOpen = item.classList.contains('active');

    // Закрыть все
    document.querySelectorAll('.companyTop_bottom_item').forEach(i => {
      i.classList.remove('active');
      const w = i.querySelector('.companyTop_bottom_item_wrapper');
      w.style.height = 0;
    });

    // Открыть текущий, если он был закрыт
    if (!isOpen) {
      item.classList.add('active');
      wrapper.style.height = wrapper.querySelector('.companyTop_bottom_item_content_list').scrollHeight + 'px';
    }
  });
});



// document.querySelectorAll('.companyTop_bottom_item').forEach(item => {
//   item.addEventListener('click', () => {
//     item.classList.toggle('active');

//     // Закрыть все
//     // document.querySelectorAll('.companyTop_bottom_item').forEach(i => i.classList.remove('active'));

//     // // Открыть текущий, если был закрыт
//     // if (!isActive) {
//     //   header.classList.add('active');
//     // }
//   });
// });



