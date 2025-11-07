// Camera data extracted from the guide
const cameras = [
    {
        id: 'xh2s',
        name: 'X-H2S',
        nickname: 'The Speed Demon',
        tagline: 'The ultimate camera for action, sports, and professional video work',
        price: 2499,
        priceRange: 'pro',
        sensor: '26.16MP APS-C X-Trans CMOS 5 HS (stacked)',
        sensorType: 'stacked',
        processor: 'X-Processor 5',
        autofocus: 'Intelligent Hybrid TTL AF with AI-powered subject detection',
        continuousShooting: '15 fps (mechanical), 40 fps (electronic)',
        maxFPS: 40,
        video: '6.2K @ 30p, 4K @ 120p, Full HD @ 240p',
        videoDynamicRange: 'F-Log2: ~13+ stops',
        batteryLife: 580,
        weight: 660,
        memory: 'Dual slots (SD + CFexpress Type B)',
        standoutFeatures: [
            'Fastest continuous shooting in the lineup (40 fps electronic)',
            '4K 120fps slow motion video capability',
            'Highest resolution viewfinder (5.76M dots)',
            'Weather-sealed body for tough conditions',
            'Optional external cooling fan for extended video recording',
            'Stacked sensor optimized for speed and performance'
        ],
        bestFor: [
            'Sports photographers',
            'Wildlife photographers',
            'Professional videographers',
            'Anyone who needs to capture fast action'
        ],
        whyChoose: 'If you need to freeze action, track fast-moving subjects, or shoot professional video, the X-H2S is unmatched. Its stacked sensor technology and blazing-fast shooting speeds make it the go-to choice for action photography.',
        image: '/fujifilm-buying-guide/images/cameras/x-h2s.jpg',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '5.76M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: true,
        fortyMP: false
    },
    {
        id: 'xh2',
        name: 'X-H2',
        nickname: 'The Resolution King',
        tagline: 'The flagship high-resolution camera with 8K video capability',
        price: 1999,
        priceRange: 'premium',
        sensor: '40.2MP APS-C X-Trans CMOS 5 HR',
        sensorType: '40mp',
        processor: 'X-Processor 5',
        autofocus: '425-point Intelligent Hybrid AF with AI detection',
        continuousShooting: '15 fps (mechanical), 20 fps (electronic)',
        maxFPS: 20,
        video: '8K @ 30p, 6.2K @ 30p, 4K @ 60p, Full HD @ 240p',
        videoDynamicRange: 'F-Log2: ~13+ stops',
        batteryLife: 680,
        weight: 660,
        memory: 'Dual SD card slots',
        standoutFeatures: [
            'Highest resolution sensor in APS-C format (40.2MP)',
            '8K video recording capability',
            'Excellent for large prints and detailed work',
            'Weather-resistant body',
            'Dual SD card slots for backup/redundancy',
            '7-stop IBIS for handheld shooting'
        ],
        bestFor: [
            'Landscape photographers',
            'Portrait and studio photographers',
            'High-resolution video content creators',
            'Photographers who need maximum detail'
        ],
        whyChoose: 'The X-H2 delivers the highest resolution in Fujifilm\'s APS-C lineup, making it perfect for photographers who need maximum detail, large prints, or 8K video. It\'s the flagship choice for resolution-focused work.',
        image: '/fujifilm-buying-guide/images/cameras/x-h2.jpg',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '3.69M dots',
        screenType: 'Tilting',
        eightKVideo: true,
        fourK120fps: false,
        fortyMP: true
    },
    {
        id: 'xt5',
        name: 'X-T5',
        nickname: 'The Classic All-Rounder',
        tagline: 'The perfect balance of features, design, and performance',
        price: 1699,
        priceRange: 'premium',
        sensor: '40.2MP APS-C X-Trans CMOS 5 HR',
        sensorType: '40mp',
        processor: 'X-Processor 5',
        autofocus: '425-point Intelligent Hybrid AF with AI detection',
        continuousShooting: '15 fps (mechanical), 20 fps (electronic)',
        maxFPS: 20,
        video: '6.2K @ 30p, 4K @ 60p, Full HD @ 240p',
        videoDynamicRange: 'F-Log: ~13 stops (ISO 200-400)',
        batteryLife: 580,
        weight: 557,
        memory: 'Dual UHS-II SD card slots',
        standoutFeatures: [
            'Classic retro design with tactile manual controls',
            'High-resolution 40.2MP sensor',
            'Lightweight and compact for its capabilities',
            'Dual SD card slots',
            'Weather-resistant body',
            'Excellent 7-stop IBIS performance'
        ],
        bestFor: [
            'General photography enthusiasts',
            'Travel photographers',
            'Street photographers',
            'Photographers who prefer manual controls',
            'Anyone wanting the best overall balance'
        ],
        whyChoose: 'The X-T5 combines the high-resolution sensor with Fujifilm\'s iconic retro design, dual card slots, and weather sealing. It\'s the sweet spot for photographers who want professional features in a classic, tactile package.',
        image: '/fujifilm-buying-guide/images/cameras/x-t5.jpg',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '3.69M dots',
        screenType: 'Tilting',
        eightKVideo: false,
        fourK120fps: false,
        fortyMP: true
    },
    {
        id: 'xe5',
        name: 'X-E5',
        nickname: 'The Compact Rangefinder',
        tagline: 'The first X-E series camera with IBIS, perfect for street photography',
        price: 1699,
        priceRange: 'premium',
        sensor: '40.2MP APS-C X-Trans CMOS 5 HR',
        sensorType: '40mp',
        processor: 'X-Processor 5',
        autofocus: '425-point hybrid AF with AI detection',
        continuousShooting: '8 fps (mechanical), 13 fps (electronic), 20 fps (1.29x crop)',
        maxFPS: 20,
        video: '6.2K @ 30p, 4K @ 60p, Full HD @ 240p',
        videoDynamicRange: 'F-Log: ~13 stops (ISO 200-400)',
        batteryLife: 460,
        weight: 450,
        memory: 'Single SD card slot',
        standoutFeatures: [
            'Compact rangefinder-style design',
            'First X-E series camera with IBIS (7 stops)',
            'Dedicated film simulation dial with customizable "recipe" slots',
            'Built-in pop-up flash',
            'High-resolution 40.2MP sensor in small body',
            'Lightweight and portable'
        ],
        bestFor: [
            'Street photographers',
            'Travel photographers',
            'Everyday carry enthusiasts',
            'Photographers who prefer rangefinder styling'
        ],
        whyChoose: 'The X-E5 brings the high-resolution sensor to a compact, rangefinder-style body with IBIS for the first time in the X-E series. It\'s perfect for photographers who want maximum image quality in a discreet, portable package.',
        image: '/fujifilm-buying-guide/images/cameras/x-e5.jpg',
        ibis: true,
        dualCards: false,
        weatherSeal: false,
        filmSimDial: true,
        builtInFlash: true,
        evf: true,
        evfResolution: '2.36M dots',
        screenType: 'Tilting',
        eightKVideo: false,
        fourK120fps: false,
        fortyMP: true
    },
    {
        id: 'xs20',
        name: 'X-S20',
        nickname: 'The Vlogging Champion',
        tagline: 'The best camera for content creators and vloggers',
        price: 1299,
        priceRange: 'mid',
        sensor: '26.1MP APS-C X-Trans CMOS 4',
        sensorType: '26mp',
        processor: 'X-Processor 5',
        autofocus: '425-point Intelligent Hybrid AF with deep-learning',
        continuousShooting: '8 fps (mechanical), 20 fps (electronic)',
        maxFPS: 20,
        video: '6.2K @ 30p, 4K @ 60p, Full HD @ 240p',
        videoDynamicRange: 'F-Log: ~12 stops',
        batteryLife: 750,
        weight: 491,
        memory: 'Single SD card slot',
        standoutFeatures: [
            'Fully articulating screen ideal for vlogging',
            'Excellent battery life (longest in the lineup)',
            'Improved autofocus with deep-learning technology',
            'Dedicated vlogging mode',
            'Compact and lightweight design',
            '7-stop IBIS for smooth handheld video'
        ],
        bestFor: [
            'Vloggers and content creators',
            'Social media content creators',
            'Travel photographers who vlog',
            'Hybrid shooters (photo + video)'
        ],
        whyChoose: 'The X-S20 is purpose-built for content creation. With its fully articulating screen, exceptional battery life, and vlogging-specific features, it\'s the perfect camera for anyone creating video content.',
        image: '/fujifilm-buying-guide/images/cameras/x-s20.jpg',
        ibis: true,
        dualCards: false,
        weatherSeal: false,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '2.36M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: false,
        fortyMP: false
    },
    {
        id: 'xt50',
        name: 'X-T50',
        nickname: 'The Compact Enthusiast',
        tagline: 'X-T5 features in a more compact body with film simulation dial',
        price: 1399,
        priceRange: 'mid',
        sensor: '40.2MP APS-C X-Trans CMOS 5 HR',
        sensorType: '40mp',
        processor: 'X-Processor 5',
        autofocus: '425-point Intelligent Hybrid AF with AI detection',
        continuousShooting: '15 fps (mechanical), 20 fps (electronic)',
        maxFPS: 20,
        video: '6.2K @ 30p, 4K @ 60p, Full HD @ 240p',
        videoDynamicRange: 'F-Log: ~13 stops (ISO 200-400)',
        batteryLife: 580,
        weight: 550,
        memory: 'Single SD card slot',
        standoutFeatures: [
            'Retro design with tactile controls',
            'High-resolution 40.2MP sensor',
            'Film simulation dial for quick access to creative profiles',
            '7-stop IBIS performance',
            'Weather-resistant body',
            'More compact than X-T5'
        ],
        bestFor: [
            'Enthusiast photographers',
            'Those wanting X-T5 features in a smaller body',
            'Photographers who love film simulations',
            'Travel photographers wanting high resolution'
        ],
        whyChoose: 'The X-T50 brings the high-resolution sensor and most X-T5 features to a more compact body, with the added convenience of a dedicated film simulation dial. It\'s perfect for enthusiasts who want flagship image quality in a smaller package.',
        image: '/fujifilm-buying-guide/images/cameras/x-t50.jpg',
        ibis: true,
        dualCards: false,
        weatherSeal: true,
        filmSimDial: true,
        builtInFlash: false,
        evf: true,
        evfResolution: '3.69M dots',
        screenType: 'Tilting',
        eightKVideo: false,
        fourK120fps: false,
        fortyMP: true
    },
    {
        id: 'xt30iii',
        name: 'X-T30 III',
        nickname: 'The Value Leader',
        tagline: 'The most compact camera with excellent value and performance',
        price: 999,
        priceRange: 'budget',
        sensor: '26.1MP APS-C X-Trans CMOS 4',
        sensorType: '26mp',
        processor: 'X-Processor 5',
        autofocus: '425-point Intelligent Hybrid AF with subject detection',
        continuousShooting: '8 fps (mechanical), 30 fps (electronic, 1.25x crop)',
        maxFPS: 30,
        video: '6K @ 30p, 4K @ 60p, Full HD @ 240p (10-bit color)',
        videoDynamicRange: 'F-Log: ~12 stops',
        batteryLife: 425,
        weight: 378,
        memory: 'Single SD card slot',
        standoutFeatures: [
            'Most compact and lightweight in the lineup (with EVF)',
            'Film simulation dial replacing Drive dial (20 profiles)',
            'No IBIS (keeps body smaller and lighter)',
            'Built-in flash',
            '10-bit video recording',
            'Excellent value proposition'
        ],
        bestFor: [
            'Beginners',
            'Travel photographers',
            'Compact camera enthusiasts',
            'Budget-conscious users',
            'Anyone wanting the smallest camera with EVF'
        ],
        whyChoose: 'The X-T30 III offers incredible value, packing professional features into the most compact body with an electronic viewfinder. It\'s perfect for photographers who prioritize portability and affordability without sacrificing image quality.',
        image: '/fujifilm-buying-guide/images/cameras/x-t30-iii.jpg',
        ibis: false,
        dualCards: false,
        weatherSeal: false,
        filmSimDial: true,
        builtInFlash: true,
        evf: true,
        evfResolution: '2.36M dots',
        screenType: 'Tilting',
        eightKVideo: false,
        fourK120fps: false,
        fortyMP: false
    },
    {
        id: 'xm5',
        name: 'X-M5',
        nickname: 'The Entry Point',
        tagline: 'The smallest and most affordable entry into the Fujifilm X-Series',
        price: 800,
        priceRange: 'budget',
        sensor: '26.1MP APS-C X-Trans CMOS 4',
        sensorType: '26mp',
        processor: 'X-Processor 5',
        autofocus: '425-point Intelligent Hybrid AF',
        continuousShooting: '8 fps (mechanical), 20 fps (electronic)',
        maxFPS: 20,
        video: '6.2K @ 30p, 4K @ 60p, Full HD @ 60p',
        videoDynamicRange: 'F-Log: ~12 stops',
        batteryLife: 475,
        weight: 375,
        memory: 'Single SD card slot',
        standoutFeatures: [
            'Ultra-compact design (smallest in lineup)',
            'No electronic viewfinder (LCD screen only)',
            'Fully articulating screen',
            'Budget-friendly entry point',
            'USB-C 3.2, Wi-Fi 5, Bluetooth 4.2 connectivity',
            'Perfect for casual shooting'
        ],
        bestFor: [
            'Budget-conscious users',
            'Vloggers (screen-only shooting)',
            'Casual photographers',
            'Those who prefer screen-only shooting',
            'First-time Fujifilm users'
        ],
        whyChoose: 'The X-M5 is the most affordable way to enter the Fujifilm X-Series ecosystem. While it lacks an EVF and IBIS, it still delivers excellent image quality in the smallest, most budget-friendly package.',
        image: '/fujifilm-buying-guide/images/cameras/x-m5.jpg',
        ibis: false,
        dualCards: false,
        weatherSeal: false,
        filmSimDial: false,
        builtInFlash: false,
        evf: false,
        evfResolution: 'None',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: false,
        fortyMP: false
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderCameraProfiles();
    populateComparisonTables();
    setupFilters();
    setupComparisonTool();
    setupSmoothScroll();
    setupStickyNav();
});

