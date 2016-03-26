define([
    'backbone',
    'common/model/avatar',
    'admin/member/avatar/view',
    'tpl!./template.html',
    'semanticUI'
], function (Backbone,Avatar,UploadAvatarView,template,semanticUI) {
    return Backbone.View.extend({
        template:template,
        render: function () {
            this.$el.html(this.template());
            //this.bindEvents();
            this.initUploadAvatarView();

            return this;
        },
        bindEvents: function () {
            this.initValidate();
            this.initUploadAvatarView();
            this.$(".ui.dropdown").dropdown();
        },
        initValidate: function () {

            this.$('.ui.form')
                .form({
                    fields: {
                        name     : 'empty',
                        gender   : 'empty',
                        username : 'empty',
                        password : ['minLength[6]', 'empty'],
                        skills   : ['minCount[2]', 'empty'],
                        terms    : 'checked'
                    }
                })
            ;
        },
        initUploadAvatarView: function () {
            new UploadAvatarView({
                el:this.$(".upload-warpper"),
                model:new Avatar(),
            }).render();
        },
        addMember: function () {
            //var formData = {};
            //
            //$( '#addBook div' ).children( 'input' ).each( function( i, el ) {
            //    if( $( el ).val() != '' )
            //    {
            //        if( el.id === 'keywords' ) {
            //            formData[ el.id ] = [];
            //            _.each( $( el ).val().split( ' ' ), function( keyword ) {
            //                formData[ el.id ].push({ 'keyword': keyword });
            //            });
            //        } else if( el.id === 'releaseDate' ) {
            //            formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
            //        } else {
            //            formData[ el.id ] = $( el ).val();
            //        }
            //    }
            //    // Clear input field value
            //    $( el ).val('');
            //});
            //
            //this.collection.create( formData );

        }
    })
})