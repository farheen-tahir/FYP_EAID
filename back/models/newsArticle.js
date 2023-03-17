const mongoose = require('mongoose');

const newsArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  pubDate: Date
});

module.exports = mongoose.model('NewsArticle', newsArticleSchema);