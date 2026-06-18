// Professions Save/Load Extension
// This extends the saveCharacter and loadCharacter functions to include professions and skills data

// Store original functions
const originalSaveCharacter = window.saveCharacter;
const originalLoadCharacter = window.loadCharacter;

// Helper function to collect skills data
function collectSkillsData() {
    const skills = {};
    const skillRows = document.querySelectorAll('.skill-row, tr');
    
    skillRows.forEach(row => {
        // Find skill name
        const skillNameElement = row.querySelector('.skill-name, td:first-child');
        if (!skillNameElement) return;
        
        const skillName = skillNameElement.textContent.trim().split('(')[0].trim();
        if (!skillName) return;
        
        // Find N/P/E checkboxes
        const checkboxes = row.querySelectorAll('input[type="checkbox"]');
        if (checkboxes.length >= 3) {
            skills[skillName] = {
                N: checkboxes[0].checked,
                P: checkboxes[1].checked,
                E: checkboxes[2].checked
            };
        }
    });
    
    return skills;
}

// Helper function to restore skills data
function restoreSkillsData(skills) {
    if (!skills) return;
    
    const skillRows = document.querySelectorAll('.skill-row, tr');
    
    skillRows.forEach(row => {
        const skillNameElement = row.querySelector('.skill-name, td:first-child');
        if (!skillNameElement) return;
        
        const skillName = skillNameElement.textContent.trim().split('(')[0].trim();
        if (!skillName || !skills[skillName]) return;
        
        const checkboxes = row.querySelectorAll('input[type="checkbox"]');
        if (checkboxes.length >= 3) {
            checkboxes[0].checked = skills[skillName].N || false;
            checkboxes[1].checked = skills[skillName].P || false;
            checkboxes[2].checked = skills[skillName].E || false;
        }
    });
}

// Override saveCharacter to include professions and skills
window.saveCharacter = function() {
    // Call original first to save base character data
    if (originalSaveCharacter && originalSaveCharacter !== window.saveCharacter) {
        originalSaveCharacter();
    }
    
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
    
    // Add skills data
    characterData.skills = collectSkillsData();
    
    // Save back to localStorage
    localStorage.setItem('deadWorldCharacter', JSON.stringify(characterData));
    
    console.log('Saved professions:', characterData.selectedProfessions);
    console.log('Saved skills:', characterData.skills);
    alert('Character saved! Professions: ' + (window.selectedProfessions ? window.selectedProfessions.length : 0) + ' saved. Skills saved.');
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
        
        // Restore skills
        if (characterData.skills) {
            restoreSkillsData(characterData.skills);
            console.log('Loaded skills:', characterData.skills);
        }
        
        alert('Character loaded! Professions: ' + (window.selectedProfessions ? window.selectedProfessions.length : 0) + ' loaded. Skills restored.');
        
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
