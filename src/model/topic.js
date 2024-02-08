import mongoose, { Schema } from "mongoose";


const topicSchema = new Schema(
  {
   id:String,
   title:String,
   desc:String,
   img:String,
   pdf:File,

  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
