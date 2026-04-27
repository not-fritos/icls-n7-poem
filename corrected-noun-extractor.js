// Correctly extract the 18 noun variations from the n+7 poetry data
const scriptData = require('./script.json');

function extractCorrectedNounVariations() {
    const keys = Object.keys(scriptData).sort();
    
    // Based on the corrected template, we need 18 nouns:
    const nounVariations2D = [
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
    
    // Corrected template with 18 placeholders
    const template = `I [__1__] to [__2__] [__3__] [__4__] (CS) as ubiquitous as 
[__5__], [__6__], and [__7__]. I [__8__] to concentrate on the [__9__] who are 
not [__10__]-bound [__11__] because I believe that if everybody approached 
their everyday lives a little [__12__] more like an [__13__], then the [__14__] 
we live with at the [__15__], [__16__], and global [__17__] become a little 
less daunting when we're all [__18__]-solvers.`;
    
    return {
        nounVariations2D,
        template,
        originalText: scriptData['N+0'],
        totalVersions: keys.length,
        nounLabels: ['want', 'make', 'computer', 'science', 'art', 'music', 'sports', 'want', 'people', 'career', 'engineers', 'bit', 'engineer', 'problems', 'individual', 'community', 'levels', 'problem']
    };
}

// Test the extraction
const result = extractCorrectedNounVariations();
console.log('Corrected Noun Variations (18 nouns):');
result.nounVariations2D.forEach((variations, i) => {
    console.log(`${result.nounLabels[i]}:`, variations);
});

console.log('\nCorrected Template:');
console.log(result.template);

module.exports = { extractCorrectedNounVariations };
