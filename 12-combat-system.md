\page

# Combat System

{{wide
*Survival isn't about fighting fair — it's about fighting smart. Every bullet counts, every swing matters, and panic kills faster than any zombie.*
}}

\page

# Core Combat Mechanics

Combat follows a modified 5th Edition structure: **Initiative → Actions → Resolution**. The key differences are the **Stress System**, **Targeted Shots**, and **Zombie Kill Rules**.

## Initiative

Roll 1d20 + Dexterity modifier. Ties broken by highest DEX score, then player choice.

## Actions Per Turn

Each character gets on their turn:
- **2 Actions** (Attack, Dash, Dodge, Help, Hide, Use Object)
- **1 Movement** (speed in feet)
- **1 Free Interaction** (open door, draw weapon, shout warning)

## Attack Rolls

Roll 1d20 + relevant ability modifier + proficiency (if proficient with weapon).

- **Melee:** STR modifier (or DEX for Finesse weapons)
- **Ranged:** DEX modifier
- **Thrown:** STR or DEX (player choice)

Compare result to target's **AC** (Armor Class). Meet or exceed = hit.

## Damage Rolls

On hit, roll weapon damage die + ability modifier.

- **Melee:** Weapon die + STR (or DEX for Finesse)
- **Ranged:** Weapon die + DEX
- **Critical Hit (natural 20):** Roll damage dice twice + modifier

\page

# Stress & Combat Difficulty

{{wide
*The difference between a clean headshot and a panicked miss is how many dead hands are reaching for you.*
}}

Combat difficulty is governed by the **Stress Level** of the encounter. Stress affects headshot DCs, concentration, and panic thresholds.

{{classTable,wide
### Stress Levels
| Stress Level | Condition | Headshot DC (Zombie) | Headshot DC (NPC) | Effects |
|:--:|:--|:--:|:--:|:--|
| 0 | **Calm** — No threats, prepared ambush | 8 | 12 | Advantage on first attack. No panic checks. |
| 1 | **Alert** — Aware of nearby threats | 10 | 14 | Normal combat. No modifiers. |
| 2 | **Pressured** — Active combat, 3+ enemies | 12 | 16 | −1 to ranged attack rolls. |
| 3 | **Stressed** — Surrounded, allies down, 6+ enemies | 14 | 18 | −2 to all attack rolls. Panic check DC 12 each turn. |
| 4 | **Overwhelmed** — Horde, escape unlikely, critical injuries | 16 | 20 | −3 to all attack rolls. Panic check DC 14. Disadvantage on concentration. |
| 5 | **Breaking Point** — Near death, total horde, no escape visible | 18 | 22 | −4 to all attacks. Panic check DC 16. On fail: flee, freeze, or fight recklessly. |
}}

### Panic Check

WIS saving throw at the listed DC. On failure, DM rolls 1d4:
1. **Freeze** — Lose your action this turn.
2. **Flee** — Must use movement + action to Dash away from danger.
3. **Reckless** — Must attack nearest target with disadvantage. No targeted shots.
4. **Scream** — Attract additional zombies (DM determines number).

**Reducing Stress:** Leader rally abilities, Entertainer performance, Psychologist calming, killing threats, or escaping to safety can reduce stress by 1 level per use.

\page

# Zombie Combat

{{wide
*The only good zombie is one with a crushed skull. Body shots slow them down, but they don't stop.*
}}

## The Golden Rule: Destroy the Brain

Zombies are killed by **destroying the brain**. This means:
- **Headshots** with sufficient damage = instant kill (regular zombies)
- **Body shots** deal damage but zombies don't feel pain, don't bleed out, and don't stop
- **Limb destruction** can slow/disable but never kills

## Regular Zombie Stats

| Stat | Value |
|:--|:--|
| **AC** | 8 (shambler) to 11 (fresher corpse) |
| **HP** | 15 (body HP — irrelevant if headshot lands) |
| **Speed** | 20ft (shambler), 30ft (fresh), 40ft (runner variant) |
| **Attack** | Bite +3, 1d6+1 piercing + infection check |
| **Grab** | Grapple +2 (on hit, target must escape DC 11 or bitten next turn) |

