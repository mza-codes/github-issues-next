export const genTitle = (prefix: string) => `${prefix} | mFlux`;

export function generatePages(s: number) {
    let arr: any[] = [];
    if (s >= 10) {
        arr.push(1, 2, 3, null, s - 1, s - 2);
        for (let i = s; i <= s + 4; i++) {
            arr.push(i);
        }
    } else {
        for (let i = 1; i <= s + 4; i++) {
            arr.push(i);
        }
    }
    return arr;
}

export function genRandom(limit: number) {
    return Math.floor(Math.random() * limit) + 1;
}
