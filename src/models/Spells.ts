export interface Spell {
    id: string;
    name: string;
    description: string;
    school: string; // WizardSchoolCode
    baseCast: number;
    category: string; // e.g., "Offensive", "Defensive", "Utility"
    icon: string; // Path to the icon image
    source: string; // e.g., "Core Rulebook", "Expansion Set",
    pageNumber: number; // Page number in the source book
}