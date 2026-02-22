const GITHUB_USERNAME = 'dapp-eng';

const PINNED_REPOS = [
    'diabetes-risk-prediction',
    'mbg-sentiment-analysis',
    'music-genre-classifier',
    'intalenta',
    'calmy',
    'msme-revenue-prediction',
    'dapp-eng.github.io'
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

const TRANSLATIONS = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-experience': 'Experience',
        'nav-contact': 'Contact',
        'hero-badge': 'Open to Opportunities',
        'hero-desc': 'S1 Data Science student at UNESA with GPA 3.92. Experienced in Data Science, specializing in machine learning, statistical modeling, NLP, and data mining developed through competitions and academic projects.',
        'hero-btn-projects': 'View Projects',
        'hero-btn-cv': 'Download CV',
        'about-label': '01 - About',
        'about-title': 'About Me',
        'about-p1': 'A S1 Data Science student at <strong>Universitas Negeri Surabaya (UNESA)</strong> with a GPA of <strong>3.92/4.00</strong>. Strong interest in data processing, machine learning, and artificial intelligence. Experienced in handling data through various academic projects and competitions to produce impactful solutions.',
        'about-p2': 'Known as a <em>detail-oriented</em>, analytical, and communicative individual, always striving to produce high-quality data-driven insights. Involved in several activities at Himasada UNESA as part of a commitment to developing the data science ecosystem in Indonesia.',
        'stat-gpa': 'GPA / 4.00',
        'stat-projects': 'Completed Projects',
        'stat-competition': 'National Competition',
        'skills-label': '02 - Skills',
        'projects-label': '03 - Projects',
        'projects-title': 'Latest Projects',
        'filter-all': 'All',
        'filter-app': 'App',
        'view-project': 'View Project',
        'proj-desc-diabetes': 'Diabetes risk prediction model using machine learning algorithms with high accuracy to assist in early diagnosis.',
        'proj-desc-mbg': 'Public sentiment analysis of the Free Nutritious Meal program using Natural Language Processing techniques.',
        'proj-desc-music': 'Music genre classification system based on Digital Signal Processing using MFCC features and machine learning.',
        'proj-desc-intalenta': 'Course recommendation system based on Data Structures & Algorithms to help users find suitable courses.',
        'proj-desc-calmy': 'Python-based daily calorie tracker application that helps users effectively monitor their nutritional intake.',
        'proj-desc-msme': 'MSME revenue prediction model with XGBRegressor achieving R² = 0.91, developed in the national DISCO competition.',
        'other-sub': 'See more projects on my <strong>GitHub Repository</strong>. (Loaded automatically from GitHub API)',
        'other-btn': 'View All Projects',
        'exp-label': '04 - Experience',
        'exp-title': 'Experience',
        'exp-desc-1': 'Mentored 72 undergraduate students in 2 classes through weekly Python lab sessions. Evaluated programming assignments and collaborated with lecturers to align practicum syllabus with Data Science curriculum standards.',
        'exp-desc-2': 'National data mining competition. Developed a data analysis solution to map market opportunities for 5,000+ MSMEs and built an XGBRegressor revenue prediction model with R² = 0.91.',
        'exp-desc-3': 'Planned and executed the event flow for a national infographic competition with 150+ participants. Served as the main moderator and managed the final competition data.',
        'exp-desc-4': 'Managed logistics needs for an inauguration event with 300+ participants. Coordinated with 5+ divisions and external vendors, maintaining budget efficiency.',
        'contact-label': '05 - Contact',
        'contact-title': "Let's Collaborate",
        'contact-subtitle': 'Open to discussions about data science projects, research, and collaboration opportunities.',
        'contact-loc-label': 'Location',
        'contact-location': 'Driyorejo, Gresik - East Java',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-subject': 'Subject',
        'form-message': 'Your Message',
        'form-submit': 'Send Message',
        'notify-empty': 'Please fill in all required fields',
        'notify-invalid-email': 'Invalid email address',
        'notify-success': 'Message sent successfully! Thank you',
        'notify-error': 'An error occurred while sending the message',
        'notify-fail': 'Failed to send message. Please try again',
        'gh-error-404': `GitHub username "${GITHUB_USERNAME}" not found.`,
        'gh-error-403': 'GitHub API rate limit reached. Please try again in a few minutes.',
        'gh-no-desc': 'No description available.',
        'gh-empty': 'No other public projects found on this account.',
        'gh-visit': 'Visit GitHub',
        'gh-none': 'No additional projects',
        'gh-count': (n) => `${n} projects found`,
        'timeago-today': 'Today',
        'timeago-day': '1 day ago',
        'timeago-days': (d) => `${d} days ago`,
        'timeago-month': '1 month ago',
        'timeago-months': (m) => `${m} months ago`,
        'timeago-years': (y) => `${y} year${y > 1 ? 's' : ''} ago`,
    },
    id: {
        'nav-home': 'Home',
        'nav-about': 'Tentang',
        'nav-skills': 'Keahlian',
        'nav-projects': 'Project',
        'nav-experience': 'Pengalaman',
        'nav-contact': 'Kontak',
        'hero-badge': 'Open to Opportunities',
        'hero-desc': 'Mahasiswa S1 Data Science UNESA dengan IPK 3.92. Berpengalaman di bidang Data Science, khususnya machine learning, statistical modeling, NLP, dan data mining yang dikembangkan melalui kompetisi dan proyek akademik.',
        'hero-btn-projects': 'Lihat Project',
        'hero-btn-cv': 'Download CV',
        'about-label': '01 - Tentang',
        'about-title': 'Tentang Saya',
        'about-p1': 'Seorang mahasiswa S1 Data Science di <strong>Universitas Negeri Surabaya (UNESA)</strong> dengan IPK <strong>3.92/4.00</strong>. Memiliki ketertarikan kuat di bidang pengolahan data, machine learning, dan artificial intelligence. Berpengalaman mengolah data melalui berbagai proyek akademik dan kompetisi untuk menghasilkan solusi yang berdampak.',
        'about-p2': 'Dikenal sebagai pribadi yang <em>detail-oriented</em>, analitis, dan komunikatif, selalu berupaya menghasilkan insight berbasis data berkualitas tinggi. Terlibat dalam menyukseskan beberapa kegiatan di Himasada UNESA sebagai bagian dari komitmen terhadap pengembangan ekosistem data science di Indonesia.',
        'stat-gpa': 'IPK / 4.00',
        'stat-projects': 'Project Selesai',
        'stat-competition': 'Kompetisi Nasional',
        'skills-label': '02 - Keahlian',
        'projects-label': '03 - Project',
        'projects-title': 'Project Terbaru',
        'filter-all': 'Semua',
        'filter-app': 'Aplikasi',
        'view-project': 'Lihat Project',
        'proj-desc-diabetes': 'Model prediksi risiko diabetes menggunakan algoritma machine learning dengan akurasi tinggi untuk membantu diagnosis dini.',
        'proj-desc-mbg': 'Analisis sentimen publik terhadap program Makan Bergizi Gratis menggunakan teknik Natural Language Processing.',
        'proj-desc-music': 'Sistem klasifikasi genre musik berbasis Digital Signal Processing menggunakan fitur MFCC dan machine learning.',
        'proj-desc-intalenta': 'Sistem rekomendasi kursus berbasis Data Structures & Algorithms untuk membantu pengguna menemukan kursus yang sesuai.',
        'proj-desc-calmy': 'Aplikasi pelacak kalori harian berbasis Python yang membantu pengguna memantau asupan nutrisi secara efektif.',
        'proj-desc-msme': 'Model prediksi pendapatan UMKM dengan XGBRegressor yang mencapai R² = 0.91, dikembangkan dalam kompetisi DISCO nasional.',
        'other-sub': 'Lihat project lainnya di <strong>GitHub Repository</strong> saya. (Dimuat otomatis dari GitHub API)',
        'other-btn': 'Lihat Semua Project',
        'exp-label': '04 - Pengalaman',
        'exp-title': 'Pengalaman',
        'exp-desc-1': 'Membimbing 72 mahasiswa S1 di 2 kelas melalui sesi laboratorium mingguan Python. Mengevaluasi tugas programming dan berkolaborasi dengan dosen untuk menyelaraskan silabus praktikum dengan standar kurikulum Data Science.',
        'exp-desc-2': 'Kompetisi data mining tingkat nasional. Mengembangkan solusi analisis data untuk memetakan peluang pasar 5.000+ UMKM dan membangun model prediksi pendapatan XGBRegressor dengan R² = 0.91.',
        'exp-desc-3': 'Merencanakan dan mengeksekusi alur acara kompetisi infografis nasional dengan 150+ peserta. Bertugas sebagai moderator utama dan mengelola data kompetisi akhir.',
        'exp-desc-4': 'Mengelola kebutuhan logistik untuk acara inaugurasi 300+ peserta. Berkoordinasi dengan 5+ divisi dan vendor eksternal, menjaga efisiensi biaya anggaran.',
        'contact-label': '05 - Kontak',
        'contact-title': 'Mari Berkolaborasi',
        'contact-subtitle': 'Terbuka untuk diskusi project data science, penelitian, maupun peluang kolaborasi.',
        'contact-loc-label': 'Lokasi',
        'contact-location': 'Driyorejo, Gresik - Jawa Timur',
        'form-name': 'Nama Anda',
        'form-email': 'Email Anda',
        'form-subject': 'Subjek',
        'form-message': 'Pesan Anda',
        'form-submit': 'Kirim Pesan',
        'notify-empty': 'Mohon isi semua field yang diperlukan',
        'notify-invalid-email': 'Email tidak valid',
        'notify-success': 'Pesan berhasil dikirim! Terima kasih',
        'notify-error': 'Terjadi kesalahan saat mengirim pesan',
        'notify-fail': 'Gagal mengirim pesan. Coba ulangi',
        'gh-error-404': `Username GitHub "${GITHUB_USERNAME}" tidak ditemukan.`,
        'gh-error-403': 'GitHub API rate limit tercapai. Coba lagi beberapa menit.',
        'gh-no-desc': 'Tidak ada deskripsi.',
        'gh-empty': 'Belum ada project publik lain di akun ini.',
        'gh-visit': 'Kunjungi GitHub',
        'gh-none': 'Tidak ada project tambahan',
        'gh-count': (n) => `${n} project ditemukan`,
        'timeago-today': 'Hari ini',
        'timeago-day': '1 hari lalu',
        'timeago-days': (d) => `${d} hari lalu`,
        'timeago-month': '1 bulan lalu',
        'timeago-months': (m) => `${m} bulan lalu`,
        'timeago-years': (y) => `${y} tahun lalu`,
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function t(key, ...args) {
    const val = TRANSLATIONS[currentLang][key];
    if (typeof val === 'function') return val(...args);
    return val || key;
}

function applyLanguage() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = t(key);
        if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const value = t(key);
        if (value !== undefined) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        const value = t(key);
        if (value !== undefined) el.placeholder = value;
    });

    const langLabel = document.getElementById('langLabel');
    if (langLabel) {
        langLabel.textContent = currentLang === 'en' ? 'ID' : 'EN';
    }
}

