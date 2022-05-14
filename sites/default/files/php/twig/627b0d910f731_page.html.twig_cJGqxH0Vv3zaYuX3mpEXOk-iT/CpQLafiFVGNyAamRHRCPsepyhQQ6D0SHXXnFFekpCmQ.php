<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/shoppe_zymphonies_theme/templates/layout/page.html.twig */
class __TwigTemplate_f73fe5a29f7bd9d98583dd9915b4b36b7671bfb82cdfe16675efbb082242ac44 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 60
        echo "

<div class=\"container page-container\">

  <div class=\"top-nav\">
    <div class=\"container\">
      <div class=\"row\">
        <div class=\"col-md-6\">

          ";
        // line 69
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "message", [], "any", false, false, true, 69)) {
            // line 70
            echo "            ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "message", [], "any", false, false, true, 70), 70, $this->source), "html", null, true);
            echo "
          ";
        }
        // line 72
        echo "
          ";
        // line 73
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "email", [], "any", false, false, true, 73)) {
            // line 74
            echo "            <i class=\"fa fa-envelope\"></i>
            ";
            // line 75
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "email", [], "any", false, false, true, 75), 75, $this->source), "html", null, true);
            echo "
          ";
        }
        // line 77
        echo "
        </div>
        
        ";
        // line 80
        if (($context["show_social_icon"] ?? null)) {
            // line 81
            echo "          <div class=\"col-md-6\">
            <p class=\"social-media\">
              ";
            // line 83
            if (($context["facebook_url"] ?? null)) {
                // line 84
                echo "                <a href=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["facebook_url"] ?? null), 84, $this->source), "html", null, true);
                echo "\"  class=\"facebook\" target=\"_blank\" ><i class=\"fab fa-facebook-f\"></i></a>
              ";
            }
            // line 86
            echo "              ";
            if (($context["google_plus_url"] ?? null)) {
                // line 87
                echo "                <a href=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["google_plus_url"] ?? null), 87, $this->source), "html", null, true);
                echo "\"  class=\"google-plus\" target=\"_blank\" ><i class=\"fab fa-google-plus-g\"></i></a>
              ";
            }
            // line 89
            echo "              ";
            if (($context["twitter_url"] ?? null)) {
                // line 90
                echo "                <a href=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["twitter_url"] ?? null), 90, $this->source), "html", null, true);
                echo "\" class=\"twitter\" target=\"_blank\" ><i class=\"fab fa-twitter\"></i></a>
              ";
            }
            // line 92
            echo "              ";
            if (($context["linkedin_url"] ?? null)) {
                // line 93
                echo "                <a href=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["linkedin_url"] ?? null), 93, $this->source), "html", null, true);
                echo "\" class=\"linkedin\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>
              ";
            }
            // line 95
            echo "              ";
            if (($context["pinterest_url"] ?? null)) {
                // line 96
                echo "                <a href=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pinterest_url"] ?? null), 96, $this->source), "html", null, true);
                echo "\" class=\"pinterest\" target=\"_blank\" ><i class=\"fab fa-pinterest-p\"></i></a>
              ";
            }
            // line 98
            echo "              ";
            if (($context["rss_url"] ?? null)) {
                // line 99
                echo "                <a href=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rss_url"] ?? null), 99, $this->source), "html", null, true);
                echo "\" class=\"rss\" target=\"_blank\" ><i class=\"fa fa-rss\"></i></a>
              ";
            }
            // line 101
            echo "            </p>
          </div>
        ";
        }
        // line 104
        echo "       
      </div>
    </div>
  </div>

  <div class=\"header\">
    <div class=\"container\">
      <div class=\"row\">

        <!-- Start: Header -->

        <div class=\"navbar-header col-md-3\">
          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#main-navigation\">
            <i class=\"fas fa-bars\"></i>
          </button>
          ";
        // line 119
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 119)) {
            // line 120
            echo "            ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 120), 120, $this->source), "html", null, true);
            echo "
          ";
        }
        // line 122
        echo "        </div>

        <!-- End: Header -->

        ";
        // line 126
        if ((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 126) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "search", [], "any", false, false, true, 126))) {
            // line 127
            echo "          <div class=\"col-md-9\">

            ";
            // line 129
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "search", [], "any", false, false, true, 129)) {
                // line 130
                echo "              ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "search", [], "any", false, false, true, 130), 130, $this->source), "html", null, true);
                echo "
            ";
            }
            // line 132
            echo "
            ";
            // line 133
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 133)) {
                // line 134
                echo "              ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 134), 134, $this->source), "html", null, true);
                echo "
            ";
            }
            // line 136
            echo "            
          </div>
        ";
        }
        // line 139
        echo "
      </div>
    </div>
  </div>


  ";
        // line 145
        if ((($context["is_front"] ?? null) && ($context["show_slideshow"] ?? null))) {
            // line 146
            echo "    <div class=\"container-\">
      <div class=\"flexslider\">
        <ul class=\"slides\">
          ";
            // line 149
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["slider_content"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["slider_contents"]) {
                // line 150
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed($context["slider_contents"], 150, $this->source));
                echo "
          ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['slider_contents'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 152
            echo "        </ul>
      </div>
    </div>
  ";
        }
        // line 156
        echo "

  <!-- Start: Top widget -->

  ";
        // line 160
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_first", [], "any", false, false, true, 160) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_second", [], "any", false, false, true, 160)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_third", [], "any", false, false, true, 160))) {
            // line 161
            echo "    <div class=\"topwidget\" id=\"topwidget\">

      <div class=\"container\">

        ";
            // line 165
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_title", [], "any", false, false, true, 165)) {
                // line 166
                echo "          <div class=\"custom-block-title\" >
            ";
                // line 167
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_title", [], "any", false, false, true, 167), 167, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 170
            echo "
          <div class=\"row topwidget-list clearfix\">

            <!-- Start: Top widget first -->          
            ";
            // line 174
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_first", [], "any", false, false, true, 174)) {
                // line 175
                echo "              <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["topwidget_class"] ?? null), 175, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_first", [], "any", false, false, true, 175), 175, $this->source), "html", null, true);
                echo "</div>
            ";
            }
            // line 176
            echo "          
            <!-- End: Top widget first --> 

            <!-- Start: Top widget second -->          
            ";
            // line 180
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_second", [], "any", false, false, true, 180)) {
                // line 181
                echo "              <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["topwidget_class"] ?? null), 181, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_second", [], "any", false, false, true, 181), 181, $this->source), "html", null, true);
                echo "</div>
            ";
            }
            // line 182
            echo "          
            <!-- End: Top widget second --> 
            
            <!-- Start: Top widget third -->         
            ";
            // line 186
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_third", [], "any", false, false, true, 186)) {
                // line 187
                echo "              <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["topwidget_class"] ?? null), 187, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_third", [], "any", false, false, true, 187), 187, $this->source), "html", null, true);
                echo "</div>
            ";
            }
            // line 188
            echo "          
            <!-- End: Top widget third -->

          </div>
      </div>
    </div>
  ";
        }
        // line 195
        echo "
  <!--End: Top widget -->

      
  <!--Start: Highlighted -->

  ";
        // line 201
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 201)) {
            // line 202
            echo "    <div class=\"highlighted\">
      <div class=\"container\">
        ";
            // line 204
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 204), 204, $this->source), "html", null, true);
            echo "
      </div>
    </div>
  ";
        }
        // line 208
        echo "
  <!--End: Highlighted -->


  <!--Start: Top Message -->

  ";
        // line 214
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topmessage", [], "any", false, false, true, 214)) {
            // line 215
            echo "    <div class=\"top-message\">
      <div class=\"container\">
        ";
            // line 217
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topmessage", [], "any", false, false, true, 217), 217, $this->source), "html", null, true);
            echo "
      </div>
    </div>
  ";
        }
        // line 221
        echo "
  <!--End: Top Message -->


  <!--Start: Title -->

  ";
        // line 227
        if ((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "page_title", [], "any", false, false, true, 227) &&  !($context["is_front"] ?? null))) {
            // line 228
            echo "    <div id=\"page-title\">
      <div id=\"page-title-inner\">
        <div class=\"container\">
          ";
            // line 231
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "page_title", [], "any", false, false, true, 231), 231, $this->source), "html", null, true);
            echo "
        </div>
      </div>
    </div>
  ";
        }
        // line 236
        echo "
  <!--End: Title -->

  <div class=\"main-content\">
    <div class=\"container\">
      <div class=\"\">

        <!--Start: Breadcrumb -->

        ";
        // line 245
        if ( !($context["is_front"] ?? null)) {
            // line 246
            echo "          <div class=\"row\">
            <div class=\"col-md-12\">";
            // line 247
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 247), 247, $this->source), "html", null, true);
            echo "</div>
          </div>
        ";
        }
        // line 250
        echo "
        <!--End: Breadcrumb -->

        <div class=\"row layout\">

          <!--- Start: Left SideBar -->
          ";
        // line 256
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 256)) {
            // line 257
            echo "            <div class=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sidebarfirst"] ?? null), 257, $this->source), "html", null, true);
            echo ">
              <div class=\"sidebar\">
                ";
            // line 259
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 259), 259, $this->source), "html", null, true);
            echo "
              </div>
            </div>
          ";
        }
        // line 263
        echo "          <!-- End Left SideBar -->

          <!--- Start Content -->
          ";
        // line 266
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 266)) {
            // line 267
            echo "            <div class=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["contentlayout"] ?? null), 267, $this->source), "html", null, true);
            echo ">
              <div class=\"content_layout\">
                ";
            // line 269
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 269), 269, $this->source), "html", null, true);
            echo "
              </div>              
            </div>
          ";
        }
        // line 273
        echo "          <!-- End: Content -->

          <!-- Start: Right SideBar -->
          ";
        // line 276
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 276)) {
            // line 277
            echo "            <div class=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sidebarsecond"] ?? null), 277, $this->source), "html", null, true);
            echo ">
              <div class=\"sidebar\">
                ";
            // line 279
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 279), 279, $this->source), "html", null, true);
            echo "
              </div>
            </div>
          ";
        }
        // line 283
        echo "          <!-- End: Right SideBar -->
          
        </div>
      
      </div>
    </div>
  </div>

  <!-- End: Main content -->


  <!-- Start: Features -->

  ";
        // line 296
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_first", [], "any", false, false, true, 296) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_second", [], "any", false, false, true, 296)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_third", [], "any", false, false, true, 296))) {
            // line 297
            echo "
    <div class=\"features\">
      <div class=\"container\">

        ";
            // line 301
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_title", [], "any", false, false, true, 301)) {
                // line 302
                echo "          <h2 class=\"custom-block-title\" >
            ";
                // line 303
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_title", [], "any", false, false, true, 303), 303, $this->source), "html", null, true);
                echo "
          </h2>
        ";
            }
            // line 306
            echo "
        <div class=\"row\">

          <!-- Start: Features First -->
          ";
            // line 310
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_first", [], "any", false, false, true, 310)) {
                // line 311
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["features_first_class"] ?? null), 311, $this->source), "html", null, true);
                echo ">
              ";
                // line 312
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_first", [], "any", false, false, true, 312), 312, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 315
            echo "          <!-- End: Features First -->

          <!-- Start :Features Second -->
          ";
            // line 318
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_second", [], "any", false, false, true, 318)) {
                // line 319
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["features_class"] ?? null), 319, $this->source), "html", null, true);
                echo ">
              ";
                // line 320
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_second", [], "any", false, false, true, 320), 320, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 323
            echo "          <!-- End: Features Second -->

          <!-- Start: Features third -->
          ";
            // line 326
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_third", [], "any", false, false, true, 326)) {
                // line 327
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["features_class"] ?? null), 327, $this->source), "html", null, true);
                echo ">
              ";
                // line 328
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_third", [], "any", false, false, true, 328), 328, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 331
            echo "          <!-- End: Features Third -->

        </div>
      </div>
    </div>

  ";
        }
        // line 338
        echo "  <!--End: Features -->


  <!-- Start: Clients -->
  ";
        // line 342
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "clients", [], "any", false, false, true, 342)) {
            echo " 

    <div class=\"clients\" id=\"clients\">

      ";
            // line 346
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "clients_title", [], "any", false, false, true, 346)) {
                // line 347
                echo "        <h2 class=\"custom-block-title\" >
          ";
                // line 348
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "clients_title", [], "any", false, false, true, 348), 348, $this->source), "html", null, true);
                echo "
        </h2>
      ";
            }
            // line 351
            echo "
      <div class=\"container\">
        ";
            // line 353
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "clients", [], "any", false, false, true, 353), 353, $this->source), "html", null, true);
            echo "
      </div>
    </div>

  ";
        }
        // line 358
        echo "  <!--End: Clients -->



  <!-- Start: Updates widgets -->
  ";
        // line 363
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_first", [], "any", false, false, true, 363) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_second", [], "any", false, false, true, 363)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_third", [], "any", false, false, true, 363))) {
            // line 364
            echo "
    <div class=\"updates\" id=\"updates\">    
      <div class=\"container\">

        ";
            // line 368
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_title", [], "any", false, false, true, 368)) {
                // line 369
                echo "          <h2 class=\"custom-block-title\" >
            ";
                // line 370
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_title", [], "any", false, false, true, 370), 370, $this->source), "html", null, true);
                echo "
          </h2>
        ";
            }
            // line 373
            echo "
        <div class=\"row updates-list\">

          <!-- Start: Updates First -->          
          ";
            // line 377
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_first", [], "any", false, false, true, 377)) {
                // line 378
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["updates_class"] ?? null), 378, $this->source), "html", null, true);
                echo ">
              ";
                // line 379
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_first", [], "any", false, false, true, 379), 379, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 381
            echo "          
          <!-- End: Updates First -->

          <!-- Start: Updates Second -->
          ";
            // line 385
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_second", [], "any", false, false, true, 385)) {
                // line 386
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["updates_class"] ?? null), 386, $this->source), "html", null, true);
                echo ">
              ";
                // line 387
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_second", [], "any", false, false, true, 387), 387, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 389
            echo "          
          <!-- End: Updates Second -->

          <!-- Start: Updates third -->          
          ";
            // line 393
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_third", [], "any", false, false, true, 393)) {
                // line 394
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["updates_class"] ?? null), 394, $this->source), "html", null, true);
                echo ">
              ";
                // line 395
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_third", [], "any", false, false, true, 395), 395, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 397
            echo "          
          <!-- End: Updates Third -->

          <!-- Start: Updates third -->          
          ";
            // line 401
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_forth", [], "any", false, false, true, 401)) {
                // line 402
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["updates_class"] ?? null), 402, $this->source), "html", null, true);
                echo ">
              ";
                // line 403
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "updates_forth", [], "any", false, false, true, 403), 403, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 405
            echo "          
          <!-- End: Updates Third -->

        </div>
      </div>
    </div>

  ";
        }
        // line 413
        echo "  <!--End: widgets -->


  <!-- Start: Bottom widgets -->
  ";
        // line 417
        if ((((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_first", [], "any", false, false, true, 417) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_second", [], "any", false, false, true, 417)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_third", [], "any", false, false, true, 417)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_forth", [], "any", false, false, true, 417))) {
            // line 418
            echo "
    <div class=\"bottom-widget\" id=\"bottom-widget\">    
      <div class=\"container\">

        ";
            // line 422
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_title", [], "any", false, false, true, 422)) {
                // line 423
                echo "          <h2 class=\"custom-block-title\" >
            ";
                // line 424
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_title", [], "any", false, false, true, 424), 424, $this->source), "html", null, true);
                echo "
          </h2>
        ";
            }
            // line 427
            echo "
        <div class=\"row\">

          <!-- Start: Bottom First -->          
          ";
            // line 431
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_first", [], "any", false, false, true, 431)) {
                // line 432
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["bottom_class"] ?? null), 432, $this->source), "html", null, true);
                echo ">
              ";
                // line 433
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_first", [], "any", false, false, true, 433), 433, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 435
            echo "          
          <!-- End: Bottom First -->

          <!-- Start: Bottom Second -->
          ";
            // line 439
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_second", [], "any", false, false, true, 439)) {
                // line 440
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["bottom_class"] ?? null), 440, $this->source), "html", null, true);
                echo ">
              ";
                // line 441
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_second", [], "any", false, false, true, 441), 441, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 443
            echo "          
          <!-- End: Bottom Second -->

          <!-- Start: Bottom third -->          
          ";
            // line 447
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_third", [], "any", false, false, true, 447)) {
                // line 448
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["bottom_class"] ?? null), 448, $this->source), "html", null, true);
                echo ">
              ";
                // line 449
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_third", [], "any", false, false, true, 449), 449, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 451
            echo "          
          <!-- End: Bottom Third -->

          <!-- Start: Bottom Forth -->
          ";
            // line 455
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_forth", [], "any", false, false, true, 455)) {
                // line 456
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["bottom_class"] ?? null), 456, $this->source), "html", null, true);
                echo ">
              ";
                // line 457
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_forth", [], "any", false, false, true, 457), 457, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 460
            echo "          <!-- End: Bottom Forth -->

        </div>
      </div>
    </div>

  ";
        }
        // line 467
        echo "  <!--End: Bottom widgets -->


  <!-- Start: Services widgets -->
  ";
        // line 471
        if ((((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_first", [], "any", false, false, true, 471) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_second", [], "any", false, false, true, 471)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_third", [], "any", false, false, true, 471)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_forth", [], "any", false, false, true, 471))) {
            // line 472
            echo "
    <div class=\"services\" id=\"services\">    
      <div class=\"container\">

        ";
            // line 476
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_title", [], "any", false, false, true, 476)) {
                // line 477
                echo "          <h2 class=\"custom-block-title\" >
            ";
                // line 478
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_title", [], "any", false, false, true, 478), 478, $this->source), "html", null, true);
                echo "
          </h2>
        ";
            }
            // line 481
            echo "

        <div class=\"row services-list\">

          <!-- Start: Services First -->          
          ";
            // line 486
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_first", [], "any", false, false, true, 486)) {
                // line 487
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["services_class"] ?? null), 487, $this->source), "html", null, true);
                echo ">
              ";
                // line 488
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_first", [], "any", false, false, true, 488), 488, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 490
            echo "          
          <!-- End: Services First -->

          <!-- Start: Services Second -->
          ";
            // line 494
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_second", [], "any", false, false, true, 494)) {
                // line 495
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["services_class"] ?? null), 495, $this->source), "html", null, true);
                echo ">
              ";
                // line 496
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_second", [], "any", false, false, true, 496), 496, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 498
            echo "          
          <!-- End: Services Second -->

          <!-- Start: Services third -->          
          ";
            // line 502
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_third", [], "any", false, false, true, 502)) {
                // line 503
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["services_class"] ?? null), 503, $this->source), "html", null, true);
                echo ">
              ";
                // line 504
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_third", [], "any", false, false, true, 504), 504, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 506
            echo "          
          <!-- End: Services Third -->

          <!-- Start: Services Forth -->
          ";
            // line 510
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_forth", [], "any", false, false, true, 510)) {
                // line 511
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["services_class"] ?? null), 511, $this->source), "html", null, true);
                echo ">
              ";
                // line 512
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_forth", [], "any", false, false, true, 512), 512, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 515
            echo "          <!-- End: Services Forth -->

        </div>
      </div>
    </div>

  ";
        }
        // line 522
        echo "  <!--End: widgets -->


  <!-- Start: Footer widgets -->
  ";
        // line 526
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 526) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 526)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 526))) {
            // line 527
            echo "
    <div class=\"footer\" id=\"footer\">
      <div class=\"container\">

        ";
            // line 531
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_title", [], "any", false, false, true, 531)) {
                // line 532
                echo "          <h2 class=\"custom-block-title\" >
            ";
                // line 533
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_title", [], "any", false, false, true, 533), 533, $this->source), "html", null, true);
                echo "
          </h2>
        ";
            }
            // line 536
            echo "
        <div class=\"row\">

          <!-- Start: Footer First -->
          ";
            // line 540
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 540)) {
                // line 541
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_class"] ?? null), 541, $this->source), "html", null, true);
                echo ">
              ";
                // line 542
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 542), 542, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 545
            echo "          <!-- End: Footer First -->

          <!-- Start :Footer Second -->
          ";
            // line 548
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 548)) {
                // line 549
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_class"] ?? null), 549, $this->source), "html", null, true);
                echo ">
              ";
                // line 550
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 550), 550, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 553
            echo "          <!-- End: Footer Second -->

          <!-- Start: Footer third -->
          ";
            // line 556
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 556)) {
                // line 557
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_class"] ?? null), 557, $this->source), "html", null, true);
                echo ">
              ";
                // line 558
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 558), 558, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 561
            echo "          <!-- End: Footer Third -->

        </div>
      </div>
    </div>

  ";
        }
        // line 568
        echo "  <!--End: Footer widgets -->

  <!-- Start: Copyright -->
  <div class=\"copyright\">
    <div class=\"container\">

      <span>Copyright © ";
        // line 574
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_date_format_filter($this->env, "now", "Y"), "html", null, true);
        echo ". All rights reserved.</span>

      ";
        // line 576
        if (($context["show_credit_link"] ?? null)) {
            // line 577
            echo "          <span class=\"credit-link\">Designed By <a href=\"http://www.zymphonies.com\" target=\"_blank\">Zymphonies</a></span>
      ";
        }
        // line 579
        echo "
    </div>
  </div>
  <!-- End: Copyright -->

