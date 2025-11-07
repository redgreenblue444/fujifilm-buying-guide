// Video specifications for professional cinematography
const videoSpecs = {
    xh2s: {
        resolutions: ['8K (7680x4320)', '6.2K (6240x4168)', '4K DCI (4096x2160)', '4K UHD (3840x2160)', 'Full HD (1920x1080)'],
        frameRates: {
            '8K': [],
            '6.2K': ['30p', '25p', '24p', '23.98p'],
            '4K DCI': ['120p', '60p', '50p', '30p', '25p', '24p', '23.98p'],
            '4K UHD': ['120p', '60p', '50p', '30p', '25p', '24p', '23.98p'],
            'Full HD': ['240p', '120p', '60p', '50p', '30p', '25p', '24p', '23.98p']
        },
        codecs: ['H.265 (HEVC)', 'H.264', 'ProRes 422 HQ', 'ProRes 422', 'ProRes 422 LT'],
        bitDepth: '12-bit (F-Log2), 10-bit (F-Log)',
        chroma: '4:2:2 (internal), 4:2:2:4 (HDMI)',
        hdmi: '4K 60p, 12-bit RAW',
        rawOutput: 'Yes (via HDMI to Atomos/Blackmagic)',
        recordingLimit: 'Unlimited (with cooling fan)',
        audio: '24-bit 48kHz, XLR adapter available',
        dynamicRange: 'F-Log2: ~13+ stops',
        bestISO: 'ISO 640-800 for F-Log2'
    },
    xh2: {
        resolutions: ['8K (7680x4320)', '6.2K (6240x4168)', '4K DCI (4096x2160)', '4K UHD (3840x2160)', 'Full HD (1920x1080)'],
        frameRates: {
            '8K': ['30p', '25p', '24p', '23.98p'],
            '6.2K': ['30p', '25p', '24p', '23.98p'],
            '4K DCI': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            '4K UHD': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            'Full HD': ['240p', '120p', '60p', '50p', '30p', '25p', '24p', '23.98p']
        },
        codecs: ['H.265 (HEVC)', 'H.264', 'ProRes 422 HQ', 'ProRes 422', 'ProRes 422 LT'],
        bitDepth: '12-bit (F-Log2), 10-bit (F-Log)',
        chroma: '4:2:2 (internal), 4:2:2:4 (HDMI)',
        hdmi: '8K 30p, 4K 60p, 12-bit RAW',
        rawOutput: 'Yes (via HDMI to Atomos/Blackmagic)',
        recordingLimit: 'Unlimited',
        audio: '24-bit 48kHz, XLR adapter available',
        dynamicRange: 'F-Log2: ~13+ stops',
        bestISO: 'ISO 640-800 for F-Log2'
    },
    xt5: {
        resolutions: ['6.2K (6240x4168)', '4K DCI (4096x2160)', '4K UHD (3840x2160)', 'Full HD (1920x1080)'],
        frameRates: {
            '6.2K': ['30p', '25p', '24p', '23.98p'],
            '4K DCI': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            '4K UHD': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            'Full HD': ['240p', '120p', '60p', '50p', '30p', '25p', '24p', '23.98p']
        },
        codecs: ['H.265 (HEVC)', 'H.264'],
        bitDepth: '10-bit',
        chroma: '4:2:2 (internal), 4:2:2 (HDMI)',
        hdmi: '4K 60p, 10-bit',
        rawOutput: 'No',
        recordingLimit: '~30 minutes (4K), unlimited (Full HD)',
        audio: '24-bit 48kHz',
        dynamicRange: 'F-Log: ~13 stops (ISO 200-400)',
        bestISO: 'ISO 200-400 for F-Log'
    },
    xe5: {
        resolutions: ['6.2K (6240x4168)', '4K DCI (4096x2160)', '4K UHD (3840x2160)', 'Full HD (1920x1080)'],
        frameRates: {
            '6.2K': ['30p', '25p', '24p', '23.98p'],
            '4K DCI': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            '4K UHD': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            'Full HD': ['240p', '120p', '60p', '50p', '30p', '25p', '24p', '23.98p']
        },
        codecs: ['H.265 (HEVC)', 'H.264'],
        bitDepth: '10-bit',
        chroma: '4:2:2 (internal), 4:2:2 (HDMI)',
        hdmi: '4K 60p, 10-bit',
        rawOutput: 'No',
        recordingLimit: '~30 minutes (4K), unlimited (Full HD)',
        audio: '24-bit 48kHz',
        dynamicRange: 'F-Log: ~13 stops (ISO 200-400)',
        bestISO: 'ISO 200-400 for F-Log'
    },
    xs20: {
        resolutions: ['6.2K (6240x4168)', '4K DCI (4096x2160)', '4K UHD (3840x2160)', 'Full HD (1920x1080)'],
        frameRates: {
            '6.2K': ['30p', '25p', '24p', '23.98p'],
            '4K DCI': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            '4K UHD': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            'Full HD': ['240p', '120p', '60p', '50p', '30p', '25p', '24p', '23.98p']
        },
        codecs: ['H.265 (HEVC)', 'H.264'],
        bitDepth: '10-bit',
        chroma: '4:2:2 (internal), 4:2:2 (HDMI)',
        hdmi: '4K 60p, 10-bit',
        rawOutput: 'No',
        recordingLimit: '~30 minutes (4K), unlimited (Full HD)',
        audio: '24-bit 48kHz',
        dynamicRange: 'F-Log: ~12 stops',
        bestISO: 'ISO 400-800 for F-Log'
    },
    xt50: {
        resolutions: ['6.2K (6240x4168)', '4K DCI (4096x2160)', '4K UHD (3840x2160)', 'Full HD (1920x1080)'],
        frameRates: {
            '6.2K': ['30p', '25p', '24p', '23.98p'],
            '4K DCI': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            '4K UHD': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            'Full HD': ['240p', '120p', '60p', '50p', '30p', '25p', '24p', '23.98p']
        },
        codecs: ['H.265 (HEVC)', 'H.264'],
        bitDepth: '10-bit',
        chroma: '4:2:2 (internal), 4:2:2 (HDMI)',
        hdmi: '4K 60p, 10-bit',
        rawOutput: 'No',
        recordingLimit: '~30 minutes (4K), unlimited (Full HD)',
        audio: '24-bit 48kHz',
        dynamicRange: 'F-Log: ~13 stops (ISO 200-400)',
        bestISO: 'ISO 200-400 for F-Log'
    },
    xt30iii: {
        resolutions: ['6K (6032x3392)', '4K DCI (4096x2160)', '4K UHD (3840x2160)', 'Full HD (1920x1080)'],
        frameRates: {
            '6K': ['30p', '25p', '24p', '23.98p'],
            '4K DCI': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            '4K UHD': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            'Full HD': ['240p', '120p', '60p', '50p', '30p', '25p', '24p', '23.98p']
        },
        codecs: ['H.265 (HEVC)', 'H.264'],
        bitDepth: '10-bit',
        chroma: '4:2:2 (internal), 4:2:2 (HDMI)',
        hdmi: '4K 60p, 10-bit',
        rawOutput: 'No',
        recordingLimit: '~30 minutes (4K), unlimited (Full HD)',
        audio: '24-bit 48kHz',
        dynamicRange: 'F-Log: ~12 stops',
        bestISO: 'ISO 400-800 for F-Log'
    },
    xm5: {
        resolutions: ['6.2K (6240x4168)', '4K DCI (4096x2160)', '4K UHD (3840x2160)', 'Full HD (1920x1080)'],
        frameRates: {
            '6.2K': ['30p', '25p', '24p', '23.98p'],
            '4K DCI': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            '4K UHD': ['60p', '50p', '30p', '25p', '24p', '23.98p'],
            'Full HD': ['60p', '50p', '30p', '25p', '24p', '23.98p']
        },
        codecs: ['H.265 (HEVC)', 'H.264'],
        bitDepth: '10-bit',
        chroma: '4:2:2 (internal), 4:2:2 (HDMI)',
        hdmi: '4K 60p, 10-bit',
        rawOutput: 'No',
        recordingLimit: '~30 minutes (4K), unlimited (Full HD)',
        audio: '24-bit 48kHz',
        dynamicRange: 'F-Log: ~12 stops',
        bestISO: 'ISO 400-800 for F-Log'
    }
};

