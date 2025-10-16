import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert("contacts", {
      name: args.name,
      email: args.email,
      subject: args.subject,
      message: args.message,
      status: "new",
    });
    return contactId;
  },
});
