// Calcular idade
function calculateAge() {
    // Você pode ajustar a data de nascimento aqui
    const birthDate = new Date('1992-06-19'); // Ajuste conforme necessário
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

// Atualizar idade na página
function updateAge() {
    const ageElement = document.querySelector('.info-item span strong');
    if (ageElement && ageElement.textContent.includes('Calculando')) {
        const age = calculateAge();
        ageElement.textContent = `${age} anos`;
    }
}

// Animar barras de skill ao scroll
function animateSkillsOnScroll() {
    const skillItems = document.querySelectorAll('.skill-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillFill = entry.target.querySelector('.skill-fill');
                const skillLevel = entry.target.getAttribute('data-level');
                if (skillFill && skillLevel) {
                    skillFill.style.width = `${skillLevel}%`;
                    entry.target.classList.add('animated');
                }
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        observer.observe(item);
    });
}

// Animar barras de XP
function animateXPBar() {
    const xpFill = document.querySelector('.xp-fill');
    if (xpFill) {
        // Resetar para animar
        xpFill.style.width = '0%';
        setTimeout(() => {
            xpFill.style.width = '85%';
        }, 500);
    }
}

// Efeito de hover nos cards
function addHoverEffects() {
    const cards = document.querySelectorAll('.quest-card, .certificate-card, .education-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// Adicionar efeito de digitação no título (opcional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Tooltip para skills
function addSkillTooltips() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            const skillName = this.querySelector('.skill-name').textContent;
            const skillLevel = this.getAttribute('data-level');
            
            // Criar tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'skill-tooltip';
            tooltip.textContent = `${skillName}: ${skillLevel}%`;
            tooltip.style.cssText = `
                position: absolute;
                background: var(--rpg-dark-brown);
                color: var(--rpg-gold);
                padding: 8px 12px;
                border-radius: 5px;
                font-size: 0.85rem;
                pointer-events: none;
                z-index: 1000;
                border: 2px solid var(--rpg-gold);
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            `;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        });
        
        item.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.skill-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Efeito de partículas no background (opcional)
function createParticles() {
    const container = document.body;
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--rpg-gold);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.3;
            z-index: 0;
        `;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(particle);
    }
}

// Smooth scroll para links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar ícones Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    updateAge();
    animateXPBar();
    animateSkillsOnScroll();
    addHoverEffects();
    addSkillTooltips();
    smoothScroll();
    
    // Adicionar delay para animação das skills
    setTimeout(() => {
        const skillFills = document.querySelectorAll('.skill-fill');
        skillFills.forEach(fill => {
            const width = fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => {
                fill.style.width = width;
            }, 100);
        });
    }, 300);
    
    // Efeito de entrada suave
    const elements = document.querySelectorAll('.character-card, .info-card, .skill-category, .bio-card, .quest-card');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// Removido efeito de parallax que causava movimento indesejado

// Adicionar efeito de brilho nos elementos dourados
function addGlowEffect() {
    const goldElements = document.querySelectorAll('.rpg-title, .level-badge, .certificate-link');
    goldElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px var(--rpg-gold), 0 0 40px var(--rpg-gold)';
        });
        el.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
    });
}

// Inicializar efeito de brilho
document.addEventListener('DOMContentLoaded', addGlowEffect);
