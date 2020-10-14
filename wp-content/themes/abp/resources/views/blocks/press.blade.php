{{--
  Title: Press
  Category: common
  Mode: edit
  Align: full
  PostTypes: page post
  SupportsAlign: full
  SupportsMode: false
  SupportsMultiple: false
--}}


<section id="press-room" class="press">
  <div class="press__container container">
    <h2 class="press__title title">{{ the_field( 'title' ) }}</h2>
    <div class="press__slider-w">

      @php $press = get_field( 'press' ); @endphp
      @if ($press)

      <div class="press__slider">
        @foreach ( $press as $post ) @php setup_postdata ( $post ); @endphp

        <div class="press__slide">
          <div class="press__slide-w">
            <div class="press__date">{{ get_post_time( 'd/m/Y' ) }}</div>
            <div class="press__slide-title"><a class="press__link" href="{{ get_the_permalink($post->ID) }}">{{ get_the_title($post->ID) }}</a></div>
            <div class="press__text">{{ $post->post_excerpt }}</div><a class="press__more" href="{{ get_the_permalink($post->ID) }}">See more</a>
          </div>
        </div>
        @endforeach

      </div>
      @endif

      <button class="press__arrow press__arrow_back">
    <svg class="press__arrow-icon" width="46px" height="46px">
        <use xlink:href="{{ svg_sprite_paths() }}#arrow"></use>
    </svg>

      </button>
      <button class="press__arrow press__arrow_next">
    <svg class="press__arrow-icon" width="46px" height="46px">
        <use xlink:href="{{ svg_sprite_paths() }}#arrow"></use>
    </svg>

      </button>
    </div>
  </div>
</section>