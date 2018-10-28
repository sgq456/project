function typeGame () {
	

	this.num=3;
	this.gk=1;
	this.tiaojian=10;
	this.donghuatime=30000;


	this.ptypeobj={};
	this.scord=0;
	this.life=5;
	this.weiqinum=0;
	this.before=true;
	this.animatebefor();
	$('body').mousedown(function(e){e.preventDefault();})
	
	
}
typeGame.prototype={
	animatebefor:function(){

		
		 var time=Date.now();
		var that=this;
		var zxc=4000;
		if(that.before){
		$('<div class="beforesence"></div>').css({
			width:$(window).width(),
			height:$(window).height(),
			position:'absolute',
			top:0,
			left:0,
			'background':'url(img/cs4.jpg) no-repeat',
			'background-size':'cover',
			'overflow':' hidden'
		}).appendTo('body').fadeIn('slow');

		//开始场景
		$('<div class="kaichangbai"></div>').fadeIn(2000).appendTo('.beforesence').html('<div></div><p>科技越来越发达了<br>但是.....<br>一条条清澈见底的小河，变成了一条脏兮兮的小河<br>河边的青草、花儿也因为脏兮兮的小河而枯萎了<br>河里的小鱼小虾也因为河水的关系而无家可归<br>一片茂密的森林，却变成光秃秃的一片荒地<br>许多小动物无家可归<br>如果没有了树木，沙尘暴来了，我们怎么办？<br>广阔、湛蓝、宁静的天空，变得不再那么美丽<br>因为各种排放污染空气，股股黑烟飞上那湛蓝、宁静的天空<br>使天空变得不再那么美丽了。<br>虽然如此...<br>蓝天依然努力着，清理着各种废气<br>只想尽自己最大的努力，为人们创造绿意...</p>')
		.children('p').animate({top:"-200%"},24000,function(){$('.kaichangbai').slideUp(2000)})
		

			var randomnum=Math.random()*500+1500;
			var t1=setInterval(function(){
				that.creatche();
				 var nowtime=Date.now();
				 //记得修改动画时间
				 if(nowtime-time>=that.donghuatime){
				 	
					clearInterval(t1);
					clearInterval(t2);
					$('.beforesence').fadeOut(function(){$(this).remove()});
					that.createScene();
				}
		
			},randomnum);
		}else{
			$('<div class="beforesence"></div>').css({
			width:$(window).width(),
			height:$(window).height(),
			position:'absolute',
			top:0,
			left:0,
			'background':'url(img/cs4.jpg) no-repeat',
			'background-size':'cover',
			'overflow':' hidden'
		}).appendTo('body').fadeIn().delay(1000).fadeOut(1500).delay(2000).queue(function(){

			$('<div class="beforesence"></div>').css({
			width:$(window).width(),
			height:$(window).height(),
			position:'absolute',
			top:0,
			left:0,
			'background':'url(img/cs3.jpg) no-repeat',
			'background-size':'cover',
			'overflow':' hidden'
			}).appendTo('body').delay(5000).fadeIn(1500,function(){

		//结束场景
		$('<div class="kaichangbai"></div>').fadeIn(2000).appendTo('.beforesence').html('<div></div><p>蓝天累了！她在呼唤我们！！！<br>若大家心存环境意识，爱护环境，爱护自己的家，那么蓝天依然灿烂，世界依然绿意盎然。让我们行动起来!能骑车就不坐车，能坐公交就不开私家车！从小做起，保护大家唯一的的家园！</p>')
		.children('p').animate({top:"0"},14000,function(){$('.kaichangbai')});
			});
		});

			
			zxc=2000;

			var t1=setInterval(function(){
				that.creatcheafter();
				 
				
				 
		
			},15000);

		}

		var t2=setInterval(function(){
			

			$('<div class="qiche"></div>').css({
			width:'100px',
			height:'100px',
			position:'absolute',
			left:'-150px',
			bottom:'10%',
			'background':'url(img/rightche7.png) center no-repeat',
			'background-size':'contain'
		}).appendTo('.beforesence').animate({left:'120%'},20000,function(){$(this).stop().remove()});
		$('<div class="qiche"></div>').css({
			width:'100px',
			height:'100px',
			position:'absolute',
			right:'-150px',
			bottom:'8%',
			'background':'url(img/leftche7.png) center no-repeat',
			'background-size':'contain',
			'zIndex':2
		}).appendTo('.beforesence').animate({right:'120%'},20000,function(){$(this).stop().remove()});

		},zxc);
		
		
	},
	createScene:function(){
		var that=this;
		$('<div class="scene"></div>').css({
			width:'80%',
			height:$(window).height(),
			position:'absolute',
			top:0,
			left:0,
			'background':'url(img/lt.jpg) no-repeat',
			'background-size':'cover',
			'overflow':' hidden',
			display:'none'
		}).appendTo('body').fadeIn();
		$('<div class="scene2"></div>').css({
			width:'20%',
			height:$(window).height(),
			position:'absolute',
			top:0,
			right:0,
			'background':'url(img/lt.jpg) no-repeat',
			'background-size':'cover'
		}).appendTo('body');
		$('<div class="scordban"></div>').css({
			width:'80%',
			height:234,
			'background-image':'url(img/code.jpg)',
			'position':'absolute',
			top:100,
			right:0,
			left:0,
			margin:'auto',
			'font-size':'30px',
			color:'#666',
			'text-align':'center',
			'line-height':'100px'
		}).appendTo('.scene2');
		$('<div class="scord"></div>').css({
			width:'100%',
			height:78
		}).appendTo('.scordban').text('得分：0');
		$('<div class="gk"></div>').css({
			width:'100%',
			height:78
		}).appendTo('.scordban').text('关卡：1');
		$('<div class="life"></div>').css({
			width:'100%',
			height:78
		}).appendTo('.scordban');
		for (var i = 0; i < 5; i++) {
			that.creatSM();
		};
	////////////////////		
		$('<div class="pass"></div>').css({
			width:'500px',
			height:'400px',
			position:'absolute',
			top:0,
			left:0,
			right:0,
			bottom:0,
			margin:'auto',
			'background-image':'url(img/zb1.jpg) ',
			'background-repeat':'no-repeat',
			'background-size':'contain',
			color:'#fff',
			'font-size':'50px',
			'text-align':'center',
			zIndex:100
		}).appendTo('.scene').text('蓝天（累）泪');
		// $('<div class="next"></div>').css({
		// 	width:'150px',
		// 	height:'150px',
		// 	position:'absolute',
		// 	top:'43%',
		// 	'line-height':'150px',
		// 	color:'#666',
		// 	left:0,
		// 	right:0,
		// 	margin:'auto',
		// 	'background-image':'url(img/yun.png) ',
		// 	'background-repeat':'no-repeat',
		// 	'background-size':'contain',
		// 	'font-size':'16px',
		// 	cursor: 'pointer'
		// }).appendTo('.pass').text('开始游戏').click(function(){
		// 	//乐天模式，蓝天模式，狂天模式
		// 	$('.pass').fadeOut();
		// 	that.play();	
			
		// });
		$('<div class="next"></div>').css({
			width:'150px',
			height:'150px',
			position:'absolute',
			top:'43%',
			'line-height':'150px',
			color:'#666',
			left:0,
			right:0,
			margin:'auto',
			'background-image':'url(img/yun.png) ',
			'background-repeat':'no-repeat',
			'background-size':'contain',
			'font-size':'16px',
			cursor: 'pointer'
		}).appendTo('.pass').html('<div class="jd">柔天模式</div><div class="zc">蓝天模式</div><div class="kn">狂天模式</div><div class="ms">选择模式</div>');
			//乐天模式，蓝天模式，狂天模式
			// $('.pass').fadeOut();
			// that.play();	
			$('.ms').mouseover(function(){
				$(this).parent().css({background:'none'})
				$(this).fadeOut();
				$(this).parent().children('.zc').fadeIn().animate({left:'50%',top:'50%'},function(){
					$(this).hover(function(){
					$(this).siblings().off('click')
					$(this).stop().animate({top:'49%'}).css({zIndex:20}).click(function(){
						$(this).off('click');
						that.scord=0;
						that.gk=1;
						that.life=5;
						that.num=3;
						that.tiaojian=10;
						$('.pass').fadeOut();
						$('.scord').text('得分：0');
						$('.gk').text('关卡：1');
						$('.life').html('');
						for (var i = 0; i < that.life; i++) {
							that.creatSM();
						};
						$('.rw').css({'background-image':'url(img/G1.png) '});
						$('.scene,.scene2').css({'background-image':'url(img/lt.jpg)'});
						$('.next').remove();
						that.play();
						
					});

				},function(){
					$(this).stop().animate({top:'50%'}).css({zIndex:0});
				})
				}).mousedown(function(e){e.preventDefault()});
				$(this).parent().children('.jd').fadeIn().animate({left:'-50%',top:'50%'},function(){
					$(this).hover(function(){
					$(this).siblings().off('click')
					$(this).stop().animate({top:'49%'}).css({zIndex:20}).click(function(){
						$(this).off('click');
						that.scord=0;
						that.gk=1;
						that.life=5;
						that.num=2;
						that.tiaojian=5;
						$('.pass').fadeOut();
						$('.scord').text('得分：0');
						$('.gk').text('关卡：1');
						$('.life').html('');
						for (var i = 0; i < that.life; i++) {
							that.creatSM();
						};
						$('.rw').css({'background-image':'url(img/G1.png) '});
						$('.scene,.scene2').css({'background-image':'url(img/lt.jpg)'});
						$('.next').remove();
						that.play();
						
					});

				},function(){
					$(this).stop().animate({top:'50%'}).css({zIndex:0});
				})
				}).mousedown(function(e){e.preventDefault()});
				$(this).parent().children('.kn').fadeIn().animate({left:0,top:'-50%'},function(){
					$(this).hover(function(){
					$(this).siblings().off('click')
					$(this).stop().animate({top:'-51%'}).css({zIndex:20}).click(function(){
						$(this).off('click');
						that.scord=0;
						that.gk=1;
						that.life=5;
						that.num=4;
						that.tiaojian=20;
						$('.pass').fadeOut();
						$('.scord').text('得分：0');
						$('.gk').text('关卡：1');
						$('.life').html('');
						for (var i = 0; i < that.life; i++) {
							that.creatSM();
						};
						$('.rw').css({'background-image':'url(img/G1.png) '});
						$('.scene,.scene2').css({'background-image':'url(img/lt.jpg)'});
						$('.next').remove();
						that.play();
							
					});

				},function(){
					$(this).stop().animate({top:'-50%'}).css({zIndex:0});
				})
				}).mousedown(function(e){e.preventDefault()});
			
		});

///////////////////////

		$('<div class="rw"></div>').css({
			width:'90%',
			height:400,
			position:'absolute',
			top:'110%',
			left:0,
			'background-image':'url(img/G1.png) ',
			'background-repeat':'no-repeat',
			'background-size':'contain'
		}).appendTo('.scordban');

	},
	createLetter:function(){
		
		var that=this;
		
		do{
			var randomnum=Math.round(Math.random()*25+65);//乘范围加初值
			var randtype=String.fromCharCode(randomnum);	
		}while(this.ptypeobj[randtype]);
	
		var typeT=Math.round(-Math.random()*300);
		do{	
			var typeL=Math.round(Math.random()*800);
		}while(this.checkL(typeL));
		var randomnum2=Math.random();
		var len=$('.fuyun').length?$('.fuyun').length:0;
		var pd=Math.ceil(randomnum2*10);
		if(len<10){
			//浮云

			if(pd>5){

				$('<div class="fuyun"></div>').css({
					width:'400px',height:'400px','position':'fixed','top': randomnum2*400,'left':-typeL-400,'background-image':'url(img/y'+pd+'.png)',
					'background-repeat':'no-repeat','background-size':'contain',zIndex:Math.round(randomnum2*10)
				}).attr({aa:pd+'big'}).appendTo('.scene').animate({left:'100%'},20000,'linear',function(){this.remove();});
			}else{
				$('<div class="fuyun"></div>').css({
					width:'400px',height:'400px','position':'fixed','top': randomnum2*400,'left':-typeL-400,'background-image':'url(img/y'+pd+'.png)',
					'background-repeat':'no-repeat','background-size':'contain',zIndex:Math.round(randomnum2*10)
				}).attr({aa:pd+'sma'}).appendTo('.scene').animate({left:'100%'},20000,'linear',function(){this.remove();});

			}
			
		}

		//字母

		if(randomnum2>0.1){

			var ele=$('<div class="codezm"></div>').css({
				width:'80px',height:'80px','text-align':'center','line-height':'80px','position':'fixed','bottom':typeT,'left':typeL,
				'font-size':'30px','background-image':'url(img/'+randtype+'.png)','background-repeat':'no-repeat','background-size':'100%,100%',zIndex:5
			}).html('<div class="weiqi6"></div>')
			.attr({'del':randtype}).appendTo('.scene').animate({bottom:$(window).height()},5000,'linear',function(){
				that.life--;
				$('.life').html('');
				for (var i = 0; i < that.life; i++) {
					that.creatSM();
				};
				delete that.ptypeobj[$(this).attr('del')];
				this.remove();
				if(that.life==0){
					//
					$.each(that.ptypeobj,function(key,value){
						value.el.remove().stop();
					})
					that.ptypeobj={};

					
						$('.fuyun[aa$="big"]').stop().animate({left:-1000},2000,'linear',function(){this.remove();});

						$('.fuyun[aa$="sma"]').stop().animate({left:'100%'},2000,'linear',function(){this.remove();


						});

						///////////////////////////////////////////

						//////////////////////////////////
						$('.scene,.scene2').delay(3000).fadeOut(3000).delay(4000).queue(function(){$('.scene,.scene2').css({'background-image':'url(img/ht.jpg)'})}).dequeue().fadeIn('slow').queue(function(){

							$('.pass').css({'background-image':'url(img/zb3.png)','background-position':'7px center'}).fadeIn().contents().not($('.pass').fadeIn().contents().not('[nodeType=1]'))[0].nodeValue='失败！';
						}).dequeue();
						that.fail();

					
					//.text('开始游戏')'background-image':'url(img/yun.png) ',
		// 	'background-repeat':'no-repeat',
		// 	'background-size':'contain',.css({'background-image':'url(img/yun.png) ','background-repeat':'no-repeat','background-size':'contain'}).text('')
					// $('.next').off('click').click(function(){
					// 	$('.pass').fadeOut();
						
					// 	that.scord=0;
					// 	that.gk=1;
					// 	that.life=5;
					// 	$('.scord').text('得分：0');
					// 	$('.gk').text('关卡：1');
					// 	$('.life').html('');
					// 	for (var i = 0; i < that.life; i++) {
					// 		that.creatSM();
					// 	};
					// 	$('.rw').css({'background-image':'url(img/G1.png) '});
					// 	///////////
					// 	$('.scene,.scene2').css({'background-image':'url(img/lt.jpg)'})
					// 	that.play();
					// });
				}else{
					that.createLetter();
				}
				
			});
		}else{
			var ele=$('<div class="codezm"></div>').css({
				width:'80px',height:'80px','text-align':'center','line-height':'80px','position':'fixed','top':typeT,'left':typeL,
				'font-size':'30px',background:'url(img/yun.png) no-repeat','background-size':'contain'
			}).attr({'del':randtype,'ts':true}).html(randtype).appendTo('.scene').animate({top:$(window).height()},3000,'linear',function(){
				
				delete that.ptypeobj[$(this).attr('del')];
				this.remove();
				
				that.createLetter();
				
			
			});

		}


		
		this.ptypeobj[randtype]={s:typeL-80,e:typeL+80,el:ele};
	},
	play:function(){
		var that=this;
		for (var i = 0; i < this.num; i++) {
			this.createLetter();
		};
		this.keydown();
		
	},
	checkL:function(left){
			var flag=false;
		$.each(this.ptypeobj,function(key,value){
			if(left>=value.s&&left<=value.e){
				flag=true;
				return;
			}
		});
		return flag;

	},
	keydown:function(){
		var that=this;
		$(document).keydown(function(e){
			var code=String.fromCharCode(e.keyCode);
			if(that.ptypeobj[code]){
				if(that.ptypeobj[code].el.attr('ts')){
					that.ptypeobj[code].el.remove().stop();
					delete that.ptypeobj[code];
					that.createLetter();

						if(that.life<5){
							that.life++;
							$('.life').html('');
								for (var i = 0; i < that.life; i++) {
									that.creatSM();
								};
							return;
						}return;
				}
			}
			$.each(that.ptypeobj, function(){
				if(that.ptypeobj[code]){
					
					that.ptypeobj[code].el.remove().stop();
					delete that.ptypeobj[code];
					that.createLetter();
					that.scord++;
					$('.scord').text('得分：'+that.scord);
					if(that.scord==that.gk*that.tiaojian){
						$.each(that.ptypeobj,function(key,value){
							value.el.remove().stop();
						})
						that.ptypeobj={};

						$('.fuyun[aa$="big"]').stop().animate({left:-1000},2000,'linear',function(){this.remove();});

						$('.fuyun[aa$="sma"]').stop().animate({left:'100%'},2000,'linear',function(){this.remove();});
						$('.next').css({top:'53%'});
						that.success();
						$('.pass').css({'background-image':'url(img/zb1.jpg)','background-position':'center center'}).fadeIn().contents()
						.not($('.pass').fadeIn().contents().not('[nodeType=1]'))[0].nodeValue='恭喜过关！';
						$('.next').off('click').click(function(){
			
							that.gk++;
							if(that.gk==6){
								$.each(that.ptypeobj,function(key,value){
									value.el.remove().stop();
								})
								that.ptypeobj={};
								$('.pass').css({'background-image':'url(img/zb1.jpg)','background-position':'center center'})
								.fadeIn().contents().not($('.pass').fadeIn().contents().not('[nodeType=1]'))[0].nodeValue='恭喜通关！';
								$('.next').off('click').click(function(){

									//////////////////////////////////////////////////////////////////
									that.before=false;
									$('.scene,.scene2').fadeOut();
									$('.next').remove();
									that.animatebefor();
									// $('.pass').fadeOut();
									// that.num=3;
									// that.scord=0;
									// that.gk=1;
									// that.life=5;
									// $('.life').html('');
									// for (var i = 0; i < that.life; i++) {
									// 	that.creatSM();
									// };
									// $('.scord').text('得分：0');
									// $('.gk').text('关卡：1');
									
									// $('.rw').css({'background-image':'url(img/G1.png) '});
									// $('.xx').html('');
									// that.play();
								}).contents().not($('.next').contents().not('[nodeType=1]'))[0].nodeValue='结束游戏';
								
								$('<div class="xx"></div>').css({
									width:300,
									height:40,
									
									position:'absolute',
									left:'50%',
									top:'75%',
									'margin-left':'-150px'

								}).appendTo('.pass');
								if(that.life==5){
									var xxnum=3;
								}else if(that.life>=3){
									var xxnum=2;
								}else if(that.life>=2){
									var xxnum=1;
								}else{
									var xxnum=0;
								}
								for (var i = 0; i < xxnum; i++) {
									that.creatX();
								};
								
								

							}else{

								that.num++;
								$('.gk').text('关卡：'+that.gk);
								$('.pass').fadeOut();
								$('.rw').css({'background-image':'url(img/G'+that.gk+'.png) '});
								$('.next').remove();
								that.play();
							}
						}).contents().not($('.next').contents().not('[nodeType=1]'))[0].nodeValue='下一关';
						
					}

				}
			});
		})
	},
	creatX:function(){
		$('<div></div>').css({
			width:$(window).width(),
			height:$(window).height(),
			background:'url(img/xx.png) no-repeat',
			'background-size':'contain',
			float:'left','margin-left':50
		}).appendTo('.xx').animate({width:30,height:30})
	},
	creatSM:function(){
		$('<div></div>').css({
			width:'18%',
			height:'50px',
			'margin-top':'20px',
			background:'url(img/yun.png) no-repeat',
			'background-size':'contain',
			float:'left','margin-left':'1%'
		}).appendTo('.life')
	},
	creatche:function(){
		var randomnum1=Math.floor(Math.random()*6+1);
		var randomnum2=Math.floor(Math.random()*6+1);
		var num=1;
		if(randomnum1==6){
			var weiqi1=$('<img class="weiqi1" src="img/weiqi1.png">').css({
				position:'absolute',
				left:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			var weiqi2=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				left:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			var weiqi0=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				left:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			var weiqi3=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				left:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			$('<div class="qiche"></div>').css({
				width:'300px',
				height:'120px',
				position:'absolute',
				left:'-310px',
				bottom:'4%',
				'background':'url(img/rightche'+randomnum1+'.png) center no-repeat',
				'background-size':'contain',
				'zIndex':3
			}).appendTo('.beforesence').animate({left:'120%'},15000,function(){$(this).stop().remove()})
			.queue(function(){
				var that=this;
				var num=0;
				$(that).append(weiqi0.weiqirgj());
				var t=setInterval(function(){
					num++;
					if(num==1){
						$(that).append(weiqi1.weiqirgj());
						
					}else if(num==2){
						$(that).append(weiqi2.weiqirgj());
						
					}else if(num==3){
						$(that).append(weiqi3.weiqirgj());
						clearInterval(t);
					}
				},4000)

			}).dequeue();

		}else{
			var weiqi1=$('<img class="weiqi1" src="img/weiqi1.png">').css({
				position:'absolute',
				left:'-43%',
				bottom:'16%',
				'zIndex':6
			});
			var weiqi2=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				left:'-43%',
				bottom:'16%',
				'zIndex':6
			});
			var weiqi0=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				left:'-43%',
				bottom:'16%',
				'zIndex':6
			});
			var weiqi3=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				left:'-43%',
				bottom:'16%',
				'zIndex':6
			});

			$('<div class="qiche"></div>').css({
				width:'120px',
				height:'120px',
				position:'absolute',
				left:'-200px',
				bottom:'4%',
				'background':'url(img/rightche'+randomnum1+'.png) center no-repeat',
				'background-size':'contain',
				'zIndex':3
			}).appendTo('.beforesence').animate({left:'120%'},15000,function(){$(this).stop().remove()})
			.queue(function(){
				var that=this;
				var num=0;
				$(that).append(weiqi0.weiqir())
				var t=setInterval(function(){
					num++;
					if(num==1){
						$(that).append(weiqi1.weiqir());
						
					}else if(num==2){
						$(that).append(weiqi2.weiqir());
						
					}else if(num==3){
						$(that).append(weiqi3.weiqir());
						clearInterval(t);
					}
				},3000)

			}).dequeue();
		}
		if(randomnum2==6){
			var weiqil1=$('<img class="weiqi1" src="img/weiqi1.png">').css({
				position:'absolute',
				right:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			var weiqil2=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				right:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			var weiqil0=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				right:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			var weiqil3=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				right:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			$('<div class="qiche"></div>').css({
				width:'300px',
				height:'120px',
				position:'absolute',
				right:'-310px',
				bottom:'0',
				'background':'url(img/leftche'+randomnum2+'.png) center no-repeat',
				'background-size':'contain',
				'zIndex':4
			}).appendTo('.beforesence').animate({right:'120%'},15000,function(){$(this).stop().remove()})
			.queue(function(){
				var that=this;
				var num=0;
				$(that).append(weiqil0.weiqilgj());
				var t=setInterval(function(){
					num++;
					if(num==1){
						$(that).append(weiqil1.weiqilgj());
						
					}else if(num==2){
						$(that).append(weiqil2.weiqilgj());
						
					}else if(num==3){
						$(that).append(weiqil3.weiqilgj());
						clearInterval(t);
					}
				},4000)

			}).dequeue();

		}else{
			var weiqil1=$('<img class="weiqi1" src="img/weiqi1.png">').css({
				position:'absolute',
				right:'-43%',
				bottom:'16%',
				'zIndex':6
			});
			var weiqil2=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				right:'-43%',
				bottom:'16%',
				'zIndex':6
			});
			var weiqil0=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				right:'-43%',
				bottom:'16%',
				'zIndex':6
			});
			var weiqil3=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				right:'-43%',
				bottom:'16%',
				'zIndex':6
			});


			$('<div class="qiche"></div>').css({
				width:'120px',
				height:'120px',
				position:'absolute',
				right:'-200px',
				bottom:'0',
				'background':'url(img/leftche'+randomnum2+'.png) center no-repeat',
				'background-size':'contain',
				'zIndex':4
			}).appendTo('.beforesence').animate({right:'120%'},15000,function(){$(this).stop().remove()})
			.queue(function(){
				var that=this;
				var num=0;
				$(that).append(weiqil0.weiqil())
				var t=setInterval(function(){
					num++;
					if(num==1){
						$(that).append(weiqil1.weiqil());
						
					}else if(num==2){
						$(that).append(weiqil2.weiqil());
						
					}else if(num==3){
						$(that).append(weiqil3.weiqil());
						clearInterval(t);
					}
				},3000)

			}).dequeue();;
		}
	},
		creatcheafter:function(){
		
		var weiqi1=$('<img class="weiqi1" src="img/weiqi1.png">').css({
				position:'absolute',
				left:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			var weiqi2=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				left:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			var weiqi0=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				left:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			var weiqi3=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				left:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			$('<div class="qiche"></div>').css({
				width:'300px',
				height:'120px',
				position:'absolute',
				left:'-310px',
				bottom:'4%',
				'background':'url(img/rightche6.png) center no-repeat',
				'background-size':'contain',
				'zIndex':3
			}).appendTo('.beforesence').animate({left:'120%'},15000,function(){$(this).stop().remove()})
			.queue(function(){
				var that=this;
				var num=0;
				$(that).append(weiqi0.weiqirgj());
				var t=setInterval(function(){
					num++;
					if(num==1){
						$(that).append(weiqi1.weiqirgj());
						
					}else if(num==2){
						$(that).append(weiqi2.weiqirgj());
						
					}else if(num==3){
						$(that).append(weiqi3.weiqirgj());
						clearInterval(t);
					}
				},4000)

			}).dequeue();

		
		
			var weiqil1=$('<img class="weiqi1" src="img/weiqi1.png">').css({
				position:'absolute',
				right:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			var weiqil2=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				right:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			var weiqil0=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				right:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			var weiqil3=$('<img class="weiqi2" src="img/weiqi1.png">').css({
				position:'absolute',
				right:'-16%',
				bottom:'4%',
				'zIndex':6
			});
			$('<div class="qiche"></div>').css({
				width:'300px',
				height:'120px',
				position:'absolute',
				right:'-310px',
				bottom:'0',
				'background':'url(img/leftche6.png) center no-repeat',
				'background-size':'contain',
				'zIndex':4
			}).appendTo('.beforesence').animate({right:'120%'},15000,function(){$(this).stop().remove()})
			.queue(function(){
				var that=this;
				var num=0;
				$(that).append(weiqil0.weiqilgj());
				var t=setInterval(function(){
					num++;
					if(num==1){
						$(that).append(weiqil1.weiqilgj());
						
					}else if(num==2){
						$(that).append(weiqil2.weiqilgj());
						
					}else if(num==3){
						$(that).append(weiqil3.weiqilgj());
						clearInterval(t);
					}
				},4000)

			}).dequeue();


			
		
	},
	fail:function(){
		var that=this;
		$('<div class="next"></div>').css({
			width:'150px',
			height:'150px',
			position:'absolute',
			top:'43%',
			'line-height':'150px',
			color:'#666',
			left:0,
			right:0,
			margin:'auto',
			'background-image':'url(img/yun.png) ',
			'background-repeat':'no-repeat',
			'background-size':'contain',
			'font-size':'16px',
			cursor: 'pointer'
		}).appendTo('.pass').html('<div class="jd">柔天模式</div><div class="zc">蓝天模式</div><div class="kn">狂天模式</div><div class="ms">选择模式</div>');
	
	
	
			$('.ms').mouseover(function(){
				$(this).parent().css({background:'none'})
				$(this).fadeOut();
				$(this).parent().children('.zc').fadeIn().animate({left:'50%',top:'50%'},function(){
					$(this).hover(function(){
					$(this).siblings().off('click')
					$(this).stop().animate({top:'49%'}).css({zIndex:20}).click(function(){
						$(this).off('click');
						that.scord=0;
						that.gk=1;
						that.life=5;
						that.num=3;
						that.tiaojian=10;
						$('.pass').fadeOut();
						$('.scord').text('得分：0');
						$('.gk').text('关卡：1');
						$('.life').html('');
						for (var i = 0; i < that.life; i++) {
							that.creatSM();
						};
						$('.rw').css({'background-image':'url(img/G1.png) '});
						$('.scene,.scene2').css({'background-image':'url(img/lt.jpg)'});
						$('.next').remove();
						that.play();
						
					});

				},function(){
					$(this).stop().animate({top:'50%'}).css({zIndex:0});
				})
				}).mousedown(function(e){e.preventDefault()});
				$(this).parent().children('.jd').fadeIn().animate({left:'-50%',top:'50%'},function(){
					$(this).hover(function(){
					$(this).siblings().off('click')
					$(this).stop().animate({top:'49%'}).css({zIndex:20}).click(function(){
						$(this).off('click');
						that.scord=0;
						that.gk=1;
						that.life=5;
						that.num=2;
						that.tiaojian=5;
						$('.pass').fadeOut();
						$('.scord').text('得分：0');
						$('.gk').text('关卡：1');
						$('.life').html('');
						for (var i = 0; i < that.life; i++) {
							that.creatSM();
						};
						$('.rw').css({'background-image':'url(img/G1.png) '});
						$('.scene,.scene2').css({'background-image':'url(img/lt.jpg)'});
						$('.next').remove();
						that.play();
						
					});

				},function(){
					$(this).stop().animate({top:'50%'}).css({zIndex:0});
				})
				}).mousedown(function(e){e.preventDefault()});
				$(this).parent().children('.kn').fadeIn().animate({left:0,top:'-50%'},function(){
					$(this).hover(function(){
					$(this).siblings().off('click')
					$(this).stop().animate({top:'-51%'}).css({zIndex:20}).click(function(){
						$(this).off('click');
						that.scord=0;
						that.gk=1;
						that.life=5;
						that.num=4;
						that.tiaojian=20;
						$('.pass').fadeOut();
						$('.scord').text('得分：0');
						$('.gk').text('关卡：1');
						$('.life').html('');
						for (var i = 0; i < that.life; i++) {
							that.creatSM();
						};
						$('.rw').css({'background-image':'url(img/G1.png) '});
						$('.scene,.scene2').css({'background-image':'url(img/lt.jpg)'});
						$('.next').remove();
						that.play();
							
					});

				},function(){
					$(this).stop().animate({top:'-50%'}).css({zIndex:0});
				})
				}).mousedown(function(e){e.preventDefault()});
			
		});
	},
	success:function(){
		var that=this;
		$('<div class="next"></div>').css({
			width:'150px',
			height:'150px',
			position:'absolute',
			top:'53%',
			'line-height':'150px',
			color:'#666',
			left:0,
			right:0,
			margin:'auto',
			'background-image':'url(img/yun.png) ',
			'background-repeat':'no-repeat',
			'background-size':'contain',
			'font-size':'16px',
			cursor: 'pointer'
		}).appendTo('.pass').text('开始游戏');

	}



}
$.fn.extend({
	weiqil:function(){
		 return this.each(function(ind,obj) { 
		 	var num=1;
		 	$(obj).attr('src','img/weiqi'+num+'.png').animate({bottom:(num*2)+'00%',right:-num+'00%'},3000)
		 	var t=setInterval(function(){
		 		num++
		 		$(obj).attr('src','img/weiqi'+num+'.png').animate({bottom:(num*2)+'00%',right:-num+'00%'},3000)
		 		if(num==4){
		 			clearInterval(t);
		 		}
		 	},3000);

		 });

	}
})
$.fn.extend({
	weiqir:function(){
		 return this.each(function(ind,obj) { 
		 	var num=1;
		 	$(obj).attr('src','img/weiqi'+num+'.png').animate({bottom:(num*2)+'00%',left:-num+'00%'},3000);
		 	var t=setInterval(function(){
		 		num++
		 		$(obj).attr('src','img/weiqi'+num+'.png').animate({bottom:(num*2)+'00%',left:-num+'00%'},3000)
		 		if(num==4){
		 			clearInterval(t);
		 		}
		 	},3000);

		 });

	}
})

$.fn.extend({
	weiqilgj:function(){
		 return this.each(function(ind,obj) { 
		 	var num=1;
		 	$(obj).attr('src','img/weiqi'+num+'.png').animate({bottom:(num*4)+'00%',right:-num+'00%'},4000);
		 	var t=setInterval(function(){
		 		num++
		 		$(obj).attr('src','img/weiqi'+num+'.png').animate({bottom:(num*4)+'00%',right:-num+'00%'},4000)
		 		if(num==4){
		 			clearInterval(t);
		 		}
		 	},4000);

		 });

	}
})
$.fn.extend({
	weiqirgj:function(){
		 return this.each(function(ind,obj) { 
		 	var num=1;
		 	$(obj).attr('src','img/weiqi'+num+'.png').animate({bottom:(num*4)+'00%',left:-num+'00%'},4000);
		 	var t=setInterval(function(){
		 		num++
		 		$(obj).attr('src','img/weiqi'+num+'.png').animate({bottom:(num*4)+'00%',left:-num+'00%'},4000)
		 		if(num==4){
		 			clearInterval(t);
		 		}
		 	},4000);

		 });

	}
})
