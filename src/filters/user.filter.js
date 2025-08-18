import User from "../database/models/users.model.js";

export async function isUser(ctx, next) {
  const user = await User.findOne({ user_id: ctx.from.id });
  if (!user) {
    return next();
  }
}
