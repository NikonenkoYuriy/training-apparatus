jQuery(document).ready(function ($) {		

	$('.more').bind("click", function() { 				
		$('.more').removeClass('hide');	
		$(this).addClass('hide');	
		$('.inside').removeClass('openmore');
	});
	$('.more1').bind("click", function() {				
		$('.inside1').addClass('openmore');
	});
	$('.more2').bind("click", function() {
		$('.inside2').addClass('openmore');		
	});
	$('.more3').bind("click", function() {				
		$('.inside3').addClass('openmore');		
	});
	$('.more4').bind("click", function() {		
		$('.inside4').addClass('openmore');		
	});	
//nutrition
	$('.step').bind("click", function() { 
		$('.step').removeClass('active');	
		$(this).addClass('active');			
		$('.cont').removeClass('openmore');		
	});
	$('.step1').bind("click", function() {
		$('.cont1').addClass('openmore');
	});
	$('.step2').bind("click", function() {
		$('.cont2').addClass('openmore');
	});
	$('.step3').bind("click", function() {
		$('.cont3').addClass('openmore');
	});
	$('.step4').bind("click", function() {
		$('.cont4').addClass('openmore');
	});
	$('.step5').bind("click", function() {
		$('.cont5').addClass('openmore');
	});
	$('.step6').bind("click", function() {
		$('.cont6').addClass('openmore');
	});
//singin form
	$('.bttnmoreform').bind("click", function() {		
		$('.formouter').removeClass('hide');		
	});
//modals
	$('.vars').bind("click", function() { 
		$('.vars').removeClass('active');
		$(this).addClass('active');		
	});
	$('.process_close').bind("click", function() { 
		$('body').addClass('exopacity');
	});
	$('.renew_track').bind("click", function() { 
		$('body').addClass('exopacity');
	});
	$('.restday_elem').bind("click", function() { 
		$('body').addClass('exopacity');
	});
	$('.mdlclose').bind("click", function() { 
		$('body').removeClass('exopacity');
	});
	// modal last process
	$('#lastModal').on('show.bs.modal', function (event) {
		$('body').addClass('exopacity');
	});
	$('#lastModal').on('hide.bs.modal', function (event) {
		$('body').removeClass('exopacity');
	});
//profile
	//(week & profile)
	$('.menuitem').bind("click", function() { 
		$('.menuitem').removeClass('active');
		$(this).addClass('active');
	});
	// (profile)
	$('.profile_btn').bind("click", function(){
		$('.pass_form').addClass('hide');
		$('.profile_form').removeClass('hide');
	});
	$('.pass_form_btn').bind("click", function(){		
		$('.profile_form').addClass('hide');
		$('.pass_form').removeClass('hide');		
	});
//
	$('#exModalLong').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) // Button that triggered the modal
      var title = button.data('title') // Extract info from data-* attributes
      var link = button.data('link')
      var info = button.data('info')
      var title2 = button.data('title2')
      var link2 = button.data('link2')
      var info2 = button.data('info2')
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.mex_title').text(title)
      modal.find('.video_frame').attr('src', 'https://player.vimeo.com/video/' + link + '?autoplay=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0')      
      modal.find('.mex_txt').text(info)
      	if (link2 == ""){
		  	$('.btsouter').addClass('d_dnone');
		}
		else{
		  	$('.btsouter').removeClass('d_dnone');
		  	$('.mainbttn').bind("click", function(){		
				modal.find('.mex_title').text(title)
				modal.find('.video_frame').attr('src', 'https://player.vimeo.com/video/' + link + '?autoplay=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0')
	      		modal.find('.mex_txt').text(info)
			});		
	      	$('.subbttn').bind("click", function(){		
				modal.find('.mex_title').text(title2)
				modal.find('.video_frame').attr('src', 'https://player.vimeo.com/video/' + link2 + '?autoplay=1&loop=1&color=e25d4a&title=0&byline=0&portrait=0')
	      		modal.find('.mex_txt').text(info2)
			});
		}      	
      //modal.find('.mex_title').text('New message to ' + recipient)
      //modal.find('.modal-body input').val(recipient)
      //https://player.vimeo.com/video/259411563?loop=1&color=e25d4a&title=0&byline=0&portrait=0
    });
    
    $('#exModalLong').on('show.bs.modal', function (event) {
    	$('.subbttn').removeClass('active');
    	$('.mainbttn').addClass('active');
    })

    $('#exModalLong').on('hide.bs.modal', function (event) {      
      var modal = $(this)      
      modal.find('iframe').attr('src', '')
    })
    
    //warmup modal
    $('#warmupModalLong').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget)      
      //var link = button.data('link')      
      var modal = $(this)      
      modal.find('.wa_1').attr('src', 'https://player.vimeo.com/video/207822745?loop=1&color=e25d4a&title=0&byline=0&portrait=0')
      modal.find('.wa_2').attr('src', 'https://player.vimeo.com/video/234533235?loop=1&color=e25d4a&title=0&byline=0&portrait=0')
      modal.find('.wa_3').attr('src', 'https://player.vimeo.com/video/207822745?loop=1&color=e25d4a&title=0&byline=0&portrait=0')
      modal.find('.wa_4').attr('src', 'https://player.vimeo.com/video/343057484?loop=1&color=e25d4a&title=0&byline=0&portrait=0')
      modal.find('.wa_5').attr('src', 'https://player.vimeo.com/video/354980539?loop=1&color=e25d4a&title=0&byline=0&portrait=0')
      modal.find('.wa_6').attr('src', 'https://player.vimeo.com/video/353365701?loop=1&color=e25d4a&title=0&byline=0&portrait=0')
    })  
    $('#warmupModalLong').on('hide.bs.modal', function (event) {      
      var modal = $(this)      
      modal.find('iframe').attr('src', '')
    }) 
    //rewriteTrack modal
    $('#rewriteTrackModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget)      
      var trackno = button.data('track')
      var tracklink = button.data('tracklink')
      var modal = $(this)      
      modal.find('.tracknumber').attr('value', trackno)
      modal.find('.fredirlink').attr('value', tracklink)
    }) 
    //rewriteTrack modal
    $('#rewriteTrackModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget)      
      var restday = button.data('restday')    
      var modal = $(this)      
      modal.find('.ufieldname').attr('value', restday)
    })
