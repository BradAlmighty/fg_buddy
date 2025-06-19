export const WizardSchools = {
    CH: "Chronomancer",
    EL: "Elementalist",
    EN: "Enchanter",
    IL: "Illusionist",
    NE: "Necromancer",
    SI: "Sigilist",
    SO: "Soothsayer",
    SU: "Summoner",
    TH: "Thaumaturge",
    WI: "Witch",
} as const;
export type WizardSchoolCode = keyof typeof WizardSchools;
export type WizardSchoolName = (typeof WizardSchools)[WizardSchoolCode];

export interface WizardType {
    "id": WizardSchoolCode;
    "description": string;
    "icon": string;
    "aligned": WizardSchoolCode[];
    "neutral": WizardSchoolCode[];
    "opposed": WizardSchoolCode;
}