import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';


Meteor.subscribe('dadosImoveis');

console.log(Imoveis.find().count());

Template.main.helpers({
  imoveis() {
    return Imoveis.find();
  },
});