// Render camera profiles
function renderCameraProfiles() {
    const container = document.getElementById('camera-profiles');
    container.innerHTML = cameras.map(camera => createCameraCard(camera)).join('');
}

// Create camera card HTML
function createCameraCard(camera) {
    const priceDisplay = camera.price >= 1000 
        ? `$${camera.price.toLocaleString()}` 
        : `$${camera.price}`;
    
    return `
        <article class="camera-card" data-price="${camera.priceRange}" data-sensor="${camera.sensorType}">
            <div class="camera-image">
                <img src="${camera.image}" alt="${camera.name}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3E${camera.name}%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="camera-content">
                <h3>${camera.name} - ${camera.nickname}</h3>
                <p class="tagline">${camera.tagline}</p>
                <div class="camera-specs">
                    <div class="spec-item">
                        <span class="spec-label">💰 Price:</span>
                        <span class="spec-value">${priceDisplay} (body only)</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">📐 Sensor:</span>
                        <span class="spec-value">${camera.sensor}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">⚡ Processor:</span>
                        <span class="spec-value">${camera.processor}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">📸 Continuous:</span>
                        <span class="spec-value">${camera.continuousShooting}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">🎥 Video:</span>
                        <span class="spec-value">${camera.video}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">📊 Video Dynamic Range:</span>
                        <span class="spec-value">${camera.videoDynamicRange || 'N/A'}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">🔋 Battery:</span>
                        <span class="spec-value">~${camera.batteryLife} shots</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">⚖️ Weight:</span>
                        <span class="spec-value">${camera.weight}g</span>
                    </div>
                </div>
                <div class="standout-features">
                    <h4>✨ Standout Features</h4>
                    <ul>
                        ${camera.standoutFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="best-for">
                    <h4>🎯 Best Suited For</h4>
                    <ul>
                        ${camera.bestFor.map(use => `<li>${use}</li>`).join('')}
                    </ul>
                </div>
                <div class="why-choose">
                    <h4>💡 Why Choose ${camera.name}?</h4>
                    <p>${camera.whyChoose}</p>
                </div>
            </div>
        </article>
    `;
}

