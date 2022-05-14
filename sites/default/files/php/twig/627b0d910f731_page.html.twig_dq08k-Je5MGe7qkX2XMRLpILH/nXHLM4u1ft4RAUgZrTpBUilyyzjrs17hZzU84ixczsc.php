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

/* themes/estore/templates/system/page.html.twig */
class __TwigTemplate_dfc29274ae03933eabd5647ca319c7f53aa0049185b86d3a90618efa7ba97957 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'navbar' => [$this, 'block_navbar'],
            'main' => [$this, 'block_main'],
            'header' => [$this, 'block_header'],
            'sidebar_first' => [$this, 'block_sidebar_first'],
            'highlighted' => [$this, 'block_highlighted'],
            'help' => [$this, 'block_help'],
            'content' => [$this, 'block_content'],
            'sidebar_second' => [$this, 'block_sidebar_second'],
            'footer' => [$this, 'block_footer'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 54
        $context["container"] = ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["theme"] ?? null), "settings", [], "any", false, false, true, 54), "fluid_container", [], "any", false, false, true, 54)) ? ("container-fluid") : ("container"));
        // line 55
        echo "
";
        // line 57
        if ((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navigation", [], "any", false, false, true, 57) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navigation_collapsible", [], "any", false, false, true, 57))) {
            // line 58
            echo "  ";
            $this->displayBlock('navbar', $context, $blocks);
        }
        // line 170
        echo "
";
        // line 172
        $this->displayBlock('main', $context, $blocks);
        // line 242
        echo "

