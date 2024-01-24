// src/models/FeatureFlag.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FeatureFlag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    key: string;

    @Column()
    isActive: boolean;
}