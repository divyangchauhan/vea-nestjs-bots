import { Entity, PrimaryGeneratedColumn, Column, AfterLoad, BeforeInsert, BeforeUpdate, Index } from 'typeorm';
import { Abi } from 'viem';

@Entity()
export class VeaContract {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id?: number;

  @Column('character varying', { name: 'name', nullable: false })
  name: string;

  // TODO: create a custom graphql scalar for ethereum address
  @Column('character varying', { name: 'address', nullable: false })
  address: `0x${string}`;

  @Column('jsonb', { name: 'abi', nullable: false, default: {} })
  abi: Abi;

  // create a custom graphql scalar for bigint
  @Column('bigint', { name: 'deployment_block_number', nullable: false })
  deploymentBlockNumber: bigint;

  // create a custom graphql scalar for bigint
  @Column('bigint', { name: 'last_processed_block', nullable: false })
  lastProcessedBlock: bigint;

  @AfterLoad()
  @BeforeInsert()
  @BeforeUpdate()
  convertToBigInt?() {
    this.deploymentBlockNumber = BigInt(this.deploymentBlockNumber);
    this.lastProcessedBlock = BigInt(this.lastProcessedBlock);
  }
}