// qwiz
$('.qw').bind("click", function(){ 			
	$('.d-yes').removeClass("d-yes");					
});
$('.forma_qw1 .qw').bind("click", function(){
	$('.arr-dyes').removeClass("arr-dyes");
	$('.to1').addClass("arr-dyes");
	$('.outer2').addClass("d-yes");
	$('.linefull').css('width','34%');
	$('.numb').text('34%');		
	var ansqw1 = $(".forma_qw1 input[type='radio']:checked").val();
	$('.fgender').attr('value', ansqw1);
});
$('.forma_qw2 .qw').bind("click", function(){
	$('.arr-dyes').removeClass("arr-dyes");
	$('.to2').addClass("arr-dyes");
	$('.outer3').addClass("d-yes");
	$('.linefull').css('width','65%');
	$('.numb').text('65%');
	var ansqw2 = $(".forma_qw2 input[type='radio']:checked").val();
	$('.fgoal').attr('value', ansqw2);
});
$('.forma_qw3 .qw').bind("click", function(){ 
	$('.arr-dyes').removeClass("arr-dyes");
	$('.to3').addClass("arr-dyes");
	$('.outer4').addClass("d-yes");
	$('.linefull').css('width','90%');
	$('.numb').text('90%');
	var ansqw3 = $(".forma_qw3 input[type='radio']:checked").val();
	$('.fbglevel').attr('value', ansqw3);
});
$('.backarr').bind("click", function(){ 			
	$('.d-yes').removeClass("d-yes");					
});
$('.to1').bind("click", function(){
	$('.arr-dyes').removeClass("arr-dyes");	
	$('.outer1').addClass("d-yes");
	$('.linefull').css('width','15%');
	$('.numb').text('15%');
});
$('.to2').bind("click", function(){
	$('.arr-dyes').removeClass("arr-dyes");	
	$('.to1').addClass("arr-dyes");
	$('.outer2').addClass("d-yes");
	$('.linefull').css('width','34%');
	$('.numb').text('34%');
});
$('.to3').bind("click", function(){
	$('.arr-dyes').removeClass("arr-dyes");
	$('.to2').addClass("arr-dyes");
	$('.outer3').addClass("d-yes");
	$('.linefull').css('width','65%');
	$('.numb').text('65%');
});
/* page one train single ex*/
$('#onetraining_bl .form-control').blur(function(){
	var exrepeats = $("input[name='exrepeats']").val();	
	$('.setline .infotxt').text( exrepeats + ' СЂР°Р·');
});
$('.oneex_bttn').bind("click", function(){
	var exrepeats = $("input[name='exrepeats']").val();
	var btnlink = $('#startbg .start').attr('href');
	$('.oneex_bttn').attr('href', btnlink + '?utm_repeats='+ exrepeats);
});
/* report page */
$('.feel_n').bind("click", function(){	
	var feelrep = $(".feel_inner input[type='radio']:checked").val();
	if (feelrep == '1') {
		$('.feel_res').text("РљР°Рє Рё РґРѕ С‚СЂРµРЅРёСЂРѕРІРєРё");	
	}
	else if (feelrep == '2') {
		$('.feel_res').text("Р§СѓРІСЃС‚РІСѓСЋ Р±РѕРґСЂРѕСЃС‚СЊ Рё Р°РєС‚РёРІРЅРѕСЃС‚СЊ");	
	}
	else if (feelrep == '3') {
		$('.feel_res').text('РЈ РјРµРЅСЏ РїРѕР»РЅРѕ СЃРёР»');	
	}
	else if (feelrep == '4') {
		$('.feel_res').text('Р§СѓРІСЃС‚РІСѓСЋ СѓСЃС‚Р°Р»РѕСЃС‚СЊ');	
	}
	else if (feelrep == '5') {
		$('.feel_res').text('РљР°Рє РІС‹Р¶Р°С‚С‹Р№ Р»РёРјРѕРЅ');	
	}
});
//var ansqw1 = $(".forma_qw1 input[type='radio']:checked").val();

