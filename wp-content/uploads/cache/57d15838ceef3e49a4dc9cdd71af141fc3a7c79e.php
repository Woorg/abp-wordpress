

<section id="contacts" class="contacts">
  <div class="contacts__container container">
    <h2 class="contacts__title title"><?php echo e(the_field( 'title' )); ?></h2>
    <?php echo e(do_shortcode(the_field( 'form' ))); ?>

  </div>

</section>