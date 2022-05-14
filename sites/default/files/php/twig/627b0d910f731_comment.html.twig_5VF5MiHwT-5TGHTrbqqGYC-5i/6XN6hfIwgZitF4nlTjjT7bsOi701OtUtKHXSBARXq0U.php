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

/* themes/shoppe_zymphonies_theme/templates/content/comment.html.twig */
class __TwigTemplate_60f54b0b307aff264aa22d1bbe72335a50066573338cf43936209841b0b94bfb extends \Twig\Template
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
        // line 67
        if (($context["threaded"] ?? null)) {
            // line 68
            echo "  ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("classy/indented"), "html", null, true);
            echo "
";
        }
        // line 71
        $context["classes"] = [0 => "comment", 1 => "js-comment", 2 => (((        // line 74
($context["status"] ?? null) != "published")) ? (($context["status"] ?? null)) : ("")), 3 => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 75
($context["comment"] ?? null), "owner", [], "any", false, false, true, 75), "anonymous", [], "any", false, false, true, 75)) ? ("by-anonymous") : ("")), 4 => (((        // line 76
($context["author_id"] ?? null) && (($context["author_id"] ?? null) == twig_get_attribute($this->env, $this->source, ($context["commented_entity"] ?? null), "getOwnerId", [], "method", false, false, true, 76)))) ? ((("by-" . $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["commented_entity"] ?? null), "getEntityTypeId", [], "method", false, false, true, 76), 76, $this->source)) . "-author")) : (""))];
        // line 79
        echo "<article";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 79), 79, $this->source), "html", null, true);
        echo ">

  ";
        // line 86
        echo "
  <mark class=\"hidden\" data-comment-timestamp=\"";
        // line 87
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["new_indicator_timestamp"] ?? null), 87, $this->source), "html", null, true);
        echo "\"></mark>

  <footer class=\"comment-wrap\">
    <div class=\"author-details\">
      ";
        // line 91
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["user_picture"] ?? null), 91, $this->source), "html", null, true);
        echo "
      ";
        // line 92
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["permalink"] ?? null), 92, $this->source), "html", null, true);
        echo "
      ";
        // line 93
        if (($context["parent"] ?? null)) {
            // line 94
            echo "        <p class=\"parent visually-hidden\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["parent"] ?? null), 94, $this->source), "html", null, true);
            echo "</p>
      ";
        }
        // line 96
        echo "    </div>

    <div class=\"author-comments\">
      <p class=\"comment-submitted\">";
        // line 99
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["submitted"] ?? null), 99, $this->source), "html", null, true);
        echo "</p>
      <div";
        // line 100
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content_attributes"] ?? null), "addClass", [0 => "content"], "method", false, false, true, 100), 100, $this->source), "html", null, true);
        echo ">
        ";
        // line 101
        if (($context["title"] ?? null)) {
            // line 102
            echo "          ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 102, $this->source), "html", null, true);
            echo "
          <h3";
            // line 103
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_attributes"] ?? null), 103, $this->source), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 103, $this->source), "html", null, true);
            echo "</h3>
          ";
            // line 104
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 104, $this->source), "html", null, true);
            echo "
        ";
        }
        // line 106
        echo "        ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 106, $this->source), "html", null, true);
        echo "
      </div>
    </div>   

  </footer>
  
</article>
";
    }

    public function getTemplateName()
    {
        return "themes/shoppe_zymphonies_theme/templates/content/comment.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  115 => 106,  110 => 104,  104 => 103,  99 => 102,  97 => 101,  93 => 100,  89 => 99,  84 => 96,  78 => 94,  76 => 93,  72 => 92,  68 => 91,  61 => 87,  58 => 86,  52 => 79,  50 => 76,  49 => 75,  48 => 74,  47 => 71,  41 => 68,  39 => 67,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/shoppe_zymphonies_theme/templates/content/comment.html.twig", "C:\\xampp\\htdocs\\ecm-project\\themes\\shoppe_zymphonies_theme\\templates\\content\\comment.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 67, "set" => 71);
        static $filters = array("escape" => 68);
        static $functions = array("attach_library" => 68);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set'],
                ['escape'],
                ['attach_library']
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
