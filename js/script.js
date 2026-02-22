const GITHUB_USERNAME = 'dapp-eng';

const PINNED_REPOS = [
    'diabetes-risk-prediction',
    'mbg-sentiment-analysis',
    'music-genre-classifier',
    'intalenta',
    'calmy',
    'msme-revenue-prediction'
];

const LANG_COLORS = {
    'Python': '#3b82f6',
    'Jupyter Notebook': '#f59e0b',
    'R': '#10b981',
    'JavaScript': '#eab308',
    'HTML': '#ef4444',
    'CSS': '#8b5cf6',
    'Shell': '#94a3b8',
};

const LANG_ICONS = {
    'Python': 'fab fa-python',
    'Jupyter Notebook': 'fas fa-book-open',
    'R': 'fas fa-chart-bar',
    'JavaScript': 'fab fa-js',
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'Shell': 'fas fa-terminal',
};

function getLangColor(lang) { return LANG_COLORS[lang] || '#6366f1'; }
function getLangIcon(lang) { return LANG_ICONS[lang] || 'fas fa-code'; }

function formatName(name) {
    return name.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function timeAgo(dateStr) {
    const days = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
    if (days === 0) return 'Today';
    if (days === 1) return '1 day ago';
    if (days < 30) return `${days} days ago`;
    const months = Math.floor(days / 30);
    if (months === 1) return '1 month ago';
    if (months < 12) return `${months} months ago`;
    return `${Math.floor(months / 12)}y ago`;
}

function skeletons(n) {
    return Array(n).fill(`
        <div class="other-repo-card skeleton">
            <div class="other-repo-top"><div class="skeleton-icon"></div></div>
            <div class="skeleton-line w60"></div>
            <div class="skeleton-line w90"></div>
            <div class="skeleton-line w40"></div>
        </div>`).join('');
}

function repoCard(repo) {
    const color = getLangColor(repo.language);
    const icon = getLangIcon(repo.language);
    return `
        <a class="other-repo-card" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
            <div class="other-repo-top">
                <div class="other-repo-icon" style="color:${color}"><i class="${icon}"></i></div>
                <i class="fab fa-github other-repo-gh"></i>
            </div>
            <h4 class="other-repo-name">${formatName(repo.name)}</h4>
            <p class="other-repo-desc">${repo.description || 'No description yet.'}</p>
            <div class="other-repo-meta">
                ${repo.language ? `<span class="other-repo-lang" style="--lang-color:${color}"><span class="lang-dot"></span>${repo.language}</span>` : ''}
                ${repo.stargazers_count > 0 ? `<span class="other-repo-stat"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>` : ''}
                ${repo.forks_count > 0 ? `<span class="other-repo-stat"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>` : ''}
                <span class="other-repo-updated">${timeAgo(repo.pushed_at)}</span>
            </div>
        </a>`;
}

async function fetchOtherProjects() {
    const grid = document.getElementById('otherProjectsGrid');
    const countEl = document.getElementById('otherProjectsCount');
    const errorEl = document.getElementById('otherProjectsError');
    const errorMsg = document.getElementById('otherProjectsErrorMsg');
    if (!grid) return;

    grid.innerHTML = skeletons(6);

    try {
        const res = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100&type=public`
        );

        if (res.status === 404) throw new Error('Username GitHub tidak ditemukan.');
        if (res.status === 403) throw new Error('GitHub API rate limit. Coba lagi nanti.');
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const repos = await res.json();

        const filtered = repos.filter(r =>
            !r.fork &&
            !r.archived &&
            r.name !== GITHUB_USERNAME &&
            !PINNED_REPOS.some(p => r.name.toLowerCase().includes(p.replace(/-/g, '').toLowerCase()) ||
                p.toLowerCase().includes(r.name.toLowerCase()))
        ).slice(0, 12);

        if (filtered.length === 0) {
            grid.innerHTML = '';
            errorMsg.textContent = 'Belum ada repositori lain yang tersedia.';
            errorEl.style.display = 'flex';
            return;
        }

        grid.innerHTML = filtered.map(repoCard).join('');
        if (countEl) countEl.textContent = `${filtered.length} repo ditemukan`;

        grid.querySelectorAll('.other-repo-card').forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(16px)';
            el.style.transition = `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s`;
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 50);
        });

    } catch (err) {
        grid.innerHTML = '';
        errorMsg.textContent = err.message;
        errorEl.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('other-projects');
    if (!section) return;
    const sectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            fetchOtherProjects();
            sectionObserver.disconnect();
        }
    }, { threshold: 0.1 });
    sectionObserver.observe(section);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// PROJECT FILTER
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 10);
            } else {
                if (card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// CONTACT FORM HANDLING
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;

        // Validate
        if (!name || !email || !message) {
            alert('Mohon isi semua field yang diperlukan');
            return;
        }

        // Here you can send the form data to a backend service
        // or use a service like FormSubmit, Netlify Forms, etc.
        console.log({
            name,
            email,
            subject,
            message
        });

        // Show success message
        alert('Terima kasih! Pesan Anda telah dikirim.');
        this.reset();
    });
}

// ANIMATE ON SCROLL
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card, .timeline-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// PROGRESS BAR ANIMATION
let hasAnimated = false;

window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills');
    if (skillsSection && !hasAnimated) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            animateProgressBars();
            hasAnimated = true;
        }
    }
});

function animateProgressBars() {
    document.querySelectorAll('.progress').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// TYPED EFFECT (OPTIONAL)
const typeWriterEffect = () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent;
    subtitle.textContent = '';
    let index = 0;

    const type = () => {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    };

    // Start typing when page loads
    window.addEventListener('load', type);
};

typeWriterEffect();

// LAZY LOADING IMAGES
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// TOOLTIP FUNCTIONALITY
const initTooltips = () => {
    const tooltips = document.querySelectorAll('[title]');
    tooltips.forEach(el => {
        el.addEventListener('mouseenter', showTooltip);
        el.addEventListener('mouseleave', hideTooltip);
    });
};

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = this.getAttribute('title');
    tooltip.style.cssText = `
        position: absolute;
        background: var(--dark-color);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
    `;
    document.body.appendChild(tooltip);
    
    const rect = this.getBoundingClientRect();
    tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
}

function hideTooltip() {
    document.querySelectorAll('.tooltip').forEach(t => t.remove());
}

// Initialize tooltips on load
document.addEventListener('DOMContentLoaded', initTooltips);

// THEME TOGGLE (OPTIONAL DARK MODE)
const toggleTheme = () => {
    const isDark = document.documentElement.style.getPropertyValue('--light-color') === '#1a1a1a';
    
    if (isDark) {
        document.documentElement.style.setProperty('--light-color', '#f8fafc');
        document.documentElement.style.setProperty('--dark-color', '#0f172a');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.style.setProperty('--light-color', '#1a1a1a');
        document.documentElement.style.setProperty('--dark-color', '#ffffff');
        localStorage.setItem('theme', 'dark');
    }
};

// Load theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    toggleTheme();
}