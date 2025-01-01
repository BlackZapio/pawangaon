//language switcher buttons 
		
	$(".english").hide();
						
	$(document).ready(function(){
	
		$(".marathi").click(function(){	$(".marathi").hide(); $(".english").show(); $(".hindi").show(); });
		
		$(".hindi").click(function(){ $(".hindi").hide(); $(".english").show(); $(".marathi").show(); });
		
		$(".english").click(function(){ $(".english").hide(); $(".hindi").show(); $(".marathi").show(); });
		
	});						
	
	
	//language switcher buttons 
	function triggerHtmlEvent(element, eventName) {
		var event;
		if(document.createEvent) {
			event = document.createEvent('HTMLEvents');
			event.initEvent(eventName, true, true);
			element.dispatchEvent(event);
		} else {
			event = document.createEventObject();
			event.eventType = eventName;
			element.fireEvent('on' + event.eventType, event);
		}
		}
					<!-- Flag click handler -->
				$('.translation-links a').click(function(e) {
		  e.preventDefault();
		  var lang = $(this).data('lang');
		  $('#google_translate_element select option').each(function(){
			if($(this).text().indexOf(lang) > -1) {
				$(this).parent().val($(this).val());
				var container = document.getElementById('google_translate_element');
				var select = container.getElementsByTagName('select')[0];
				triggerHtmlEvent(select, 'change');
			}
		});
	});
				