";
        // line 244
        $this->displayBlock('footer', $context, $blocks);
    }

    // line 58
    public function block_navbar($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 59
        echo "    ";
        // line 60
        $context["navbar_classes"] = [0 => "navbar", 1 => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 62
($context["theme"] ?? null), "settings", [], "any", false, false, true, 62), "navbar_inverse", [], "any", false, false, true, 62)) ? ("navbar-inverse") : ("navbar-default")), 2 => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 63
($context["theme"] ?? null), "settings", [], "any", false, false, true, 63), "navbar_position", [], "any", false, false, true, 63)) ? (("navbar-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["theme"] ?? null), "settings", [], "any", false, false, true, 63), "navbar_position", [], "any", false, false, true, 63), 63, $this->source)))) : (""))];
        // line 66
        echo "    <div class=\"top-header-wrapper clearfix\">
      <div class=\"container-fluid\">
        <div class=\"left-top-header\">
          ";
        // line 69
        if (twig_get_attribute($this->env, $this->source, ($context["top_header"] ?? null), "header_email", [], "any", false, false, true, 69)) {
            // line 70
            echo "            <div class=\"site-email\">
              <i class=\"fa fa-envelope\"></i>

              ";
            // line 73
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["top_header"] ?? null), "header_email", [], "any", false, false, true, 73), 73, $this->source), "html", null, true);
            echo "
            </div>
          ";
        }
        // line 76
        echo "
          ";
        // line 77
        if (twig_get_attribute($this->env, $this->source, ($context["top_header"] ?? null), "header_phone", [], "any", false, false, true, 77)) {
            // line 78
            echo "            <div class=\"site-phone\">
              <i class=\"fa fa-phone\"></i>

              ";
            // line 81
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["top_header"] ?? null), "header_phone", [], "any", false, false, true, 81), 81, $this->source), "html", null, true);
            echo "
            </div>
          ";
        }
        // line 84
        echo "
          ";
        // line 85
        if (twig_get_attribute($this->env, $this->source, ($context["top_header"] ?? null), "header_location", [], "any", false, false, true, 85)) {
            // line 86
            echo "            <div class=\"site-map-marker\">
              <i class=\"fa fa-map-marker\"></i>

              ";
            // line 89
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["top_header"] ?? null), "header_location", [], "any", false, false, true, 89), 89, $this->source), "html", null, true);
            echo "
            </div>
          ";
        }
        // line 92
        echo "
          ";
        // line 93
        if (twig_get_attribute($this->env, $this->source, ($context["top_header"] ?? null), "header_shop_opens", [], "any", false, false, true, 93)) {
            // line 94
            echo "            <div class=\"site-clock-o\">
              <i class=\"fa fa-clock-o\"></i>

              ";
            // line 97
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["top_header"] ?? null), "header_shop_opens", [], "any", false, false, true, 97), 97, $this->source), "html", null, true);
            echo "
            </div>
          ";
        }
        // line 100
        echo "        </div>

        <div class=\"right-top-header\">
          ";
        // line 103
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "top_header_right", [], "any", false, false, true, 103)) {
            // line 104
            echo "            ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "top_header_right", [], "any", false, false, true, 104), 104, $this->source), "html", null, true);
            echo "
          ";
        }
        // line 106
        echo "        </div>
      </div>
    </div>

    <div class=\"middle-header-wrapper clearfix\">
      <div class=\"container-fluid\">
        <div class=\"col-md-3\">
          ";
        // line 113
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "left_middle_header", [], "any", false, false, true, 113)) {
            // line 114
            echo "            ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "left_middle_header", [], "any", false, false, true, 114), 114, $this->source), "html", null, true);
            echo "
          ";
        }
        // line 116
        echo "        </div>

        <div class=\"col-md-6 text-center hidden-sm hidden-xs\">
          ";
        // line 119
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "middle_header", [], "any", false, false, true, 119)) {
            // line 120
            echo "            ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "middle_header", [], "any", false, false, true, 120), 120, $this->source), "html", null, true);
            echo "
          ";
        }
        // line 122
        echo "        </div>

        <div class=\"col-md-3\">
          ";
        // line 125
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "right_middle_header", [], "any", false, false, true, 125)) {
            // line 126
            echo "            ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "right_middle_header", [], "any", false, false, true, 126), 126, $this->source), "html", null, true);
            echo "
          ";
        }
        // line 128
        echo "        </div>
      </div>
    </div>

    <header id=\"navbar\" role=\"banner\"
      ";
        // line 133
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["navbar_attributes"] ?? null), "addClass", [0 => ($context["navbar_classes"] ?? null)], "method", false, false, true, 133), 133, $this->source), "html", null, true);
        echo ">

      ";
        // line 135
        if ( !twig_get_attribute($this->env, $this->source, ($context["navbar_attributes"] ?? null), "hasClass", [0 => ($context["container"] ?? null)], "method", false, false, true, 135)) {
            // line 136
            echo "        <div class=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null), 136, $this->source), "html", null, true);
            echo "\">
      ";
        }
        // line 138
        echo "
      <div class=\"navbar-header\">
        ";
        // line 140
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navigation", [], "any", false, false, true, 140), 140, $this->source), "html", null, true);
        echo "

        ";
        // line 143
        echo "        ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navigation_collapsible", [], "any", false, false, true, 143)) {
            // line 144
            echo "          <button type=\"button\"
                  class=\"navbar-toggle\"
                  data-toggle=\"collapse\"
                  data-target=\"#navbar-collapse\">

            <span class=\"sr-only\">";
            // line 149
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Toggle navigation"));
            echo "</span>
            <span class=\"icon-bar\"></span>
            <span class=\"icon-bar\"></span>
            <span class=\"icon-bar\"></span>
          </button>
        ";
        }
        // line 155
        echo "      </div>

      ";
        // line 158
        echo "      ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navigation_collapsible", [], "any", false, false, true, 158)) {
            // line 159
            echo "        <div id=\"navbar-collapse\" class=\"navbar-collapse collapse\">
          ";
            // line 160
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navigation_collapsible", [], "any", false, false, true, 160), 160, $this->source), "html", null, true);
            echo "
        </div>
      ";
        }
        // line 163
        echo "
      ";
        // line 164
        if ( !twig_get_attribute($this->env, $this->source, ($context["navbar_attributes"] ?? null), "hasClass", [0 => ($context["container"] ?? null)], "method", false, false, true, 164)) {
            // line 165
            echo "        </div>
      ";
        }
        // line 167
        echo "    </header>
  ";
    }

    // line 172
    public function block_main($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 173
        echo "  ";
        // line 174
        echo "  ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 174)) {
            // line 175
            echo "    ";
            $this->displayBlock('header', $context, $blocks);
            // line 184
            echo "  ";
        }
        // line 185
        echo "
  <div role=\"main\"
       class=\"main-container ";
        // line 187
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null), 187, $this->source), "html", null, true);
        echo " js-quickedit-main-content\">

    <div class=\"main-container-inner\">
      ";
        // line 191
        echo "      ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 191)) {
            // line 192
            echo "        ";
            $this->displayBlock('sidebar_first', $context, $blocks);
            // line 197
            echo "      ";
        }
        // line 198
        echo "
      ";
        // line 200
        echo "      ";
        // line 201
        $context["content_classes"] = [0 => (((twig_get_attribute($this->env, $this->source,         // line 202
($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 202) && twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 202))) ? ("col-sm-6") : ("")), 1 => (((twig_get_attribute($this->env, $this->source,         // line 203
($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 203) && twig_test_empty(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 203)))) ? ("col-sm-9") : ("")), 2 => (((twig_get_attribute($this->env, $this->source,         // line 204
($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 204) && twig_test_empty(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 204)))) ? ("col-sm-9") : ("")), 3 => (((twig_test_empty(twig_get_attribute($this->env, $this->source,         // line 205
($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 205)) && twig_test_empty(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 205)))) ? ("col-sm-12") : (""))];
        // line 208
        echo "      <section";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content_attributes"] ?? null), "addClass", [0 => ($context["content_classes"] ?? null)], "method", false, false, true, 208), 208, $this->source), "html", null, true);
        echo ">

        ";
        // line 211
        echo "        ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 211)) {
            // line 212
            echo "          ";
            $this->displayBlock('highlighted', $context, $blocks);
            // line 215
            echo "        ";
        }
        // line 216
        echo "
        ";
        // line 218
        echo "        ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 218)) {
            // line 219
            echo "          ";
            $this->displayBlock('help', $context, $blocks);
            // line 222
            echo "        ";
        }
        // line 223
        echo "
        ";
        // line 225
        echo "        ";
        $this->displayBlock('content', $context, $blocks);
        // line 229
        echo "      </section>

      ";
        // line 232
        echo "      ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 232)) {
            // line 233
            echo "        ";
            $this->displayBlock('sidebar_second', $context, $blocks);
            // line 238
            echo "      ";
        }
        // line 239
        echo "    </div>
  </div>
