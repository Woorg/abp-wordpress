


<section id="press-room" class="press">
  <div class="press__container container">
    <h2 class="press__title title"><?php echo e(the_field( 'title' )); ?></h2>
    <div class="press__slider-w">

      <?php $press = get_field( 'press' ); ?>
      <?php if($press): ?>

      <div class="press__slider">
        <?php $__currentLoopData = $press; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $post): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?> <?php setup_postdata ( $post ); ?>

        <div class="press__slide">
          <div class="press__slide-w">
            <div class="press__date"><?php echo e(get_post_time( 'd/m/Y' )); ?></div>
            <div class="press__slide-title"><a class="press__link" href="<?php echo e(get_the_permalink($post->ID)); ?>"><?php echo e(get_the_title($post->ID)); ?></a></div>
            <div class="press__text"><?php echo e($post->post_excerpt); ?></div><a class="press__more" href="<?php echo e(get_the_permalink($post->ID)); ?>">See more</a>
          </div>
        </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

      </div>
      <?php endif; ?>

      <button class="press__arrow press__arrow_back">
    <svg class="press__arrow-icon" width="46px" height="46px">
        <use xlink:href="<?php echo e(svg_sprite_paths()); ?>#arrow"></use>
    </svg>

      </button>
      <button class="press__arrow press__arrow_next">
    <svg class="press__arrow-icon" width="46px" height="46px">
        <use xlink:href="<?php echo e(svg_sprite_paths()); ?>#arrow"></use>
    </svg>

      </button>
    </div>
  </div>
</section>