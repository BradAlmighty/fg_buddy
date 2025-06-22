import { defineStore } from "pinia";

interface RulesReferenceState {
  rules: {
    spellFailureTable: SpellSuccessAndFailure[];
    soldierSurvivalTable: DeathAndInjuryEntry[];
    spellcasterSurvivalTable: DeathAndInjuryEntry[];
    permanentInjuryTable: DeathAndInjuryEntry[];
    experienceTable: ExperienceTableEntry[];
  };
}

interface SpellSuccessAndFailure {
  failAmount: string;
  damageTaken: number;
}

interface ExperienceTableEntry {
  experience: number;
  achievement: string;
}

interface DeathAndInjuryEntry {
  roll: string;
  result: string;
  description?: string;
}

export const useRulesReferenceStore = defineStore("rulesReference", {
  state: (): RulesReferenceState => ({
    rules: {
      spellFailureTable: <SpellSuccessAndFailure[]>[
        { failAmount: "1-4", damageTaken: 0 },
        { failAmount: "5-9", damageTaken: 1 },
        { failAmount: "10-19", damageTaken: 2 },
        { failAmount: "20+", damageTaken: 5 },
      ],
      soldierSurvivalTable: <DeathAndInjuryEntry[]>[
        {
          roll: "1-4",
          result: "Dead",
          description:
            "The soldier has been killed and should be removed from the Wizard Sheet. Any items this soldier was carrying are lost.",
        },
        {
          roll: "5-8",
          result: "Badly Wounded",
          description:
            "The soldier is injured. They can remain in the warband, and on the Wizard Sheet, but they cannot participate in the next game while they are recovering from their wounds. After missing one game, they will return for the next game with full Health.",
        },
        {
          roll: "9+",
          result: "Full Recovery",
          description:
            "The soldier recovers quickly from their ordeal and will return for the next game with full Health.",
        },
      ],
      spellcasterSurvivalTable: <DeathAndInjuryEntry[]>[
        {
          roll: "1-2",
          result: "Dead",
          description:
            "The spellcaster doesn’t survive their injuries. See the section on recruiting new warband members in ‘Spending Treasure’ (page 103) for what to do when your wizard or apprentice dies.",
        },
        {
          roll: "3-4",
          result: "Permanent Injury",
          description:
            "The spellcaster suffers an injury that never fully heals. Roll on the Permanent Injury Table below to determine the exact nature of the injury. Otherwise, the figure returns for the next game with full Health.",
        },
        {
          roll: "5-6",
          result: "Badly Wounded",
          description:
            "The spellcaster has received a major injury that will take time to heal. The player has a choice. They can either play the next game without the injured spellcaster, or can pay 150gc for medical treatment. A 100gc discount applies to this amount if there is an apothecary in the warband. If the wizard does not have the appropriate amount, they are allowed to go into debt to pay this fee. However, the wizard may not spend any gold until this debt is paid in full.",
        },
        {
          roll: "7-8",
          result: "Close Call",
          description:
            "The spellcaster escapes with no major injury, but loses all the items that they were carrying. Items from the General Arms and Armour Table (page 33) are replaced for free.",
        },
        {
          roll: "9+",
          result: "Full Recovery",
          description:
            "The spellcaster’s injuries proved to be relatively minor, and they return at full strength in the next game.",
        },
      ],
      permanentInjuryTable: <DeathAndInjuryEntry[]>[
        {
          roll: "1-2",
          result: "Lost Toes",
          description:
            "The spellcaster has lost one or more toes and suffers a permanent -1 penalty to all Move Rolls. This injury can be received twice, with a cumulative effect of -2 to all Move Rolls. Any further Lost Toes results must be re-rolled.",
        },
        {
          roll: "3-6",
          result: "Smashed Leg",
          description:
            "The spellcaster suffers permanent bone or muscle damage in their leg and suffers a permanent -2 Move penalty. This injury can be received twice, with a cumulative effect of -4 to Move. Any further Smashed Leg results must be re- rolled.",
        },
        {
          roll: "6-10",
          result: "Crushed Arm",
          description:
            "The spellcaster suffers permanent bone or muscle damage in their arm and suffers a permanent -1 Fight penalty. This injury can be received twice, with a cumulative effect of -2 Fight. Any further Crushed Arm results must be re-rolled.",
        },
        {
          roll: "11-12",
          result: "Lost Fingers",
          description:
            "The spellcaster has lost one or more fingers and suffers a permanent -1 Shoot penalty. This injury can be received twice, with a cumulative effect of -2 Shoot. Any further Lost Fingers results must be re-rolled.",
        },
        {
          roll: "13-14",
          result: "Never Quite as Strong",
          description:
            "Due to internal injuries, the spellcaster never quite returns to full Health and starts every game at -1 Health. This injury can be received twice, with a cumulative effect of -2 Health. Any further Never Quite as Strong results must be re-rolled.",
        },
        {
          roll: "15-16",
          result: "Psychological Scars",
          description:
            "The spellcaster’s physical injuries fully heal, but the mental trauma remains, causing a permanent -1 Will penalty. This injury can be received twice, with a cumulative effect of -2 Will. Any further Psychological Scars results must be re- rolled.",
        },
        {
          roll: "17-18",
          result: "Niggling Injury",
          description:
            "The spellcaster’s injury just never quite heals, and they are forced to use herbs, ointments, or minor magic to keep the pain at bay. The spellcaster must spend 30gc on these treatments before each game or start each game at -3 Health. This injury can be received twice – in which case the payment increases to 40gc and the penalty to -4 Health. Any further Niggling Injury results must be re-rolled. A 10gc discount applies to these payments for each apothecary in the warband.",
        },
        {
          roll: "19",
          result: "Smashed Jaw",
          description:
            "The spellcaster suffered a broken jaw that never quite healed properly. The spellcaster has some difficulty with speaking, which affects their ability to lead their warband. Whenever this figure activates, it can only activate a maximum of two soldiers in its phase (instead of the normal three). So, an apprentice with a Smashed Jaw could only activate two soldiers in the Apprentice phase. If this injury is received a second time, the number of soldiers that may also activate in the phase is decreased to one. Any further Smashed Jaw results must be re-rolled.",
        },
        {
          roll: "20",
          result: "Lost Eye",
          description:
            "One of the figure’s eyes has been damaged and rendered useless. It suffers a -1 to its Combat Roll whenever it is the target of a shooting attack. If a spellcaster receives two Lost Eye permanent injuries, they are effectively blind. If the warband’s wizard fails to successfully cast Miraculous Cure (page 126) to remove permanent injuries (note that a wizard may cast this spell on themselves or on their apprentice) in the following Out of Game spells step of the post-game sequence, the spellcaster must retire from exploring Frostgrave and is considered ‘dead’ for game purposes.",
        },
      ],
      experienceTable: <ExperienceTableEntry[]>[
        {
          experience: 5,
          achievement:
            "For each failed attempt to cast a spell that results in either the wizard or apprentice suffereing damage.",
        },
        {
          experience: 10,
          achievement:
            "For each spell successfuly cast by either the wizard or apprentice.*",
        },
        {
          experience: 40,
          achievement: "For each game in which the wizard participates.",
        },
        {
          experience: 40,
          achievement:
            "For each treasure token secured by the wizard or their warband.",
        },
        {
          experience: 5,
          achievement:
            "For each uncontrolled creature killed by the wizard or their warband.**",
        },
      ],
    },
  }),
  getters: {
    getSpellFailureTableData(state): SpellSuccessAndFailure[] {
      return state.rules.spellFailureTable || [];
    },
    getSoldierSurvivalTableData(state): DeathAndInjuryEntry[] {
      return state.rules.soldierSurvivalTable || [];
    },
    getSpellcasterSurvivalTableData(state): DeathAndInjuryEntry[] {
      return state.rules.spellcasterSurvivalTable || [];
    },
    getPermanentInjuryTableData(state): DeathAndInjuryEntry[] {
      return state.rules.permanentInjuryTable || [];
    },
    getExperienceTableData(state): ExperienceTableEntry[] {
      return state.rules.experienceTable || [];
    },
  },
});
