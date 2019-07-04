

var map = new BMap.Map("container");
map.centerAndZoom("深圳市", 12);
map.enableScrollWheelZoom();
map.enableContinuousZoom();

map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));

var localSearch = new BMap.LocalSearch(map);
localSearch.enableAutoViewport();
function searchByStationName() {
    map.clearOverlays();
    var keyword = document.getElementsByClassName("text_s")[0].value;
    localSearch.setSearchCompleteCallback(function (searchResult) {
        var poi = searchResult.getPoi(0);
        map.centerAndZoom(poi.point, 13);
        var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));
        map.addOverlay(marker);
        var content = document.getElementsByClassName("text_s")[0].value + "<br/><br/>经度：" + poi.point.lng + "<br/>纬度：" + poi.point.lat;
        var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + content + "</p>");
        marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });
         marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    });
    localSearch.search(keyword);
}

$('.text_s').on('keyup',function(e){
    if(e.keyCode == 13){
        searchByStationName();
    }
})
$('.searchposi').on('click',function(){
    confirm('同学，恭喜你喜提彩蛋，请回答：大舅去二舅家找三舅说四舅被五舅骗去六舅家偷七舅放在八舅柜子里面的1000元。请问，谁是小偷? ');

})

$(function(){
    $('.l_move').onloadAnimate(function(){
        this.addClass('animated fadeInUpSmall');
    },50)
})
