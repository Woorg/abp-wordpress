@extends('layouts.app-inner')

@section('content')
  <div class="articles container">
    @while(have_posts()) @php the_post() @endphp
      @include('partials.page-header')
      <div class="wysiwyg">
        @include('partials.content-page')
      </div>
    @endwhile
  </div>

@endsection
