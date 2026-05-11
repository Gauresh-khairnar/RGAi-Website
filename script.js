// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDot && cursorOutline) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Add slight delay to outline for smooth effect
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    }
});

// Navbar Scroll & Spy Effect
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// High-Performance Scroll Spy using IntersectionObserver
const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(entry.target.id)) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    if(section.id) observer.observe(section);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const mobileFooter = document.querySelector('.mobile-menu-footer');
let isMenuOpen = false;

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.add('active');
            menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'; // Close icon
            
            // GSAP stagger animation
            gsap.to(mobileLinks, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.1
            });
            gsap.to(mobileFooter, {
                opacity: 1,
                duration: 0.5,
                delay: 0.5
            });
            // Disable body scroll
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('active');
            menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>'; // Menu icon
            
            gsap.to([mobileLinks, mobileFooter], {
                y: 20,
                opacity: 0,
                duration: 0.2
            });
            // Enable body scroll
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.click();
        });
    });
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Initial Load Animations
window.addEventListener('load', () => {
    // Navbar slide down
    gsap.to('.navbar', {
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Hero section elements fade up
    gsap.to('.fade-up', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
    });
});

// Three.js Hero Canvas
function initThreeJs() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    // Resize handling
    const container = canvas.parentElement;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a icosahedron wireframe
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    
    // Create an array of colors for the edges
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x00f0ff, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.3 
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Inner solid sphere for depth
    const innerGeo = new THREE.IcosahedronGeometry(1.5, 2);
    const innerMat = new THREE.MeshStandardMaterial({
        color: 0x030303,
        roughness: 0.2,
        metalness: 0.8
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f0ff, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x9333ea, 2);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Animation Loop
    const clock = new THREE.Clock();
    
    function animate() {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();

        // Rotate spheres
        sphere.rotation.y += 0.002;
        sphere.rotation.x += 0.001;
        
        innerSphere.rotation.y -= 0.005;
        innerSphere.rotation.x -= 0.002;

        // Hover effect
        sphere.position.y = Math.sin(elapsedTime * 0.5) * 0.2;
        innerSphere.position.y = Math.sin(elapsedTime * 0.5) * 0.2;

        // Mouse interaction
        window.addEventListener('mousemove', (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            
            gsap.to(camera.position, {
                x: (mouseX * 5),
                y: (mouseY * 5),
                duration: 2,
                ease: "power2.out"
            });
        });

        renderer.render(scene, camera);
    }

    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

initThreeJs();

// Scroll Animations
window.addEventListener('load', () => {
    const fadeUpElements = document.querySelectorAll('.fade-up:not(.hero-content .fade-up)');
    
    fadeUpElements.forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%", // Animation starts when top of element hits 85% of viewport
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // 1. Text Reveal Animation
    const revealTextElements = document.querySelectorAll('.text-reveal');
    revealTextElements.forEach(element => {
        // Split text into words (handling HTML tags like spans)
        // A simple approach is to use GSAP fromTo on the opacity/y of the whole element
        // but for a true "reveal", we animate it slightly differently:
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 40,
            opacity: 0,
            rotationX: -20,
            transformPerspective: 500,
            duration: 1.2,
            ease: "power4.out"
        });
    });

    // The video will now play naturally via autoplay in HTML.

    // 2.5 Scrollytelling Parallax Backgrounds (Elements)
    const parallaxElements = document.querySelectorAll('[data-speed]');
    parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed'));
        gsap.to(el, {
            y: () => (ScrollTrigger.maxScroll(window) * speed),
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1 // smooth scrubbing effect
            }
        });
    });

    // 3. Fade Out Sections on scroll past
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.to(section, {
            opacity: 0.3,
            scale: 0.95,
            scrollTrigger: {
                trigger: section,
                start: "bottom 30%", // when bottom of section hits 30% of viewport from top
                end: "bottom top",
                scrub: true
            }
        });
    });
});

// Before/After Slider Logic
const sliderContainer = document.querySelector('.slider-container');
const sliderHandle = document.querySelector('.slider-handle');

if (sliderContainer && sliderHandle) {
    let isDragging = false;

    const moveSlider = (clientX) => {
        const rect = sliderContainer.getBoundingClientRect();
        let position = ((clientX - rect.left) / rect.width) * 100;
        
        // Constrain position between 0% and 100%
        position = Math.max(0, Math.min(position, 100));
        
        sliderContainer.style.setProperty('--position', `${position}%`);
    };

    // Mouse Events
    sliderHandle.addEventListener('mousedown', () => { isDragging = true; });
    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            moveSlider(e.clientX);
        }
    });

    // Touch Events
    sliderHandle.addEventListener('touchstart', () => { isDragging = true; });
    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('touchmove', (e) => {
        if (isDragging) {
            moveSlider(e.touches[0].clientX);
        }
    });
}

// Pricing Calculator Logic
const pricingBtns = document.querySelectorAll('.pricing-btn');
const summaryTotal = document.querySelector('.summary-total');
const summaryItems = document.getElementById('summary-items');
const proceedBtn = document.getElementById('proceed-btn');