// Initialize cinematography page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('video-specs-container')) {
        renderVideoSpecs();
        populateCodecTable();
        populateExternalTable();
        populateDRTable();
        setupSmoothScroll();
        setupStickyNav();
    }
});

function renderVideoSpecs() {
    const container = document.getElementById('video-specs-container');
    const cameraMap = {
        'xh2s': { name: 'X-H2S', image: '/fujifilm-buying-guide/images/cameras/x-h2s.jpg' },
        'xh2': { name: 'X-H2', image: '/fujifilm-buying-guide/images/cameras/x-h2.jpg' },
        'xt5': { name: 'X-T5', image: '/fujifilm-buying-guide/images/cameras/x-t5.jpg' },
        'xe5': { name: 'X-E5', image: '/fujifilm-buying-guide/images/cameras/x-e5.jpg' },
        'xs20': { name: 'X-S20', image: '/fujifilm-buying-guide/images/cameras/x-s20.jpg' },
        'xt50': { name: 'X-T50', image: '/fujifilm-buying-guide/images/cameras/x-t50.jpg' },
        'xt30iii': { name: 'X-T30 III', image: '/fujifilm-buying-guide/images/cameras/x-t30-iii.jpg' },
        'xm5': { name: 'X-M5', image: '/fujifilm-buying-guide/images/cameras/x-m5.jpg' }
    };

    container.innerHTML = Object.entries(videoSpecs).map(([id, specs]) => {
        const camera = cameraMap[id];
        const maxRes = specs.resolutions[0];
        const maxFR = Object.values(specs.frameRates).flat().filter(fr => fr.includes('p')).sort((a, b) => {
            const numA = parseInt(a);
            const numB = parseInt(b);
            return numB - numA;
        })[0];
        
        return `
            <div class="video-spec-card">
                <h4>${camera.name}</h4>
                <img src="${camera.image}" alt="${camera.name}" style="width: 100%; max-width: 200px; margin: 1rem 0;" loading="lazy" onerror="this.style.display='none'">
                <p><strong>Max Resolution:</strong> ${maxRes}</p>
                <p><strong>Max Frame Rate:</strong> ${maxFR}</p>
                <p><strong>Codecs:</strong> ${specs.codecs.join(', ')}</p>
                <p><strong>Bit Depth:</strong> ${specs.bitDepth}</p>
                <p><strong>Dynamic Range:</strong> ${specs.dynamicRange}</p>
                <p><strong>Recording Limit:</strong> ${specs.recordingLimit}</p>
                ${specs.rawOutput === 'Yes' ? '<span class="feature-badge pro">RAW Output</span>' : ''}
                ${specs.codecs.includes('ProRes') ? '<span class="feature-badge pro">ProRes</span>' : ''}
            </div>
        `;
    }).join('');
}

