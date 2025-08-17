import { Schema, Types,model } from "mongoose";

const UsersSchema = new Schema({
    user_id: { type: Number, unique: true, required: true },
    firstname: { type: String, required: true },
    username: { type: String, required: false, unique: true },
    phoneNumber: { type: String, unique: true, required: false },
    is_premium: { type: Boolean, default: false },
    is_blocked: { type: Boolean, default: false }

}, { timestamps: true });

const User = model('Users', UsersSchema);
export default User;