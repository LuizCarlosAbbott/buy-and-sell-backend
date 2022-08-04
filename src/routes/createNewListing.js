import * as admin from 'firebase-admin';
import { v4 } from "uuid";
import { db } from "../database";

export const createNewListingRoute = {
  method: 'POST',
  path: '/api/listings',
  handler: async (req, h) => {
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = user.user_id;
    const id = v4();
    const { name = '', description = '', price = '' } = req.payload;
    const views = 0;

    await db.query(`
      INSERT INTO listings (id, name, description, price, user_id, views)
        VALUES (?, ?, ?, ?, ?, ?);
      `,
      [id, name, description, price, userId, views]
    );

    return { id, name, description, price, user_id: userId, views };
  }
}