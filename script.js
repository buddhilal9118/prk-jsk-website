const newsData = [
    {
        id: 1,
        title: 'PVC All Card Printing सेवा - अब उपलब्ध',
        category: 'service',
        date: '06 सितंबर 2024',
        description: 'सभी प्रकार के PVC कार्ड की उच्च गुणवत्ता वाली प्रिंटिंग PRK Computer Center पर उपलब्ध है।',
        details: 'ID Card, Student Card, Employee Card, Membership Card और Custom Card | डिलीवरी: 24-48 घंटे',
        link: '#pvc-printing'
    },
    {
        id: 2,
        title: 'UPTET 2024 - परीक्षा आयोजित की गई',
        category: 'result',
        date: '15 नवंबर 2024',
        description: 'UPTET 2024 की परीक्षा सफलतापूर्वक आयोजित की गई।',
        details: 'परीक्षा तिथि: 15 नवंबर 2024 | विषय: शिक्षा | कुल प्रश्न: 150',
        link: 'https://uptet.nic.in/'
    },
    {
        id: 3,
        title: 'प्रधानमंत्री योजना - नई घोषणा',
        category: 'scheme',
        date: '10 नवंबर 2024',
        description: 'नई सरकारी योजना का शुभारंभ किया गया जिससे युवाओं को रोजगार मिलेगा।',
        details: 'योजना का नाम: प्रधानमंत्री रोजगार योजना | पात्रता: 18-35 वर्ष',
        link: 'https://pmmy.gov.in/'
    },
    {
        id: 4,
        title: 'सरकारी नौकरी - विभिन्न पदों के लिए आवेदन',
        category: 'vacancy',
        date: '08 नवंबर 2024',
        description: 'शिक्षा विभाग में 500 पदों के लिए आवेदन मांगे गए हैं।',
        details: 'विभाग: शिक्षा | कुल पद: 500 | आवेदन की समय सीमा: 30 नवंबर 2024',
        link: 'https://www.upsc.gov.in/'
    },
    {
        id: 5,
        title: 'प्रवेश पत्र जारी किए गए',
        category: 'admit',
        date: '05 नवंबर 2024',
        description: 'राष्ट्रीय परीक्षा के लिए प्रवेश पत्र अब उपलब्ध हैं।',
        details: 'परीक्षा तिथि: 25 नवंबर 2024 | समय: 10:00 AM - 01:00 PM',
        link: 'https://nta.ac.in/'
    },
    {
        id: 6,
        title: 'उत्तर कुंजी प्रकाशित',
        category: 'key',
        date: '03 नवंबर 2024',
        description: 'पिछली परीक्षा की उत्तर कुंजी अब उपलब्ध है।',
        details: 'परीक्षा: संयुक्त भर्ती परीक्षा | शिकायत की समय सीमा: 7 दिन',
        link: 'https://www.sscnr.net.in/'
    }
];

function getCategoryLabel(category) {
    const labels = {
        vacancy: '🔍 नौकरियाँ',
        result: '📊 परिणाम',
        admit: '🎫 प्रवेश पत्र',
        key: '🔑 उत्तर कुंजी',
        scheme: '📋 योजना',
        service: '🖨️ सेवा'
    };
    return labels[category] || category;
}

function displayNews(category = 'all') {
    const newsContainer = document.getElementById('newsContainer');
    if (!newsContainer) return;

    newsContainer.innerHTML = '';
    const filteredNews = category === 'all' ? newsData : newsData.filter(item => item.category === category);

    if (!filteredNews.length) {
        newsContainer.innerHTML = '<p class="empty-state">कोई समाचार उपलब्ध नहीं है</p>';
        return;
    }

    filteredNews.forEach(item => {
        const card = document.createElement('article');
        card.className = 'news-card';
        card.innerHTML = `
            <span class="news-category">${getCategoryLabel(item.category)}</span>
            <h3 class="news-title">${item.title}</h3>
            <p class="news-date"><i class="fas fa-calendar"></i> ${item.date}</p>
            <p class="news-description">${item.description}</p>
            <div class="news-details"><i class="fas fa-info-circle"></i> ${item.details}</div>
            <a href="${item.link}" ${item.link.startsWith('#') ? '' : 'target="_blank" rel="noopener"'} class="news-link">विवरण देखें <i class="fas fa-arrow-right"></i></a>
        `;
        newsContainer.appendChild(card);
    });
}

function injectPVCService() {
    if (document.getElementById('pvc-printing')) return;

    const section = document.createElement('section');
    section.id = 'pvc-printing';
    section.className = 'pvc-service-section';
    section.innerHTML = `
        <div class="container">
            <div class="section-heading">
                <p class="eyebrow eyebrow-dark">विशेष सेवा</p>
                <h2>🖨️ PVC All Card Printing</h2>
            </div>
            <p class="section-subtitle">सभी प्रकार के PVC कार्ड - बेहतर गुणवत्ता और तेज डिलीवरी</p>
            <div class="pvc-grid">
                ${[
                    ['fa-id-card', 'पहचान पत्र', 'Aadhaar, PAN, Voter और Employee ID कार्ड'],
                    ['fa-graduation-cap', 'Student ID Card', 'स्कूल और कॉलेज के छात्र पहचान पत्र'],
                    ['fa-address-card', 'Membership Card', 'क्लब, संस्था और NGO सदस्यता कार्ड'],
                    ['fa-briefcase', 'Business Card', 'व्यवसाय के लिए प्रोफेशनल कार्ड'],
                    ['fa-ticket-alt', 'Event Pass', 'कार्यक्रम, सेमिनार और प्रवेश पास'],
                    ['fa-magic', 'Custom Card', 'आपकी जरूरत के अनुसार कस्टम डिजाइन']
                ].map(card => `
                    <div class="pvc-card">
                        <div class="pvc-icon"><i class="fas ${card[0]}"></i></div>
                        <h3>${card[1]}</h3>
                        <p>${card[2]}</p>
                        <ul class="pvc-features">
                            <li>✓ HD कलर प्रिंटिंग</li>
                            <li>✓ मजबूत PVC मटेरियल</li>
                            <li>✓ प्रोफेशनल डिजाइन</li>
                        </ul>
                    </div>
                `).join('')}
            </div>
            <div class="pvc-contact">
                <strong>ऑर्डर या जानकारी के लिए संपर्क करें:</strong>
                <a href="tel:9118663177">9118663177</a>
            </div>
        </div>
    `;

    const services = document.getElementById('services');
    if (services) {
        services.insertAdjacentElement('afterend', section);
    }
}

function setupNewsFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selected = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));
            displayNews(selected);
        });
    });
}

function setupMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function setupFaqAccordion() {
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
        const button = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (!button || !answer) return;

        button.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            items.forEach(entry => {
                entry.classList.remove('active');
                const btn = entry.querySelector('.faq-question');
                if (btn) btn.lastChild.textContent = '+';
            });

            if (!isOpen) {
                item.classList.add('active');
                button.lastChild.textContent = '−';
            }
        });
    });
}

function setupForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    if (!form || !status) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!name || !phone || !email) {
            status.textContent = 'कृपया सभी फील्ड भरें।';
            status.classList.add('error');
            return;
        }

        status.textContent = 'धन्यवाद! आपका संदेश सफलतापूर्वक भेजा जा चुका है। हम जल्द ही आपसे संपर्क करेंगे।';
        status.classList.remove('error');
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    injectPVCService();
    displayNews('all');
    setupNewsFilters();
    setupMobileNav();
    setupFaqAccordion();
    setupForm();

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
});
