(function (app, $, invertebrate, _) {
  'use strict';

  function ItemsOfInterestModel(selectedItemModel) {
    if (!(this instanceof app.ItemsOfInterestModel)) {
      return new app.ItemsOfInterestModel(selectedItemModel);
    }

    var that = this,
        _selectedItemModel = null,
        _itemsOfInterest = { selectedItem: '',
          pinnedItems: [] };

    this.updateEventUri = 'update://ItemsOfInterestModel/';

    this.isItemOfInterest = function (id) {
      return (_itemsOfInterest.pinnedItems.indexOf(id)) !== -1;
    };

    this.getItemsOfInterest = function () {
      return _itemsOfInterest;
    };

    this.addItemOfInterest = function (id) {
      if (!id) {
        throw 'id not supplied';
      }

      if (_.find(that.getItemsOfInterest().pinnedItems, function (idOfPinnedItem) {
        return idOfPinnedItem === id;
      })) {
        return;
      }

      if (_selectedItemModel.getSelectedItemId() === id) {
        _selectedItemModel.setSelectedItemId(null, {silent: true});
        _itemsOfInterest.selectedItem = null;
      }

      _itemsOfInterest.pinnedItems.push(id);

      $.publish(that.updateEventUri);
    };

    this.removeItemOfInterest = function (id) {
      if (!id) {
        throw 'id not supplied';
      }

      _itemsOfInterest.pinnedItems = _.reject(_itemsOfInterest.pinnedItems, function (idOfPinnedItem) {
        return idOfPinnedItem === id;
      });

      $.publish(that.updateEventUri, { action: 'removal', removedItemId: id});
    };

    this.isPinned = function (id) {
      return _.any(_itemsOfInterest.pinnedItems, function (i) {
        return i === id;
      });
    };

    function init() {

      if (!selectedItemModel) {
        throw 'selectedItemModel not supplied.';
      }

      _selectedItemModel = selectedItemModel;

      return that;
    }

    return init();
  }

  app.ItemsOfInterestModel = ItemsOfInterestModel;
  invertebrate.Model.isExtendedBy(app.ItemsOfInterestModel);

}(wizerati, $, invertebrate, _));
