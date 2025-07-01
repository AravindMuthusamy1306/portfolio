 // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                    
                    // Update active link
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
        
        // Highlight active section in navigation
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - 100)) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Form submission
        // Form handling for testing
        const form = document.querySelector('#contact form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
  
        const formData = {
            name: form.querySelector('#name').value,
            email: form.querySelector('#email').value,
            message: form.querySelector('#message').value
        };
  
        console.log('Form submission:', formData);
        alert('Message sent successfully! Thank you for the response!!');
        form.reset();
});