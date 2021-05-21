import { Document } from 'mongoose';

export interface Cripto extends Document {
  readonly nombre: string;
  readonly alias: string;
  readonly valor: number;
  readonly forma_minar: string;
  readonly criptos: []
}
