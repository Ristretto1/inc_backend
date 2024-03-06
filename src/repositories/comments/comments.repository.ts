import { ObjectId } from 'mongodb';
import { commentCollection } from '../../db/db';
import { ICommentDB } from '../../models/db/db.types';
import { ICommentUpdateModel } from '../../models/comments/models.types';

export class CommentRepository {
  static async removeCommentById(id: string): Promise<boolean> {
    const res = await commentCollection.deleteOne({ _id: new ObjectId(id) });
    return !!res.deletedCount;
  }
  static async updateCommentById(id: string, data: ICommentUpdateModel): Promise<boolean> {
    const res = await commentCollection.updateOne({ _id: new ObjectId(id) }, data);
    return !!res.matchedCount;
  }
}