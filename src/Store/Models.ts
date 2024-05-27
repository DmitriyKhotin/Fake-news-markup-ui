export interface IConversationItem {
    id: string;
    title: string;
    createTime: string;
    updateTime: string;
}

export interface IFakeItem {
    text: string;
    fakeProbability: number;
}

export interface IFeature {
    score: number;
    word: string;
}

export interface ICheckNews {
    features: IFeature[];
    prediction: number[];
}
