$(function() {
	$('.cate_btn').click(function(){
		var $this = $(this);
		$('.site_btn').removeClass('on');
		$('.sub_com').animate({height:'1px'});
		if ($this.hasClass('on')){
			$('.all_cate').animate({left:'-50%'});
			$this.removeClass('on');
			$('.dimmed').fadeTo('500', 0);
		}
		else{
			$('.all_cate').animate({left:'0'});
			$this.addClass('on');
			$('.dimmed').fadeTo('500',0.3);
		};		
	});
	$('.dimmed').click(function(){
		var $this = $(this);
		$('.all_cate').animate({left:'-50%'});
		$('.cate_btn').removeClass('on');
		$('.sub_com').animate({height:'1px'});
		$('.site_btn').removeClass('on');
		$this.css('display','none');	
	});

	$('.site_btn').click(function(){
		var $this = $(this);
		console.log(1);
		$('.cate_btn').removeClass('on');
		$('.all_cate').animate({left:'-50%'});
		if($this.hasClass('on')){
			console.log(2);
			$('.sub_com').animate({height:'1px'});
			$this.removeClass('on');
			$('.dimmed').fadeTo('500', 0);
		}else{
			console.log(3);
			$('.sub_com').animate({height:'94px'});
			$this.addClass('on');
			$('.dimmed').fadeTo('500',0.3);
		};
	});

	// $('.next_btn').click(function(){


	// });


	// $('.close_btn').on('click',function(){
	// 	$('.all_cate').removeClass('on');
	// });
	$('.one_depth').on('click',function(e){
		e.preventDefault();
		var $this = $(this);
		$('.one_depth').find('.two_depth').removeClass('on');
		$this.find('.two_depth').toggleClass('on');
	});


	// $('.site_btn').on('click', function(){
	// 	$('.sub_com').toggleClass('on');
	// });
	// $('.close_btn').on('click',function(){
	// 	$('.sub_com').removeClass('on');
	// });
	// $('#container').on('click',function(){
	// 	$('.sub_com').removeClass('on');
	// });
});