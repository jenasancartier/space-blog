import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog');
  },

  actions: {
    destroyBlog(blog) {
      // debugger;
      blog.destroyRecord();
      this.transitionTo('index');
    }
  }
});
