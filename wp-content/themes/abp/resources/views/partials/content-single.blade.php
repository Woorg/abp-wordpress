<article @php post_class() @endphp>

  <header>
    {{-- @include('partials/entry-meta') --}}
    <h1 class="entry-title title">{!! get_the_title() !!}</h1>
  </header>

  <div class="entry-content text wysiwyg">
    @php the_content() @endphp
  </div>
  {{-- @php comments_template('/partials/comments.blade.php') @endphp --}}
</article>
