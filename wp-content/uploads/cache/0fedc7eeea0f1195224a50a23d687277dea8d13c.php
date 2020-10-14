<header class="header">
  <div class="header__container container">
    <div class="header__top flex">
      <a class="header__logo logo" href="<?php echo e(home_url('/')); ?>">
        <svg class="logo__icon" width="79px" height="67px">
          <use xlink:href="<?php echo e(svg_sprite_paths()); ?>#logo"></use>
        </svg>
      </a>

        <?php if(has_nav_menu('menu-1')): ?>
        <nav class="nav header__nav">
          <button class="nav__trigger">
            <svg class="nav__icon_open" width="22px" height="22px">
              <use xlink:href="<?php echo e(svg_sprite_paths()); ?>#menu-icon"></use>
            </svg>

            <svg class="nav__icon_close" width="23px" height="23px">
              <use xlink:href="<?php echo e(svg_sprite_paths()); ?>#menu-close"></use>
            </svg>

          </button>

            <?php echo wp_nav_menu(['theme_location' => 'menu-1', 'menu_id' => '', 'container' => '', 'menu_class' => 'nav__list flex', 'before' => '', 'after' => '', 'link_before' => '', 'link_after' => '']); ?>


        </nav>
        <?php endif; ?>
    </div>

    <div class="header__body">
      <h1 class="header__title"><span>International  publishing house</span>Thousands of stories<span>Hear yours</span></h1>
      <dl class="header__stats">
        <div class="header__stats-item">
          <dt class="header__stats-term">700+</dt>
          <dd class="header__stats-desc"> titles in the catalogue</dd>
        </div>
        <div class="header__stats-item">
          <dt class="header__stats-term">17000+</dt>
          <dd class="header__stats-desc">reviews at Audible</dd>
        </div>
      </dl>

    </div>

  </div>



  <?php if(have_rows( 'slider' ) ): ?>

  <div class="header__slider">
    <?php while( have_rows( 'slider' ) ): ?> <?php the_row(); ?>
    <div class="header__slider-item">
      <?php
        $mob_webp = get_sub_field( 'mob_webp' );
        $tablet_webp = get_sub_field( 'tablet_webp' );
        $desktop_webp = get_sub_field( 'desktop_webp' );
        $mob_jpg = get_sub_field( 'mob_jpg' );
        $tablet_jpg = get_sub_field( 'tablet_jpg' );
        $desktop_jpg = get_sub_field( 'desktop_jpg' );
      ?>
      <picture class="header__slider-image">
        <source type="image/webp" media="(min-width:1200px)" data-srcset="<?php echo e($desktop_webp['url']); ?>">
        <source type="image/webp" media="(min-width:600px)" data-srcset="<?php echo e($tablet_webp['url']); ?>">
        <source type="image/webp" media="(min-width:300px)" data-srcset="<?php echo e($mob_webp['url']); ?>">
        <source type="image/jpeg" media="(min-width:1200px)" data-srcset="<?php echo e($desktop_jpg['url']); ?>">
        <source type="image/jpeg" media="(min-width:600px)" data-srcset="<?php echo e($tablet_jpg['url']); ?>">
        <source type="image/jpeg" media="(min-width:300px)" data-srcset="<?php echo e($mob_jpg['url']); ?>">
        <img class="lazy" data-srcset="<?php echo e($mob_jpg['url']); ?> 300w, <?php echo e($tablet_jpg['url']); ?> 600w, <?php echo e($desktop_jpg['url']); ?> 1200w" alt="<?php echo e($mob_webp['alt']); ?>">
      </picture>
    </div>
    <?php endwhile; ?>

  </div>
  <?php endif; ?>
</header>