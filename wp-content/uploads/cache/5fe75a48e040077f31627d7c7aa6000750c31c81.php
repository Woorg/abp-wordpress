<div class="page__bottom">
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__row flex">

        <div class="footer__col">
          <a class="footer__logo logo logo_second" href="<?php echo e(home_url('/')); ?>">
            <svg class="logo__icon" width="189px" height="67px">
                <use xlink:href="<?php echo e(svg_sprite_paths()); ?>#logo-w"></use>
            </svg>
          </a>
        </div>

        <div class="footer__col">


          <nav class="footer__nav nav-sec">
            <?php echo wp_nav_menu(['theme_location' => 'menu-2', 'menu_id' => '', 'container' => '', 'menu_class' => 'nav-sec__list flex', 'before' => '', 'after' => '', 'link_before' => '', 'link_after' => '']); ?>


          </nav>

        </div>

        <div class="footer__col">

          <nav class="footer__nav-sec nav-sec nav-sec_second">
            <?php echo wp_nav_menu(['theme_location' => 'menu-3', 'menu_id' => '', 'container' => '', 'menu_class' => 'nav-sec__list', 'before' => '', 'after' => '', 'link_before' => '', 'link_after' => '']); ?>


          </nav>

        </div>
      </div>
      <div class="footer__copyright">@ 2010 - <?php echo e(date('Y')); ?> <?php echo e(bloginfo('name')); ?></div>

    </div>
  </footer>
</div>

<div id="cookie" class="cookies page__cookies">
  <div class="cookies__container container flex">
    <div class="cookies__text"><?php echo e(the_field( 'cookie_text', 'option' )); ?>


    <?php $use_of_cookies_link = get_field( 'use_of_cookies_link', 'option' ); ?>
    <?php if($use_of_cookies_link): ?>
    <a class="cookies__link" href="<?php echo e($use_of_cookies_link); ?>">use of cookies</a>
    <?php endif; ?>
    </div>
    <button class="cookies__close">
      <svg class="cookies__close-icon" width="13px" height="13px"><use xlink:href="<?php echo e(svg_sprite_paths()); ?>#close-icon"></use></svg>
    </button>
  </div>
</div>