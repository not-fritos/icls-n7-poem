// Load and analyze the n+7 poetry data
const scriptData = require('./script.json');

function tokenizeText(text) {
    // Split text into words while preserving punctuation
    return text.match(/\b[\w'-]+\b|[^\w\s]/g) || [];
}

function analyzeWordVariations() {
    const keys = Object.keys(scriptData).sort();
    const originalText = scriptData['N+0'];
    const originalWords = tokenizeText(originalText);
    
    // Find words that change by comparing each version with the original
    const changingWords = [];
    const staticWords = [];
    
    keys.forEach(key => {
        const currentText = scriptData[key];
        const currentWords = tokenizeText(currentText);
        
        // Simple approach: find words that exist in original but changed in current version
        originalWords.forEach((word, index) => {
            if (index < currentWords.length && currentWords[index] !== word) {
                // This word changed in this version
                if (!changingWords.find(cw => cw.originalIndex === index)) {
                    changingWords.push({
                        originalIndex: index,
                        originalWord: word,
                        variations: []
                    });
                }
                
                const cw = changingWords.find(cw => cw.originalIndex === index);
                if (!cw.variations.find(v => v.word === currentWords[index])) {
                    cw.variations.push({
                        word: currentWords[index],
                        version: key
                    });
                }
            }
        });
    });
    
    // Build the 2D array of variations (N+0 to N+15)
    const nounVariations2D = changingWords.map(cw => {
        const variations = [];
        keys.forEach(key => {
            const currentText = scriptData[key];
            const currentWords = tokenizeText(currentText);
            if (cw.originalIndex < currentWords.length) {
                variations.push(currentWords[cw.originalIndex]);
            } else {
                variations.push(cw.originalWord); // fallback
            }
        });
        return variations;
    });
    
    // Identify static words (words that never change)
    originalWords.forEach((word, index) => {
        const isChanging = changingWords.some(cw => cw.originalIndex === index);
        if (!isChanging) {
            staticWords.push({ position: index, word });
        }
    });
    
    return {
        staticWords,
        changingWords,
        nounVariations2D,
        totalVersions: keys.length,
        originalText,
        originalWords
    };
}

// Test the analysis
const analysis = analyzeWordVariations();
console.log('Analysis Results:');
console.log('Static words:', analysis.staticWords.length);
console.log('Changing words:', analysis.changingWords.length);
console.log('2D Noun Array:');
console.log(analysis.nounVariations2D);
console.log('\nOriginal words:');
console.log(analysis.originalWords);
console.log('\nChanging words details:');
analysis.changingWords.forEach((cw, i) => {
    console.log(`Word ${i}: "${cw.originalWord}" at position ${cw.originalIndex}`);
});

module.exports = { analyzeWordVariations, tokenizeText };
