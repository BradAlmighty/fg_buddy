import { defineStore } from 'pinia';
import { WizardType, WizardSchools, WizardSchoolCode } from '../models/WizardSchools';

interface WizardStoreState {
    wizardTypes: WizardType[];
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