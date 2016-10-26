import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    }
  }
});
