$(function(){
    $('#ustava p').hide();
    $('#ustava h5').hide();
    $('#ustava ul').hide();
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
                $(obj).find('img').css({'border':'3px solid green'}); 
            } else {
                $(obj).find('img').css({'border':'3px solid red'});
            }
        });        
    });

    var odkazy = $('#odkazy ul');
    atleti.forEach(function(obj, idx){
        odkazy.append('<li><a href="'+obj.link+'" target="_blank">'
        +obj.name+'</a></li>');
    });

    var i = 0;
    window.setInterval(function(){
        $('#zajimavosti div.row img').attr('src','jpg/'+zajimavosti[i].photo);
        $('#zajimavosti div.row h2').text(zajimavosti[i].title);
        i<zajimavosti.length-1 ? i++ : i=0; 
    }, 10000);

    var a = 0;
    window.setInterval(function(){
        $('#perlicky div.row h4').text(perlicky[a].title);
        $('#perlicky div.row p').text(perlicky[a].text);
        a<perlicky.length-1 ? a++ : a=0; 
    }, 15000);

    $("#Tabulka").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#atleti tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });

      $(function(){
        $('h2').text('Olympijské místa');
        $('.mapa').attr({'style':'fill:rgba(255,0,0,0.5);stroke:black'});

        $('.mapa').on('click',function(){
            $('.mapa').attr({'style':'fill:rgba(255,0,0,0.5);stroke:black'});
            $(this).attr({'style':'fill:rgba(255,50,255,0.7);stroke:black'});
            $('#text h2').text($(this).data('nazev'));
            $('#text p').text($(this).data('popis'));
            $('#text img').attr('src',$(this).data('img'));
        })
    })

})
