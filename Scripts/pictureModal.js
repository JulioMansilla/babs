$(".carousel-img").on("click", function(event) {
	var carouselImageSource = event.currentTarget.src;
	$("#modalImage").attr("src", carouselImageSource);
	console.log(document.getElementById("pictureModal"));
});

$("#pictureModal").on("click", function(event) {
	$("#pictureModal").modal("hide");
});
