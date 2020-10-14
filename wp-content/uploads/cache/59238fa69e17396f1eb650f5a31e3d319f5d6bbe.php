


<section id="mission" class="mission">
  <div class="mission__container container">
    <div class="mission__w">
      <h2 class="mission__title title"><?php echo e(the_field( 'title' )); ?></h2>
      <div class="mission__text wysiwyg">
        <?php echo e(the_field( 'text' )); ?>

      </div>
    </div>
  </div>
  <?php
    $image_mob_webp = get_field( 'image_mob_webp' );
    $image_tablet_webp = get_field( 'image_tablet_webp' );
    $image_desktop_webp = get_field( 'image_desktop_webp' );

    $image_mob_jpg = get_field( 'image_mob_jpg' );
    $image_tablet_jpg = get_field( 'image_tablet_jpg' );
    $image_desktop_jpg = get_field( 'image_desktop_jpg' );

  ?>
  <picture class="mission__bg">
    <source type="image/webp" media="(min-width:1200px)" data-srcset="<?php echo e($image_desktop_webp['url']); ?>">
    <source type="image/webp" media="(min-width:600px)" data-srcset="<?php echo e($image_tablet_webp['url']); ?>">
    <source type="image/webp" media="(min-width:300px)" data-srcset="<?php echo e($image_mob_webp['url']); ?>">

    <source type="image/jpeg" media="(min-width:1200px)" data-srcset="<?php echo e($image_desktop_jpg['url']); ?>">
    <source type="image/jpeg" media="(min-width:600px)" data-srcset="<?php echo e($image_tablet_jpg['url']); ?>">
    <source type="image/jpeg" media="(min-width:300px)" data-srcset="<?php echo e($image_mob_jpg['url']); ?>">

    <img class="lazy" data-srcset="<?php echo e($image_mob_jpg['url']); ?> 300w, <?php echo e($image_tablet_jpg['url']); ?> 600w <?php echo e($image_desktop_jpg['url']); ?> 1200w" alt="<?php echo e($image_desktop_jpg['alt']); ?>">
  </picture>

</section>