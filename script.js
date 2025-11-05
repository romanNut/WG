// ============================================
// ДАННЫЕ О МЕСТАХ
// ============================================

const locations = [
    {
        id: 1,
        name: 'Дербентская крепость',
        region: 'Дагестан',
        period: 'V век н.э.',
        description: 'Одна из старейших крепостей мира, охраняющая Каспийский проход',
        image: '🏯'
    },
    {
        id: 2,
        name: 'Гелатский монастырь',
        region: 'Грузия',
        period: 'XII век',
        description: 'Выдающийся памятник грузинской архитектуры и культуры',
        image: '⛪'
    },
    {
        id: 3,
        name: 'Архыз - город богов',
        region: 'Северный Кавказ',
        period: 'X век',
        description: 'Древний христианский центр с уникальными храмами',
        image: '🏔️'
    },
    {
        id: 4,
        name: 'Сванские башни',
        region: 'Грузия',
        period: 'IX-XII века',
        description: 'Легендарные боевые башни, символ грузинской воинской доблести',
        image: '🗼'
    },
    {
        id: 5,
        name: 'Крепость Нарын-Кала',
        region: 'Азербайджан',
        period: 'VII век',
        description: 'Древняя крепость с многовековой историей',
        image: '🛡️'
    }
];

// ============================================
// ДАННЫЕ О ШАГАХ QR-ГИДА
// ============================================

const guideSteps = [
    {
        step: 1,
        title: 'Откройте камеру',
        description: 'Используйте встроенную камеру вашего смартфона',
        icon: '📷'
    },
    {
        step: 2,
        title: 'Наведите на QR',
        description: 'Направьте камеру на QR-код на месте',
        icon: '🎯'
    },
    {
        step: 3,
        title: 'Откройте ссылку',
        description: 'Нажмите на уведомление для открытия контента',
        icon: '🔗'
    },
    {
        step: 4,
        title: 'Изучайте историю',
        description: 'Погружайтесь в интерактивный контент',
        icon: '📚'
    }
];

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    renderLocations();
    renderGuideSteps();
    setupNavigation();
});

// ============================================
// РЕНДЕРИНГ МЕСТ
// ============================================

function renderLocations() {
    const locationsGrid = document.getElementById('locationsGrid');
    
    locationsGrid.innerHTML = locations.map(location => `
        <div class="location-card" onclick="openModal(${location.id})">
            <div class="location-image">${location.image}</div>
            <div class="location-info">
                <h3>${location.name}</h3>
                <p class="location-meta">📍 ${location.region} • ${location.period}</p>
                <p>${location.description}</p>
                <button class="location-btn">🔗 Сканировать QR</button>
            </div>
        </div>
    `).join('');
}

// ============================================
// РЕНДЕРИНГ ШАГОВ QR-ГИДА
// ============================================

function renderGuideSteps() {
    const guideGrid = document.getElementById('guideGrid');
    
    guideGrid.innerHTML = guideSteps.map(step => `
        <div class="guide-step">
            <div class="guide-header">
                <div class="step-number">${step.step}</div>
                <div>
                    <div class="step-icon">${step.icon}</div>
                    <h3>${step.title}</h3>
                </div>
            </div>
            <p>${step.description}</p>
        </div>
    `).join('');
}

// ============================================
// НАВИГАЦИЯ ПО ТАБАМ
// ============================================

function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName, this);
        });
    });
}

function switchTab(tabName, button) {
    // Скрываем все табы
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Убираем активный класс у всех кнопок
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Показываем нужный таб и активируем кнопку
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    button.classList.add('active');
}

// ============================================
// МОДАЛЬНОЕ ОКНО
// ============================================

function openModal(locationId) {
    const location = locations.find(loc => loc.id === locationId);
    
    if (location) {
        document.getElementById('modalImage').textContent = location.image;
        document.getElementById('modalTitle').textContent = location.name;
        document.getElementById('modalRegion').textContent = `📍 ${location.region} • ${location.period}`;
        document.getElementById('modalDescription').textContent = location.description;
        
        const modal = document.getElementById('modal');
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// ============================================
// ПЛАВНАЯ ПРОКРУТКА
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});