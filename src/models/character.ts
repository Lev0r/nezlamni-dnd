export interface Character {
    name : string;
    age: number;
    race: string;
    class: string;
    level: number;

    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;

    maxHp: number;
    curHp: number;
    tmpHp: number;

    profBonus: number;
}
