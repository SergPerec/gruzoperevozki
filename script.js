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
            wrapper.style.height = wrapper.querySelector('.companyTop_bottom_item_content_list').scrollHeight + 10 + 'px';
        }
    });
});


// convenience_accordion===============

document.querySelectorAll('.convenience_item_head').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const wrapper = item.querySelector('.convenience_item_wrapper');
        const isOpen = item.classList.contains('active');

        // Закрыть все
        document.querySelectorAll('.convenience_item').forEach(i => {
            i.classList.remove('active');
            const w = i.querySelector('.convenience_item_wrapper');
            w.style.height = 0;
        });

        // Открыть текущий, если он был закрыт
        if (!isOpen) {
            item.classList.add('active');
            wrapper.style.height = wrapper.querySelector('.convenience_item_content_list').scrollHeight + 20 + 'px';
        }
    });
});

// yourData_FORM==================

document.querySelectorAll('.yourData-select-wrapper').forEach(wrapper => {
    const display = wrapper.querySelector('.yourData-select-display');
    const arrow = wrapper.querySelector('.calc_arrow_box');
    const options = wrapper.querySelector('.yourData-select-options');
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

// transport_TABS===============

function Tabs(target) {
    var _elemTabs = (typeof target === 'string' ? document.querySelectorAll(target) : target);

    _elemTabs.forEach(function (tabs) {
        var _eventTabsShow;

        if (tabs) {
            var _showTab = function (tabsLinkTarget) {
                var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
                tabsPaneTarget = tabs.querySelector(tabsLinkTarget.getAttribute('href'));
                tabsLinkActive = tabs.querySelector('.tabs__link_active');
                tabsPaneShow = tabs.querySelector('.tabs__pane_show');
                if (tabsLinkTarget === tabsLinkActive) {
                    return;
                }
                if (tabsLinkActive !== null) {
                    tabsLinkActive.classList.remove('tabs__link_active');
                }
                if (tabsPaneShow !== null) {
                    tabsPaneShow.classList.remove('tabs__pane_show');
                }
                tabsLinkTarget.classList.add('tabs__link_active');
                tabsPaneTarget.classList.add('tabs__pane_show');
                tabs.dispatchEvent(_eventTabsShow);
            };

            var _switchTabTo = function (tabsLinkIndex) {
                var tabsLinks = tabs.querySelectorAll('.tabs__link');
                if (tabsLinks.length > 0) {
                    if (tabsLinkIndex > tabsLinks.length) {
                        tabsLinkIndex = tabsLinks.length;
                    } else if (tabsLinkIndex < 1) {
                        tabsLinkIndex = 1;
                    }
                    _showTab(tabsLinks[tabsLinkIndex - 1]);
                }
            };

            _eventTabsShow = new CustomEvent('tab.show', { detail: tabs });

            tabs.addEventListener('click', function (e) {
                var target = e.target.closest('.tabs__link');
                if (!target) {
                    return;
                }
                e.preventDefault();
                _showTab(target);
            });

            return {
                showTab: function (target) {
                    _showTab(target);
                },
                switchTabTo: function (index) {
                    _switchTabTo(index);
                }
            };
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    Tabs('.tabs');
});

// transport_accordion===============

document.querySelectorAll('.transport_accord_head').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const wrapper = item.querySelector('.transport_accord_wrapper');
        const isOpen = item.classList.contains('active');

        // Закрыть все
        document.querySelectorAll('.transport_accord_inner').forEach(i => {
            i.classList.remove('active');
            const w = i.querySelector('.transport_accord_wrapper');
            w.style.height = 0;
        });

        // Открыть текущий, если он был закрыт
        if (!isOpen) {
            item.classList.add('active');
            wrapper.style.height = wrapper.querySelector('.transport_accord_content_list').scrollHeight + 20 + 'px';
        }
    });
});

// ========================map======================================


document.addEventListener('DOMContentLoaded', function () {
    // Проверяем наличие элемента карты
    const mapElement = document.getElementById('ymap');
    if (!mapElement) {
        return;
    }

    ymaps.ready(init);

    function init() {
        const myMap = new ymaps.Map("ymap", {
            center: [51.515325, 45.974779],
            zoom: 17,
        });

        myMap.behaviors.disable('scrollZoom')

        const myPlacemark = new ymaps.Placemark(
            [51.515325, 45.974779],
        );
        myMap.geoObjects.add(myPlacemark);

        // myMap.geoObjects.add(new ymaps.Placemark([51.527099, 46.056927], {
        //     iconContent: "<img alt='' title='' src='./assets/template/images/contacts/bany_map_logo.png'>"
        // },
        // {
        //     iconLayout: 'default#imageWithContent',
        //     iconImageHref: './assets/template/images/contacts/bany_map_logo.png',
        //     iconImageSize: [45, 58],
        //     iconImageOffset: [-20, -70]
        // }));
    }
});