function populateCodecTable() {
    const tbody = document.getElementById('codec-table-body');
    tbody.innerHTML = Object.entries(videoSpecs).map(([id, specs]) => {
        const cameraMap = {
            'xh2s': 'X-H2S',
            'xh2': 'X-H2',
            'xt5': 'X-T5',
            'xe5': 'X-E5',
            'xs20': 'X-S20',
            'xt50': 'X-T50',
            'xt30iii': 'X-T30 III',
            'xm5': 'X-M5'
        };
        
        const hasH264 = specs.codecs.includes('H.264') ? '✅' : '❌';
        const hasH265 = specs.codecs.includes('H.265') ? '✅' : '❌';
        const hasProRes = specs.codecs.some(c => c.includes('ProRes')) ? '✅' : '❌';
        
        return `
            <tr>
                <td><strong>${cameraMap[id]}</strong></td>
                <td>${hasH264}</td>
                <td>${hasH265}</td>
                <td>${hasProRes}</td>
                <td>${specs.bitDepth}</td>
                <td>${specs.chroma}</td>
            </tr>
        `;
    }).join('');
}

function populateExternalTable() {
    const tbody = document.getElementById('external-table-body');
    tbody.innerHTML = Object.entries(videoSpecs).map(([id, specs]) => {
        const cameraMap = {
            'xh2s': 'X-H2S',
            'xh2': 'X-H2',
            'xt5': 'X-T5',
            'xe5': 'X-E5',
            'xs20': 'X-S20',
            'xt50': 'X-T50',
            'xt30iii': 'X-T30 III',
            'xm5': 'X-M5'
        };
        
        return `
            <tr>
                <td><strong>${cameraMap[id]}</strong></td>
                <td>${specs.hdmi}</td>
                <td>${specs.rawOutput}</td>
                <td>${specs.resolutions[0]}</td>
                <td>Up to ${specs.frameRates[Object.keys(specs.frameRates)[0]][0]}</td>
            </tr>
        `;
    }).join('');
}

function populateDRTable() {
    const tbody = document.getElementById('dr-table-body');
    tbody.innerHTML = Object.entries(videoSpecs).map(([id, specs]) => {
        const cameraMap = {
            'xh2s': 'X-H2S',
            'xh2': 'X-H2',
            'xt5': 'X-T5',
            'xe5': 'X-E5',
            'xs20': 'X-S20',
            'xt50': 'X-T50',
            'xt30iii': 'X-T30 III',
            'xm5': 'X-M5'
        };
        
        const flog = specs.dynamicRange.includes('F-Log:') ? specs.dynamicRange : 'F-Log: ~12 stops';
        const flog2 = specs.dynamicRange.includes('F-Log2') ? specs.dynamicRange : 'N/A';
        
        return `
            <tr>
                <td><strong>${cameraMap[id]}</strong></td>
                <td>${flog}</td>
                <td>${flog2}</td>
                <td>${specs.bestISO}</td>
                <td>${specs.bitDepth}</td>
            </tr>
        `;
    }).join('');
}

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

function setupStickyNav() {
    const header = document.getElementById('main-header');
    const nav = document.getElementById('sticky-nav');
    if (!header || !nav) return;
    
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > headerHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
}