## Headshot Rules — Zombies

To attempt a headshot against a zombie:

1. **Declare** headshot before rolling.
2. Roll attack against **Headshot DC** (set by Stress Level, see table above).
3. On hit: If damage meets or exceeds the **kill threshold**, zombie dies instantly.

{{classTable,wide
### Zombie Headshot Kill Thresholds
| Zombie Type | Kill Threshold (single hit) | Cumulative Head Damage to Kill | Body HP |
|:--:|:--:|:--:|:--:|
| **Shambler** (decayed) | 1+ (any headshot kills) | 1 | 15 |
| **Standard** (fresh dead) | 4+ damage | 4 | 22 |
| **Runner** (very fresh) | 6+ damage | 8 | 30 |
| **Brute** (large/mutated) | 10+ damage | 20 | 50 |
| **Bloater** (swollen/explosive) | 8+ damage | 15 | 40 |
| **Screamer** (alarm zombie) | 4+ damage | 4 | 18 |
| **Armored** (helmet/gear) | Must remove armor first, then 6+ | 10 | 35 |
| **Horde Zombie** (minion rules) | 1+ (any headshot kills) | 1 | 1 |
}}

### Cumulative Head Damage

If a headshot hits but doesn't meet the kill threshold in one blow, **track head damage separately**. Multiple headshots add up. Once cumulative head damage reaches the "Cumulative Head Damage to Kill" value, the zombie drops.

**Example:** A Runner needs 6+ in one hit OR 8 total head damage. You hit for 4, then 4 again = 8 cumulative → dead.

### Body Shots Against Zombies

Body shots reduce zombie **Body HP** but do NOT kill. When Body HP reaches 0:
- Zombie is **prone and crawling** (speed 5ft, attack at disadvantage)
- Still dangerous — can still bite ankles, grab
- Still requires headshot to destroy

### Horde Rules (Minion Zombies)

When facing 10+ zombies, DM can use **Horde Zombie** rules:
- 1 HP each, any hit kills, any headshot kills
- Attack in groups: for every 3 horde zombies adjacent to a target, one attack roll at +5, dealing 2d6+2
- Cleave rule: if you kill a horde zombie with a melee attack, excess damage carries to adjacent horde zombie (same roll vs their AC)

\page

# Ranged Combat

{{wide
*Ammo is life. Every round fired is one less between you and death. Make them count.*
}}

## Firearms

{{classTable,wide
### Firearm Table
| Weapon | Damage | Range (normal/long) | Properties | Ammo Type |
|:--|:--:|:--:|:--|:--|
| Pistol (9mm) | 2d6 | 50/150 | Light, semi-auto | 9mm |
| Revolver (.357) | 2d8 | 40/120 | Loud, reliable | .357 |
| Shotgun (pump) | 3d6 | 30/60 | Spread, devastating close | 12ga shell |
| Hunting Rifle | 2d10 | 150/600 | Two-handed, scope (+2 Calm) | .308 |
| Assault Rifle | 2d8 | 100/300 | Burst fire, two-handed | 5.56 |
| SMG | 2d6 | 50/150 | Burst fire, light | 9mm |
| Sniper Rifle | 2d12 | 300/1200 | Two-handed, scope (+2 Calm), heavy | .308 |
| Crossbow | 1d10 | 80/320 | Silent, two-handed, loading | Bolt |
| Bow (Compound) | 1d8 | 100/400 | Silent, two-handed, STR 12 req | Arrow |
}}

### Firearm Properties

- **Semi-auto:** One attack per action (can fire twice with Extra Attack or profession abilities).
- **Burst Fire:** Expend 3 rounds of ammo to force DEX save (DC 13) on all creatures in 10ft cube. Fail = weapon damage. No headshot possible in burst.
- **Spread (Shotgun):** At 15ft or less, roll damage with advantage (take higher). At 30ft+, roll with disadvantage.
- **Silent:** Does not attract zombies via noise.
- **Loud:** Attracts zombies within 300ft (DM rolls encounter).
- **Scope:** At Stress 0-1, grants +2 to headshot rolls.
- **Loading:** Requires bonus action or action to reload after each shot.

### Ammunition & Noise

