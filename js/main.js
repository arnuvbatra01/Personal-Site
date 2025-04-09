/**
 * Hardware Engineer Portfolio - Main JavaScript
 * Handles interactive elements and animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize custom cursor
    document.body.classList.add('custom-cursor');
    
    // Navigation scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');
        
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger animation
        burger.classList.toggle('toggle');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation for circuit elements
    const addCircuitAnimation = () => {
        const circuitNodes = document.querySelectorAll('.circuit-node');
        circuitNodes.forEach(node => {
            setInterval(() => {
                node.style.boxShadow = '0 0 15px var(--primary-color)';
                setTimeout(() => {
                    node.style.boxShadow = '0 0 5px var(--primary-color)';
                }, 200);
            }, 3000);
        });
    };
    
    addCircuitAnimation();

    // Add data transmission animation to circuit lines
    const addDataAnimation = () => {
        const circuitLines = document.querySelectorAll('.circuit-line');
        
        circuitLines.forEach(line => {
            const dataPulse = document.createElement('div');
            dataPulse.classList.add('data-pulse');
            line.appendChild(dataPulse);
            
            setInterval(() => {
                dataPulse.style.left = '-10px';
                dataPulse.style.opacity = '1';
                
                setTimeout(() => {
                    dataPulse.style.left = '100%';
                    dataPulse.style.opacity = '0';
                }, 1000);
            }, 4000);
        });
    };
    
    addDataAnimation();

    // Create dynamic chip hover effects
    const chips = document.querySelectorAll('.chip');
    
    chips.forEach(chip => {
        chip.addEventListener('mouseover', () => {
            // Add subtle circuit pattern inside chip on hover
            chip.style.backgroundImage = 'radial-gradient(var(--primary-color) 1px, transparent 1px)';
            chip.style.backgroundSize = '10px 10px';
            chip.style.borderColor = 'var(--secondary-color)';
        });
        
        chip.addEventListener('mouseout', () => {
            chip.style.backgroundImage = 'none';
            chip.style.borderColor = 'var(--primary-color)';
        });
    });

    // Add scroll reveal animation for sections with glow effect
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Add glow effect to all direct children of the section
                const sectionElements = entry.target.querySelectorAll(':scope > div, :scope > h2, :scope > p, .project-card, .timeline-item, .chip');
                
                sectionElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('element-revealed');
                        
                        // Remove glow effect after animation completes
                        setTimeout(() => {
                            element.classList.remove('element-glow');
                        }, 1000);
                    }, index * 150); // Stagger the animations
                });
                
                observer.unobserve(entry.target);
            }
        });
    };
    
    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });
    
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });

    // Improved typewriter effect for hero section
    const startTypewriterEffect = () => {
        const greetingElement = document.querySelector('.greeting');
        const nameElement = document.querySelector('.name');
        const titleElement = document.querySelector('.title');
        const descriptionElement = document.querySelector('.description');
        
        // Store original text and clear elements
        const elements = [
            { element: greetingElement, text: greetingElement.textContent, delay: 100 },
            { element: nameElement, text: nameElement.textContent, delay: 600 },
            { element: titleElement, text: titleElement.textContent, delay: 1100 },
            { element: descriptionElement, text: descriptionElement.textContent, delay: 1500 }
        ];
        
        elements.forEach(item => {
            // Clear the text content
            item.element.textContent = '';
            
            setTimeout(() => {
                let i = 0;
                const typeWriter = () => {
                    if (i < item.text.length) {
                        item.element.textContent += item.text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 15); // Extra fast typing speed
                    }
                };
                typeWriter();
            }, item.delay);
        });
    };
    
    // Start the typewriter effect after a small delay
    setTimeout(startTypewriterEffect, 500);

    // Add a circuit animation to the circuit-bg element
    const circuitBg = document.querySelector('.circuit-bg');
    
    if (circuitBg) {
        // Create random connection points
        for (let i = 0; i < 5; i++) {
            const connectionPoint = document.createElement('div');
            connectionPoint.classList.add('connection-point');
            
            // Position randomly
            connectionPoint.style.top = `${Math.random() * 100}%`;
            connectionPoint.style.left = `${Math.random() * 100}%`;
            
            circuitBg.appendChild(connectionPoint);
        }
    }

    // Create custom cursor glow effect that only appears in the hero section
    const cursorGlow = document.createElement('div');
    cursorGlow.classList.add('cursor-glow');
    document.body.appendChild(cursorGlow);
    
    // Track if mouse is in hero section
    let isInHeroSection = true; // Set to true by default
    const heroSection = document.querySelector('.hero');
    
    // Show cursor glow immediately
    cursorGlow.style.display = 'block';
    
    heroSection.addEventListener('mouseleave', () => {
        isInHeroSection = false;
        cursorGlow.style.display = 'none';
    });
    
    heroSection.addEventListener('mouseenter', () => {
        isInHeroSection = true;
        cursorGlow.style.display = 'block';
    });
    
    // Update cursor glow position when mouse moves
    document.addEventListener('mousemove', (e) => {
        if (isInHeroSection) {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        }
    });

    // Add additional hardware-themed background elements
    const createHardwareElements = () => {
        const backgroundElements = [
            { class: 'cpu-element', count: 3 },
            { class: 'resistor-element', count: 5 },
            { class: 'capacitor-element', count: 4 },
            { class: 'transistor-element', count: 6 },
            { class: 'trace-element', count: 8 }
        ];
        
        backgroundElements.forEach(element => {
            for (let i = 0; i < element.count; i++) {
                const el = document.createElement('div');
                el.classList.add(element.class, 'hardware-bg-element');
                
                // Position randomly but within visibility
                el.style.top = `${10 + Math.random() * 80}%`;
                el.style.left = `${10 + Math.random() * 80}%`;
                el.style.transform = `rotate(${Math.random() * 360}deg)`;
                el.style.opacity = `${0.05 + Math.random() * 0.1}`;
                
                document.body.appendChild(el);
            }
        });
    };
    
    createHardwareElements();
});

// Add CSS for additional JavaScript-generated elements
const style = document.createElement('style');
style.textContent = `
    .data-pulse {
        position: absolute;
        width: 10px;
        height: 2px;
        background-color: var(--accent-yellow);
        top: 0;
        left: -10px;
        opacity: 0;
        transition: left 1s linear, opacity 0.2s ease;
    }
    
    .connection-point {
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: var(--bg-dark);
        border: 2px solid var(--primary-color);
        box-shadow: 0 0 10px var(--primary-color);
        z-index: 1;
        animation: pulse 4s infinite;
    }
    
    .connection-point::before {
        content: '';
        position: absolute;
        width: 100px;
        height: 2px;
        background-color: var(--primary-color);
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        opacity: 0.3;
    }
    
    @keyframes pulse {
        0% { box-shadow: 0 0 5px var(--primary-color); }
        50% { box-shadow: 0 0 15px var(--primary-color); }
        100% { box-shadow: 0 0 5px var(--primary-color); }
    }
    
    .section-hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 1s, transform 1s;
    }
    
    .revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Typing effect styles */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: var(--primary-color) }
    }
    
    /* Cursor glow effect styles */
    .cursor-glow {
        position: fixed;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(67, 97, 238, 0.3) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9998;
        margin-left: -100px;
        margin-top: -100px;
        transition: transform 0.1s ease-out;
        filter: blur(20px);
    }
    
    /* Element reveal with glow effect */
    .element-revealed {
        animation: pop-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, 
                   glow 0.8s ease-out;
        opacity: 0;
        transform: scale(0.8);
    }
    
    @keyframes pop-in {
        0% {
            opacity: 0;
            transform: scale(0.8);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes glow {
        0% {
            box-shadow: 0 0 0 rgba(0, 184, 169, 0);
        }
        50% {
            box-shadow: 0 0 30px rgba(0, 184, 169, 0.6);
        }
        100% {
            box-shadow: 0 0 0 rgba(0, 184, 169, 0);
        }
    }
    
    /* Apply different animations to different elements */
    .project-card.element-revealed {
        animation-delay: 0.1s;
    }
    
    .timeline-item.element-revealed {
        animation-delay: 0.2s;
    }
    
    .chip.element-revealed {
        animation-delay: 0.05s;
    }
    
    /* Hardware background elements */
    .hardware-bg-element {
        position: fixed;
        z-index: -2;
        pointer-events: none;
    }
    
    .cpu-element {
        width: 100px;
        height: 100px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect x="20" y="20" width="60" height="60" stroke="%2300b8a9" stroke-width="2" fill="none"/><rect x="30" y="30" width="40" height="40" stroke="%2300b8a9" stroke-width="1" fill="none"/><line x1="10" y1="30" x2="20" y2="30" stroke="%2300b8a9" stroke-width="1"/><line x1="10" y1="40" x2="20" y2="40" stroke="%2300b8a9" stroke-width="1"/><line x1="10" y1="50" x2="20" y2="50" stroke="%2300b8a9" stroke-width="1"/><line x1="10" y1="60" x2="20" y2="60" stroke="%2300b8a9" stroke-width="1"/><line x1="10" y1="70" x2="20" y2="70" stroke="%2300b8a9" stroke-width="1"/><line x1="30" y1="10" x2="30" y2="20" stroke="%2300b8a9" stroke-width="1"/><line x1="40" y1="10" x2="40" y2="20" stroke="%2300b8a9" stroke-width="1"/><line x1="50" y1="10" x2="50" y2="20" stroke="%2300b8a9" stroke-width="1"/><line x1="60" y1="10" x2="60" y2="20" stroke="%2300b8a9" stroke-width="1"/><line x1="70" y1="10" x2="70" y2="20" stroke="%2300b8a9" stroke-width="1"/><line x1="80" y1="30" x2="90" y2="30" stroke="%2300b8a9" stroke-width="1"/><line x1="80" y1="40" x2="90" y2="40" stroke="%2300b8a9" stroke-width="1"/><line x1="80" y1="50" x2="90" y2="50" stroke="%2300b8a9" stroke-width="1"/><line x1="80" y1="60" x2="90" y2="60" stroke="%2300b8a9" stroke-width="1"/><line x1="80" y1="70" x2="90" y2="70" stroke="%2300b8a9" stroke-width="1"/><line x1="30" y1="80" x2="30" y2="90" stroke="%2300b8a9" stroke-width="1"/><line x1="40" y1="80" x2="40" y2="90" stroke="%2300b8a9" stroke-width="1"/><line x1="50" y1="80" x2="50" y2="90" stroke="%2300b8a9" stroke-width="1"/><line x1="60" y1="80" x2="60" y2="90" stroke="%2300b8a9" stroke-width="1"/><line x1="70" y1="80" x2="70" y2="90" stroke="%2300b8a9" stroke-width="1"/></svg>');
    }
    
    .resistor-element {
        width: 80px;
        height: 20px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 80 20"><path d="M5,10 L20,10 L25,5 L35,15 L45,5 L55,15 L60,10 L75,10" stroke="%2300b8a9" stroke-width="2" fill="none"/></svg>');
    }
    
    .capacitor-element {
        width: 40px;
        height: 30px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30"><line x1="5" y1="15" x2="15" y2="15" stroke="%2300b8a9" stroke-width="2"/><line x1="15" y1="5" x2="15" y2="25" stroke="%2300b8a9" stroke-width="2"/><line x1="25" y1="5" x2="25" y2="25" stroke="%2300b8a9" stroke-width="2"/><line x1="25" y1="15" x2="35" y2="15" stroke="%2300b8a9" stroke-width="2"/></svg>');
    }
    
    .transistor-element {
        width: 60px;
        height: 60px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="15" stroke="%2300b8a9" stroke-width="1" fill="none"/><line x1="10" y1="20" x2="30" y2="20" stroke="%2300b8a9" stroke-width="1"/><line x1="10" y1="40" x2="30" y2="40" stroke="%2300b8a9" stroke-width="1"/><line x1="45" y1="30" x2="50" y2="30" stroke="%2300b8a9" stroke-width="1"/><path d="M30,15 L30,45" stroke="%2300b8a9" stroke-width="1" fill="none"/></svg>');
    }
    
    .trace-element {
        width: 150px;
        height: 150px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><path d="M10,75 L50,75 C60,75 60,30 70,30 L140,30" stroke="%2300b8a9" stroke-width="1" fill="none"/><path d="M30,120 L70,120 C80,120 80,75 90,75 L140,75" stroke="%2300b8a9" stroke-width="1" fill="none"/><path d="M10,30 L30,30 C40,30 40,120 50,120 L70,120" stroke="%234361ee" stroke-width="1" fill="none"/><circle cx="50" cy="75" r="3" fill="%2300b8a9"/><circle cx="70" cy="120" r="3" fill="%2300b8a9"/><circle cx="70" cy="30" r="3" fill="%2300b8a9"/><circle cx="90" cy="75" r="3" fill="%2300b8a9"/></svg>');
    }
`;

document.head.appendChild(style); 