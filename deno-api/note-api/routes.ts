import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import db from "./mongodb.ts";

const notesCollection = db.collection("notes");

const getNotes = async (ctx: RouterContext) => {
  const notes = await notesCollection.find();
  ctx.response.body = notes;
};

const getNoteById = async (ctx: RouterContext) => {
  const { id } = ctx.params;
  const note = await notesCollection.findOne({ _id: { $oid: id } });
  ctx.response.body = note;
};

const createNodes = async (ctx: RouterContext) => {
  const { title, body } = await ctx.request.body();
  const newNote: any = {
    title,
    body,
    date: new Date(),
  };
  const id = await notesCollection.insertOne(newNote);

  newNote._id = id;
  ctx.response.status = 201;
  ctx.response.body = newNote;
};

const updateNote = async (ctx: RouterContext) => {
  const { id } = ctx.params;
  const { title, body } = await ctx.request.body();
  const { modifiedContent } = await notesCollection.updateOne(
    { _id: { $oid: id } },
    { $set: { title, body } },
  );

  if (!modifiedContent) {
    ctx.response.status = 404;
    ctx.response.body = { message: "Note not found" };
    return;
  }

  ctx.response.body = await notesCollection.findOne({ _id: { $oid: id } });
};

const deleteNote = async (ctx: RouterContext) => {
  const { id } = ctx.params;
  const count = await notesCollection.deleteOne({ _id: { $oid: id } });
  if (!count) {
    ctx.response.status = 404;
    ctx.response.body = { message: "Note not found" };
    return;
  }

  ctx.response.status = 204;
};

export { getNotes, createNodes, getNoteById, updateNote, deleteNote };
