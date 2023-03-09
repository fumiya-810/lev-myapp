<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>Blog</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        
        <!-- jsファイル、jQueryの読み込み-->

       <!--<script type="module" src="{{ asset('/js/index.js')}}"></script>-->
    </head>
    <body>
    <div id="map" style="height:500px">
    </div>
   
   <!-- currentLocation.jsに渡したい変数や配列の処理 -->
    <script>
        // currentLocation.jsで使用する定数latに、controllerで定義した$latをいれて、currentLocation.jsに渡す
        const lat = '{{$lat}}';
        
        // currentLocation.jsで使用する定数lngに、controllerで定義した$lngをいれて、currentLocation.jsに渡す
        const lng = '{{$lng}}';
        
        let i=0;
        let address_lat=[];//変換した緯度を格納する配列
        let address_lng=[];//変換した経度を格納する配列
        let address_id=[];
        
        //DBから受け取った住所をjsの配列に入れる
        let spot_address=[];
        <?php foreach( $spots as $spot ): ?>
            spot_id[i]='{{$spot->id}}';
            spot_address[i]='{{$spot->address}}';//spot_addressには問題なく住所を格納できている
            i++;
        <?php endforeach; ?>
        
        //住所を座標に変更
       // codeAddress();
    </script>
<input type="button" value="ジオコーディン" onclick="codeAddress(spot_address[0])" style="height:30px">
    <!-- {{--    上記の処理をしてから、googleMapを読み込まないとエラーが出てくる--}} -->
    
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPbum-1zCfQ-5MckvI65yLGuBHgvA0w5c&callback=initMap&v=weekly"
      defer
    ></script>

        <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
        <script src="{{ asset('/js/setLocation.js') }}"></script>
        <script src="{{ asset('/js/currentLocation.js') }}"></script>

    </br>
    @foreach($spots as $post)
      <a href="/posts/{{ $post->id }}">address:{{$post->address}}</a>
      <p>body:{{ $post->body}}</p>
    @endforeach
    
    </body>
</html>