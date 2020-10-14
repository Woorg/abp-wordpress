<?php $__env->startSection('content'); ?>
  <div class="articles container">
    <?php while(have_posts()): ?> <?php the_post() ?>
      <?php echo $__env->make('partials.page-header', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
      <div class="wysiwyg">
        <?php echo $__env->make('partials.content-page', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
      </div>
    <?php endwhile; ?>
  </div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app-inner', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>