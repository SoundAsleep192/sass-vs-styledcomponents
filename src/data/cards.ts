interface Card {
    id: number;
    bgColor: string;
}

export const cards: Card[] = new Array(40)
    .fill(0)
    .map((_, i) => ({id: i, bgColor: "#000000".replace(/0/g,() => (~~(Math.random()*16)).toString(16))}));