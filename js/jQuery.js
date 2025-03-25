
var redimensionar = $('#preview').croppie({

    enableExif: true,

    enableOrientation: true,

    viewport: {
        width: 160,
        height: 160,
        type: 'square'
    },

    boundary: {
        width: 160,
        height: 160
    },
}); 

$('#fileImg').on('change', function(){
    var reader = new FileReader();

    reader.onload = function(e){
        redimensionar.croppie('bind', {
            url: e.target.result
        });
    }

    reader.readAsDataURL(this.files[0]);
});

$('.btn-upload-imagem').on('click', function(){
    redimensionar.croppie('result', {
        type: 'canvas',
        size: 'viewport'
    }).then(function (img){
        $.ajax({
            url: "upload.php",
            type: "POST",
            data: {
                "fileImg": img
            },
        })
    });
});