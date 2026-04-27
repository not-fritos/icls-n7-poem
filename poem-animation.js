// N+7 Poetry Animation Logic

class N7PoemAnimation {
    constructor() {
        this.nounVariations2D = [];
        this.template = "";
        this.nounLabels = [];
        this.currentNounIndex = 0;
        this.currentVariationIndex = 15; // Start at N+15
        this.isAnimating = false;
        this.animationInterval = null;
        this.animationSpeed = 250;
        
        this.initializePoem();
        this.setupEventListeners();
    }
    
    initializePoem() {
        // Load the corrected noun variations data (18 nouns)
        this.nounVariations2D = [
            // [__1__] "want" variations
            ['want', 'wantth', 'warfare', 'wariness', 'warleigh', 'warlock', 'warmth', 'warning', 'war', 'warbling', 'ward', 'warden', 'warder', 'wardrobe', 'ware', 'warehouse'],
            
            // [__2__] "make" variations  
            ['make', 'makeup', 'make-up', 'making', 'malachite', 'malady', 'malaise', 'malden', 'male', 'malevolence', 'malgr', 'malice', 'mallard', 'malmsey', 'malpractice'],
            
            // [__3__] "computer" variations
            ['computer', 'comrade', 'concertina', 'concerto', 'concession', 'conch', 'concierge', 'conclusion', 'con', 'concealment', 'conceit', 'concentration', 'concept', 'conception', 'concern', 'concert'],
            
            // [__4__] "science" variations
            ['science', 'scientist', 'score', 'scorn', 'scot', 'scotch', 'scotsman', 'scourer', 'scimitar', 'scintilla', 'sconce', 'scone', 'scooper-up', 'scooter', 'scope', 'scorch'],
            
            // [__5__] "art" variations
            ['art', 'artery', 'arthritis', 'artichoke', 'article', 'articulation', 'artillery', 'artisan', 'artist', 'artistry', 'ascendant', 'ascent', 'ash', 'ashpole', 'ashtray', 'ash-tray'],
            
            // [__6__] "music" variations
            ['music', 'musician', 'musket', 'muslin', 'mussel', 'mustard', 'muster', 'mutant', 'mutism', 'mutt', 'mutter', 'mutton', 'muzungu', 'muzungus', 'muzzle', 'myopotamus'],
            
            // [__7__] "sports" variations
            ['sports', 'sportsboats', 'sports-fishermen', 'sportsmen', 'spots', 'spotlights', 'sprains', 'sprawls', 'sprays', 'spreads', 'sprees', 'sprigs', 'sprightlinesses', 'springs', 'springboards', 'sprinklings'],
            
            // [__8__] "want" (second instance) variations
            ['want', 'wantth', 'warfare', 'wariness', 'warleigh', 'warlock', 'warmth', 'warning', 'war', 'warbling', 'ward', 'warden', 'warder', 'wardrobe', 'ware', 'warehouse'],
            
            // [__9__] "people" variations
            ['people', 'pepper', 'pepper-and-salt', 'peppermint', 'perambulation', 'percentage', 'perception', 'perch', 'percolator', 'percussion', 'perdus', 'peregrination', 'peregrine', 'perestroika', 'perfection', 'perfectionism'],
            
            // [__10__] "career" variations
            ['career', 'carelessness', 'caress', 'caretaker', 'cargo', 'caring', 'carmine', 'carnage', 'carne', 'carousel', 'car-park', 'carpenter', 'carpet', 'carriage', 'carrier'],
            
            // [__11__] "engineers" variations
            ['engineers', 'engineerings', 'englishes', 'englishmen', 'englishwomen', 'engravings', 'enigmas', 'enjoyments', 'enlightenments', 'enormities', 'enquiries', 'ensembles', 'enslavements', 'entendus', 'enterprises', 'entertainings'],
            
            // [__12__] "bit" variations
            ['bit', 'bitch', 'bitchiness', 'bite', 'bitterness', 'bittie', 'black', 'blackberry', 'blackbird', 'blackboard', 'blackcurrant', 'blackjack', 'blackmail', 'blackmailer', 'blackness', 'black-out'],
            
            // [__13__] "engineer" variations
            ['engineer', 'engineering', 'english', 'englishman', 'englishwoman', 'engraving', 'enigma', 'enjoyment', 'enlightenment', 'enormity', 'enquiry', 'ensemble', 'enslavement', 'entendu', 'enterprise', 'entertaining'],
            
            // [__14__] "problems" variations
            ['problems', 'procedures', 'processes', 'processions', 'proclamations', 'procreations', 'proctologists', 'prods', 'prodigals', 'produces', 'producers', 'products', 'productions', 'productivities', 'profanities', 'professions'],
            
            // [__15__] "individual" variations
            ['individual', 'individualism', 'individuality', 'indream', 'inducement', 'indulgence', 'industry', 'inefficiency', 'inequality', 'inequity', 'inertia', 'inevitability', 'inexperience', 'infallibility', 'infancy', 'infant'],
            
            // [__16__] "community" variations
            ['community', 'commuter', 'companion', 'companionship', 'companionway', 'company', 'comparison', 'compartment', 'compass', 'compassion', 'compatriot', 'compensation', 'compère', 'competence', 'competition', 'competitor'],
            
            // [__17__] "levels" variations
            ['levels', 'levers', 'levities', 'liabilities', 'liaisons', 'lianas', 'liars', 'libs', 'libels', 'liberations', 'liberties', 'librarians', 'libraries', 'licences', 'licensees', 'lichens'],
            
            // [__18__] "problem" (for problem-solvers) variations
            ['problem', 'procedure', 'process', 'procession', 'proclamation', 'procreation', 'proctologist', 'prod', 'prodigal', 'produce', 'producer', 'product', 'production', 'productivity', 'profanity', 'profession']
        ];
        
        this.nounLabels = ['want', 'make', 'computer', 'science', 'art', 'music', 'sports', 'want', 'people', 'career', 'engineers', 'bit', 'engineer', 'problems', 'individual', 'community', 'levels', 'problem'];
        
        this.template = `I [__1__] to [__2__] [__3__] [__4__] (CS) as ubiquitous as 
[__5__], [__6__], and [__7__]. I [__8__] to concentrate on [__9__] who are 
not [__10__]-bound [__11__] because I believe that if everybody approached 
their everyday lives a little [__12__] more like an [__13__], then [__14__] 
we live with at [__15__], [__16__], and global [__17__] become a little 
less daunting when we're all [__18__]-solvers.`;
        
        this.renderPoem();
    }
    
