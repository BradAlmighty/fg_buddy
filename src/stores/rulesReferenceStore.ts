import { defineStore } from 'pinia';

export interface RuleReference {
    id: string;
    title: string;
    description: string;
    section: string;
}

interface RulesReferenceState {
    rules: RuleReference[];
    isLoaded: boolean;
}

interface SpellSuccessAndFailure {
    failAmount: number;
    damageTaken: number;
}

// Death and Injury table data
// Experience table data

export const useRulesReferenceStore = defineStore('rulesReference', {
    state: (): RulesReferenceState => ({
        rules: [],
        isLoaded: false,
    }),
    actions: {
        setRules(rules: RuleReference[]) {
            this.rules = rules;
            this.isLoaded = true;
        },
        addRule(rule: RuleReference) {
            this.rules.push(rule);
        },
        getRuleById(id: string): RuleReference | undefined {
            return this.rules.find(rule => rule.id === id);
        },
        clearRules() {
            this.rules = [];
            this.isLoaded = false;
        },
    },
    getters: {
        rulesBySection: (state) => {
            return (section: string) =>
                state.rules.filter(rule => rule.section === section);
        },
        allSections: (state) => {
            return Array.from(new Set(state.rules.map(rule => rule.section)));
        },
    },
});