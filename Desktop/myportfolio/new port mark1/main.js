document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // --- Preloader Logic ---
    const preloader = document.getElementById('preloader');
    const progressPercentage = document.querySelector('.progress-percentage');
    const mainContent = document.getElementById('main-content');
    const satelliteNodes = document.querySelectorAll('.satellite-nodes .node');

    // Ensure nodes carry the 'active' class based on progress
    let progress = 0;

    // Disable scrolling during load
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
        progress += Math.random() * 8; // Slightly slower for effect
        if (progress > 100) progress = 100;

        if (progressPercentage) progressPercentage.innerText = `${Math.floor(progress)}%`;

        // Animate nodes sequentially
        if (progress > 20 && satelliteNodes[0]) satelliteNodes[0].classList.add('active');
        if (progress > 40 && satelliteNodes[1]) satelliteNodes[1].classList.add('active');
        if (progress > 60 && satelliteNodes[2]) satelliteNodes[2].classList.add('active');
        if (progress > 80 && satelliteNodes[3]) satelliteNodes[3].classList.add('active');

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                const tl = gsap.timeline();

                // Animate out the preloader
                tl.to('.network-animation', {
                    scale: 5,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.in"
                })
                    .to(preloader, {
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.inOut",
                        onComplete: () => {
                            preloader.style.display = 'none';
                            document.body.style.overflow = ''; // Restore scrolling

                            // Reveal Main Content
                            if (mainContent) {
                                gsap.to(mainContent, { opacity: 1, duration: 1 });
                            }
                            revealHero();
                        }
                    }, "-=0.4");
            }, 500);
        }
    }, 100);

    // --- Hero Reveal Animation ---
    function revealHero() {
        const tl = gsap.timeline();
        tl.from('.intro-tag', { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" })
          .from('#typewriter-text', { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
          .from('.cursor', { opacity: 0, duration: 0.3 }, "-=0.3")
          .from('.hero-tagline', { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
          .from('.hero-actions', { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
          .from('.expertise-block', { x: 40, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.5")
          .from('.social-icons, .scroll-indicator', { opacity: 0, duration: 0.4 }, "-=0.2")
          .call(() => typewriterName());
    }

    // --- Typewriter: DJ.L → backspace → Dhananjay Lakkawar ---
    function typewriterName() {
        const textElement = document.getElementById('typewriter-text');
        const cursor = document.querySelector('.cursor');
        const shortName = "DJ.L";
        const fullName = "Dhananjay Lakkawar";
        let index = shortName.length;
        let isDeleting = true;
        
        function type() {
            if (isDeleting) {
                textElement.textContent = shortName.substring(0, index);
                index--;
                
                if (index < 0) {
                    isDeleting = false;
                    index = 0;
                    setTimeout(type, 400);
                    return;
                }
                setTimeout(type, 50);
            } else {
                textElement.textContent = fullName.substring(0, index + 1);
                index++;
                
                if (index === fullName.length) {
                    cursor.style.display = 'none';
                    textElement.classList.add('full-name');
                    return;
                }
                setTimeout(type, 80);
            }
        }
        
        setTimeout(type, 1500);
    }

    // --- Parallax Scrollytelling Engine ---
    gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.to('.intro-block', {
        y: -50,
        opacity: 0,
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "50% top",
            scrub: 1
        }
    });

    gsap.to('.expertise-block', {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "50% top",
            scrub: 1
        }
    });

    // --- Section Animations ---
    const revealSections = document.querySelectorAll('.section-padding');
    revealSections.forEach(section => {
        gsap.from(section.querySelectorAll('.container > *'), {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // --- FAQ Logic ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(i => i.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });
    }

    // Nav Background on scroll
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('top-nav');
        if (window.scrollY > 50) {
            nav.style.padding = '1rem 5%';
            nav.style.background = 'rgba(0, 0, 0, 0.9)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.padding = '2rem 5%';
            nav.style.background = 'rgba(0, 0, 0, 0.2)';
            nav.style.backdropFilter = 'blur(10px)';
        }
    });
    // --- AI Agent Animation (Desktop only) ---
    if (window.innerWidth > 992) {
        const aiTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        gsap.set('.ai-agent-container', { opacity: 1 });
        gsap.set('.workflow-node', { y: 20, opacity: 0 });
        gsap.set('.connector', { width: 0 });
        gsap.set('.data-pulse', { x: '-100%' });
        gsap.set('.typing-indicator', { opacity: 0 });

        aiTimeline
            .to('.node-trigger', { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" })
            .to('.line-1', { width: '30px', duration: 0.5, ease: "power2.inOut" }, "-=0.2")
            .to('.node-process', { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2")
            .to('.line-1 .data-pulse', { x: '100%', duration: 0.6, ease: "power1.inOut" })
            .to('.node-process', { borderColor: '#ff6a00', boxShadow: '0 0 15px rgba(255, 106, 0, 0.3)', duration: 0.3 })
            .to('.typing-indicator', { opacity: 1, duration: 0.3 }, "<")
            .to('.typing-indicator', { opacity: 1, duration: 1.5 })
            .to('.typing-indicator', { opacity: 0, duration: 0.2 })
            .to('.node-process', { borderColor: 'rgba(255, 255, 255, 0.1)', boxShadow: 'none', duration: 0.3 })
            .to('.line-2', { width: '30px', duration: 0.5, ease: "power2.inOut" })
            .to('.node-output', { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2")
            .to('.line-2 .data-pulse', { x: '100%', duration: 0.6, ease: "power1.inOut" })
            .to('.node-output .node-icon', { backgroundColor: 'rgba(0, 229, 255, 0.2)', color: '#00e5ff', scale: 1.1, duration: 0.2, yoyo: true, repeat: 1 })
            .to('.ai-agent-container > *', { opacity: 0, y: 20, duration: 0.5, delay: 0.5 });
    }

});