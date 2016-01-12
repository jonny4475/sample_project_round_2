//try to implement as in tutorial

//define(['underscore', 'backbone'], function(_, Backbone) {
//    var SoccerSeasonModel = Backbone.Model.extend({
//
//        // Default attributes
//        defaults: {
//
//            caption: item.caption,
//            currentMatchday: item.currentMatchday,
//            league: item.league,
//            id: item.id,
//            lastUpdated: item.lastUpdated,
//            year: item.year,
//            numberOfGames: item.numberOfGames,
//            numberOfTeams: item.numberOfTeams
//        },
//
//        initialize: function(item) {
//
//                this.set({"caption": item.caption});
//                this.set({"currentMatchday": item.currentMatchday});
//                this.set({"league": item.league});
//                this.set({"id": item.id});
//                this.set({"lastUpdated": item.lastUpdated});
//                this.set({"year": item.year});
//                this.set({"numberOfGames": item.numberOfGames});
//                this.set({"numberOfTeams": item.numberOfTeams});
//
//        },
//
//        // Remove this from *localStorage* and delete its view.
//        clear: function() {
//            this.destroy();
//            this.view.remove();
//        }
//
//    });
//    return SoccerSeasonModel;
//});

//var SoccerSeasonModel = Backbone.Model.extend({
//
//        // Default attributes
//        defaults: {
//
//            caption: item.caption,
//            currentMatchday: item.currentMatchday,
//            league: item.league,
//            id: item.id,
//            lastUpdated: item.lastUpdated,
//            year: item.year,
//            numberOfGames: item.numberOfGames,
//            numberOfTeams: item.numberOfTeams
//        },
//
//        initialize: function(item) {
//
//                this.set({"caption": item.caption});
//                this.set({"currentMatchday": item.currentMatchday});
//                this.set({"league": item.league});
//                this.set({"id": item.id});
//                this.set({"lastUpdated": item.lastUpdated});
//                this.set({"year": item.year});
//                this.set({"numberOfGames": item.numberOfGames});
//                this.set({"numberOfTeams": item.numberOfTeams});
//
//        },
//
//        // Remove this from *localStorage* and delete its view.
//        clear: function() {
//            this.destroy();
//            this.view.remove();
//        }
//
//    });