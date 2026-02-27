// src/models/User.ts

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

// Example of a basic User database operations
const db: User[] = []; // Simulated in-memory database

export const createUser = (user: User): User => {
    db.push(user);
    return user;
};

export const findUserById = (id: number): User | undefined => {
    return db.find(user => user.id === id);
};

export const updateUser = (id: number, updatedInfo: Partial<User>): User | undefined => {
    const user = findUserById(id);
    if (user) {
        Object.assign(user, updatedInfo);
        return user;
    }
    return undefined;
};

export const deleteUser = (id: number): boolean => {
    const index = db.findIndex(user => user.id === id);
    if (index !== -1) {
        db.splice(index, 1);
        return true;
    }
    return false;
};