// Populate comparison tables
function populateComparisonTables() {
    populateSpecTable();
    populateSizeTable();
    populateBatteryTable();
    populateFeatureMatrix();
    populateComparisonSelects();
}

function populateSpecTable() {
    const tbody = document.getElementById('spec-table-body');
    tbody.innerHTML = cameras.map(camera => `
        <tr>
            <td><strong>${camera.name}</strong></td>
            <td>$${camera.price.toLocaleString()}</td>
            <td>${camera.sensor.includes('40.2') ? '40.2MP HR' : camera.sensor.includes('26.16') ? '26.16MP HS' : '26.1MP'}</td>
            <td>${camera.maxFPS}${camera.maxFPS === 30 ? '*' : ''}</td>
            <td>${camera.video.split(',')[0]}</td>
            <td>${camera.ibis ? '✅' : '❌'}</td>
            <td>${camera.weatherSeal ? '✅' : '❌'}</td>
            <td>${camera.dualCards ? '✅' : '❌'}</td>
        </tr>
    `).join('');
}

function populateSizeTable() {
    const tbody = document.getElementById('size-table-body');
    tbody.innerHTML = cameras.map(camera => `
        <tr>
            <td><strong>${camera.name}</strong></td>
            <td>${camera.weight}g</td>
            <td>${camera.screenType}</td>
            <td>${camera.evfResolution}</td>
        </tr>
    `).join('');
}

