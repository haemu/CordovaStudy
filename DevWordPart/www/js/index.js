/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        // document.addEventListener('backbutton', this.onBackKeyDown, false);
        if ($('#UserPicture').attr('src') === "") {
            $('#UserPicture').hide();
        }
        if ($('#galleryPicture').attr('src') === "") {
            $('#galleryPicture').hide();
        }

        console.log("navigator.camera");
        var picture = new Picture();
        $('#TakePicture').on('click', function(event) {
            /* Act on the event */
            picture.launchCamera();
        });

        $('#ChoosePicture').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            picture.openGallery();
        });

        var media = new PlayMedia();
        var playItem = null;
        $('#OpenMedia').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            if (null === playItem) {
                playItem = media.launchMedia();
                console.log(playItem);
            }
        });

        // $('#PauseMedia').on('click', function(event) {
        //     event.preventDefault();
        //     /* Act on the event */
        //     media.pauseMedia(playItem);
        // });

        $('#StopMedia').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            media.stopMedia(playItem);
            playItem = null;
        });

        $('#PlayMovie').on('click', function(event) {
            /* Act on the event */
            media.launchPlayer();
        });

        var fileOperation = new FileOperation();
        $('#UploadFile').on('click', function(event) {
            /* Act on the event */
            fileOperation.fileUpload();
        });


        $('#DownloadFile').on('click', function(event) {
            /* Act on the event */
            fileOperation.fileDownload();
        });

        $("#Register").on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            if (cordova.platformId === 'android') {
                window.location = "test.html";
            } else if (cordova.platformId === 'browser') {
                window.location.href = "test.html";
            }
        });

        $("#FileOpen").on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    },
    // backbutton
    onBackKeyDown: function() {
        if (cordova.platformId === 'android') {
            window.location = "index.html";
        } else if (cordova.platformId === 'browser') {
            window.location.href = "index.html";
        }
    }

};

app.initialize();

