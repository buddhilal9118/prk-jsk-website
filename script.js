// News/Blog Data - आप यहाँ news items add कर सकते हैं
const newsData = [
    {
        id: 1,
        title: "UPTET 2024 - परीक्षा आयोजित की गई",
        category: "result",
        date: "15 नवंबर 2024",
        description: "UPTET 2024 की परीक्षा सफलतापूर्वक आयोजित की गई। परिणाम जल्द घोषित किए जाएंगे।",
        details: "परीक्षा तिथि: 15 नवंबर 2024 | विषय: शिक्षा | कुल प्रश्न: 150",
        link: "https://uptet.nic.in/"
    },
    {
        id: 2,
        title: "प्रधानमंत्री योजना - नई घोषणा",
        category: "scheme",
        date: "10 नवंबर 2024",
        description: "नई सरकारी योजना का शुभारंभ किया गया जिससे युवाओं को रोजगार मिलेगा।",
        details: "योजना का नाम: प्रधानमंत्री रोजगार योजना | पात्रता: 18-35 वर्ष",
        link: "https://pmmy.gov.in/"
    },
    {
        id: 3,
        title: "सरकारी नौकरी - विभिन्न पदों के लिए आवेदन",
        category: "vacancy",
        date: "08 नवंबर 2024",
        description: "शिक्षा विभाग में 500 पदों के लिए आवेदन मांगे गए हैं।",
        details: "विभाग: शिक्षा | कुल पद: 500 | आवेदन की समय सीमा: 30 नवंबर 2024",
        link: "https://www.upsc.gov.in/"
    },
    {
        id: 4,
        title: "प्रवेश पत्र जारी किए गए",
        category: "admit",
        date: "05 नवंबर 2024",
        description: "राष्ट्रीय परीक्षा के लिए प्रवेश पत्र अब उपलब्ध हैं।",
        details: "परीक्षा तिथि: 25 नवंबर 2024 | समय: 10:00 AM - 01:00 PM",
        link: "https://nta.ac.in/"
    },
    {
        id: 5,
        title: "उत्तर कुंजी प्रकाशित",
        category: "key",
        date: "03 नवंबर 2024",
        description: "पिछली परीक्षा की उत्तर कुंजी अब उपलब्ध है।",
        details: "परीक्षा: संयुक्त भर्ती परीक्षा | शिकायत की समय सीमा: 7 दिन",
        link: "https://www.sscnr.net.in/"
    },
    {
        id: 6,
        title: "आयुष्मान भारत योजना - नया पंजीकरण खुला",
        category: "scheme",
        date: "01 नवंबर 2024",
        description: "आयुष्मान भारत योजना में नई सूचियां अपडेट की गई हैं।",
        details: "लाभ: 5 लाख तक का स्वास्थ्य बीमा | पंजीकरण: निःशुल्क",
        link: "https://pmjay.gov.in/"
    }
];

// Display news based on filter
function displayNews(category = 'all') {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';

    const filteredNews = category === 'all' 
        ? newsData 
        : newsData.filter(item => item.category === category);

    if (filteredNews.length === 0) {
        newsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; font-size: 1.2rem;">कोई समाचार उपलब्ध नहीं है</p>';
        return;
    }

    filteredNews.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <span class="news-category">${getCategoryLabel(item.category)}</span>
            <h3 class="news-title">${item.title}</h3>
            <p class="news-date">
                <i class="fas fa-calendar"></i>
                ${item.date}
            </p>
            <p class="news-description">${item.description}</p>
            <div class="news-details">
                <i class="fas fa-info-circle"></i> ${item.details}
            </div>
            <a href="${item.link}" target="_blank" class="news-link">
                विवरण देखें <i class="fas fa-arrow-right" style="margin-left: 5px;"></i>
            </a>
        `;
        newsContainer.appendChild(newsCard);
    });
}

// Get category label in Hindi
function getCategoryLabel(category) {
    const labels = {
        'vacancy': '🔍 नौकरियाँ',
        'result': '📊 परिणाम',
        'admit': '🎫 प्रवेश पत्र',
        'key': '🔑 उत्तर कुंजी',
        'scheme': '📋 योजना'
    };
    return labels[category] || category;
}

// Filter news function
function filterNews(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Display filtered news
    displayNews(category);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayNews('all');
    console.log('PRK Website Loaded!');
});

// Contact Form Handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    console.log('Form Data:', formData);
    alert('धन्यवाद! आपका संदेश सफलतापूर्वक भेजा जा चुका है।\nहम जल्द ही आपसे संपर्क करेंगे।');
    
    this.reset();
});