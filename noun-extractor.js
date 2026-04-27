// Extract actual noun variations from the n+7 poetry data
const scriptData = require('./script.json');

function extractNounVariations() {
    const keys = Object.keys(scriptData).sort();
    const originalText = scriptData['N+0'];
    
    // Manually identify the key nouns that are being transformed in the n+7 process
    // Based on examining the data, these are the actual nouns that change:
    const nounPositions = [
        { word: 'want', index: 1 },
        { word: 'computer', index: 4 },
        { word: 'science', index: 5 },
        { word: 'art', index: 12 },
        { word: 'music', index: 14 },
        { word: 'sports', index: 17 },
        { word: 'people', index: 25 },
        { word: 'career-bound', index: 29 },
        { word: 'engineers', index: 30 },
        { word: 'bit', index: 43 },
        { word: 'engineer', index: 47 },
        { word: 'problems', index: 51 },
        { word: 'individual', index: 57 },
        { word: 'community', index: 59 },
        { word: 'levels', index: 63 },
        { word: 'problem-solvers', index: 72 }
    ];
    
    // Extract variations for each noun position
    const nounVariations2D = nounPositions.map(noun => {
        const variations = [];
        keys.forEach(key => {
            const currentText = scriptData[key];
            const words = currentText.split(/\s+/);
            
            // Find the word at this position (accounting for punctuation)
            let targetWord = noun.word;
            for (let i = 0; i < words.length; i++) {
                const cleanWord = words[i].replace(/[^\w'-]/g, '');
                if (cleanWord === noun.word || 
                    (key !== 'N+0' && i === noun.index)) {
                    targetWord = words[i].replace(/[^\w'-]/g, '');
                    break;
                }
            }
            variations.push(targetWord);
        });
        return variations;
    });
    
    // Create template with placeholders
    const originalWords = originalText.split(/\s+/);
    const templateWords = originalWords.map((word, index) => {
        const isNoun = nounPositions.some(noun => noun.index === index);
        return isNoun ? '___' : word;
    });
    
    return {
        nounVariations2D,
        templateWords,
        nounPositions,
        originalText,
        totalVersions: keys.length
    };
}

// Test the extraction
const result = extractNounVariations();
console.log('Noun Variations 2D Array:');
result.nounVariations2D.forEach((variations, i) => {
    console.log(`Noun ${i} (${result.nounPositions[i].word}):`, variations);
});

console.log('\nTemplate with placeholders:');
console.log(result.templateWords.join(' '));

module.exports = { extractNounVariations };
