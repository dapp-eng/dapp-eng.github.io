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
    if (days === 0) return 'Hari ini';
    if (days === 1) return '1 hari lalu';
    if (days < 30) return `${days} hari lalu`;
    const months = Math.floor(days / 30);
    if (months === 1) return '1 bulan lalu';
    if (months < 12) return `${months} bulan lalu`;
    return `${Math.floor(months / 12)} tahun lalu`;
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
        if (res.status === 403) throw new Error('GitHub API rate limit. Coba lagi beberapa menit.');
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const repos = await res.json();

        const filtered = repos.filter(r => {
            if (r.fork || r.archived) return false;
            if (r.name.toLowerCase() === GITHUB_USERNAME.toLowerCase()) return false;
            const isPinned = PINNED_REPOS.some(p =>
                r.name.toLowerCase() === p.toLowerCase() ||
                r.name.toLowerCase() === p.replace(/-/g, '').toLowerCase()
            );
            return !isPinned;
        }).slice(0, 12);

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="other-repo-empty">
                    <i class="fab fa-github"></i>
                    <p>Belum ada repositori publik lain di akun ini.</p>
                    <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" class="btn btn-outline" style="margin-top:12px">
                        Kunjungi GitHub
                    </a>
                </div>`;
            return;
        }

        grid.innerHTML = filtered.map(repoCard).join('');
        if (countEl) countEl.textContent = `${filtered.length} repositori`;

        grid.querySelectorAll('.other-repo-card').forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(16px)';
            el.style.transition = `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s`;
            requestAnimationFrame(() => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 50);
            });
        });

    } catch (err) {
        grid.innerHTML = '';
        if (errorEl) {
            errorMsg.textContent = err.message;
            errorEl.style.display = 'flex';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollSpy();
    initHamburger();
    initProjectFilter();
    initScrollAnimations();
    initProgressBars();
    initGitHubSection();
    initContactForm();
});

function initNavbar() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        navbar.style.background = window.pageYOffset > 50
            ? 'rgba(15, 23, 42, 0.98)'
            : 'rgba(15, 23, 42, 0.92)';
    });
}

function initScrollSpy() {
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            if (window.pageYOffset >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

function initHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
}

function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const match = filterValue === 'all' || card.getAttribute('data-category') === filterValue;

                if (match) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(12px)';
                    requestAnimationFrame(() => {
                        card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                } else {
                    card.style.transition = 'opacity 0.25s ease';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.skill-card, .project-card, .timeline-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

function initProgressBars() {
    let animated = false;
    const skillsSection = document.querySelector('.skills');
    if (!skillsSection) return;

    window.addEventListener('scroll', () => {
        if (animated) return;
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            animated = true;
            document.querySelectorAll('.progress').forEach(bar => {
                const target = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.transition = 'width 0.8s ease';
                    bar.style.width = target;
                }, 100);
            });
        }
    });
}

function initGitHubSection() {
    const section = document.getElementById('other-projects');
    if (!section) return;

    const sectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            fetchOtherProjects();
            sectionObserver.disconnect();
        }
    }, { threshold: 0.05 });

    sectionObserver.observe(section);
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        if (!name || !email || !message) {
            alert('Mohon isi semua field yang diperlukan');
            return;
        }
        alert('Terima kasih! Pesan Anda telah dikirim.');
        this.reset();
    });
}

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                obs.unobserve(img);
            }
        });
    });
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}