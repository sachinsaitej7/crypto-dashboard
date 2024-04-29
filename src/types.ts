
export interface Coin { 
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
    data: {
        price: number;
        sparkline: string;
        price_change_percentage_24h: {
            usd: number;
        };
        market_cap: string;
    };
}

export type TimePeriod = "1D" | "1W" | "1M" | "6M" | "1Y" ;

