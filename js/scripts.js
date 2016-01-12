//backbone model

//var DropDown = Backbone.Model.extend({
//
//});
//var DropDownCollection = Backbone.Collection.extend({
//    model: DropDown
//});



//DropDownItemView = Backbone.Marionette.ItemView.extend({
//    tagName: "li",
//    template: "#dropdown-item-template"
//});
//
//DropDownMenuView = Backbone.Marionette.CompositeView.extend({
//    itemView: DropDownItemView,
//    // specify a jQuery selector to put the itemView instances in to
//    itemViewContainer: "ul",
//    template: "#drop-down-menu-template"
//});


//ddcollection = new DropDownCollection();
//
//var DropDownCollectionView = Backbone.View.extend({
//    initialize: function(){
//        var self = this;
//        this._dropdownViews = [];
//
//        this.collection.each(function(dropdown) {
//            that._dropdownViews.push(new UpdatingDropDownView({
//                model : dropdown,
//                tagName : 'li'
//            }));
//        });
//    },
//
//    render : function() {
//        var that = this;
//        // Clear out this element.
//        $(this.el).empty();
//
//        // Render each sub-view and append it to the parent view's element.
//        _(this._dropdownViews).each(function(dv) {
//            $(that.el).append(dv.render().el);
//        });
//    }
//});

//var DropDownView = Backbone.View.extend({
//    model: DropDown,
//    tagName: 'li',
//
//    initialize: function(){
//        this.template = _.template('#dropdown');
//    },
//
//    events: {
//        //'select <dom object>': '<function>',
//
//
//    },
//
//    render: function(){
//        var self = this;
//        this.$el.html(this.template(this.model.toJSON()));
//        return this;
//    }
//});
//var dropdowncollection = new DropDownCollection();


var SoccerSeasons = Backbone.Model.extend({

});

var SoccerSeasonsCollection = Backbone.Collection.extend({
    model: SoccerSeasons
});

var soccerseasonscollection = new SoccerSeasonsCollection();


// soccerseasons view object
var SoccerSeasonsView = Backbone.View.extend({

    model: new SoccerSeasons(),
    tagName: 'tr',

    initialize: function(){
        //require can be used here to use external template
       this.template = _.template($('.soccerseasons-list-template').html());

    },



    events: {
        //'click .edit-soccerseasons': 'edit',
        //'click .update-soccerseasons': 'update',
        //'click .cancel': 'cancel',
        //'click .delete-soccerseasons': 'delete'

    },

    edit: function(){
        //$('.edit-soccerseasons').hide();
        //$('.delete-soccerseasons').hide();
        //this.$('.update-soccerseasons').show();
        //this.$('.cancel').show();

        //var caption = this.$('.caption').html();
        //var currentMatchday = this.$('.currentMatchday').html();
        //var id = this.$('.id').html();
        //var lastUpdated = this.$('.lastUpdated').html();

    },

    'update': function(){

        //this.model.set('caption', $('.caption-update').val());
        //this.model.set('currentMatchday', $('.currentMatchday-update').val());
        //this.model.set('id', $('.id-update').val());
        //this.model.set('lastUpdated', $('.lastUpdated-update').val());
    },

    'cancel': function(){
        soccerseasonscollectionView.render();
    },

    'delete': function(){
        this.model.destroy();
    },

    render: function(){
        var self = this;
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});
// end soccerseasonsview

//view all soccerseasons
var SoccerSeasonsCollectionView = Backbone.View.extend({
    model: soccerseasonscollection,
    el: $('.soccerseasons-list'),

    initialize: function(){

        var self = this;

        this.model.on('add', this.render, this);

        //this.model.on('change', function(){
        //    setTimeout(function(){
        //        self.render();
        //    }, 30);
        //}, this);

        //this.model.on('remove', this.render, this);
    },

    render: function(){

        var self = this;

        this.$el.html('');
        _.each(this.model.toArray(), function(soccerseasons){
            self.$el.append((new SoccerSeasonsView({model: soccerseasons})).render().$el);
        });

        return this;

    }
});

//var DropdownItem = Marionette.ItemView.extend({
//    template: "#dropdown-item"
//});
//
//var DropdownView = Marionette.CompositeView.extend({
//    template: "#dropdown-collection",
//    className: 'dropdown',
//    itemView: DropdownItem,
//    itemViewContainer: '#dropdown-items'
//});
//


var soccerseasonscollectionView  = new SoccerSeasonsCollectionView();
//var dropList = [];


$(document).ready(function(){

        //this should probably be moved elsewhere
    Backbone.ajax({
        headers: {'X-Auth-Token': "4fd79396a3c14c06bdbc43f4925af671"},
        type: 'GET',
        dataType: "json",
        url: 'http://api.football-data.org/v1/soccerseasons',
        data: "",
        success: function (val) {
            soccerseasonscollection.add(val);  //or reset

            _.each(soccerseasonscollection.toJSON(), function (item) {

                //console.log(item.caption);
                //console.log(item._links.self.href);


                var soccerseasons = new SoccerSeasons({
                    caption: item.caption,
                    currentMatchday: item.currentMatchday,
                    league: item.league,
                    id: item.id,
                    lastUpdated: item.lastUpdated,
                    year: item.year,
                    numberOfGames: item.numberOfGames,
                    numberOfTeams: item.numberOfTeams
                });

                soccerseasonscollection.add(soccerseasons);

                //dropList.push(item.caption);

            });
        }
    });

});