function initLanguage() {
    applyLanguage();

    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'id' : 'en';
        localStorage.setItem('lang', currentLang);
        applyLanguage();
    });
}

function getLangColor(lang) { return LANG_COLORS[lang] || '#6366f1'; }
function getLangIcon(lang) { return LANG_ICONS[lang] || 'fas fa-code'; }

function formatName(name) {
    return name.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function timeAgo(dateStr) {
    const days = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
    if (days === 0) return t('timeago-today');
    if (days === 1) return t('timeago-day');
    if (days < 30) return t('timeago-days', days);
    const months = Math.floor(days / 30);
    if (months === 1) return t('timeago-month');
    if (months < 12) return t('timeago-months', months);
    return t('timeago-years', Math.floor(months / 12));
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

function repoCardWithDesc(repo) {
    const color = getLangColor(repo.language);
    const icon = getLangIcon(repo.language);
    return `
        <a class="other-repo-card" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
            <div class="other-repo-top">
                <div class="other-repo-icon" style="color:${color}"><i class="${icon}"></i></div>
                <i class="fab fa-github other-repo-gh"></i>
            </div>
            <h4 class="other-repo-name">${formatName(repo.name)}</h4>
            <p class="other-repo-desc">${repo.description}</p>
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
    errorEl.style.display = 'none';

    try {
        const res = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100&type=public`,
            { headers: { 'Accept': 'application/vnd.github.v3+json' } }
        );

        if (res.status === 404) {
            throw new Error(t('gh-error-404'));
        }
        if (res.status === 403) {
            throw new Error(t('gh-error-403'));
        }
        if (!res.ok) {
            throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
        }

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
                    <p>${t('gh-empty')}</p>
                    <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" class="btn btn-outline" style="margin-top:12px">
                        ${t('gh-visit')}
                    </a>
                </div>`;
            if (countEl) countEl.textContent = t('gh-none');
            return;
        }

        const reposWithDesc = await Promise.all(
            filtered.map(async (repo) => {
                let description = repo.description;
                
                if (!description) {
                    try {
                        const readmeRes = await fetch(
                            `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/readme`,
                            { headers: { 'Accept': 'application/vnd.github.v3.raw' } }
                        );
                        if (readmeRes.ok) {
                            const readmeText = await readmeRes.text();
                            const lines = readmeText.split('\n').filter(l => l.trim());
                            for (let line of lines) {
                                const cleaned = line.replace(/^#+\s*/, '').trim();
                                if (cleaned && !cleaned.startsWith('```')) {
                                    description = cleaned;
                                    break;
                                }
                            }
                        }
                    } catch (e) {
                        description = t('gh-no-desc');
                    }
                }
                
                return { ...repo, description: description || t('gh-no-desc') };
            })
        );

        grid.innerHTML = reposWithDesc.map(repoCardWithDesc).join('');
        if (countEl) countEl.textContent = t('gh-count', reposWithDesc.length);

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
        errorMsg.textContent = err.message;
        errorEl.style.display = 'flex';
    }
}

