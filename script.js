
        // Current year for footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            });
        });

        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.slide-up, .fade-in');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.style.opacity = '1';
                    if (element.classList.contains('slide-up')) {
                        element.style.transform = 'translateY(0)';
                    }
                }
            });
        }

        // Initial check on page load
        animateOnScroll();

        // Check on scroll
        window.addEventListener('scroll', animateOnScroll);

        // Background animation for hero section
        const canvas = document.getElementById('hero-bg');
        if (canvas) {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            
            const ctx = canvas.getContext('2d');
            const particles = [];
            const colors = ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.7)'];
            
            // Create particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 4 + 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    speedX: Math.random() * 2 - 1,
                    speedY: Math.random() * 2 - 1
                });
            }
            
            // Animate particles
            function animateParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach(particle => {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                    ctx.fillStyle = particle.color;
                    ctx.fill();
                    
                    // Move particles
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;
                    
                    // Bounce particles off edges
                    if (particle.x < 0 || particle.x > canvas.width) {
                        particle.speedX = -particle.speedX;
                    }
                    if (particle.y < 0 || particle.y > canvas.height) {
                        particle.speedY = -particle.speedY;
                    }
                });
                
                requestAnimationFrame(animateParticles);
            }
            
            animateParticles();
            
            // Handle window resize
            window.addEventListener('resize', function() {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            });
        }

        // Form submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simple success message (in a real app, you would send this to a server)
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            });
        }

        // Typewriter effect for hero text
        function typeWriterEffect() {
            const textElements = [
                {
                    element: document.querySelector('.hero h1 span'),
                    text: "John Doe",
                    delay: 500
                },
                {
                    element: document.querySelector('.hero p'),
                    text: "Full Stack Developer | UI/UX Designer | Tech Enthusiast",
                    delay: 1000
                }
            ];

            textElements.forEach(item => {
                if (item.element) {
                    const originalText = item.element.textContent;
                    item.element.textContent = '';
                    
                    setTimeout(() => {
                        let i = 0;
                        const speed = 50; // typing speed in milliseconds
                        const typing = setInterval(() => {
                            if (i < originalText.length) {
                                item.element.textContent += originalText.charAt(i);
                                i++;
                            } else {
                                clearInterval(typing);
                            }
                        }, speed);
                    }, item.delay);
                }
            });
        }

        // Start typewriter effect after page loads
        window.addEventListener('load', typeWriterEffect);

        // Project card hover effect enhancement
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                const img = this.querySelector('.project-img');
                if (img) {
                    img.style.transform = 'scale(1.05)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const img = this.querySelector('.project-img');
                if (img) {
                    img.style.transform = 'scale(1)';
                }
            });
        });

        // Skill badges animation
        document.querySelectorAll('.skill-badge').forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#8f94fb'; // lighter color
            });
            
            badge.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#4e54c8'; // original color
            });
        });
    
