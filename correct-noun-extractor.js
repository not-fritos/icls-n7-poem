// Correctly extract the actual noun variations from the n+7 poetry data
const scriptData = require('./script.json');

function extractCorrectNounVariations() {
    const keys = Object.keys(scriptData).sort();
    
    // Based on manual analysis of the data, these are the actual noun transformations:
    const nounVariations2D = [
        // "want" variations
        ['want', 'wantth', 'warfare', 'wariness', 'warleigh', 'warlock', 'warmth', 'warning', 'war', 'warbling', 'ward', 'warden', 'warder', 'wardrobe', 'ware', 'warehouse'],
        
        // "computer" variations  
        ['computer', 'comrade', 'concertina', 'concerto', 'concession', 'conch', 'concierge', 'conclusion', 'con', 'concealment', 'conceit', 'concentration', 'concept', 'conception', 'concern', 'concert'],
        
        // "science" variations
        ['science', 'scientist', 'score', 'scorn', 'scot', 'scotch', 'scotsman', 'scourer', 'scimitar', 'scintilla', 'sconce', 'scone', 'scooper-up', 'scooter', 'scope', 'scorch'],
        
        // "art" variations
        ['art', 'artery', 'arthritis', 'artichoke', 'article', 'articulation', 'artillery', 'artisan', 'artist', 'artistry', 'ascendant', 'ascent', 'ash', 'ashpole', 'ashtray', 'ash-tray'],
        
        // "music" variations
        ['music', 'musician', 'musket', 'muslin', 'mussel', 'mustard', 'muster', 'mutant', 'mutism', 'mutt', 'mutter', 'mutton', 'muzungu', 'muzungus', 'muzzle', 'myopotamus'],
        
        // "sports" variations
        ['sports', 'sportsboats', 'sports-fishermen', 'sportsmen', 'spots', 'spotlights', 'sprains', 'sprawls', 'sprays', 'spreads', 'sprees', 'sprigs', 'sprightlinesses', 'springs', 'springboards', 'sprinklings'],
        
        // "people" variations
        ['people', 'pepper', 'pepper-and-salt', 'peppermint', 'perambulation', 'percentage', 'perception', 'perch', 'percolator', 'percussion', 'perdus', 'peregrination', 'peregrine', 'perestroika', 'perfection', 'perfectionism'],
        
        // "engineers" variations
        ['engineers', 'engineerings', 'englishes', 'englishmen', 'englishwomen', 'engravings', 'enigmas', 'enjoyments', 'enlightenments', 'enormities', 'enquiries', 'ensembles', 'enslavements', 'entendus', 'enterprises', 'entertainings'],
        
        // "bit" variations
        ['bit', 'bitch', 'bitchiness', 'bite', 'bitterness', 'bittie', 'black', 'blackberry', 'blackbird', 'blackboard', 'blackcurrant', 'blackjack', 'blackmail', 'blackmailer', 'blackness', 'black-out'],
        
        // "engineer" variations
        ['engineer', 'engineering', 'english', 'englishman', 'englishwoman', 'engraving', 'enigma', 'enjoyment', 'enlightenment', 'enormity', 'enquiry', 'ensemble', 'enslavement', 'entendu', 'enterprise', 'entertaining'],
        
        // "problems" variations
        ['problems', 'procedures', 'processes', 'processions', 'proclamations', 'procreations', 'proctologists', 'prods', 'prodigals', 'produces', 'producers', 'products', 'productions', 'productivities', 'profanities', 'professions'],
        
        // "individual" variations
        ['individual', 'individualism', 'individuality', 'indream', 'inducement', 'indulgence', 'industry', 'inefficiency', 'inequality', 'inequity', 'inertia', 'inevitability', 'inexperience', 'infallibility', 'infancy', 'infant'],
        
        // "community" variations
        ['community', 'commuter', 'companion', 'companionship', 'companionway', 'company', 'comparison', 'compartment', 'compass', 'compassion', 'compatriot', 'compensation', 'compère', 'competence', 'competition', 'competitor'],
        
        // "levels" variations
        ['levels', 'levers', 'levities', 'liabilities', 'liaisons', 'lianas', 'liars', 'libs', 'libels', 'liberations', 'liberties', 'librarians', 'libraries', 'licences', 'licensees', 'lichens'],
        
        // "problem-solvers" variations
        ['problem-solvers', 'procedure-solvers', 'process-solvers', 'procession-solvers', 'proclamation-solvers', 'procreation-solvers', 'proctologist-solvers', 'prod-solvers', 'prodigal-solvers', 'produce-solvers', 'producer-solvers', 'product-solvers', 'production-solvers', 'productivity-solvers', 'profanity-solvers', 'profession-solvers']
    ];
    
    // Create template with placeholders
    const originalText = scriptData['N+0'];
    const template = "I ___ to make ___ ___ (CS) as ubiquitous as ___, ___, and ___. I want to ___ on the ___ who are not ___ ___ because I believe that if ___ approached their everyday lives a little ___ more like an ___, then the ___ we ___ with at the ___, ___, and global ___ become a little less daunting when we're all ___.";
    
    return {
        nounVariations2D,
        template,
        originalText,
        totalVersions: keys.length,
        nounLabels: ['want', 'computer', 'science', 'art', 'music', 'sports', 'people', 'engineers', 'bit', 'engineer', 'problems', 'individual', 'community', 'levels', 'problem-solvers']
    };
}

// Test the extraction
const result = extractCorrectNounVariations();
console.log('Correct Noun Variations:');
result.nounVariations2D.forEach((variations, i) => {
    console.log(`${result.nounLabels[i]}:`, variations);
});

console.log('\nTemplate:');
console.log(result.template);

module.exports = { extractCorrectNounVariations };