</div>





";
    }

    public function getTemplateName()
    {
        return "themes/shoppe_zymphonies_theme/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  1042 => 579,  1038 => 577,  1036 => 576,  1031 => 574,  1023 => 568,  1014 => 561,  1008 => 558,  1003 => 557,  1001 => 556,  996 => 553,  990 => 550,  985 => 549,  983 => 548,  978 => 545,  972 => 542,  967 => 541,  965 => 540,  959 => 536,  953 => 533,  950 => 532,  948 => 531,  942 => 527,  940 => 526,  934 => 522,  925 => 515,  919 => 512,  914 => 511,  912 => 510,  906 => 506,  900 => 504,  895 => 503,  893 => 502,  887 => 498,  881 => 496,  876 => 495,  874 => 494,  868 => 490,  862 => 488,  857 => 487,  855 => 486,  848 => 481,  842 => 478,  839 => 477,  837 => 476,  831 => 472,  829 => 471,  823 => 467,  814 => 460,  808 => 457,  803 => 456,  801 => 455,  795 => 451,  789 => 449,  784 => 448,  782 => 447,  776 => 443,  770 => 441,  765 => 440,  763 => 439,  757 => 435,  751 => 433,  746 => 432,  744 => 431,  738 => 427,  732 => 424,  729 => 423,  727 => 422,  721 => 418,  719 => 417,  713 => 413,  703 => 405,  697 => 403,  692 => 402,  690 => 401,  684 => 397,  678 => 395,  673 => 394,  671 => 393,  665 => 389,  659 => 387,  654 => 386,  652 => 385,  646 => 381,  640 => 379,  635 => 378,  633 => 377,  627 => 373,  621 => 370,  618 => 369,  616 => 368,  610 => 364,  608 => 363,  601 => 358,  593 => 353,  589 => 351,  583 => 348,  580 => 347,  578 => 346,  571 => 342,  565 => 338,  556 => 331,  550 => 328,  545 => 327,  543 => 326,  538 => 323,  532 => 320,  527 => 319,  525 => 318,  520 => 315,  514 => 312,  509 => 311,  507 => 310,  501 => 306,  495 => 303,  492 => 302,  490 => 301,  484 => 297,  482 => 296,  467 => 283,  460 => 279,  454 => 277,  452 => 276,  447 => 273,  440 => 269,  434 => 267,  432 => 266,  427 => 263,  420 => 259,  414 => 257,  412 => 256,  404 => 250,  398 => 247,  395 => 246,  393 => 245,  382 => 236,  374 => 231,  369 => 228,  367 => 227,  359 => 221,  352 => 217,  348 => 215,  346 => 214,  338 => 208,  331 => 204,  327 => 202,  325 => 201,  317 => 195,  308 => 188,  300 => 187,  298 => 186,  292 => 182,  284 => 181,  282 => 180,  276 => 176,  268 => 175,  266 => 174,  260 => 170,  254 => 167,  251 => 166,  249 => 165,  243 => 161,  241 => 160,  235 => 156,  229 => 152,  220 => 150,  216 => 149,  211 => 146,  209 => 145,  201 => 139,  196 => 136,  190 => 134,  188 => 133,  185 => 132,  179 => 130,  177 => 129,  173 => 127,  171 => 126,  165 => 122,  159 => 120,  157 => 119,  140 => 104,  135 => 101,  129 => 99,  126 => 98,  120 => 96,  117 => 95,  111 => 93,  108 => 92,  102 => 90,  99 => 89,  93 => 87,  90 => 86,  84 => 84,  82 => 83,  78 => 81,  76 => 80,  71 => 77,  66 => 75,  63 => 74,  61 => 73,  58 => 72,  52 => 70,  50 => 69,  39 => 60,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/shoppe_zymphonies_theme/templates/layout/page.html.twig", "C:\\xampp\\htdocs\\ecm-project\\themes\\shoppe_zymphonies_theme\\templates\\layout\\page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 69, "for" => 149);
        static $filters = array("escape" => 70, "raw" => 150, "date" => 574);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for'],
                ['escape', 'raw', 'date'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