if (pricingBtns.length > 0) {
    let selectedServices = new Set();
    
    // Format currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const updateSummary = () => {
        let total = 0;
        let itemsHtml = '';
        
        selectedServices.forEach(service => {
            total += service.price;
            itemsHtml += `
                <div class="summary-item fade-up">
                    <span>${service.name}</span>
                    <span>${formatCurrency(service.price)}</span>
                </div>
            `;
        });
        
        if (selectedServices.size === 0) {
            itemsHtml = '<p class="text-white-40">Select services to see your estimate.</p>';
            proceedBtn.classList.add('disabled');
            proceedBtn.disabled = true;
        } else {
            proceedBtn.classList.remove('disabled');
            proceedBtn.disabled = false;
        }
        
        summaryTotal.textContent = formatCurrency(total);
        summaryItems.innerHTML = itemsHtml;
    };

    pricingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const price = parseInt(btn.dataset.price);
            const name = btn.dataset.name;
            const serviceObj = { name, price };
            
            // Check if already selected by comparing names
            let isSelected = false;
            let itemToRemove = null;
            
            selectedServices.forEach(item => {
                if (item.name === name) {
                    isSelected = true;
                    itemToRemove = item;
                }
            });
            
            if (isSelected) {
                selectedServices.delete(itemToRemove);
                btn.classList.remove('selected');
            } else {
                selectedServices.add(serviceObj);
                btn.classList.add('selected');
            }
            
            updateSummary();
        });
    });

    // Proceed Button Event
    proceedBtn.addEventListener('click', () => {
        if (!proceedBtn.disabled && !proceedBtn.classList.contains('disabled')) {
            // Scroll to the contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                
                // Give the form a glowing effect to draw attention
                const form = document.getElementById('contactForm');
                if (form) {
                    gsap.fromTo(form, 
                        { boxShadow: '0 0 50px rgba(0, 240, 255, 0.8)', borderColor: 'rgba(0, 240, 255, 1)' },
                        { boxShadow: '0 0 0px rgba(0, 240, 255, 0)', borderColor: 'rgba(255,255,255,0.1)', duration: 2.5, ease: "power2.out", delay: 0.5 }
                    );
                }

                // Auto-generate proposal message
                const messageBox = document.getElementById('contactMessage');
                if (messageBox) {
                    let total = 0;
                    let servicesList = [];
                    selectedServices.forEach(service => {
                        total += service.price;
                        servicesList.push(`- ${service.name} (${formatCurrency(service.price)})`);
                    });

                    const messageText = `Hi RGAi Team,\n\nI am interested in starting a project with the following services:\n${servicesList.join('\n')}\n\nEstimated Total: ${formatCurrency(total)}\n\nPlease let me know the next steps!`;
                    
                    // Clear existing text
                    messageBox.value = "";
                    
                    // Typing effect
                    let i = 0;
                    const typeSpeed = 20; // ms per character
                    
                    // Clear any existing typing timeout to avoid overlapping
                    if (window.typingInterval) clearInterval(window.typingInterval);
                    
                    window.typingInterval = setInterval(() => {
                        if (i < messageText.length) {
                            messageBox.value += messageText.charAt(i);
                            // Scroll textarea to bottom as it types
                            messageBox.scrollTop = messageBox.scrollHeight;
                            i++;
                        } else {
                            clearInterval(window.typingInterval);
                            // Brief green success flash when done typing
                            gsap.fromTo(messageBox,
                                { backgroundColor: 'rgba(34, 197, 94, 0.2)', borderColor: '#22c55e' },
                                { backgroundColor: 'rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.1)', duration: 1, ease: "power2.out" }
                            );
                        }
                    }, typeSpeed);
                }
            }
        }
    });
}

// 3D Tilt Effect for All Cards (Highly Optimized)
const tiltCards = document.querySelectorAll(`
    .bento-item, 
    .stat-card, 
    .portfolio-card, 
    .pricing-btn, 
    .sticky-summary, 
    .workflow-box, 
    .contact-form-wrapper, 
    .contact-email
`);

tiltCards.forEach(card => {
    card.style.transformStyle = "preserve-3d";
    let rect;
    let centerX, centerY;
    
    // Create highly optimized GSAP setters
    const xSet = gsap.quickSetter(card, "rotateY", "deg");
    const ySet = gsap.quickSetter(card, "rotateX", "deg");

    card.addEventListener('mouseenter', () => {
        // Only calculate heavy DOM bounds once when mouse enters!
        rect = card.getBoundingClientRect();
        centerX = rect.width / 2;
        centerY = rect.height / 2;
        card.style.transition = "none";
    });

    card.addEventListener('mousemove', (e) => {
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        
        // Fast hardware-accelerated setters
        ySet(rotateX);
        xSet(rotateY);
        gsap.set(card, { scale: 1.02, transformPerspective: 1000 });
    });
    
    card.addEventListener('mouseleave', () => {
        rect = null; // Clear cache
        card.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
});

// --- Magnetic Buttons (Highly Optimized) ---
const magneticElements = document.querySelectorAll('.btn-solid, .btn-primary, .btn-electric, .btn-glass');

magneticElements.forEach(btn => {
    let rect, h, v;
    
    // Use GSAP's ultra-fast quickTo for smooth 60fps tracking
    const xTo = gsap.quickTo(btn, "x", {duration: 0.4, ease: "power3.out"});
    const yTo = gsap.quickTo(btn, "y", {duration: 0.4, ease: "power3.out"});

    btn.addEventListener('mouseenter', () => {
        // Cache heavy layout calculation
        rect = btn.getBoundingClientRect();
        h = rect.width / 2;
        v = rect.height / 2;
    });

    btn.addEventListener('mousemove', (e) => {
        if (!rect) return;
        const x = e.clientX - rect.left - h;
        const y = e.clientY - rect.top - v;
        
        xTo(x * 0.3);
        yTo(y * 0.3);
    });

    btn.addEventListener('mouseleave', () => {
        rect = null;
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.3)"
        });
    });
});

// --- Custom Video Loop (1s to 2s) ---
const bgVideo = document.getElementById('scrolly-video');
if (bgVideo) {
    // Start at 1s
    bgVideo.currentTime = 1;
    
    bgVideo.addEventListener('timeupdate', () => {
        // If it hits 2s or beyond, loop back to 1s
        if (bgVideo.currentTime >= 2) {
            bgVideo.currentTime = 1;
        }
    });
}
