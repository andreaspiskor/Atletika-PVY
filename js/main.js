$(function(){
    $('#ustava p').hide();
    $('#ustava h5').hide();
    $('#ustava li').hide();
    $('#ustava h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'lightblue'});
        } else {
            $(this).css({'background-color':'blue'});
        }
        $(this).nextUntil('h4').toggle(500);
    });

    var kviz = $('#kviz div.row');
    atleti.forEach(function(obj, idx){
        console.log(obj.photo);
        kviz.append('<div class="col-sm-4"><figure id="'+idx+'"><img src="jpg/atlet0.jpg" alt="Atlet"><figcaption>'
        +obj.name+'</figcaption></figure></div>');
    });

    var photo = $('#kviz img');
    photo.on('click',function(){
        var index = Math.floor(Math.random()*atleti.length);
        $(this).attr('src','jpg/'+atleti[index].photo)
               .attr('alt',atleti[index].name);
    });

    var check = $('#kviz .btn-success');
    check.on('click', function(){
        $('#kviz figure').each(function(idx,obj){
            var figcaption = $(obj).find('figcaption').text();
            var alt = $(obj).find('img').attr('alt');
            if (figcaption == alt) {
                $(obj).find('img').css({'border':'2px solid green'}); 
            } else {
                $(obj).find('img').css({'border':'2px solid red'});
            }
        });        
    });

    var odkazy = $('#odkazy ul');
    atleti.forEach(function(obj, idx){
        odkazy.append('<li><a href="'+obj.link+'" target="_blank">'
        +obj.name+'</a></li>');
    });

})