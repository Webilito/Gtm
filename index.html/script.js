// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Portfolio Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.querySelector('.testimonial-dots');
    let currentSlide = 0;

    // Create dots
    if (testimonialSlides.length > 0 && dotsContainer) {
        testimonialSlides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    const dots = document.querySelectorAll('.dot');

    // Show only the current slide
    function showSlide() {
        testimonialSlides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? 'block' : 'none';
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        showSlide();
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide();
    }

    // Initialize slider
    if (testimonialSlides.length > 0) {
        showSlide();
        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (nav.classList.contains('active')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                plan: document.getElementById('plan').value,
                message: document.getElementById('message').value
            };
            
            // Store form data in localStorage if needed
            localStorage.setItem('contactFormData', JSON.stringify(formData));
            
            // Send form data to Google Tag Manager
            if (window.dataLayer) {
                window.dataLayer.push({
                    'event': 'formSubmission',
                    'formType': 'contactForm',
                    'formName': 'Get In Touch',
                    'formPlan': formData.plan,
                    'formPhone': formData.phone,
                    'formEmail': formData.email
                });
            }
            
            // Redirect to thank you page
            window.location.href = 'thank-you.html';
        });
    }

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get the email
            const email = this.querySelector('input[type="email"]').value;
            
            // Store the email in localStorage if needed
            localStorage.setItem('newsletterEmail', email);
            
            // Redirect to the newsletter thank-you page
            window.location.href = 'newsletter-thank-you.html';
        });
    }

    // Add animation to WhatsApp button
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1) rotate(10deg)';
        });
        
        whatsappBtn.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .pricing-card, .portfolio-item, .testimonial-slide');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Number counter animation for About section stats
    const statsSection = document.querySelector('.about-stats');
    let animated = false;
    
    const animateNumbers = () => {
        if (statsSection && !animated) {
            const statsPosition = statsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (statsPosition < screenPosition) {
                const statElements = document.querySelectorAll('.stat h3');
                
                statElements.forEach(statElement => {
                    const targetNumber = parseInt(statElement.getAttribute('data-target'));
                    const duration = 2000; // Animation duration in milliseconds
                    const step = targetNumber / (duration / 20); // Update every 20ms
                    let current = 0;
                    
                    const updateNumber = () => {
                        current += step;
                        if (current < targetNumber) {
                            statElement.textContent = Math.floor(current);
                            requestAnimationFrame(updateNumber);
                        } else {
                            statElement.textContent = targetNumber + '+';
                        }
                    };
                    
                    updateNumber();
                });
                
                animated = true; // Set to true to prevent re-animation
            }
        }
    };
    
    // Check for animation on scroll
    window.addEventListener('scroll', animateNumbers);
    // Also check on page load
    animateNumbers();
}); 