function populateBatteryTable() {
    const tbody = document.getElementById('battery-table-body');
    const sorted = [...cameras].sort((a, b) => b.batteryLife - a.batteryLife);
    tbody.innerHTML = sorted.map(camera => {
        let notes = '';
        if (camera.batteryLife === 750) notes = '🔋 Longest battery life';
        else if (camera.batteryLife >= 600) notes = 'Excellent';
        else if (camera.batteryLife >= 500) notes = 'Good';
        else if (camera.batteryLife >= 450) notes = 'Average';
        else notes = 'Shorter, but acceptable';
        
        return `
            <tr>
                <td><strong>${camera.name}</strong></td>
                <td>~${camera.batteryLife}</td>
                <td>${notes}</td>
            </tr>
        `;
    }).join('');
}

function populateFeatureMatrix() {
    const tbody = document.getElementById('feature-matrix-body');
    const features = [
        { name: 'IBIS (7 stops)', key: 'ibis' },
        { name: 'Dual Card Slots', key: 'dualCards' },
        { name: '40MP Sensor', key: 'fortyMP' },
        { name: 'Fully Articulating Screen', key: 'screenType', value: 'Fully Articulating' },
        { name: 'Film Simulation Dial', key: 'filmSimDial' },
        { name: 'Weather Sealing', key: 'weatherSeal' },
        { name: 'Built-in Flash', key: 'builtInFlash' },
        { name: 'EVF', key: 'evf' },
        { name: '8K Video', key: 'eightKVideo' },
        { name: '4K 120fps', key: 'fourK120fps' }
    ];
    
    tbody.innerHTML = features.map(feature => {
        const cells = cameras.map(camera => {
            let hasFeature = false;
            if (feature.value) {
                hasFeature = camera[feature.key] === feature.value;
            } else {
                hasFeature = camera[feature.key] === true;
            }
            return hasFeature ? '✅' : '❌';
        }).join('');
        
        return `
            <tr>
                <td><strong>${feature.name}</strong></td>
                ${cells.split('').map(cell => `<td>${cell}</td>`).join('')}
            </tr>
        `;
    }).join('');
}

