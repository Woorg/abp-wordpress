

<section id="global" class="global">
  <div class="global__container container">
    <h2 class="global__title title"><?php echo e(the_field( 'title' )); ?></h2>
    <div class="global__row flex">

      <div class="global__col">
        <h3 class="global__col-title">Branches</h3>
        <?php if(have_rows( 'branches' )): ?>
        <?php $i = 0; ?>
        <ul class="global__langs">
          <?php while(have_rows( 'branches' )): ?> <?php the_row(); $i++; ?>
          <li class="global__lang flex">
            <a href="<?php echo e(the_sub_field( 'branch_link' )); ?>" class="global__link flex">
              <svg class="global__icon" width="65px" height="44px"><use xlink:href="<?php echo e(svg_sprite_paths()); ?>#lang-<?php echo e($i); ?>"></use></svg>
              <div class="global__lang-title"><?php echo e(the_sub_field( 'branch' )); ?></div>
            </a>
          </li>
          <?php endwhile; ?>
        </ul>
        <?php endif; ?>
      </div>


      <div class="global__col">

        <h3 class="global__col-title">View on Audible</h3>

        <?php if(have_rows( 'view_on_audible' ) ): ?>
          <?php $c = 3; ?>
        <ul class="global__langs">
          <?php while(have_rows( 'view_on_audible' )): ?> <?php the_row(); $c++; ?>

          <li class="global__lang flex">
            <a href="<?php echo e(the_sub_field( 'link' )); ?>" class="global__link flex">
              <svg class="global__icon" width="65px" height="43px">
                <use xlink:href="<?php echo e(svg_sprite_paths()); ?>#lang-<?php echo e($c); ?>"></use></svg>
              <div class="global__lang-title"><?php echo e(the_sub_field( 'lang' )); ?></div>
            </a>
          </li>

          <?php endwhile; ?>
        </ul>
        <?php endif; ?>
      </div>

    </div>
  </div>
</section>
