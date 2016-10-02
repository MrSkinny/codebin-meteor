import { Mongo } from 'meteor/mongo';

const Bins = new Mongo.Collection('bins');

Meteor.methods({
  'bins.insert': function () {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  }
});

export { Bins };
