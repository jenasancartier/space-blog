import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },

    saveBlog1() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        title: this.get('title'),
        subtitle: this.get('subtitle'),
        body: this.get('body'),
        image: this.get('image'),
      };
      this.set('addNewBlog', false);
      this.sendAction('saveBlog2', params);
    }
  }
});
