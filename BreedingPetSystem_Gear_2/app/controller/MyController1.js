/*
 * File: app/controller/MyController1.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */
var counter = 0;
var heart;
Ext.define('MyApp.controller.MyController1', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mybutton3: 'button#mybutton3',
            mybutton2: 'button#mybutton2',
            mynumberfield: 'numberfield#mynumberfield'         	
            	
        },

        control: {
            "button#mybutton2": {
                tap: 'onMybutton2Tap'
            }
        }
    },

    onMybutton2Tap: function(button, e, eOpts) {
                         var me = this;

                    	tizen.humanactivitymonitor.start("HRM", function onSuccess(hrm){
                    		counter++;
                    		

                    		if(counter<200){
                    			me.getMynumberfield().setValue(hrm.heartRate);
                        		me.getMybutton2().setBadgeText("starting");

                    		}


                    		if(counter>200)
                    		{
                    			counter = 0;
                    			me.getMybutton2().setBadgeText("stop");
                    			tizen.humanactivitymonitor.stop("HRM");
                    			heart = me.getMynumberfield().getValue();
                    		}

                    	},
                    	function onError(err){
                    		alert(err.message);
                    	});
    }

});