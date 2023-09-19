
export interface Order {
    id: number,
    clientId: number,
    date: string,
    status: 'CONFIRMED' | 'CANCELLED' | 'FINISHED'
} 