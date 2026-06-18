// Professions Save/Load Extension
// This extends the saveCharacter and loadCharacter functions to include professions data

// Store original functions
const originalSaveCharacter = window.saveCharacter;
const originalLoadCharacter = window.loadCharacter;

// Override saveCharacter to include professions
window.saveCharacter = function() {
    // Get existing character data from localStorage or create new
    let characterData = {};
    const savedData = localStorage.getItem('deadWorldCharacter');
    if (savedData) {
        try {
            characterData = JSON.parse(savedData);
        } catch (e) {
            console.error('Error parsing saved data:', e);
        }
    }
    
    // Add professions data
    characterData.selectedProfessions = window.selectedProfessions || [];
    
    // Save back to localStorage
    localStorage.setItem('deadWorldCharacter', JSON.stringify(characterData));
    
    console.log('Saved professions:', characterData.selectedProfessions);
    alert('Character saved! Professions: ' + (window.selectedProfessions ? window.selectedProfessions.length : 0) + ' saved.');
    
    // Call original if it exists
    if (originalSaveCharacter && originalSaveCharacter !== window.saveCharacter) {
        return originalSaveCharacter();
    }
};

// Override loadCharacter to restore professions
window.loadCharacter = function() {
    const savedData = localStorage.getItem('deadWorldCharacter');
    if (!savedData) {
        alert('No saved character found.');
        return;
    }
    
    try {
        const characterData = JSON.parse(savedData);
        
        // Restore professions
        if (characterData.selectedProfessions && Array.isArray(characterData.selectedProfessions)) {
            window.selectedProfessions = characterData.selectedProfessions;
            
            // Clear existing professions table
            const tbody = document.querySelector('#professionsTable tbody');
            if (tbody) {
                tbody.innerHTML = '';
            }
            
            // Re-add each profession to the table
            characterData.selectedProfessions.forEach(prof => {
                if (window.addProfessionToTable && prof.name) {
                    window.addProfessionToTable(prof.name);
                    
                    // Restore XP and level
                    const profId = prof.name.replace(/\s+/g, '-');
                    const totalElement = document.getElementById('total-xp-' + profId);
                    const levelElement = document.getElementById('level-' + profId);
                    const nextElement = document.getElementById('next-' + profId);
                    
                    if (totalElement) totalElement.textContent = prof.totalXP || 0;
                    if (levelElement) levelElement.textContent = prof.currentLevel || 0;
                    
                    // Calculate next level XP
                    const profession = window.professions ? window.professions.find(p => p.name === prof.name) : null;
                    if (profession && nextElement) {
                        const nextLevelXp = profession.xpRequirements[(prof.currentLevel || 0) + 1] || 'MAX';
                        nextElement.textContent = nextLevelXp === 'MAX' ? 'MAX' : nextLevelXp;
                    }
                }
            });
            
            console.log('Loaded professions:', window.selectedProfessions);
        }
        
        alert('Character loaded! Professions: ' + (window.selectedProfessions ? window.selectedProfessions.length : 0) + ' loaded.');
        
    } catch (error) {
        console.error('Error loading character:', error);
        alert('Error loading character: ' + error.message);
    }
    
    // Call original if it exists
    if (originalLoadCharacter && originalLoadCharacter !== window.loadCharacter) {
        return originalLoadCharacter();
    }
};

console.log('Professions save/load extension loaded');