function animateNumber(element, targetValue, duration = 1500) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        if (typeof targetValue === 'string') {
            element.textContent = (parseFloat(targetValue) * progress).toFixed(2);
        } else {
            element.textContent = Math.floor(targetValue * progress);
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = targetValue;
        }
    }
    
    requestAnimationFrame(update);
}

function initThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        updateThemeIcon('sun');
    }

    const themeBtn = document.querySelector('.theme-toggle-btn');
    if (!themeBtn) return;

    themeBtn.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateThemeIcon(isLight ? 'sun' : 'moon');
    });
}

function updateThemeIcon(icon) {
    const themeBtn = document.querySelector('.theme-toggle-btn');
    if (themeBtn) {
        themeBtn.innerHTML = icon === 'sun' 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavbar();
    initScrollSpy();
    initHamburger();
    initProjectFilter();
    initScrollAnimations();
    initProgressBars();
    initGitHubSection();
    initContactForm();
    initThemeToggle();
    
    setTimeout(() => {
        fetchOtherProjects();
    }, 500);
});

function initNavbar() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        const scrolled = window.pageYOffset > 50;
        navbar.style.background = scrolled
            ? 'rgba(15, 23, 42, 0.98)'
            : 'rgba(15, 23, 42, 0.92)';
        navbar.style.boxShadow = scrolled
            ? '0 4px 16px rgba(0, 0, 0, 0.3)'
            : 'none';
    });
}