Every firearm shot (except silenced/crossbow/bow) generates **noise**. After combat with firearms:
- DM rolls 1d6. On a 1-2, nearby zombies are attracted (1d4 shamblers per round of gunfire).
- Suppressors reduce this to 1 on a 1 only, and halve attraction range.

\page

# Melee Combat

{{wide
*Quiet. Reliable. Exhausting. A good blade never runs out of ammo — but your arms will.*
}}

## Melee Weapons

{{classTable,wide
### Melee Weapon Table
| Weapon | Damage | Properties |
|:--|:--:|:--|
| Knife/Shiv | 1d4 | Light, finesse, silent, concealable |
| Hatchet | 1d6 | Light, thrown (20/60), silent |
| Baseball Bat | 1d8 | Blunt, two-handed (or 1d6 one-handed), silent |
| Crowbar | 1d6 | Versatile (1d8), tool, silent |
| Fire Axe | 1d10 | Two-handed, heavy, piercing/slash, silent |
| Machete | 1d8 | Finesse, slash, silent |
| Sledgehammer | 2d6 | Two-handed, heavy, blunt, silent, slow |
| Spear (improvised) | 1d6 | Reach, thrown (20/60), versatile (1d8), silent |
| Katana/Sword | 1d10 | Finesse, two-handed, slash, silent |
| Shield (improvised) | 1d4 | +2 AC, bash, silent |
}}

### Melee Properties

- **Silent:** Does not generate noise to attract zombies.
- **Blunt:** Advantage on headshot rolls vs zombies (crushes skull easier). Bonus: +2 damage on headshots.
- **Slash:** Can sever limbs (on crit, DM determines limb). Zombies lose grab/bite if arm severed.
- **Piercing (to head):** Counts as headshot on natural 18+ even without declaring (instinctive stab).
- **Heavy:** Disadvantage for characters with STR below 13.
- **Slow:** Cannot make bonus action attacks. Initiative −2 while wielding.
- **Reach:** Can attack from 10ft away (outside zombie grab range).
- **Finesse:** Use DEX instead of STR for attack and damage.

### Melee Exhaustion

Sustained melee combat is tiring. After **5 consecutive rounds** of melee attacks:
- Make a CON save (DC 10 + 1 per round beyond 5).
- On failure: gain 1 level of exhaustion.
- **Athlete profession** adds CON modifier rounds before this triggers.
- **Light weapons** add 3 rounds before exhaustion triggers.
- **Heavy weapons** trigger exhaustion check after 3 rounds instead of 5.

\page

# Targeted Shots

{{wide
*A shot to the knee won't kill, but it'll stop a raider from chasing you. A shot to the hand drops their weapon. Precision has its price.*
}}

Targeted shots allow players to aim for specific body parts for tactical advantages against **NPCs and special zombies**. Against regular zombies, only **headshots** matter.

## Declaring a Targeted Shot

- Must declare **before** rolling.
- Consumes your **action AND bonus action** (representing careful aim). You cannot move on the same turn unless you have a feat or ability that says otherwise.
- **OR** take the shot as a normal action at **disadvantage** (rushed aim).

{{classTable,wide
### Targeted Shot Table (vs NPCs / Humanoids)
| Target | DC Modifier | Effect on Hit | Notes |
|:--|:--:|:--|:--|
| **Head** | Stress-based (see table) | ×2 damage. If damage exceeds half max HP: instant kill. | Helmets add +2 to DC. |
| **Torso** | +0 (standard attack) | Normal damage. | Default target. |
| **Arms/Hands** | +3 to AC | Target drops held item. 1 round: can't use that hand. | Repeated hits = permanent disability. |
| **Legs/Knees** | +2 to AC | Speed halved. Prone on crit. | Two leg hits = speed 5ft (crawling). |
| **Weapon/Item** | +4 to AC | Destroy or disarm the item. | Only works on visible items. |
| **Eyes** | +6 to AC | Blinded. ×2 damage. | Permanent if not treated within 1 hour. |
| **Throat** | +4 to AC | Cannot speak/call for help. 1d6 bleed per round. | DC 14 Medicine to stop bleeding. |
}}

### Targeted Shots vs Special Zombies

