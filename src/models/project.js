import { connect } from '@/db/config/db';

class Project {
  static async collection() {
    const db = await connect();
    return db.collection('ListProjects');
  }

  static async getAll() {
    const collection = await this.collection();
    return collection.find({}).toArray();
  }

  static async findBySlug(slug) {
    const collection = await this.collection();
    return collection.findOne({ slug });
  }

  static async create(project) {
    const collection = await this.collection();
    const result = await collection.insertOne(project);
    return result.insertedId;
  }

  static async updateBySlug(slug, updateData) {
    const collection = await this.collection();
    const result = await collection.updateOne({ slug }, { $set: updateData });
    return result.matchedCount;
  }

  static async deleteBySlug(slug) {
    const collection = await this.collection();
    const result = await collection.deleteOne({ slug });
    return result.deletedCount;
  }
}

export default Project;
