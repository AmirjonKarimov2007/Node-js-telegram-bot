import config from "../data/config.js";


export function isSuperAdmin(ctx, next) {
  if (String(ctx.from.id) === config.SUPERADMIN) {
    return next();
  }
}