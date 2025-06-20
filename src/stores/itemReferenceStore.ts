import { defineStore } from 'pinia';

export interface ItemReference {
    id: string;
    name: string;
    description: string;
    cost: number;
    weight?: number;
    type: 'weapon' | 'armor' | 'equipment' | 'consumable' | 'magic' | string;
    // Add other relevant fields as needed
}

export interface GeneralArmsAndArmorItem {
    id: string; // Optional ID for general items
    name: string;
    type: 'weapon' | 'armor';
    damageModifier?: number;
    armourModifier?: number;
    maximumRange?: number;
    notes?: string;
}

// Potions table data

// Treasures table data

// magic weapon and armor table data

interface ItemReferenceState {
    items: {
        generalArmsAndArmorItems: GeneralArmsAndArmorItem[];
    };
}

export const useItemReferenceStore = defineStore('itemReference', {
    state: (): ItemReferenceState => ({
        items: {
            generalArmsAndArmorItems: [
                {
                    id: 'FGCBI0001',
                    name: 'Dagger',
                    type: 'weapon',
                    damageModifier: -1,
                    notes: 'First dagger does not take up an item slot'
                },
                {
                    id: 'FGCBI0002',
                    name: 'Hand Weapon',
                    type: 'weapon',
                    damageModifier: 0,
                },
                {
                    id: 'FGCBI0003',
                    name: 'Two-handed Weapon',
                    type: 'weapon',
                    damageModifier: 2,
                    notes: 'Takes up two item slots.'
                },
                {
                    id: 'FGCBI0004',
                    name: 'Staff',
                    type: 'weapon',
                    damageModifier: -1,
                    notes: '-1 damage modifier to opponents in melee combat.',
                },
                {
                    id: 'FGCBI0005',
                    name: 'Bow',
                    type: 'weapon',
                    damageModifier: 0,
                    maximumRange: 24,
                    notes: 'Load and fire as a single action; must have a quiver.'
                },
                {
                    id: 'FGCBI0006',
                    name: 'Crossbow',
                    type: 'weapon',
                    damageModifier: 2,
                    maximumRange: 24,
                    notes: 'Load and fire as seperate actions, may reload in place of movement; must have a quiver.'
                },
                {
                    id: 'FGCBI0007',
                    name: 'Unarmed',
                    type: 'weapon',
                    damageModifier: -2,
                    notes: '-2 Fight'
                },
                {
                    id: 'FGCBI0008',
                    name: 'Shield',
                    type: 'armor',
                    armourModifier: 1,
                    notes: 'May not be carried with a two-handed weapon or staff.'
                },
                {
                    id: 'FGCBI0009',
                    name: 'Light Armour',
                    type: 'armor',
                    armourModifier: 1,
                },
                {
                    id: 'FGCBI0010',
                    name: 'Heavy Armour',
                    type: 'armor',
                    armourModifier: 2,
                    notes: '-1 Move'
                }
            ] as GeneralArmsAndArmorItem[],
        },
    }),
    getters: {
        getAllItems: (state) => state.items,
        getGeneralArmsAndArmorItems: (state) => state.items.generalArmsAndArmorItems,
        getGeneralArmsAndArmorItemById: (state) => (id: string) =>
            state.items.generalArmsAndArmorItems.find(item => item.id === id),
    },
    actions: {
    },
});