@extends('layouts.app-inner')

@section('content')
  <section class="articles container">
    @while(have_posts()) @php the_post() @endphp
      @include('partials.content-single-'.get_post_type())
    @endwhile
  </section>
@endsection
