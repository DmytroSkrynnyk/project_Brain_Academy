$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
    
        $("#clickme1").click(function () {
            $(".target1").removeClass("active");
            $(this).addClass("active");
            $('html, body').animate({
                scrollTop: $("#wrap1").offset().top +10
            }, 2000);
            return false;
        });
        $("#clickme2").click(function () {
            $(".target2").removeClass("active");
            $(this).addClass("active");
            $('html, body').animate({
                scrollTop: $("#form_target").offset().top +10
            }, 2000);
            return false;
        });
        $("#clickme3").click(function () {
            $(".target3").removeClass("active");
            $(this).addClass("active");
            $('html, body').animate({
                scrollTop: $("#form_target").offset().top +10
            }, 2000);
            return false;
        });
        $("#clickme4").click(function () {
            $(".target4").removeClass("active");
            $(this).addClass("active");
            $('html, body').animate({
                scrollTop: $("#form_target").offset().top +10
            }, 2000);
            return false;
        });
        $("#clickme5").click(function () {
            $(".target5").removeClass("active");
            $(this).addClass("active");
            $('html, body').animate({
                scrollTop: $("#form_target").offset().top +10
            }, 2000);
            return false;
        });
        $("#clickme6").click(function () {
            $(".target6").removeClass("active");
            $(this).addClass("active");
            $('html, body').animate({
                scrollTop: $("#form_target").offset().top +10
            }, 2000);
            return false;
        });
        $("#clickme7").click(function () {
            $(".target7").removeClass("active");
            $(this).addClass("active");
            $('html, body').animate({
                scrollTop: $("#form_target").offset().top +10
            }, 2000);
            return false;
        });

       $("#form_callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$("#form_callback").trigger("reset");
			$("#modal_callback a.md-close")[0].click();
			$("#call_ok")[0].click();
		});
		return false;
	});
    $("#form_one").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$("#form_one").trigger("reset");
			$("#call_ok")[0].click();
		});
		return false;
	});

});
