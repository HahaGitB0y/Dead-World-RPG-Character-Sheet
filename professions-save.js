// Professions Save/Load Extension
// This extends the saveCharacter and loadCharacter functions to include professions and skills data

console.log('=== Professions Save/Load Extension Loading ===');

// Initialize selectedProfessions if not already defined
if (!window.selectedProfessions) {
    window.selectedProfessions = [];
    console.log('Initialized window.selectedProfessions');
}

// Store original functions
const originalSaveCharacter = window.saveCharacter;
const originalLoadCharacter = window.loadCharacter;

console.log('Original saveCharacter exists:', typeof originalSaveCharacter === 'function');
console.log('Original loadCharacter exists:', typeof originalLoadCharacter === 'function');

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
    console.log('=== Save Character called ===');
    console.log('selectedProfessions before save:', window.selectedProfessions);
    console.log('selectedProfessions length:', window.selectedProfessions ? window.selectedProfessions.length : 'undefined');
    
    // First, collect all character data
    const stats = {
        str: document.getElementById('str')?.value || '',
        dex: document.getElementById('dex')?.value || '',
        con: document.getElementById('con')?.value || '',
        int: document.getElementById('int')?.value || '',
        wis: document.getElementById('wis')?.value || '',
        cha: document.getElementById('cha')?.value || ''
    };
    
    // Collect equipment slots
    const equipmentSlots = {
        head: document.getElementById('head')?.value || '',
        neck: document.getElementById('neck')?.value || '',
        body: document.getElementById('body')?.value || '',
        back: document.getElementById('back')?.value || '',
        hands: document.getElementById('hands')?.value || '',
        waist: document.getElementById('waist')?.value || '',
        legs: document.getElementById('legs')?.value || '',
        feet: document.getElementById('feet')?.value || ''
    };
    
    // Get existing saved data first
    let existingData = {};
    const existingSaved = localStorage.getItem('deadWorldCharacter');
    if (existingSaved) {
        try {
            existingData = JSON.parse(existingSaved);
        } catch (e) {
            console.error('Error parsing existing data:', e);
        }
    }
    
    // Merge all data together
    const characterData = {
        ...existingData,
        name: document.getElementById('name')?.value || '',
        age: document.getElementById('age')?.value || '',
        gender: document.getElementById('gender')?.value || '',
        background: document.getElementById('background')?.value || '',
        stats: stats,
        hp: document.getElementById('hp')?.value || '',
        ac: document.getElementById('ac')?.value || '',
        speed: document.getElementById('speed')?.value || '',
        initiative: document.getElementById('initiative')?.value || '',
        proficiency: document.getElementById('proficiency')?.value || '',
        equipmentSlots: equipmentSlots,
        biteProtection: document.getElementById('biteProtection')?.value || '',
        shield: document.getElementById('shield')?.value || '',
        food: document.getElementById('food')?.value || '',
        water: document.getElementById('water')?.value || '',
        medicalSupplies: document.getElementById('medicalSupplies')?.value || '',
        studyMaterials: document.getElementById('studyMaterials')?.value || '',
        lifeHacks: document.getElementById('lifeHacks')?.value || '',
        notes: document.getElementById('notes')?.value || '',
        // Add professions data
        selectedProfessions: window.selectedProfessions || [],
        // Add skills data
        skills: collectSkillsData()
    };
    
    // Save all data to localStorage
    localStorage.setItem('deadWorldCharacter', JSON.stringify(characterData));
    
    console.log('Saved ALL data to localStorage');
    console.log('Professions saved:', characterData.selectedProfessions);
    console.log('Skills saved:', characterData.skills);
    alert('Character saved! Professions: ' + (characterData.selectedProfessions.length || 0) + ' saved. Skills saved.');
    
    // Call original if it exists (for any additional processing)
    if (originalSaveCharacter && originalSaveCharacter !== window.saveCharacter) {
        try {
            originalSaveCharacter();
        } catch (e) {
            console.log('Original saveCharacter error (expected):', e.message);
        }
    }
};

// Override loadCharacter to restore professions from localStorage (mobile-friendly)
window.loadCharacter = function() {
    console.log('=== Load Character called ===');
    
    const savedData = localStorage.getItem('deadWorldCharacter');
    if (!savedData) {
        console.log('No saved data found');
        alert('No saved character found.');
        return;
    }
    
    console.log('Saved data found, length:', savedData.length);
    
    try {
        const characterData = JSON.parse(savedData);
        console.log('Parsed character data:', characterData);
        
        // Load base character data
        if (characterData.name) document.getElementById('name').value = characterData.name;
        if (characterData.age) document.getElementById('age').value = characterData.age;
        if (characterData.gender) document.getElementById('gender').value = characterData.gender;
        if (characterData.background) document.getElementById('background').value = characterData.background;
        if (characterData.hp) document.getElementById('hp').value = characterData.hp;
        if (characterData.ac) document.getElementById('ac').value = characterData.ac;
        
        // Load stats
        if (characterData.stats) {
            if (characterData.stats.str) document.getElementById('str').value = characterData.stats.str;
            if (characterData.stats.dex) document.getElementById('dex').value = characterData.stats.dex;
            if (characterData.stats.con) document.getElementById('con').value = characterData.stats.con;
            if (characterData.stats.int) document.getElementById('int').value = characterData.stats.int;
            if (characterData.stats.wis) document.getElementById('wis').value = characterData.stats.wis;
            if (characterData.stats.cha) document.getElementById('cha').value = characterData.stats.cha;
        }
        
        console.log('selectedProfessions in data:', characterData.selectedProfessions);
        
        // Restore professions
        if (characterData.selectedProfessions && Array.isArray(characterData.selectedProfessions)) {
            window.selectedProfessions = characterData.selectedProfessions;
            console.log('Set window.selectedProfessions to:', window.selectedProfessions);
            
            // Clear existing professions table
            const tbody = document.querySelector('#professionsTable tbody');
            if (tbody) {
                tbody.innerHTML = '';
                console.log('Cleared professions table');
            }
            
            // Re-add each profession to the table
            characterData.selectedProfessions.forEach((prof, index) => {
                console.log('Processing profession', index, ':', prof);
                if (window.addProfessionToTable && prof.name) {
                    window.addProfessionToTable(prof.name);
                    console.log('Added profession to table:', prof.name);
                    
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
        } else {
            console.log('No selectedProfessions found in saved data');
        }
        
        // Restore skills
        if (characterData.skills) {
            restoreSkillsData(characterData.skills);
            console.log('Loaded skills:', characterData.skills);
        } else {
            console.log('No skills found in saved data');
        }
        
        alert('Character loaded! Professions: ' + (window.selectedProfessions ? window.selectedProfessions.length : 0) + ' loaded. Skills restored.');
        
    } catch (error) {
        console.error('Error loading character:', error);
        alert('Error loading character: ' + error.message);
    }
};

console.log('Professions save/load extension loaded');
