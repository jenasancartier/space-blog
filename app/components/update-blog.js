import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(blog) {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        title: this.get('title'),
        subtitle: this.get('subtitle'),
        body: this.get('body'),
        image: this.get('image'),
      };
      this.set('updateBlogForm', false);
      this.sendAction('update', blog, params);
    }
  }
});
