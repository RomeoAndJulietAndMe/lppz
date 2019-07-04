

$.ajax({
    type:'get',
    url:'../data/JSON/Billboard.json',
    dataType:'json', 
    cache:false,
    success: (res)=>{
            var results='';
            for(var i=0;i<20;i++){
                results+='<tr><td>'+res[i].id+'</td><td>'+res[i].name+'</td><td>'+res[i].review+'</td><td>'+res[i].posted+'</td></tr>';       
            }
            $('.w_rank_data').html(results);  
            $('.w_moredata').click(function(){
                console.log('怎么回事');
                for(var i=20;i<res.length;i++){
                    results+='<tr><td>'+res[i].id+'</td><td>'+res[i].name+'</td><td>'+res[i].review+'</td><td>'+res[i].posted+'</td></tr>';       
                }
                $('.w_rank_list').css(
                    // 'height':'2652px',
                    'overflow','visible'
                );
                $('.w_moredata').remove();

                $('.w_rank_data').html(results);  
            })
  
    }
});
/* $('.w_moredata').click(function(){
    console.log('怎么回事');
    $('.w_rank_list').css(
        // 'height':'2652px',
        'overflow','visible'
    );
    $('.w_moredata').remove();
}) */