    renderPoem() {
        const poemContainer = document.getElementById('poem');
        let html = this.template;
        
        // Replace each placeholder with the current noun
        for (let i = 1; i <= 18; i++) {
            const placeholder = `[__${i}__]`;
            const currentWord = this.getCurrentNounWord(i - 1);
            html = html.replace(placeholder, `<span class="noun" data-noun-index="${i - 1}">${currentWord}</span>`);
        }
        
        poemContainer.innerHTML = html;
    }
    
    getCurrentNounWord(nounIndex) {
        if (nounIndex < this.nounVariations2D.length) {
            // Return empty string for initial state (before animation starts)
            if (this.currentVariationIndex === 15 && !this.isAnimating) {
                return '';
            }
            return this.nounVariations2D[nounIndex][this.currentVariationIndex];
        }
        return '___';
    }
    
    updateNounDisplay(nounIndex) {
        const nounElement = document.querySelector(`[data-noun-index="${nounIndex}"]`);
        if (nounElement) {
            const newWord = this.getCurrentNounWord(nounIndex);
            nounElement.textContent = newWord;
            nounElement.classList.add('animating');
            
            setTimeout(() => {
                nounElement.classList.remove('animating');
            }, 300);
        }
    }
    
    startAnimation() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        document.getElementById('startBtn').disabled = true;
        document.getElementById('pauseBtn').disabled = false;
        
        this.animationInterval = setInterval(() => {
            this.animateStep();
        }, this.animationSpeed);
    }
    
    animateStep() {
        // Update current noun display
        this.updateNounDisplay(this.currentNounIndex);
        
        // Update current noun info
        document.getElementById('currentNoun').textContent = 
            `${this.nounLabels[this.currentNounIndex]} (N+${this.currentVariationIndex})`;
        
        // Move to next variation
        this.currentVariationIndex--;
        
        // If we've reached N+0, move to next noun
        if (this.currentVariationIndex < 0) {
            this.currentVariationIndex = 15;
            this.currentNounIndex++;
            
            // If we've gone through all nouns, stop animation and rest on final solution
            if (this.currentNounIndex >= this.nounLabels.length) {
                this.stopAnimation();
                // Set all nouns to their final N+0 state
                this.currentVariationIndex = 0;
                this.renderPoem();
                document.getElementById('currentNoun').textContent = 'Animation Complete - All nouns at N+0';
                return;
            }
        }
    }
    
    pauseAnimation() {
        this.isAnimating = false;
        clearInterval(this.animationInterval);
        document.getElementById('startBtn').disabled = false;
        document.getElementById('pauseBtn').disabled = true;
    }
    
    stopAnimation() {
        this.pauseAnimation();
    }
    
    reset() {
        this.currentNounIndex = 0;
        this.currentVariationIndex = 15;
        this.renderPoem();
        document.getElementById('currentNoun').textContent = 'None';
        document.getElementById('startBtn').disabled = false;
        document.getElementById('pauseBtn').disabled = true;
    }
    
    setAnimationSpeed(speed) {
        this.animationSpeed = speed;
        if (this.isAnimating) {
            this.pauseAnimation();
            this.startAnimation();
        }
    }
    
    setupEventListeners() {
        document.getElementById('startBtn').addEventListener('click', () => {
            this.startAnimation();
        });
        
        document.getElementById('pauseBtn').addEventListener('click', () => {
            this.pauseAnimation();
        });
        
        document.getElementById('resetBtn').addEventListener('click', () => {
            this.reset();
        });
        
        const speedSlider = document.getElementById('speedSlider');
        const speedValue = document.getElementById('speedValue');
        
        speedSlider.addEventListener('input', (e) => {
            const speed = parseInt(e.target.value);
            speedValue.textContent = `${speed}ms`;
            this.setAnimationSpeed(speed);
        });
        
        // Add click listeners to noun elements for manual cycling
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('noun') && !this.isAnimating) {
                const nounIndex = parseInt(e.target.dataset.nounIndex);
                this.currentNounIndex = nounIndex;
                this.currentVariationIndex = (this.currentVariationIndex - 1 + 16) % 16;
                this.updateNounDisplay(nounIndex);
            }
        });
    }
}

// Initialize the animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new N7PoemAnimation();
});
