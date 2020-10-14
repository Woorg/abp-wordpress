{{--
  Title: Contacts
  Category: common
  Mode: edit
  Align: full
  PostTypes: page post
  SupportsAlign: full
  SupportsMode: false
  SupportsMultiple: false
--}}

<section id="contacts" class="contacts">
  <div class="contacts__container container">
    <h2 class="contacts__title title">{{ the_field( 'title' ) }}</h2>
    {{ do_shortcode(the_field( 'form' )) }}
  </div>

</section>