Against special zombies, targeted shots work as follows:
- **Head:** Uses Headshot DC from Stress table. Damage counts toward cumulative head damage.
- **Arms:** Sever on 8+ damage (single hit). Zombie loses grab attack.
- **Legs:** Sever/destroy on 8+ damage. Zombie speed reduced to 5ft (crawling).
- **Torso:** Normal body damage. Does not kill.

### The Action Economy Trade-Off

Targeted shots are powerful but costly:
- **Full Aim (action + bonus action, no movement):** Roll normally against targeted DC.
- **Quick Aim (action only, disadvantage):** Roll with disadvantage against targeted DC.
- **Snap Shot (reaction, if you have one):** Can only target Torso. No targeted shots on reactions.

This means a player choosing a headshot gives up their bonus action and movement — they're committing fully to that one precise shot. In a surrounded situation at Stress 4+, this becomes extremely dangerous.

\page

# Combat vs NPCs

{{wide
*Other survivors are the real threat. Zombies are predictable. People aren't.*
}}

## NPC Types

{{classTable,wide
### NPC Combat Stats
| NPC Type | AC | HP | Attack | Special |
|:--|:--:|:--:|:--|:--|
| **Survivor (untrained)** | 10 | 8-15 | Improvised +2, 1d4+1 | Flees at half HP. Panic-prone. |
| **Survivor (armed)** | 12 | 15-25 | Weapon +3, varies | Fights until morale breaks. |
| **Raider** | 13 | 25-35 | Weapon +5, 1d8+3 | Aggressive. Flanks. Uses cover. |
| **Raider Leader** | 15 | 40-55 | Weapon +7, 1d10+4 | Commands others. Rally ability. |
| **Military (soldier)** | 16 (body armor) | 35-50 | Rifle +7, 2d8+3 | Trained. Uses tactics. Burst fire. |
| **Military (officer)** | 17 | 45-60 | Sidearm +8, 2d6+4 | Commands squads. Called shots. |
| **Wild Animal (dog/wolf)** | 12 | 11-18 | Bite +4, 1d6+2 | Pack tactics (advantage if ally adjacent). |
| **Wild Animal (bear)** | 14 | 50-68 | Claw +7, 2d6+4 | Multiattack (2 claws + bite). |
| **Feral Dog Pack** | 11 | 8-12 each | Bite +3, 1d4+2 | Swarm. 3+ = advantage on all attacks. |
}}

## NPC Combat Behavior

- **Morale:** Most NPCs (except military and fanatics) make a WIS save (DC 12) when:
  - An ally is killed
  - Reduced to half HP
  - Outnumbered 2:1
  - On fail: flee, surrender, or take cover and stop fighting
- **Cover:** Armed NPCs use cover (+2 AC half cover, +5 AC three-quarters cover).
- **Flanking:** NPCs who flank (two on opposite sides) gain advantage on attacks.
- **Headshots vs NPCs:** Use the Headshot DC from the Stress table (NPC column). On hit with damage exceeding half their max HP: instant kill. Otherwise: ×2 damage.

## Armor & Protection (NPCs and Players)

| Armor Type | AC | Notes |
|:--|:--:|:--|
| Clothing only | 10 + DEX | No protection. |
| Padded/Leather | 11 + DEX | Light. |
| Reinforced clothing | 12 + DEX (max 2) | Tailor-crafted. |
| Ballistic vest | 14 | Medium. −1 Stealth. |
| Military body armor | 16 | Heavy. −2 Stealth. Disadvantage on DEX saves. |
| Riot gear | 17 | Heavy. Headshot DC +2. |
| Bite-proof suit | 12 + DEX | Light. Immune to zombie bite (Tailor Level 5). |

\page

# Special Combat Actions

{{wide
*Beyond swinging and shooting — combat rewards creativity.*
}}

## Grapple & Shove (vs NPCs)

Same as 5e:
- **Grapple:** Athletics vs Athletics/Acrobatics. Target speed = 0.
- **Shove:** Athletics vs Athletics/Acrobatics. Target prone or pushed 5ft.

## Improvised Weapons

Anything can be a weapon. Improvised weapons deal 1d4 damage and you don't add proficiency unless you have a relevant profession.

