import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  useID: String,
  name: String,
  title: String,
  desc: String,
  imageUrl: String,
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;