<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>Blog</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- maps javascript api テスト -->        
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

    <!-- cssは正常に読み込めている -->
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/style.css') }}" />
  </head>

    </head>
    <body>
    <div class="content">
        <form action="/posts" method="POST">
            @csrf
            <div class="title">
                <h2>住所</h2>
                <input type="text" name="post[address]" placeholder="住所"/>
            </div>
            <div class="body">
                <h2>説明文など</h2>
                <textarea name="post[body]" placeholder="場所の説明（営業日など）"></textarea>
            </div>
            <input type="submit" value="store"/>
        </form>
    </div>

    <div id="map"></div>

    {!! Form::open(['route' => 'posts.currentLocation','method' => 'get']) !!}
    {{--隠しフォームでresult.currentLocationに位置情報を渡す--}}
    {{--lat用--}}
    {!! Form::hidden('lat','lat',['class'=>'lat_input']) !!}
    {{--lng用--}}
    {!! Form::hidden('lng','lng',['class'=>'lng_input']) !!}
    {{--setlocation.jsを読み込んで、位置情報取得するまで押せないようにdisabledを付与し、非アクティブにする。--}}
    {{--その後、disableはfalseになるようにsetlocation.js内に記述した--}}
    {!! Form::submit("戻る", ['class' => "btn btn-success btn-block",'disabled']) !!}
    {!! Form::close() !!}

    <!-- jQueryの読み込み-->
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    
    <script type="module" src="{{ asset('/js/create.js')}}"></script>
    <script src="{{ asset('/js/setLocation.js') }}"></script> 
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPbum-1zCfQ-5MckvI65yLGuBHgvA0w5c&callback=initMap&v=weekly"
      defer
    ></script>



</html>