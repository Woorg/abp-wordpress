<?php

    // Add style attributes

    // function abp_app_style_add_attributes( $html, $handle ) {
    //     if ( 'main-prod' === $handle ) {
    //         return str_replace( "media='all'", "media='print' onload=this.media='all'", $html );
    //     }
    //     else if ('main-dev' === $handle) {
    //         return str_replace("media='all'", "media='print' onload=this.media='all'", $html);
    //     }

    //     else if ('wp-block-library' === $handle) {
    //         return str_replace("media='all'", "media='print' onload=this.media='all'", $html);
    //     }
    //     else if ('contact-form-7' === $handle) {
    //         return str_replace("media='all'", "media='print' onload=this.media='all'", $html);
    //     }

    //     return $html;
    //   }
    // add_filter( 'style_loader_tag', 'abp_app_style_add_attributes', 10, 2 );


    // function _remove_script_version( $src ){
    //     $parts = explode( '?ver', $src );
    //     return $parts[0];
    // }

    // add_filter( 'style_loader_src', '_remove_script_version', 15, 1 );
    // add_filter( 'script_loader_src', '_remove_script_version', 15, 1 );


    // Change nav item class

    function abp_add_additional_class_on_li($classes, $item, $args)
    {
        if ($args->theme_location === 'menu-1'):
            $classes[] = 'nav__item';
        elseif ($args->theme_location === 'menu-2'):
            $classes[] = 'nav-sec__item';
        elseif ($args->theme_location === 'menu-3') :
            $classes[] = 'nav-sec__item';
        endif;
        return $classes;
    }
    add_filter('nav_menu_css_class', 'abp_add_additional_class_on_li', 1, 3);


    // Change nav link class

    function abp_filter_nav_menu_link_attributes($atts, $item, $args, $depth)
    {
        if ($args->theme_location === 'menu-1') :
            $atts['class'] = 'nav__link';
        elseif ($args->theme_location === 'menu-2') :
            $atts['class'] = 'nav-sec__link';
        elseif ($args->theme_location === 'menu-3') :
            $atts['class'] = 'nav-sec__link';
        endif;
        return $atts;
    }
    add_filter('nav_menu_link_attributes', 'abp_filter_nav_menu_link_attributes', 10, 4);


    // ACF

    if (function_exists('acf_add_options_page')) {

        acf_add_options_page(
            array(
            'page_title' => 'Настройки abp',
            'menu_title' => 'Настройки abp',
            'menu_slug' => 'theme-settings',
            'capability' => 'edit_posts',
            'icon_url' => 'dashicons-admin-settings',
            'redirect' => false
            )
        );
    }

    // Contacts form 7

    // add_filter('wpcf7_form_elements', function ($content) {
    //     $content = preg_replace('/<(span).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);

    //     return $content;
    // });





    // Parth to svg sprite

    function svg_sprite_paths() {

        $path = get_template_directory_uri() . '/front/static/prod/assets/images/general/sprite.svg';
        return $path;
    }


    // Parth to fonts

    function fonts_paths()
    {

        $path = get_template_directory_uri() . '/front/static/prod/assets/fonts';
        return $path;
    }

    // Excerpt length

    add_filter('excerpt_length', function () {
        return 35;
    });

    // Excerpt more

    /**
     * Обрезка текста (excerpt). Шоткоды вырезаются. Минимальное значение maxchar может быть 22.
     *
     * @param string/array $args Параметры.
     *
     * @return string HTML
     *
     * @ver 2.6.5
     */
    function abp_excerpt($args = '')
    {
        global $post;

        if (is_string($args))
            parse_str($args, $args);

        $rg = (object) array_merge(array(
            'maxchar'     => 350,   // Макс. количество символов.
            'text'        => '',    // Какой текст обрезать (по умолчанию post_excerpt, если нет post_content.
            // Если в тексте есть `<!--more-->`, то `maxchar` игнорируется и берется
            // все до <!--more--> вместе с HTML.
            'autop'       => true,  // Заменить переносы строк на <p> и <br> или нет?
            'save_tags'   => '',    // Теги, которые нужно оставить в тексте, например '<strong><b><a>'.
            'more_text'   => 'Читать дальше...', // Текст ссылки `Читать дальше`.
            'ignore_more' => false, // нужно ли игнорировать <!--more--> в контенте
        ), $args);

        $rg = apply_filters('kama_excerpt_args', $rg);

        if (!$rg->text)
            $rg->text = $post->post_excerpt ?: $post->post_content;

        $text = $rg->text;
        // убираем блочные шорткоды: [foo]some data[/foo]. Учитывает markdown
        $text = preg_replace('~\[([a-z0-9_-]+)[^\]]*\](?!\().*?\[/\1\]~is', '', $text);
        // убираем шоткоды: [singlepic id=3]. Учитывает markdown
        $text = preg_replace('~\[/?[^\]]*\](?!\()~', '', $text);
        $text = trim($text);

        // <!--more-->
        if (!$rg->ignore_more  &&  strpos($text, '<!--more-->')) {
            preg_match('/(.*)<!--more-->/s', $text, $mm);

            $text = trim($mm[1]);

            $text_append = ' <a href="' . get_permalink($post) . '#more-' . $post->ID . '">' . $rg->more_text . '</a>';
        }
        // text, excerpt, content
        else {
            $text = trim(strip_tags($text, $rg->save_tags));

            // Обрезаем
            if (mb_strlen($text) > $rg->maxchar) {
                $text = mb_substr($text, 0, $rg->maxchar);
                $text = preg_replace('~(.*)\s[^\s]*$~s', '\\1...', $text); // кил последнее слово, оно 99% неполное
            }
        }

        // сохраняем переносы строк. Упрощенный аналог wpautop()
        if ($rg->autop) {
            $text = preg_replace(
                array("/\r/", "/\n{2,}/", "/\n/",   '~</p><br ?/?>~'),
                array('',     '</p><p>',  '<br />', '</p>'),
                $text
            );
        }

        $text = apply_filters('kama_excerpt', $text, $rg);

        if (isset($text_append))
            $text .= $text_append;

        return ($rg->autop && $text) ? "<p>$text</p>" : $text;
    }



    // Allow svg upload

    /**
     * Sets the extension and mime type for .webp files.
     *
     * @param array  $wp_check_filetype_and_ext File data array containing 'ext', 'type', and
     *                                          'proper_filename' keys.
     * @param string $file                      Full path to the file.
     * @param string $filename                  The name of the file (may differ from $file due to
     *                                          $file being in a tmp directory).
     * @param array  $mimes                     Key is the file extension with value as the mime type.
     */
    function abp_file_and_ext_webp($types, $file, $filename, $mimes)
    {
        if (false !== strpos($filename, '.webp')) {
            $types['ext'] = 'webp';
            $types['type'] = 'image/webp';
        }

        return $types;
    }
    add_filter('wp_check_filetype_and_ext', 'abp_file_and_ext_webp', 10, 4);

    /**
     * Adds webp filetype to allowed mimes
     *
     * @see https://codex.wordpress.org/Plugin_API/Filter_Reference/upload_mimes
     *
     * @param array $mimes Mime types keyed by the file extension regex corresponding to
     *                     those types. 'swf' and 'exe' removed from full list. 'htm|html' also
     *                     removed depending on '$user' capabilities.
     *
     * @return array
     */

    function abp_mime_types_webp($mimes)
    {
        $mimes['webp'] = 'image/webp';

        return $mimes;
    }
    add_filter('upload_mimes', 'abp_mime_types_webp');