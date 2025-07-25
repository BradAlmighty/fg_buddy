import { defineStore } from 'pinia';

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
  id: WizardSchoolCode;
  description: string;
  icon: string;
  aligned: WizardSchoolCode[];
  neutral: WizardSchoolCode[];
  opposed: WizardSchoolCode;
}


interface WizardStoreState {
    wizardTypes: WizardType[];
}
interface WizardSchool {
    id: WizardSchoolCode;
    name: string;
}

export const useWizardStore = defineStore('wizardStore', {
    state: (): WizardStoreState => ({
        wizardTypes: [
            {
                id: 'CH',
                description: 'Masters of time magic, able to manipulate the flow of time.',
                aligned: ['EL', 'NE', 'SO'],
                neutral: ['IL', 'SI', 'SU', 'TH', 'WI'],
                opposed: 'EN',
                icon: '', // Replace with actual icon path
            },
            {
                id: 'EL',
                description: 'Elemental mages who command the forces of nature.',
                aligned: ['CH', 'EN', 'SU'],
                neutral: ['NE', 'SI', 'SO', 'TH', 'WI'],
                opposed: 'IL',
                icon: '', // Replace with actual icon path
            },
            {
                id: 'EN',
                description: 'Enchanters who imbue objects with magical properties.',
                aligned: ['EL', 'SI', 'WI'],
                neutral: ['IL', 'NE', 'SO', 'SU', 'TH'],
                opposed: 'CH',
                icon: '', // Replace with actual icon path
            },
            {
                id: 'IL',
                description: 'Illusionists who create powerful illusions to deceive their foes.',
                aligned: ['SI', 'SO', 'TH'],
                neutral: ['CH', 'EN', 'NE', 'SU', 'WI'],
                opposed: 'EL',
                icon: '', // Replace with actual icon path
            },
            {
                id: 'NE',
                description: 'Necromancers who command the forces of death and the undead.',
                aligned: ['CH', 'SU', 'WI'],
                neutral: ['EL', 'EN', 'IL', 'SI', 'SO'],
                opposed: 'TH',
                icon: '', // Replace with actual icon path
            },
            {
                id: 'SI',
                description: 'Sigilists who use runes and symbols to cast powerful spells.',
                aligned: ['EN', 'IL', 'TH'],
                neutral: ['CH', 'EN', 'NE', 'SO', 'WI'],
                opposed: 'EL',
                icon: '', // Replace with actual icon path
            },
            {
                id: 'SO',
                description: 'Soothsayers who predict the future and manipulate fate.',
                aligned: ['CH', 'IL', 'TH'],
                neutral: ['EL', 'EN', 'NE', 'SI', 'SU'],
                opposed: 'WI',
                icon: '', // Replace with actual icon path
            },
            {
                id: 'SU',
                description: 'Summoners who call forth creatures from other realms.',
                aligned: ['EL', 'NE', 'WI'],
                neutral: ['CH', 'EN', 'IL', 'SO', 'TH'],
                opposed: 'EN',
                icon: '', // Replace with actual icon path
            },
            {
                id: 'TH',
                description: 'Thaumaturges who perform miraculous feats of magic.',
                aligned: ['IL', 'SI', 'SO'],
                neutral: ['CH', 'EL', 'EN', 'SU', 'WI'],
                opposed: 'NE',
                icon: '', // Replace with actual icon path
            },
            {
                id: 'WI',
                description: "Witches who wield nature's magic and commune with spirits.",
                aligned: ['EN', 'NE', 'SU'],
                neutral: ['CH', 'EL', 'IL', 'SI', 'TH'],
                opposed: 'SO',
                icon: '', // Replace with actual icon path
            },
        ],
    }),
    getters: {
        getWizardById: (state) => (id: string) =>
            state.wizardTypes.find(wizard => wizard.id === id),
        getWizardSchools: (state) => {
            let school: WizardSchool[] = [];
            state.wizardTypes.forEach(wizType => {
                school.push({
                    id: wizType.id as WizardSchoolCode,
                    name: WizardSchools[wizType.id as WizardSchoolCode],
                });
            });
            return school;
        },
        getWizardTypeBySchool: (state) => (school: WizardSchoolCode) => {
            return state.wizardTypes.find(wizard => wizard.id === school) || null
        },
        getAlignedSchools: (state) => (school: WizardSchoolCode) => {
            const wizard = state.wizardTypes.find(w => w.id === school);
            return wizard ? wizard.aligned: [] ;
        },
        getNeutralSchools: (state) => (school: WizardSchoolCode) => {
            const wizard = state.wizardTypes.find(w => w.id === school);
            return wizard ? wizard.neutral : [];
        },
        getOpposedSchool: (state) => (school: WizardSchoolCode) => {
            const wizard = state.wizardTypes.find(w => w.id === school);
            return wizard ? wizard.opposed : null ;
        },
    },
    actions: {
        addWizardType(wizard: WizardType) {
            this.wizardTypes.push(wizard);
        },
        removeWizardType(id: string) {
            this.wizardTypes = this.wizardTypes.filter(wizard => wizard.id !== id);
        },
    },
});