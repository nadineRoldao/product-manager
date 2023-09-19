
export interface Order {
    id: number,
    clientId: number,
    createdAt: string,
    status: 'CONFIRMED' | 'CANCELLED' | 'FINISHED'
} 