function initScrollSpy() {
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;
        const navHeight = 100;

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - navHeight;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === '#' + current) {
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
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
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
                const category = card.getAttribute('data-category');
                const match = filterValue === 'all' || category === filterValue;

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

        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const subjectInput = this.querySelectorAll('input[type="text"]')[1];
        const messageInput = this.querySelector('textarea');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = (subjectInput?.value.trim() || 'Pesan dari Portfolio');
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            showNotification(t('notify-empty'), 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification(t('notify-invalid-email'), 'error');
            return;
        }

        fetch('https://formspree.io/f/mzdajwaw', {
            method: 'POST',
            body: JSON.stringify({ name, email, subject, message }),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            if (response.ok) {
                showNotification(t('notify-success'), 'success');
                nameInput.value = '';
                emailInput.value = '';
                subjectInput.value = '';
                messageInput.value = '';
            } else {
                showNotification(t('notify-error'), 'error');
            }
        }).catch(() => {
            showNotification(t('notify-fail'), 'error');
        });
    });
}

function showNotification(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `notification notification-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 24px;
        background: ${type === 'success' ? '#34d399' : type === 'error' ? '#f87171' : '#38bdf8'};
        color: white;
        padding: 14px 20px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 500;
        z-index: 9998;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
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

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const stat3_92 = document.querySelector('.about-stats .stat:first-child h3');
            const stat10 = document.querySelector('.about-stats .stat:nth-child(2) h3');
            
            if (stat3_92) animateNumber(stat3_92, '3.92', 1500);
            if (stat10) animateNumber(stat10, 10, 1500);
            
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    aboutObserver.observe(aboutSection);
}