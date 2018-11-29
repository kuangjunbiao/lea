// 加载图片
function preloader() {
    if (document.images) {
        document.images.lea_author_image1.src = "images/lea_author_image1.jpg";
		document.images.lea_author_image2.src="images/lea_author_image2.jpg";
		document.images.lea_author_image3.src="images/lea_author_image3.jpg";
		$("#lea_author_image4").attr("src","images/lea_author_image4.jpg");
		//$("#courses-image1").attr("src","images/courses-image1.jpg");
		//$("#courses-image2").attr("src","images/courses-image2.jpg");
		//$("#courses-image3").attr("src","images/courses-image3.jpg");
		//$("#courses-image4").attr("src","images/courses-image4.jpg");
		//document.images.tst_image1.src="images/tst-image1.jpg";
		//document.images.tst_image2.src="images/tst-image2.jpg";
		//document.images.tst_image3.src="images/tst-image3.jpg";
		//document.images.tst_image4.src="images/tst-image4.jpg";
		document.images.contact_image.src="images/contact-image.jpg";
		document.images.weixin.src="images/weixin.jpg";
		//$("#item_first").addClass("item-first");
		//$("#item_second").addClass("item-second");
		//$("#item_third").addClass("item-third");
		//debugger;
		//$("#item_first").css("background-image","url(images/slider-image1.jpg)");
		//$("#item_second").css("background-image","url(images/slider-image1.jpg)");
		//$("#item_third").css("background-image","url(images/slider-image1.jpg)");
    }
}

// 页面初始化后事件，执行func函数
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

//加载指定国际化资源文件
function loadBundles(lang) {
	jQuery.i18n.properties({
		name:'Messages', 
		path:'bundle/', 
		mode:'both',
		language:lang, 
		callback: function() {
			updateI18n();
		}
	});
}

// 修改国际化信息
function updateI18n(){
	// 语言选择
	fillText("language_ch");
	fillText("language_en");
	
	// 菜单栏
	fillText("menu_home");
	fillText("menu_about");
	fillText("menu_team");
	fillText("menu_courses");
	fillText("menu_testimonial");
	fillText("menu_contact");
	
	// 图片介绍
	fillText("item_first_title");
	fillText("item_first_content");
	fillText("item_first_btn");
	$("#home .owl-item:not(.cloned)").find("#item_second_title").text($.i18n.prop("item_second_title"));
	$("#home .owl-item:not(.cloned)").find("#item_second_content").text($.i18n.prop("item_second_content"));
	$("#home .owl-item:not(.cloned)").find("#item_second_btn").text($.i18n.prop("item_second_btn"));
	$("#home .owl-item:not(.cloned)").find("#item_third_title").text($.i18n.prop("item_third_title"));
	$("#home .owl-item:not(.cloned)").find("#item_third_content").text($.i18n.prop("item_third_content"));
	$("#home .owl-item:not(.cloned)").find("#item_third_btn").text($.i18n.prop("item_third_btn"));
	
	// 特点介绍
	fillText("feature_first_title");
	fillText("feature_first_content");
	fillText("feature_second_title");
	fillText("feature_second_content");
	fillText("feature_third_title");
	fillText("feature_third_content");
	
	// 专业认证
	fillText("profession_title");
	fillText("profession_teacher_title");
	fillText("profession_teacher_content");
	fillText("profession_cert_title");
	fillText("profession_cert_content");
	fillText("profession_free_title");
	fillText("profession_free_content");
	fillText("signup_title");
	$("#signup_full_name").attr("placeholder",$.i18n.prop('signup_full_name'));
	$("#signup_email").attr("placeholder",$.i18n.prop('signup_email'));
	$("#signup_password").attr("placeholder",$.i18n.prop('signup_password'));
	fillText("form_submit");
	
	// 教师简介
	$("#teachers_title").html($.i18n.prop("teachers_title")+"<small>"+$.i18n.prop('teachers_introduction')+"</small>");
	fillText("teacher_first_motto");
	fillText("teacher_second_motto");
	fillText("teacher_third_motto");
	fillText("teacher_fourth_motto");
	
	// 课程介绍
	$("#course_and_time").html($.i18n.prop("course_and_time")+"<small>"+$.i18n.prop('course_introduction')+"</small>");
	fillImg("courses", "course_schedule_cost");
	fillImg("courses", "course_schedule");
	fillImg("courses", "course_schedule_detail");
	fillImg("courses", "one_to_one_cost");
	fillImg("courses", "one_to_one");
	fillImg("courses", "one_to_one_detail");
	fillImg("courses", "group_lesson_cost");
	fillImg("courses", "group_lesson");
	fillImg("courses", "group_lesson_detail");
	fillImg("courses", "after_school");
	fillImg("courses", "after_school_detail");
	
	// 学生评价
	$("#student_review").html($.i18n.prop("student_review")+"<small>"+$.i18n.prop('student_review_detail')+"</small>");
	fillImg("testimonial", "jackson_review");
	fillImg("testimonial", "camila_review");
	fillImg("testimonial", "barbie_review");
	fillImg("testimonial", "andrio_review");
	
	// 联系我们
	$("#contact_us").html($.i18n.prop("contact_us")+"<small>"+$.i18n.prop('contact_us_detail')+"</small>");
	$("#contact_full_name").attr("placeholder",$.i18n.prop('contact_full_name'));
	$("#contact_email").attr("placeholder",$.i18n.prop('contact_email'));
	$("#contact_message").attr("placeholder",$.i18n.prop('contact_message'));
	$("#send_message").val($.i18n.prop('send_message'));

	// 底部
	fillText("headquarter_title");
	fillText("headquarter_address");
	fillText("copyright");
	$("#contact_info_first_title").text($.i18n.prop("contact_info_title"));
	$("#contact_info_second_title").text($.i18n.prop("contact_info_title"));
	fillText("quick_link_title");
	fillText("career");
	fillText("investor");
	fillText("terms");
	fillText("refund");
	fillText("facebook");
	fillText("skype");
	fillText("weixin");
	fillText("news_signup");
	$("#news_email").attr("placeholder",$.i18n.prop('news_email'));
	$("#news_email").attr("placeholder",$.i18n.prop('news_email'));
	$("#news_send_me").val($.i18n.prop('news_send_me'));
	$("#please_note").html("<sup>*</sup>" + $.i18n.prop("please_note"));
}

// 填充信息
function fillText(key){
	$("#"+key).text($.i18n.prop(key));
}

// 滚动图片填充信息
function fillImg(id,key){
	$("#" + id + " .owl-item").find("#"+key).each(function(){
		if(key == 'course_schedule_cost' || key == 'one_to_one_cost' || key == 'group_lesson_cost'){
			$(this).html("<i class='fa fa-clock-o'></i>"+ $.i18n.prop(key));
		}else{
			$(this).text($.i18n.prop(key));
		}
	});
}

// 语言选择多选框，绑定改变事件
$("#lang").change(function() {
	console.log("language change.");
	var selection = $('#lang option:selected').val();
	loadBundles(selection != 'browser' ? selection : null);
});

addLoadEvent(preloader);
// 默认加载中文资源文件
loadBundles('zh');