Exceptions (DM discretion):
- Heavy improvised (fire hydrant, car door): 1d8, heavy
- Sharp improvised (broken bottle, scissors): 1d6, finesse

## Environmental Attacks

- **Push into hazard:** Shove into fire (1d6/round), off ledge (fall damage), into zombies (grappled by horde).
- **Drop objects:** Heavy object from height = 1d6 per 10ft fallen, DEX save DC 12 to dodge.
- **Vehicle ram:** 2d10 + 1d10 per 10mph over 20. DEX save DC 14 to dodge.

## Coup de Grâce

Against a **prone, unconscious, or restrained** target:
- Melee: Auto-hit, auto-crit. If zombie: auto-headshot kill (any damage).
- Ranged (within 5ft): Auto-hit, auto-crit.
- This is how you finish downed zombies safely.

## Dual Wielding

If holding a Light weapon in each hand:
- Attack with main hand as action.
- Attack with off-hand as bonus action (no ability modifier to damage unless negative).
- Cannot attempt targeted shots while dual wielding (too imprecise).

\page

# Death & Dying

{{wide
*There are no resurrections in the apocalypse. Death is final. Infection is worse.*
}}

## Dropping to 0 HP

Same as 5e death saves with modifications:
- Roll d20 at start of each turn. 10+ = success, 9 or below = failure.
- 3 successes = stabilized (unconscious but alive).
- 3 failures = **dead** (permanently).
- Natural 20 = regain 1 HP and consciousness.
- Natural 1 = 2 failures.

## Zombie Infection

If **bitten** by a zombie (bite attack hits and deals damage):
- Bite-proof armor negates completely.
- Otherwise: **CON save DC 14** at end of combat.
  - Success: Not infected (immune system fought it off).
  - Failure: **Infected.** 
    - Stage 1 (0-6 hours): Fever. Disadvantage on all checks. 
    - Stage 2 (6-12 hours): Weakness. Speed halved, STR/CON −2. 
    - Stage 3 (12-24 hours): Near death. Unconscious, death saves each hour.
    - Stage 4 (24+ hours): Death and reanimation as zombie.
- **Treatment:** Amputation of bitten limb within 10 minutes (DC 14 Medicine) = 75% survival. Experimental cures may exist (DM discretion).

## Bleeding Out

Certain wounds (throat, arteries) cause **bleeding:**
- 1d6 damage per round until treated.
- DC 12 Medicine check (or First Responder/Doctor ability) to stop.
- Hemostatic items (yarrow, QuikClot) auto-stop bleeding.

\page

# Combat Example Flow

{{wide
**Scenario:** 3 players approach a gas station. 5 standard zombies shambling inside. Players plan an ambush.
}}

**Round 0 — Setup:**
- Stress Level: **0 (Calm)** — prepared ambush, zombies unaware.
- Headshot DC: **8** for zombies.
- Player A (Marksman Level 3) takes position with hunting rifle.
- Player B (Melee, fire axe) readies at the door.
- Player C (Pistol) covers the rear.

**Round 1 — Ambush:**
- Player A: Declares headshot. Rolls 1d20+7 = 15 vs DC 8. Hit! Rolls 2d10+4 = 16 damage. Standard zombie kill threshold is 4+. **Instant kill.** Silent? No — rifle is Loud. DM notes noise.
- Player B: Enters, declares headshot with fire axe on nearest zombie. Rolls 1d20+5 = 12 vs DC 8. Hit! Rolls 1d10+3 = 7. Kill threshold 4+. **Instant kill.** Silent.
- Player C: Shoots at zombie 3 (no headshot, body shot). Rolls 1d20+4 = 17 vs AC 10. Hit! 2d6+3 = 11 damage to body HP (22). Zombie still standing.

**Round 2 — Stress rises:**
- 2 remaining zombies now aware. Stress rises to **1 (Alert)**. Headshot DC now **10**.
- DM rolls noise check for gunfire: 1d6 = 2. Zombies attracted — 1d4 = 3 more coming in 2 rounds.
- Combat continues with rising tension...

This example shows how stress escalates as combat extends and noise attracts more threats, creating a risk/reward loop for using firearms.
