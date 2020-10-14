{{--
  Title: Книги
  Category: common
  Mode: edit
  Align: full
  PostTypes: page post
  SupportsAlign: full
  SupportsMode: false
  SupportsMultiple: false
--}}

<section id="books" class="books">
  <div class="books__container container">
    <h2 class="books__title title">{{ the_field( 'title' ) }}</h2>
    <div class="books__text">{{ the_field( 'text' ) }}</div>

    @if ( have_rows( 'cats' ) )
    <div class="books__categories flex">
      @while (have_rows( 'cats' ) ) @php the_row(); @endphp

        @php
          $image_webp = get_sub_field( 'image_webp' );
          $image_jpg = get_sub_field( 'image_jpg' );
        @endphp
      <div class="books__category">
        <div class="books__gradient"></div>

        <picture class="books__picture">
          <source srcset="{{ $image_webp['url'] }}" type="image/webp">
            <img src="{{ $image_jpg['url'] }}" alt="{{ $image_jpg['alt'] }}">
        </picture>

        <div class="books__banner" style="background-color: {{ the_sub_field( 'bg_color' ) }};">
          <div class="books__banner-title">{{ the_sub_field( 'cat_title' ) }}</div>
          <div class="books__banner-text">{{ the_sub_field( 'cat_desc' ) }}</div>
          <svg class="books__banner-badge" width="153" height="20" viewBox="0 0 153 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-49 -289V-0.717712L32.5066 -0.830383C33.8102 -0.830383 35.1021 -0.830353 36.394 -0.717712C53.6468 0.148865 68.9617 7.08148 76.2433 17.4111L77.5 19.1963L78.7567 17.4111C86.0383 7.07285 101.341 0.183533 118.606 -0.717712C119.886 -0.787048 121.19 -0.830383 122.493 -0.830383L538 -0.717712V-289H-49Z" fill="{{ the_sub_field( 'bg_color' ) }}" /></svg>

        </div>
        <div class="books__cat-w">
          <div class="books__cat-title books__cat-title_horizontal">{{ the_sub_field( 'cat_title' ) }}</div>
          <div class="books__cat-title books__cat-title_vertical">{{ the_sub_field( 'cat_title' ) }}</div>

        </div>


      </div>
      @endwhile
    </div>
    @endif

  </div>
</section>