define([
    'swiper',
    'backbone',
    'tpl!./template.html',
    'underscore',
    'jquery',
    'q'
], function (Swiper, Backbone, template,_,$,Q) {
    return Backbone.View.extend({
        template:template,
        tagName: "div",
        className: "activity-choose-item",
        events:{
            "click .operation .vote":"handleClickVote"
        },
        initialize: function (options) {
            var self = this;

            this.on({
                "loading": function () {
                    self.setViewState('loading');
                },
                "error": function () {
                    self.setViewState('error');
                },
                "emptyview": function () {
                    self.setViewState('emptyview');
                },
                'complete': function () {
                    self.setViewState('complete');
                },
                "success": function () {
                    self.setViewState('success');
                }
            });
            this.listenTo(this.model,"change:likes",this.updateLikesNumber);
            this.preloadImageResource();
        },
        preloadImageResource: function () {
            _.each(this.model.pics, function (item) {
                var image = new Image();

                image.src = item;
            });
        },
        setViewState: function (state) {
            switch (state) {
                case "loading":
                    break;
                case "error":
                    break;
                case "emptyview":
                    break;
                case "complete":
                    break;
                case "success":
                    break;
                default:
                    break;
            }
            return this;
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.initSwiper();

            return this;
        },
        initSwiper: function () {
            var mySwiper;

            setTimeout(function () {
                mySwiper = new Swiper(this.$('.swiper-container'), {
                    speed: 400,
                    pagination: this.$(".swiper-pagination"),
                    paginationClickable: true
                });
            }.bind(this),0)
        },
        updateLikesNumber: function () {
            this.$(".ui.vote .label").text(this.model.get("likes"));
        },
        handleClickVote: function () {
            this.voteCheck().then(function () {
                this.launchVote();
            }.bind(this), function () {
                console.log("what are fucking doing ? cheat me?");
            })
        },
        voteCheck: function () {
            var q = Q.defer();
            var key = "vote_"+this.model.get("name");

            if(window.localStorage.getItem(key)||window.sessionStorage.getItem(key)||new RegExp(key+"=(.+)").test(window.document.cookie)){
                q.reject();
            }else{
                return this.judgeInsertDatabase();
            }

            return q.promise;
        },
        launchVote: function () {
            var currentVote = this.model.get("likes");

            currentVote++;
            this.showAddOneAnimation();
            setTimeout(function () {
                this.hideAddOneAnimation();
            }.bind(this),1200);
            this.$(".ui.button.vote").addClass("loading");
            this.model.save({
                likes:currentVote
            },{
                success: function () {
                    this.writeAlreadyVoteInfo();
                    this.$(".ui.button.vote").removeClass("loading");
                }.bind(this),
                error: function () {
                    this.$(".ui.button.vote").removeClass("loading");
                }.bind(this)
            });
        },
        showAddOneAnimation: function () {
            this.$(".vote-sign").addClass("show");
        },
        hideAddOneAnimation: function () {
            this.$(".vote-sign").removeClass("show");
        },
        getCurrentDatabase: function () {
            var dataBase;

            if (window.openDatabase) {
                dataBase = window.openDatabase("vote", "1.0", "ͶƱ��", 1024 * 1024, function () {
                });
                return dataBase;
            }

            return null;
        },
        writeAlreadyVoteInfo: function () {
            var timesteamp = Date.now();
            var key = "vote_"+this.model.get("name");
            var database;

            window.localStorage.setItem(key,timesteamp);
            window.sessionStorage.setItem(key,timesteamp);
            window.document.cookie = window.document.cookie+";"+key+"="+timesteamp;
            database = this.getCurrentDatabase();
            if(database){
                database.transaction(function (trans) {
                    trans.executeSql("insert into Votes(uName,vote) values(?,?) ", [key, timesteamp], function (ts, data) {
                        console.log("insert ok");
                    }, function (ts, message) {
                        alert(message);
                    });
                });
            }
        },
        judgeInsertDatabase: function () {
            var q = Q.defer();
            var database = this.getCurrentDatabase();
            var key = "vote_"+this.model.get("name");


            if(database){
                database.transaction(function (trans) {
                    trans.executeSql("select * from  Votes where uName= ?", [key], function (ts, data) {
                        if(data.rows.length>1){
                            q.reject();
                        }else{
                            q.resolve();
                        }
                    }, function (ts, message) {
                        alert(message);
                    });
                });
            }else{
                q.resolve(1);
            }


            return q.promise;
        },
        _test: function () {
            //db.transaction(function(trans){
            //    trans.executeSql("delete from Votes where uName = ?",['vote_2016_unknown'])
            //
            //})
        }
    });
})