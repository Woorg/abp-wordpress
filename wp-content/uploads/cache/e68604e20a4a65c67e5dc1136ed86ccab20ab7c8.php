


<section id="story" class="story">
  <div class="story__container container">
    <h2 class="story__title title"><?php echo e(the_field( 'title' )); ?></h2>

    <?php if( have_rows( 'timeline' ) ): ?>

    <div class="story__timeline flex">
      <?php while( have_rows( 'timeline' ) ): ?> <?php the_row();  ?>

      <div class="story__item">
        <div class="story__item-w">
          <div class="story__item-text"><?php echo e(the_sub_field( 'text' )); ?></div>
          <svg class="story__item-arrow" width="80" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M-110-252V-.527H-.514c1.195 0 2.378 0 3.562.113 15.806.867 29.837 7.8 36.508 18.129l1.15 1.785 1.152-1.785C48.53 7.377 62.55.487 78.366-.414a60.5 60.5 0 013.561-.113H185V-252h-295z" fill="#E5E5EE"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h80v19H0z"/></clipPath></defs></svg>
        </div>
        <span class="story__item-dotted"></span>
        <span class="story__item-dot"></span>


        <div class="story__year"><?php echo e(the_sub_field( 'year' )); ?></div>
      </div>

      <?php endwhile; ?>



    </div>
    <?php endif; ?>

    

  </div>
</section>