import * as mongoose from 'mongoose';

export const CaseSchema = new mongoose.Schema({
  name: String,
  clients: Number,
  description: String
});