window.CARDS = {
    monsters: [
        // NORMAL (20)
        ...[
            "Ashen Wolf", "Ironhide Boar", "Stonefang Turtle", "Cragscale Lizard",
            "Bladed Rhino", "Dustback Bison", "Feral Nightcat", "Copperjaw Croc",
            "Grim Elk", "Ridgeback Drake", "Horned Stagfiend", "Sandstrider",
            "Mirehound", "Storm Ram", "Frosthide Bear", "Cinder Ox",
            "Ruin Serpent", "Wildclaw Lynx", "Bonecrest Vulture", "Gravel Goliath"
        ].map((name, i) => ({
            id: `mon_n_${i+1}`,
            name,
            cost: 3 + (i % 5),
            copies: 3,
            type: "normal"
        })),

        // EFFECT (15)
        ...[
            "Hexbound Trickster", "Soul-Leech Wraith", "Clockwork Illusionist",
            "Gravewhisper Shade", "Mindflayer Adept", "Echo Familiar",
            "Veilstep Assassin", "Cursebloom Witch", "Spectral Pickpocket",
            "Gloom Oracle", "Threadspinner Seer", "Runic Parasite",
            "Flicker Djinn", "Thoughtrender", "Mask of the Nameless"
        ].map((name, i) => ({
            id: `mon_e_${i+1}`,
            name,
            cost: 4 + (i % 6),
            copies: 3,
            type: "effect"
        })),

        // RITUAL (15)
        ...[
            "High Priest of Ember", "Acolyte of the Deep Choir", "Void Invocation Vessel",
            "Sanctified Flamebearer", "Ritebound Devotee", "Oracle of Drowned Suns",
            "Chanter of the Pale Rite", "Eclipse Vessel", "Blood Sigil Disciple",
            "Ritual Herald of Ash", "Consecrated Husk", "Bellringer of Silence",
            "Moonlit Sacrament", "Vessel of the Seventh Rite", "Grand Hierophant"
        ].map((name, i) => ({
            id: `mon_r_${i+1}`,
            name,
            cost: 5 + (i % 6),
            copies: 3,
            type: "ritual"
        })),

        // FUSION (10)
        ...[
            "Bumhole The Sorceror", // requested
            "Twin-Headed Cataclysm", "Abyssal Chimera", "Stormforged Behemoth",
            "Molten Crown Titan", "Voidsplice Dragon", "Fleshcrafted Colossus",
            "Eternal Miscreation", "Thunderbone Leviathan", "Grave-Meld Hydra"
        ].map((name, i) => ({
            id: `mon_f_${i+1}`,
            name,
            cost: 7 + (i % 4),
            copies: 2,
            type: "fusion"
        }))
    ],

    spells: [
        ...[
            "Arcane Surge", "Mystic Reversal", "Sigil of Fortune", "Temporal Slip",
            "Mana Bloom", "Phantom Recall", "Astral Binding", "Echo of Power",
            "Runic Amplification", "Spellweave Collapse", "Glimmering Ward",
            "Forbidden Insight", "Shatter Hex", "Mirror Invocation",
            "Pulse of Eternity", "Spellbreaker Wave", "Veil of Illusions",
            "Arc Lightning Scroll", "Mystic Convergence", "Scroll of Undoing"
        ].map((name, i) => ({
            id: `sp_${i+1}`,
            name,
            cost: 2 + (i % 5),
            copies: 5,
            type: "spell"
        }))
    ],

    traps: [
        ...[
            "Pitfall Trap", "Mirror Snare", "Exploding Sigil", "Shadow Bind",
            "Spiked Ambush", "Phantom Snare", "Runic Detonation", "Grasping Roots",
            "Time Snare", "Venom Tripwire", "Soul Cage", "Crushing Glyph",
            "Chain Collapse", "Specter Net", "Iron Maiden Field",
            "Backlash Rune", "Null Zone Trap", "Grave Trigger",
            "Snaring Fog", "Blood Pact Snare"
        ].map((name, i) => ({
            id: `tr_${i+1}`,
            name,
            cost: 3 + (i % 5),
            copies: 4,
            type: "trap"
        }))
    ]
};