import JOI from 'joi';

export const createSchema = JOI.object({
  name: JOI.string().required(),
  content: JOI.string().required(),
  status: JOI.string().required(),
  userId: JOI.number().required(),});

export const updateSchema = JOI.object({
  name: JOI.string().required(),
  editedContent: JOI.string().required(),
  status: JOI.string().required(),
  owner: JOI.number().required(),});
  
export const updateSaleSchema = JOI.object({
  status: JOI.string().required(),
});
