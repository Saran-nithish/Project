export interface FinancialAid {
    aidId: number;
    type: string;
    description: string;
    eligibilityCriteria: string;
    amount: number;
    deadline: Date;
}