function populateComparisonSelects() {
    const select1 = document.getElementById('compare-camera-1');
    const select2 = document.getElementById('compare-camera-2');
    
    cameras.forEach(camera => {
        const option1 = document.createElement('option');
        option1.value = camera.id;
        option1.textContent = camera.name;
        select1.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = camera.id;
        option2.textContent = camera.name;
        select2.appendChild(option2);
    });
}

// Setup filters
function setupFilters() {
    const priceFilter = document.getElementById('price-filter');
    const sensorFilter = document.getElementById('sensor-filter');
    
    priceFilter.addEventListener('change', applyFilters);
    sensorFilter.addEventListener('change', applyFilters);
}

function applyFilters() {
    const priceValue = document.getElementById('price-filter').value;
    const sensorValue = document.getElementById('sensor-filter').value;
    const cards = document.querySelectorAll('.camera-card');
    
    cards.forEach(card => {
        const priceMatch = priceValue === 'all' || card.dataset.price === priceValue;
        const sensorMatch = sensorValue === 'all' || card.dataset.sensor === sensorValue;
        
        if (priceMatch && sensorMatch) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-in';
        } else {
            card.style.display = 'none';
        }
    });
}

// Setup comparison tool
function setupComparisonTool() {
    const compareBtn = document.getElementById('compare-btn');
    compareBtn.addEventListener('click', performComparison);
}

