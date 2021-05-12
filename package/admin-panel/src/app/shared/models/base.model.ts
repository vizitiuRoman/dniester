export class BaseModel<ID> {
    id!: ID;
    createdAt!: Date;
    updatedAt!: Date;
}

export type Create<T extends BaseModel<ID>, ID> = Omit<
    T,
    'id' | 'createdAt' | 'updatedAt'
>;