//send help form/
$(".ajaxform").submit(function(){ // РїeСЂeС…РІaС‚С‹РІaeРј РІСЃe РїСЂРё СЃoР±С‹С‚РёРё oС‚РїСЂaРІРєРё
		var form = $(this); // Р·aРїРёС€eРј С„oСЂРјСѓ, С‡С‚oР±С‹ РїoС‚oРј РЅe Р±С‹Р»o РїСЂoР±Р»eРј СЃ this
		var error = false; // РїСЂeРґРІaСЂРёС‚eР»СЊРЅo oС€РёР±oРє РЅeС‚
		form.find('input, textarea').each( function(){ // РїСЂoР±eР¶РёРј Рїo РєaР¶РґoРјСѓ РїoР»СЋ РІ С„oСЂРјe
			if ($(this).val() == '') { // eСЃР»Рё РЅaС…oРґРёРј РїСѓСЃС‚oe
				alert('Р—aРїoР»РЅРёС‚e РїoР»e "'+$(this).attr('placeholder')+'"!'); // РіoРІoСЂРёРј Р·aРїoР»РЅСЏР№!
				error = true; // oС€РёР±Рєa
			}
		});
		if (!error) { // eСЃР»Рё oС€РёР±РєРё РЅeС‚
			var data = form.serialize(); // РїoРґРіoС‚aРІР»РёРІaeРј РґaРЅРЅС‹e
			$.ajax({ // РёРЅРёС†РёaР»РёР·РёСЂСѓeРј ajax Р·aРїСЂoСЃ
			   type: 'POST', // oС‚РїСЂaРІР»СЏeРј РІ POST С„oСЂРјaС‚e, РјoР¶РЅo GET
			   url: 'https://i.freefitt.com/send.php', // РїСѓС‚СЊ Рґo oР±СЂaР±oС‚С‡РёРєa
			   dataType: 'json', // oС‚РІeС‚ Р¶РґeРј РІ json С„oСЂРјaС‚e
			   data: data, // РґaРЅРЅС‹e РґР»СЏ oС‚РїСЂaРІРєРё
		       beforeSend: function(data) { // СЃoР±С‹С‚Рёe Рґo oС‚РїСЂaРІРєРё
		            form.find('input[type="submit"]').attr('disabled', 'disabled'); // РЅaРїСЂРёРјeСЂ, oС‚РєР»СЋС‡РёРј РєРЅoРїРєСѓ, С‡С‚oР±С‹ РЅe Р¶aР»Рё Рїo 100 СЂaР·
		          },
		       success: function(data){ // СЃoР±С‹С‚Рёe РїoСЃР»e СѓРґaС‡РЅoРіo oР±СЂaС‰eРЅРёСЏ Рє СЃeСЂРІeСЂСѓ Рё РїoР»СѓС‡eРЅРёСЏ oС‚РІeС‚a
		       		if (data['error']) { // eСЃР»Рё oР±СЂaР±oС‚С‡РёРє РІeСЂРЅСѓР» oС€РёР±РєСѓ
		       			alert(data['error']); // РїoРєaР¶eРј eС‘ С‚eРєСЃС‚
		       		} else { // eСЃР»Рё РІСЃe РїСЂoС€Р»o oРє		       									
		       			//$('#helpModal').modal('hide')
						//$('#tnxModal').modal('show')
		       		}
		         },
		       error: function (xhr, ajaxOptions, thrownError) { // РІ СЃР»СѓС‡ae РЅeСѓРґaС‡РЅoРіo Р·aРІeСЂС€eРЅРёСЏ Р·aРїСЂoСЃa Рє СЃeСЂРІeСЂСѓ
		            alert(xhr.status); // РїoРєaР¶eРј oС‚РІeС‚ СЃeСЂРІeСЂa
		            alert(thrownError); // Рё С‚eРєСЃС‚ oС€РёР±РєРё
		         },
		       complete: function(data) { // СЃoР±С‹С‚Рёe РїoСЃР»e Р»СЋР±oРіo РёСЃС…oРґa
		            form.find('input[type="submit"]').prop('disabled', false); // РІ Р»СЋР±oРј СЃР»СѓС‡ae РІРєР»СЋС‡РёРј РєРЅoРїРєСѓ oР±СЂaС‚РЅo
		         }
		                  
			     });
		}
		return false; // РІС‹СЂСѓР±aeРј СЃС‚aРЅРґaСЂС‚РЅСѓСЋ oС‚РїСЂaРІРєСѓ С„oСЂРјС‹
	});
//
});	