";
    }

    // line 175
    public function block_header($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 176
        echo "      <div class=\"header-region clearfix\" role=\"heading\">
        <div class=\"container-fluid\">
          <div class=\"header-inner text-center\">
            ";
        // line 179
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 179), 179, $this->source), "html", null, true);
        echo "
          </div>
        </div>
      </div>
    ";
    }

    // line 192
    public function block_sidebar_first($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 193
        echo "          <aside class=\"col-sm-3\" role=\"complementary\">
            ";
        // line 194
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 194), 194, $this->source), "html", null, true);
        echo "
          </aside>
        ";
    }

    // line 212
    public function block_highlighted($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 213
        echo "            <div class=\"highlighted\">";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 213), 213, $this->source), "html", null, true);
        echo "</div>
          ";
    }

    // line 219
    public function block_help($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 220
        echo "            ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 220), 220, $this->source), "html", null, true);
        echo "
          ";
    }

    // line 225
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 226
        echo "          <a id=\"main-content\"></a>
          ";
        // line 227
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 227), 227, $this->source), "html", null, true);
        echo "
        ";
    }

    // line 233
    public function block_sidebar_second($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 234
        echo "          <aside class=\"col-sm-3\" role=\"complementary\">
            ";
        // line 235
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 235), 235, $this->source), "html", null, true);
        echo "
          </aside>
        ";
    }

    // line 244
    public function block_footer($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 245
        echo "  <footer class=\"footer\" role=\"contentinfo\">
    <div class=\"footer-top clearfix\">
      <div class=\"container-fluid\">
        ";
        // line 248
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 248)) {
            // line 249
            echo "          <div class=\"footer-first col-sm-6 col-md-3\">
            ";
            // line 250
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 250), 250, $this->source), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 253
        echo "
        ";
        // line 254
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 254)) {
            // line 255
            echo "          <div class=\"footer-second col-sm-6 col-md-3\">
            ";
            // line 256
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 256), 256, $this->source), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 259
        echo "
        ";
        // line 260
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 260)) {
            // line 261
            echo "          <div class=\"footer-third col-sm-6 col-md-3\">
            ";
            // line 262
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 262), 262, $this->source), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 265
        echo "
        ";
        // line 266
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fourth", [], "any", false, false, true, 266)) {
            // line 267
            echo "          <div class=\"footer-fourth col-sm-6 col-md-3\">
            ";
            // line 268
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fourth", [], "any", false, false, true, 268), 268, $this->source), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 271
        echo "      </div>
    </div>

    <div class=\"footer-bottom clearfix\">
      <div class=\"container-fluid\">
        <div class=\"footer-bottom-left\">
          ";
        // line 277
        if (($context["copyright_text"] ?? null)) {
            // line 278
            echo "            ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["copyright_text"] ?? null), 278, $this->source), "html", null, true);
            echo "
          ";
        }
        // line 280
        echo "
          ";
        // line 281
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_bottom_left", [], "any", false, false, true, 281)) {
            // line 282
            echo "            ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_bottom_left", [], "any", false, false, true, 282), 282, $this->source), "html", null, true);
            echo "
          ";
        }
        // line 284
        echo "        </div>
        <div class=\"footer-bottom-right\">
          ";
        // line 286
        if (($context["theme_credits"] ?? null)) {
            // line 287
            echo "            <div class=\"theme-credits\">
              ";
            // line 288
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["theme_credits"] ?? null), 288, $this->source), "html", null, true);
            echo "
            </div>
          ";
        }
        // line 291
        echo "
          ";
        // line 292
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_bottom_right", [], "any", false, false, true, 292)) {
            // line 293
            echo "            ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_bottom_right", [], "any", false, false, true, 293), 293, $this->source), "html", null, true);
            echo "
          ";
        }
        // line 295
        echo "        </div>
      </div>
    </div>
  </footer>
