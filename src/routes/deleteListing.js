import * as admin from 'firebase-admin';
import { db } from "../database";

export const deleteListingRoute = {
  method: 'DELETE',
  path: '/api/listings/{id}',
  handler: async (req, h) => {
    const { id } = req.params;
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = user.uid;

    await db.query(
      'DELETE FROM listings WHERE id=? and user_id=?',
      [id, userId]
    );

    return { message: 'Success!' };
  }
}