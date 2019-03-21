$(window).ready(function(){

		setTimeout(function(){	
	
			if(!$('.skill-progress').hasClass('circular-active')){
				$('.first-number').css('display','none');
				$('.first-circle').css('display','none');
				$('.skill-progress').addClass('circular-active');
				// progressbar.js@1.0.0 version is used
				// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
				var circular1 = new ProgressBar.Circle('#container-1',{
						color: '#000',
							// This has to be the same size as the maximum width to
							// prevent clipping
					

							text: {
								autoStyleContainer: false
							},
					
							// Set default step function for all animate calls

						step: function(state, circle) {

							circle.path.setAttribute('stroke', state.color);
							circle.path.setAttribute('stroke-width', state.width);

							var data_value = document.getElementById('container-1').getAttribute("data-value");
							var value = Math.round(circle.value() * data_value);
							if (value === 0) {
								circle.setText('0');
							}else{
								circle.setText(value);
							}
						}
				});


				circular1.animate(1.0);  // Number from 0.0 to 1.0

				var circular2 = new ProgressBar.Circle('#container-2',{
						color: '#000',
							// This has to be the same size as the maximum width to
							// prevent clipping
				

							text: {
								autoStyleContainer: false
							},
	
							// Set default step function for all animate calls

						step: function(state, circle) {

							circle.path.setAttribute('stroke', state.color);
							circle.path.setAttribute('stroke-width', state.width);

							var data_value = document.getElementById('container-2').getAttribute("data-value");
							var value = Math.round(circle.value() * data_value);
							if (value === 0) {
								circle.setText('0');
							}else{
								circle.setText(value);
							}
						}
				});

				circular2.animate(1.0);  // Number from 0.0 to 1.0

				var circular3 = new ProgressBar.Circle('#container-3',{
							color: '#000',
							// This has to be the same size as the maximum width to
							// prevent clipping
			

							text: {
								autoStyleContainer: false
							},
						
							// Set default step function for all animate calls

							step: function(state, circle) {

								circle.path.setAttribute('stroke', state.color);
								circle.path.setAttribute('stroke-width', state.width);

								var data_value = document.getElementById('container-3').getAttribute("data-value");
								var value = Math.round(circle.value() * data_value);
								if (value === 0) {
									circle.setText('0');
								}else{
									circle.setText(value);
								}
							}
					});

					circular3.animate(1.0);  // Number from 0.0 to 1.0
                
                var circular4 = new ProgressBar.Circle('#container-4',{
							color: '#000',
							// This has to be the same size as the maximum width to
							// prevent clipping
			

							text: {
								autoStyleContainer: false
							},
						
							// Set default step function for all animate calls

							step: function(state, circle) {

								circle.path.setAttribute('stroke', state.color);
								circle.path.setAttribute('stroke-width', state.width);

								var data_value = document.getElementById('container-4').getAttribute("data-value");
								var value = Math.round(circle.value() * data_value);
								if (value === 0) {
									circle.setText('0');
								}else{
									circle.setText(value);
								}
							}
					});

					circular4.animate(1.0);  // Number from 0.0 to 1.0
                
                
                
                var circular5 = new ProgressBar.Circle('#container-5',{
							color: '#000',
							// This has to be the same size as the maximum width to
							// prevent clipping
			

							text: {
								autoStyleContainer: false
							},
						
							// Set default step function for all animate calls

							step: function(state, circle) {

								circle.path.setAttribute('stroke', state.color);
								circle.path.setAttribute('stroke-width', state.width);

								var data_value = document.getElementById('container-5').getAttribute("data-value");
								var value = Math.round(circle.value() * data_value);
								if (value === 0) {
									circle.setText('0');
								}else{
									circle.setText(value);
								}
							}
					});

					circular5.animate(1.0);  // Number from 0.0 to 1.0
                
                
                var circular6 = new ProgressBar.Circle('#container-',{
							color: '#000',
							// This has to be the same size as the maximum width to
							// prevent clipping
			

							text: {
								autoStyleContainer: false
							},
						
							// Set default step function for all animate calls

							step: function(state, circle) {

								circle.path.setAttribute('stroke', state.color);
								circle.path.setAttribute('stroke-width', state.width);

								var data_value = document.getElementById('container-6').getAttribute("data-value");
								var value = Math.round(circle.value() * data_value);
								if (value === 0) {
									circle.setText('0');
								}else{
									circle.setText(value);
								}
							}
					});

					circular6.animate(1.0);  // Number from 0.0 to 1.0
			
			}
		
}, 500);
});