";
    }

    public function getTemplateName()
    {
        return "themes/estore/templates/system/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  575 => 295,  569 => 293,  567 => 292,  564 => 291,  558 => 288,  555 => 287,  553 => 286,  549 => 284,  543 => 282,  541 => 281,  538 => 280,  532 => 278,  530 => 277,  522 => 271,  516 => 268,  513 => 267,  511 => 266,  508 => 265,  502 => 262,  499 => 261,  497 => 260,  494 => 259,  488 => 256,  485 => 255,  483 => 254,  480 => 253,  474 => 250,  471 => 249,  469 => 248,  464 => 245,  460 => 244,  453 => 235,  450 => 234,  446 => 233,  440 => 227,  437 => 226,  433 => 225,  426 => 220,  422 => 219,  415 => 213,  411 => 212,  404 => 194,  401 => 193,  397 => 192,  388 => 179,  383 => 176,  379 => 175,  373 => 239,  370 => 238,  367 => 233,  364 => 232,  360 => 229,  357 => 225,  354 => 223,  351 => 222,  348 => 219,  345 => 218,  342 => 216,  339 => 215,  336 => 212,  333 => 211,  327 => 208,  325 => 205,  324 => 204,  323 => 203,  322 => 202,  321 => 201,  319 => 200,  316 => 198,  313 => 197,  310 => 192,  307 => 191,  301 => 187,  297 => 185,  294 => 184,  291 => 175,  288 => 174,  286 => 173,  282 => 172,  277 => 167,  273 => 165,  271 => 164,  268 => 163,  262 => 160,  259 => 159,  256 => 158,  252 => 155,  243 => 149,  236 => 144,  233 => 143,  228 => 140,  224 => 138,  218 => 136,  216 => 135,  211 => 133,  204 => 128,  198 => 126,  196 => 125,  191 => 122,  185 => 120,  183 => 119,  178 => 116,  172 => 114,  170 => 113,  161 => 106,  155 => 104,  153 => 103,  148 => 100,  142 => 97,  137 => 94,  135 => 93,  132 => 92,  126 => 89,  121 => 86,  119 => 85,  116 => 84,  110 => 81,  105 => 78,  103 => 77,  100 => 76,  94 => 73,  89 => 70,  87 => 69,  82 => 66,  80 => 63,  79 => 62,  78 => 60,  76 => 59,  72 => 58,  68 => 244,  64 => 242,  62 => 172,  59 => 170,  55 => 58,  53 => 57,  50 => 55,  48 => 54,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/estore/templates/system/page.html.twig", "C:\\xampp\\htdocs\\ecm-project\\themes\\estore\\templates\\system\\page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 54, "if" => 57, "block" => 58);
        static $filters = array("clean_class" => 63, "escape" => 73, "t" => 149);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block'],
                ['clean_class', 'escape', 't'],
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