function performComparison() {
    const camera1Id = document.getElementById('compare-camera-1').value;
    const camera2Id = document.getElementById('compare-camera-2').value;
    
    if (!camera1Id || !camera2Id) {
        alert('Please select both cameras to compare.');
        return;
    }
    
    if (camera1Id === camera2Id) {
        alert('Please select two different cameras.');
        return;
    }
    
    const camera1 = cameras.find(c => c.id === camera1Id);
    const camera2 = cameras.find(c => c.id === camera2Id);
    
    const resultsDiv = document.getElementById('comparison-results');
    resultsDiv.innerHTML = `
        <div class="comparison-side-by-side">
            <div class="comparison-camera">
                <h4>${camera1.name}</h4>
                <img src="${camera1.image}" alt="${camera1.name}" loading="lazy" onerror="this.style.display='none'">
                <table class="comparison-details">
                    <tr><td>Price</td><td>$${camera1.price.toLocaleString()}</td></tr>
                    <tr><td>Sensor</td><td>${camera1.sensor}</td></tr>
                    <tr><td>Max FPS</td><td>${camera1.maxFPS}</td></tr>
                    <tr><td>Video</td><td>${camera1.video}</td></tr>
                    <tr><td>Video Dynamic Range</td><td>${camera1.videoDynamicRange || 'N/A'}</td></tr>
                    <tr><td>Battery</td><td>~${camera1.batteryLife} shots</td></tr>
                    <tr><td>Weight</td><td>${camera1.weight}g</td></tr>
                    <tr><td>IBIS</td><td>${camera1.ibis ? '✅' : '❌'}</td></tr>
                    <tr><td>Weather Seal</td><td>${camera1.weatherSeal ? '✅' : '❌'}</td></tr>
                    <tr><td>Dual Cards</td><td>${camera1.dualCards ? '✅' : '❌'}</td></tr>
                </table>
            </div>
            <div class="comparison-camera">
                <h4>${camera2.name}</h4>
                <img src="${camera2.image}" alt="${camera2.name}" loading="lazy" onerror="this.style.display='none'">
                <table class="comparison-details">
                    <tr><td>Price</td><td>$${camera2.price.toLocaleString()}</td></tr>
                    <tr><td>Sensor</td><td>${camera2.sensor}</td></tr>
                    <tr><td>Max FPS</td><td>${camera2.maxFPS}</td></tr>
                    <tr><td>Video</td><td>${camera2.video}</td></tr>
                    <tr><td>Video Dynamic Range</td><td>${camera2.videoDynamicRange || 'N/A'}</td></tr>
                    <tr><td>Battery</td><td>~${camera2.batteryLife} shots</td></tr>
                    <tr><td>Weight</td><td>${camera2.weight}g</td></tr>
                    <tr><td>IBIS</td><td>${camera2.ibis ? '✅' : '❌'}</td></tr>
                    <tr><td>Weather Seal</td><td>${camera2.weatherSeal ? '✅' : '❌'}</td></tr>
                    <tr><td>Dual Cards</td><td>${camera2.dualCards ? '✅' : '❌'}</td></tr>
                </table>
            </div>
        </div>
    `;
    
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Setup smooth scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Setup sticky navigation
function setupStickyNav() {
    const header = document.getElementById('main-header');
    const nav = document.getElementById('sticky-nav');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > headerHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
}

