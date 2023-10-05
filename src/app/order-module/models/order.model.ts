
export interface Order {
    id: number,
    clientId: number,
    date: string,
    status: 'CREATED' | 'CANCELLED' | 'FINISHED'
} 