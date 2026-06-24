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

// Helper function to collect skills data (all fields)
function collectSkillsData() {
    const skills = {};
    
    const skillsTable = document.querySelector('#skillsTable');
    if (!skillsTable) {
        console.log('Skills table not found');
        return skills;
    }
    
    const skillRows = skillsTable.querySelectorAll('tbody tr');
    console.log('Found', skillRows.length, 'skill rows');
    
    skillRows.forEach((row, index) => {
        const cells = row.querySelectorAll('td');
        if (cells.length < 2) return;
        
        const skillName = cells[0].textContent.trim().split('(')[0].trim();
        if (!skillName || skillName === 'Skill') return;
        
        // Proficiency radio (N/P/E)
        let proficiency = 'none';
        const radios = row.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            if (radio.checked) proficiency = radio.value;
        });
        
        // XP is the only editable input; modifier/level/next are calculated spans
        const xpInput = row.querySelector('.skill-xp');
        
        skills[skillName] = {
            proficiency: proficiency,
            xp: xpInput ? xpInput.value : ''
        };
    });
    
    console.log('Total skills collected:', Object.keys(skills).length);
    return skills;
}

// Helper function to restore skills data (all fields)
function restoreSkillsData(skills) {
    if (!skills || Object.keys(skills).length === 0) {
        console.log('No skills to restore');
        return;
    }
    
    const skillsTable = document.querySelector('#skillsTable');
    if (!skillsTable) {
        console.log('Skills table not found for restore');
        return;
    }
    
    const skillRows = skillsTable.querySelectorAll('tbody tr');
    
    skillRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length < 2) return;
        
        const skillName = cells[0].textContent.trim().split('(')[0].trim();
        const saved = skills[skillName];
        if (!skillName || !saved) return;
        
        // Restore proficiency radio
        const radios = row.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.checked = (radio.value === saved.proficiency);
        });
        
        // Restore XP input then recalculate modifier/level/next
        const xpInput = row.querySelector('.skill-xp');
        if (xpInput && saved.xp !== undefined) {
            xpInput.value = saved.xp;
            if (typeof updateSkillLevel === 'function') updateSkillLevel(xpInput);
        }
        
        console.log('Restored skill:', skillName, saved);
    });
    
    console.log('Skills restored successfully');
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
        // Add professions data - read XP/level from DOM to ensure latest values
        selectedProfessions: (function() {
            const profs = window.selectedProfessions || [];
            return profs.map(prof => {
                const profId = prof.name.replace(/\s+/g, '-');
                const totalXPEl = document.getElementById('total-xp-' + profId);
                const levelEl = document.getElementById('level-' + profId);
                const nextEl = document.getElementById('next-' + profId);
                return {
                    ...prof,
                    totalXP: totalXPEl ? (parseInt(totalXPEl.textContent) || 0) : (prof.totalXP || 0),
                    currentLevel: levelEl ? (parseInt(levelEl.textContent) || 0) : (prof.currentLevel || 0),
                    nextLevelXP: nextEl ? nextEl.textContent : ''
                };
            });
        })(),
        // Add skills data
        skills: collectSkillsData()
    };
    
    // Save all data to localStorage
    localStorage.setItem('deadWorldCharacter', JSON.stringify(characterData));
    
    console.log('Saved ALL data to localStorage');
    console.log('Professions saved:', characterData.selectedProfessions);
    console.log('Skills saved:', characterData.skills);
    console.log('Character saved! Professions:', characterData.selectedProfessions.length, 'Skills:', Object.keys(characterData.skills).length);
    
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
        console.log('No saved character found.');
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
                if (typeof addProfessionToTable === 'function' && prof.name) {
                    addProfessionToTable(prof.name);
                    // Also add skills rows for this profession
                    const profDef2 = (window.professions || []).find(p => p.name === prof.name);
                    if (profDef2 && typeof addProfessionSkills === 'function') {
                        addProfessionSkills(profDef2);
                    }
                    console.log('Added profession to table:', prof.name);
                    
                    // Restore XP/level/next using the element IDs from addProfessionToTable
                    const profId = prof.name.replace(/\s+/g, '-');
                    const totalXPEl = document.getElementById('total-xp-' + profId);
                    const levelEl = document.getElementById('level-' + profId);
                    const nextEl = document.getElementById('next-' + profId);
                    
                    const totalXP = prof.totalXP || 0;
                    if (totalXPEl) totalXPEl.textContent = totalXP;
                    if (levelEl) levelEl.textContent = prof.currentLevel || 0;
                    
                    // Also update window.selectedProfessions entry with saved XP
                    const profDataEntry = window.selectedProfessions.find(p => p.name === prof.name);
                    if (profDataEntry) profDataEntry.totalXP = totalXP;
                    
                    // Recalculate next level XP
                    if (nextEl && profDef2) {
                        const lvl = prof.currentLevel || 0;
                        nextEl.textContent = lvl < profDef2.xpRequirements.length - 1
                            ? profDef2.xpRequirements[lvl + 1]
                            : 'MAX';
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
        
        console.log('Character loaded! Professions:', window.selectedProfessions ? window.selectedProfessions.length : 0);
        
    } catch (error) {
        console.error('Error loading character:', error);
        alert('Error loading character: ' + error.message);
    }
};

console.log('Professions save/load extension loaded');
